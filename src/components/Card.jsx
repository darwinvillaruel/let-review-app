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
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {categories.map((item, index) => (
        <Card key={`item-${index}`} className="flex flex-col justify-between">
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
  );
};

export default CardComponent;
