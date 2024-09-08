import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Badge } from "./ui/badge";

const Option = () => {
  const history = useNavigate();

  const handleNavigation = () => {
    const selectedValue = document.getElementById("count").value;
    const pathname = getPath();
    history(`${pathname}?questions=${selectedValue}`);
  };

  const getPath = () => {
    let pathname = window.location.pathname;

    if (pathname === "/option/gened") {
      pathname = "/gened";
    } else if (pathname === "/option/profed") {
      pathname = "/profed";
    } else if (pathname === "/option/biosci") {
      pathname = "/biosci";
    } else if (pathname === "/option/rizal") {
      pathname = "/rizal";
    } else if (pathname === "/option/behavior") {
      pathname = "/behavior";
    } else if (pathname === "/option/gened/special") {
      pathname = "/gened/special";
    } else {
      console.log("Error pathname");
    }
    return pathname;
  };

  function getName() {
    let subName = window.location.pathname;
    if (subName === "/option/gened") {
      subName = "General Education";
    } else if (subName === "/option/profed") {
      subName = "Professional Education";
    } else if (subName === "/option/biosci") {
      subName = "Biological Science";
    } else if (subName === "/option/rizal") {
      subName = "Rizal Life and Works";
    } else if (subName === "/option/behavior") {
      subName = "Theories in Behaviorism";
    } else {
      console.log("Error pathname");
    }
    return subName;
  }

  return (
    <div className="container">
      <Header />
      <div className="flex flex-col items-center p-10">
        <Badge variant="secondary" className="text-md">
          {getName()}
        </Badge>
        <h4 className="my-5 text-center">
          Pick the number of questions you want to generate
        </h4>
        <div className="flex flex-row space-x-2">
          <select name="count" id="count" className="rounded-md">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
          <Button onClick={handleNavigation}>Generate Questions</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Option;
