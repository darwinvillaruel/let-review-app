import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import categories from "@/logic/categories";
import { useEffect } from "react";
import { Separator } from "./ui/separator";

const CardComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {categories
          .filter((item) => ["profed", "biosci", "gened"].includes(item.id))
          .map((item, index) => (
            <Card
              key={`item-${index}`}
              className="flex flex-col justify-between"
            >
              <CardHeader className="hide">
                <CardTitle>
                  {item.Exam} ({item.Percentage}%)
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="hide">
                <ul className="mx-5 list-outside">
                  {item.Subjects.map((subjects, subIndex) => (
                    <li key={`subjects-${subIndex}`} className="list-disc">
                      {subjects}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="hide">
                <Link key={item.id} to={`/option/${item.id}`}>
                  <Button>Take the Quiz!</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
      <Separator />
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {categories
          .filter((item) => item.id === "rizal")
          .map((filteredItem, index) => (
            <Card key={`item-${index}`}>
              <CardHeader>
                <CardTitle>{filteredItem.Exam}</CardTitle>
                <CardDescription>{filteredItem.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={`/option/${filteredItem.id}`}>
                  <Button className="bg-red-500 hover:bg-red-400">
                    Take the Quiz!
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default CardComponent;
