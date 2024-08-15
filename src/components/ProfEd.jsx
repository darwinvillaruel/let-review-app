import Header from "./Header";
import profed from "../logic/__profedData";
import { useState } from "react";
import { handleSelectedAnswer, handleCheckAnswer, handleNextQuestion, randomizeArray } from "../logic/cardHelpers";

const ProfEd = () => {
  const [randomizedProfEd] = useState(() => randomizeArray([...profed]));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [message, setMessage] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [filteredArray, setFilteredArray] = useState([]);
  const [score, setScore] = useState(0);
  const question = randomizedProfEd[currentIndex];

  const pushValue = (value) => {
    setFilteredArray((prevItem) => [...prevItem, value]);
  };

  const handleScore = () => {
    const finalScore = filteredArray.filter((item) => item === true);
    setScore(finalScore.length);
  };

  return (
    <div className="card-m">
      <Header />
      <div className="border-solid border-t-2">
        <h4>{question.question}</h4>
        <ul className="list-outside mt-5 lg:mt-10">
          {question.answers.map((answer, index) => (
            <li
              key={`answer-${index}`}
              className="flex items-center space-x-2">
              <input
                type="radio"
                id={`answer-${index}`}
                name="q-answer"
                checked={selectedAnswer === index}
                onChange={() => handleSelectedAnswer(index, answer.correct, setSelectedAnswer, setIsCorrect)}
                value={answer.text}
              />
              <label htmlFor={`answer-${index}`}>{answer.text}</label>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-between mt-10">
          {selectedAnswer !== null ? (
            <button
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
              className="border-solid border-2 border-sky-500 rounded-full text-white bg-sky-500 px-5 py-3 font-semibold hover:text-sky-500 hover:bg-slate-50 hover:border-sky-500 hover:border-2">
              Check Answer
            </button>
          ) : (
            <p>Please select answer</p>
          )}
          <button
            onClick={() =>
              handleNextQuestion(
                randomizedProfEd,
                currentIndex,
                setCurrentIndex,
                setSelectedAnswer,
                setIsCorrect,
                setMessage,
                setCorrectAnswer,
                handleScore()
              )
            }
            className="border-solid border-2 border-sky-500 rounded-full text-white bg-sky-500 px-10 py-3 font-semibold hover:text-sky-500 hover:bg-slate-50 hover:border-sky-500 hover:border-2">
            Next
          </button>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center border-solid border-2 border-green-500 rounded-full text-white bg-green-500 px-8 py-2 font-semibold mt-5">
            <p className="animate-bounce mt-5">{message}</p>
            <p>
              Score: {score}/{randomizedProfEd.length}
            </p>
          </div>
          <p className="mt-5">{correctAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfEd;
