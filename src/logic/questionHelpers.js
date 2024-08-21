// Handles the next question
export const handleNextQuestion = (
  currentIndex,
  questions,
  setCurrentIndex,
  setSelectedAnswer,
  setMessage,
  setColor,
  setAlert,
  handleScore,
) => {
  const nextIndex = currentIndex + 1;
  if (nextIndex < questions.length) {
    setCurrentIndex(nextIndex);
    setSelectedAnswer(null);
    setMessage(null);
    setColor("border-sky-500");
  } else {
    setAlert(true);
  }

  handleScore();
};

// Checks for answer
export const handleScore = (filteredArray, setScore) => {
  const finalScore = filteredArray.filter((item) => item === true);
  setScore(finalScore.length);
};

// Checks if boolean value of the index
export const correctAnswer = (
  value,
  question,
  setMessage,
  setColor,
  pushValue,
) => {
  const isCorrect = question.answers[value].correct;
  question.answers.forEach((answer) => {
    if (answer.correct !== null && answer.correct === true) {
      setMessage(`❌ Correct Answer: ${answer.text}`);
    }
  });

  if (isCorrect === null) {
    setMessage("Please select answer");
  } else if (isCorrect === true) {
    setMessage("🎉 Correct!");
    setColor("border-green-500");
  } else {
    setColor("border-red-500");
  }

  pushValue(isCorrect);
};

// Adding the answer to an array
export const pushValue = (value, setFilteredArray) => {
  setFilteredArray((prevItem) => [...prevItem, value]);
};
