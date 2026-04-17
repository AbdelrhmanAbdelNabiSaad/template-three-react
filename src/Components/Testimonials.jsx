
import avater1 from "../assets/avatar-01.png";
import avater2 from "../assets/avatar-02.png";
import avater3 from "../assets/avatar-03.png";
import avater4 from "../assets/avatar-04.png";
import avater5 from "../assets/avatar-05.png";
import avater6 from "../assets/avatar-06.png";
import TestimonialBox from "./TestimonialBox";
function Testimonials() {
  const testimonials = [
    {
      image: avater1,
      name: "Mohamed Farag",
      job: "Full Stack Developer",
      rate: 4,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus`,
    },
    {
      image: avater2,
      name: "Mohamed Ibrahim",
      job: "Full Stack Developer",
      rate: 4,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus`,
    },
    {
      image: avater3,
      name: "Shady Nabil",
      job: "Full Stack Developer",
      rate: 4,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus`,
    },
    {
      image: avater4,
      name: "Amr Hendawy",
      job: "Full Stack Developer",
      rate:5,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus`,
    },
    {
      image: avater5,
      name: "Sherief Ashraf",
      job: "Full Stack Developer",
      rate: 3,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus`,
    },
    {
      image: avater6,
      name: "Osama Mohamed",
      job: "Full Stack Developer",
      rate: 3,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus`,
    },
  ];

  return (
    <>
      <div className="testimonials" id="testimonials">
        <h2 className="main-title">Testimonials</h2>
        <div className="container">
          {testimonials.map((test, index) => (
            <TestimonialBox key={index} test={test} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
