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

const CardComponent = () => {
  const data = [
    {
      Exam: "General Education",
      description:
        "This section covers a broad range of basic academic subjects that are foundational to a well-rounded education. It tests the examinee's general knowledge and understanding of various disciplines.",
      id: "gened",
      Percentage: 20,
      Subjects: [
        "English",
        "Science",
        "Filipino",
        "Mathematics",
        "Social Science",
      ],
    },
    {
      Exam: "Professional Education",
      description:
        "This section evaluates the examinee's understanding of educational theories, principles, and practices essential for effective teaching.",
      id: "profed",
      Percentage: 40,
      Subjects: [
        "Assessment of Learning",
        "Curriculum Development",
        "Child and Adolescent Development",
        "Educational Technology",
        "Principles of Teaching",
        "Social Dimension",
        "Teaching Profession",
      ],
    },
    {
      Exam: "Specialization",
      description:
        "This section assesses the examinee's expertise in the specific subject area they intend to teach. This part is tailored to the major or specialization that the examinee pursued during their education.",
      id: "biosci",
      Percentage: 40,
      Subjects: [
        "Biological Science",
        "Physical Science",
        "Filipino",
        "Mathematics",
        "Social Science",
      ],
    },
  ];

  function getPath(id) {
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
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
      {data.map((item, index) => (
        <Card key={`item-${index}`} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>
              {item.Exam} ({item.Percentage}%)
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mx-5">
              {item.Subjects.map((subjects, subIndex) => (
                <li key={`subjects-${subIndex}`}>{subjects}</li>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link key={item.id} to={getPath(item.id)}>
              <Button>Take the Quiz!</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
