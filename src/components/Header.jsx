import { Link } from "react-router-dom";

const Header = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const currentDate = new Date(`${year}-${month}-${day}`);
  const examDate = new Date("2024-09-29");

  let convToday = String(today).split("G");
  let countdown = Math.abs(examDate - currentDate) / 1000 / 60 / 60 / 24;

  return (
    <>
      <header className="my-5 grid md:grid-cols-2 gap-4">
        <div>
          <Link to="/">
            <h1 className="mb-4">LET Focus App</h1>
          </Link>
          <h3>A modern approach to reviewing the Licensure Examination for Teachers (LET).</h3>
        </div>
        <div className="flex flex-col justify-start place-items-end">
          <p>
            <span className="font-semibold">{convToday[0]} </span>
            <br /> <span className="font-bold">{countdown}</span> days left before September 29, 2024
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
