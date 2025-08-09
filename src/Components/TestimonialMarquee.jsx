import React from "react";
import "./testomonal.css";

const testimonials = [
  {
    title: "DAILY POST",
    subtitle: "PRECIOUS FEEDBACK",
    content:
      "Your readings are so accurate ma'am. Everyday, I have a doubt or uncertainty and it is resolved with your reading...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS ALWAYS!",
  },
  {
    title: "Hanuman Mantra Manifestation Journal",
    subtitle: "Ayush",
    content: "Hanuman journal itna chamatkari hai mai speechless...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS NUPUR",
  },
  {
    title: "TAROT CONSULTANCY",
    subtitle: "FEEDBACK",
    content:
      "Exactly like the reading you did for me yesterday 🙏 I am ever grateful to you...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS @REEMAJI",
  },
  // Add more if needed
  {
    title: "TAROT CONSULTANCY",
    subtitle: "FEEDBACK",
    content:
      "Exactly like the reading you did for me yesterday 🙏 I am ever grateful to you...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS @REEMAJI",
  },
  // Add more if needed
  {
    title: "TAROT CONSULTANCY",
    subtitle: "FEEDBACK",
    content:
      "Exactly like the reading you did for me yesterday 🙏 I am ever grateful to you...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS @REEMAJI",
  },
  // Add more if needed
  {
    title: "TAROT CONSULTANCY",
    subtitle: "FEEDBACK",
    content:
      "Exactly like the reading you did for me yesterday 🙏 I am ever grateful to you...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS @REEMAJI",
  },
  // Add more if needed
  {
    title: "TAROT CONSULTANCY",
    subtitle: "FEEDBACK",
    content:
      "Exactly like the reading you did for me yesterday 🙏 I am ever grateful to you...",
    author: "@jevanchakra",
    blessings: "DIVINE BLESSINGS @REEMAJI",
  },
  // Add more if needed
];

const TestimonialMarquee = () => {
  // Duplicate the array to create infinite loop effect
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        {loopedTestimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <h2 className="title">{item.title}</h2>
            <h3 className="subtitle">{item.subtitle}</h3>
            <p className="content">{item.content}</p>
            <p className="author">{item.author}</p>
            <p className="blessings">{item.blessings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
