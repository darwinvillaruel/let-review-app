export const handleSelectedAnswer = (
  index,
  isCorrect,
  setSelectedAnswer,
  setIsCorrect
) => {
  setSelectedAnswer(index);
  setIsCorrect(isCorrect);
};

export const handleCheckAnswer = (
  isCorrect,
  setMessage,
  question,
  setCorrectAnswer
) => {
  if (isCorrect === false) {
    setMessage("🥶 Wrong!");
    question.answers.forEach((answer) => {
      if (answer.correct !== null && answer.correct === true) {
        return setCorrectAnswer(`Correct Answer: ${answer.text}`);
      }
    });
  } else {
    setMessage("🥳 Correct!");
  }
};

export const handleNextQuestion = (
  questions,
  currentIndex,
  setCurrentIndex,
  setSelectedAnswer,
  setIsCorrect,
  setMessage,
  setCorrectAnswer
) => {
  const nextIndex = currentIndex + 1;
  if (nextIndex < questions.length) {
    setCurrentIndex(nextIndex);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setMessage(null);
    setCorrectAnswer(null);
  } else {
    console.log("Finish");
  }
};

// Fisher-Yates (Knuth) shuffle algorithm
export const randomizeArray = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    // pick remaining element
    randomIndex = Math.floor(Math.random() * currentIndex); // 6
    currentIndex -= 1; // 5

    // swap it with current element
    temporaryValue = array[currentIndex]; // array[5]
    array[currentIndex] = array[randomIndex]; //array[6]
    array[randomIndex] = temporaryValue;
  }
  return array;
};
