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

import biosci from "../logic/__biosciData";
import { useState } from "react";
import {
  handleSelectedAnswer,
  handleCheckAnswer,
  handleNextQuestion,
  randomizeArray,
} from "../logic/cardHelpers";

const BioSci = () => {
  const [randomizedBioSci] = useState(() => randomizeArray([...biosci]));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [message, setMessage] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [filteredArray, setFilteredArray] = useState([]);
  const [score, setScore] = useState(0);
  const question = randomizedBioSci[currentIndex];

  const pushValue = (value) => {
    setFilteredArray((prevItem) => [...prevItem, value]);
  };

  const handleScore = () => {
    const finalScore = filteredArray.filter((item) => item === true);
    setScore(finalScore.length);
  };

  return (
    <div className="container">
      <main>
        <Progress value={currentIndex} className="my-4" />
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="leading-normal">
              {question.question}
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-outside">
              {question.answers.map((answer, index) => (
                <li
                  key={`answer-${index}`}
                  className="flex items-center space-x-2 my-2">
                  <input
                    type="radio"
                    id={`answer-${index}`}
                    name="q-answer"
                    checked={selectedAnswer === index}
                    onChange={() =>
                      handleSelectedAnswer(
                        index,
                        answer.correct,
                        setSelectedAnswer,
                        setIsCorrect
                      )
                    }
                    value={answer.text}
                  />
                  <label htmlFor={`answer-${index}`}>{answer.text}</label>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="gap-5 flex flex-wrap">
            {selectedAnswer !== null ? (
              <Button
                onClick={() =>
                  handleCheckAnswer(
                    isCorrect,
                    setMessage,
                    question,
                    setCorrectAnswer,
                    setFilteredArray,
                    pushValue(isCorrect)
                  )
                }
                className="px-5">
                Check Answer
              </Button>
            ) : (
              <p>Please select answer</p>
            )}
            <Button
              onClick={() =>
                handleNextQuestion(
                  randomizedBioSci,
                  currentIndex,
                  setCurrentIndex,
                  setSelectedAnswer,
                  setIsCorrect,
                  setMessage,
                  setCorrectAnswer,
                  handleScore()
                )
              }>
              Next
            </Button>
            <p>{correctAnswer}</p>
          </CardFooter>
        </Card>

        <div>
          <div className="flex flex-row justify-between items-center border-solid border-2 border-green-500 rounded-full text-white bg-green-500 px-8 py-2 font-semibold mt-5">
            <p className="animate-bounce mt-5">{message}</p>
            <p>
              Score: {score}/{randomizedBioSci.length}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BioSci;
