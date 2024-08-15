import Header from "./Header";

const Results = () => {
  return (
    <div className="card-m">
      <Header />
      <div className="border-solid border-t-2 flex flex-row justify-between py-8">
        <div className="score">Score</div>
        <div className="percentage">Percentage</div>
        <div className="out_of">Out of 50</div>
      </div>
    </div>
  );
};

export default Results;
