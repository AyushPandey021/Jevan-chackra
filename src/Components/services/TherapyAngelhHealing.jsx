import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Front from "../../assets/Tfront.png";
import t1 from "../../assets/T1.jpg";
import t2 from "../../assets/T2.png";
import t3 from "../../assets/T3.jpg";

const TherapyAngelHealing = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true);
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    "/images/angel-gallery1.jpg",
    "/images/angel-gallery2.jpg",
    "/images/angel-gallery3.jpg",
  ];

  return (
    <div
      className={`text-gray-800 p-4 mt-20 sm:p-6 md:p-12 font-sans transition-colors duration-500 ${
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

      {/* Intro Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-amber-900">
          Angel Healing and Therapy
        </h1>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          Angel healing and therapy can offer numerous benefits to individuals,
          promoting holistic well-being.
          {expanded && (
            <>
              {" "}It addresses emotional, spiritual, and physical concerns by
              working with angelic energies to restore balance, peace, and
              positivity in life.
            </>
          )}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-amber-700 text-white px-4 sm:px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all text-sm sm:text-base"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
          <button
            onClick={scrollToBooking}
            className="border border-amber-700 text-amber-700 px-4 sm:px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all text-sm sm:text-base"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-48 sm:h-56"
            loading="lazy"
          />
        ))}
      </div>

      {/* Expanded Content */}
      {expanded && (
        <>
          {[
            {
              title: "Emotional & Psychological Well-being",
              img: t1,
              points: [
                "Provides emotional comfort during stress, grief, and anxiety.",
                "Promotes relaxation & a positive mindset.",
                "Supports stress relief through angelic calmness."
              ]
            },
            {
              title: "Physical Health",
              img: "/images/symbols.jpg",
              points: [
                "Believed to boost body’s natural healing process.",
                "May assist with chronic pain relief."
              ]
            },
            {
              title: "Spiritual Growth",
              img: t2,
              points: [
                "Deepens connection to spiritual beliefs & higher self.",
                "Brings divine guidance for life’s challenges."
              ]
            },
            {
              title: "Mental Clarity & Intuition",
              img: t3,
              points: [
                "Increases intuitive abilities.",
                "Aids in making aligned life decisions."
              ]
            }
          ].map((sec, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-2 gap-6 items-center mb-10"
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                      {sec.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                      {sec.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </>
              ) : (
                <>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                      {sec.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                      {sec.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">
              Angel Healing and Therapy Services
            </h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Distance Healing",
                  desc: "Experience angel therapy remotely.",
                  duration: "45 mins",
                  price: "₹999"
                },
                {
                  title: "In-Person Healing",
                  desc: "Receive angel guidance face-to-face.",
                  duration: "60 mins",
                  price: "₹1499"
                },
                {
                  title: "Chakra Balancing",
                  desc: "Combine angel therapy with chakra alignment.",
                  duration: "30 mins",
                  price: "₹799"
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl border border-amber-200"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {card.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Duration: {card.duration}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-amber-700 mt-2">
                    {card.price}
                  </p>
                  <button className="mt-4 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 text-sm sm:text-base">
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

export default TherapyAngelHealing;
