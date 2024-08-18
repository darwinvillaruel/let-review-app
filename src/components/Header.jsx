import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="my-5 grid md:grid-cols-2 gap-4">
        <div>
          <Link to="/">
            <h1 className="mb-4">LET Focus App</h1>
          </Link>
          <h4>
            A modern approach to reviewing <br />
            the Licensure Examination for Teachers (LET).
          </h4>
        </div>
      </header>
    </>
  );
};

export default Header;
