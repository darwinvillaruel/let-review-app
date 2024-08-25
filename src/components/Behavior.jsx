import behavior from "../logic/_behavior";
import { useState, useEffect } from "react";
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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import {
  handleNextQuestion,
  correctAnswer,
  handleScore,
  pushValue,
} from "../logic/questionHelpers";

const Behavior = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const choice = Number(params.get("questions")) || 10;

  const [randomizedBehavior] = useState(() => randomizeArray([...behavior]));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredArray, setFilteredArray] = useState([]);
  const [message, setMessage] = useState(null);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState("border-sky-400");
  const [alert, setAlert] = useState(false);

  const random = randomizedBehavior.slice(0, choice);
  const question = random[currentIndex];

  useEffect(() => console.log(question), [question]);

  question.stop = function () {
    console.log(this);
  };

  const handleNext = () => {
    handleNextQuestion(
      currentIndex,
      random,
      setCurrentIndex,
      setSelectedAnswer,
      setMessage,
      setColor,
      setAlert,
      () => handleScore(filteredArray, setScore),
    );
  };

  const checkAnswer = (value) => {
    correctAnswer(value, question, setMessage, setColor, (value) =>
      pushValue(value, setFilteredArray),
    );
  };

  // Checks the index of selected answer
  const handleSelectedAnswer = (index) => {
    setSelectedAnswer(index);
    checkAnswer(index);
  };

  // Display score
  const displayScore = () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-green-500 hover:bg-green-400">
            Show Score
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Great! Thanks for answering!</AlertDialogTitle>
            <AlertDialogDescription>
              You&apos;ve scored {score} out of {random.length}!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row items-center justify-center gap-3">
            <AlertDialogAction>
              <Link to="/">Home</Link>
            </AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
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
            {alert ? (
              displayScore()
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </CardFooter>
        </Card>
        <Card className={`mt-5 border-l-4 border-solid ${color}`}>
          <CardContent className="flex flex-col justify-between gap-y-3 p-6">
            <div>{message === null ? "Please select answer" : message}</div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Behavior;
