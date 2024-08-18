import gened from "../logic/_genedData";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { randomizeArray } from "../logic/cardHelpers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

const GenEd = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const choice = Number(params.get("questions")) || 10;

  const [randomizedGenEd] = useState(() => randomizeArray([...gened]));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredArray, setFilteredArray] = useState([]);
  const [message, setMessage] = useState(null);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState("border-sky-400");

  const random = randomizedGenEd.slice(0, choice);
  const question = random[currentIndex];

  // Checks if boolean value of the index
  const correctAnswer = (value) => {
    const isCorrect = question.answers[value].correct;
    const answerText = question.answers.forEach((answer) => {
      if (answer.correct !== null && answer.correct === true) {
        return setMessage(`❌ Wrong!! Correct Answer: ${answer.text}`);
      }
    });

    if (isCorrect === null) {
      setMessage("Please select answer");
    } else if (isCorrect === true) {
      setMessage("🎉 Correct!");
      setColor("border-green-500");
    } else {
      answerText;
      setColor("border-red-500");
    }

    pushValue(isCorrect);
  };

  // Checks the index of selected answer
  const handleSelectedAnswer = (index) => {
    setSelectedAnswer(index);
    correctAnswer(index);
  };

  // Handles the next question
  const handleNextQuestion = (questions) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setMessage(null);
      setColor("border-sky-500");
    } else {
      console.log("Finished");
    }

    handleScore();
  };

  // Adding the answer to an array
  const pushValue = (value) => {
    setFilteredArray((prevItem) => [...prevItem, value]);
  };

  // Checks for answer
  const handleScore = () => {
    const finalScore = filteredArray.filter((item) => item === true);
    setScore(finalScore.length);
  };

  return (
    <div className="container">
      <main>
        <Progress value={currentIndex + 1} className="my-4" />
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <Badge
              variant="outline"
              className="w-fit justify-start bg-emerald-400"
            >
              {question.category}
            </Badge>
            <CardDescription className="italic">
              {currentIndex + 1} out of {random.length}
            </CardDescription>
            <CardTitle className="leading-normal">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-outside">
              {question.answers.map((answer, index) => (
                <li
                  key={`answer-${index}`}
                  className="my-2 flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    id={`answer-${index}`}
                    name="q-answer"
                    checked={selectedAnswer === index}
                    value={answer.text}
                    onChange={() => handleSelectedAnswer(index)}
                  />
                  <label htmlFor={`answer-${index}`}>{answer.text}</label>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={() => handleNextQuestion(random)}>Next</Button>
          </CardFooter>
        </Card>
        <Card className={`mt-5 border-l-4 border-solid ${color}`}>
          <CardContent className="flex flex-col justify-between gap-y-3 p-6">
            <div>{message === null ? "Please select answer" : message}</div>
            <div>
              Score: {score} / {random.length}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GenEd;
