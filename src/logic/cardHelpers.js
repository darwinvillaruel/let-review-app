// Fisher-Yates (Knuth) shuffle algorithm
export const randomizeArray = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    // pick remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // 5

    // swap it with current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const getPath = (id) => {
  switch (id) {
    case "profed":
      return "/profed";
    case "gened":
      return "/gened";
    case "biosci":
      return "/biosci";
    default:
      return "/error-path";
  }
};
