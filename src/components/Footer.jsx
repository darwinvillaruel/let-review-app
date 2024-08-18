import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const currentDate = new Date(`${year}-${month}-${day}`);
  const examDate = new Date("2024-09-29");

  let convToday = String(today).split("G");
  let countdown = Math.abs(examDate - currentDate) / 1000 / 60 / 60 / 24;

  return (
    <div className="my-10">
      <Separator />
      <div className="flex flex-col justify-start place-items-end mt-5 text-sm">
        <p>
          <span className="font-semibold">{convToday[0]} </span>
          <br /> <span className="font-bold">{countdown}</span> days left before
          September 29, 2024
        </p>
      </div>
      <div className="flex flex-col items-center my-5 text-sm">
        <p>Made with ♥️ in Philippines</p>
      </div>
    </div>
  );
};

export default Footer;
