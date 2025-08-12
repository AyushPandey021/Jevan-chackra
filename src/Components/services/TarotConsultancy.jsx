import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import tarot from "../../assets/torotc.jpg";
import t1 from "../../assets/T1.jpg";
import t2 from "../../assets/T2.png";
import t3 from "../../assets/T3.jpg";
import t4 from "../../assets/T4.png";

const TarotConsultancy = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true);
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    "/images/tarot-gallery1.jpg",
    "/images/tarot-gallery2.jpg",
    "/images/tarot-gallery3.jpg",
  ];

  return (
    <div
      className={`text-gray-800 p-4 mt-20 sm:p-6 md:p-12 transition-colors duration-500 ${
        expanded ? "bg-white" : " to-white"
      }`}
    >
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium text-sm sm:text-base"
        >
          ← Back to Services
        </button>
      </div>

      {/* Intro */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 text-amber-900">
          Tarot Consultancy
        </h1>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          Tarot Consultancy can be a powerful tool for self-reflection and
          personal growth.
          {expanded && (
            <>
              {" "}It offers guidance, insights, and deeper understanding
              of life situations while helping strengthen connection with
              intuition.
            </>
          )}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-amber-700 text-white px-4 sm:px-6 py-2 rounded-xl hover:bg-amber-800 text-sm sm:text-base"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
          <button
            onClick={scrollToBooking}
            className="border border-amber-700 text-amber-700 px-4 sm:px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white text-sm sm:text-base"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Tarot Gallery ${idx + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-48 sm:h-56"
            loading="lazy"
          />
        ))}
      </div>

      {expanded && (
        <>
          {/* Sections */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img src={tarot} alt="Tarot Reading" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Tarot Consultancy
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Here are some key ways tarot can help: Self-reflection, clarity
                in decision-making, emotional healing, and empowerment.
              </p>
            </div>
          </div>

          {[
            {
              title: "Self-Reflection and Insight",
              img: t1,
              text: "Gain insight into your thoughts, feelings, and behaviors through symbolism and archetypes."
            },
            {
              title: "Decision Making",
              img: t2,
              text: "Reveal important factors and potential outcomes to make informed choices."
            },
            {
              title: "Emotional Healing",
              img: t3,
              text: "Find comfort and process your emotions in times of distress."
            },
            {
              title: "Personal Empowerment",
              img: t4,
              text: "Recognize hidden strengths, reveal opportunities, and take proactive steps."
            }
          ].map((sec, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6 items-center mb-10">
              {i % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">{sec.title}</h2>
                    <p className="text-sm sm:text-base text-gray-700">{sec.text}</p>
                  </div>
                  <img src={sec.img} alt={sec.title} className="rounded-xl shadow-lg" />
                </>
              ) : (
                <>
                  <img src={sec.img} alt={sec.title} className="rounded-xl shadow-lg" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">{sec.title}</h2>
                    <p className="text-sm sm:text-base text-gray-700">{sec.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">
              Tarot Consultancy Services
            </h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Book a Distance Reading",
                  desc: "Experience tarot reading from home via video call.",
                  duration: "45 mins",
                  price: "₹999"
                },
                {
                  title: "In-Person Tarot Session",
                  desc: "Meet for a personalized, face-to-face tarot reading.",
                  duration: "60 mins",
                  price: "₹1499"
                },
                {
                  title: "Chakra & Tarot Combo",
                  desc: "Combine chakra assessment with tarot insights.",
                  duration: "60 mins",
                  price: "₹1799"
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-amber-200"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{card.desc}</p>
                  <p className="text-xs sm:text-sm text-gray-500">Duration: {card.duration}</p>
                  <p className="text-base sm:text-lg font-semibold text-amber-700 mt-2">{card.price}</p>
                  <button className="mt-4 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-all text-sm sm:text-base">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TarotConsultancy;
