import React, { useState } from "react";
import img1 from "../../assets/1.png";
import aglecard from "../../assets/anglecard.jpg";
import aglecard2 from "../../assets/angle2.png";
import fronangle from "../../assets/front.png";

const AngelAndOracleCardReading = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true); // auto-expand if collapsed
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const spiritualImages = [
    "/images/spiritual1.jpg",
    "/images/spiritual2.jpg",
    "/images/spiritual3.jpg",
  ];

  return (
    <div
      className={`text-gray-800 p-4 sm:p-6 md:p-12 mt-20 font-sans transition-colors duration-500 ${
        expanded ? "bg-white" : " to-white"
      }`}
    >
      {/* SECTION 1 - INTRO */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-amber-900">
          Angel and Oracle Card Reading
        </h1>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          Angel and oracle card readings help individuals receive insights,
          guidance, and emotional support.
          {expanded && (
            <>
              {" "}They can foster clarity, emotional healing, self-awareness,
              and spiritual connection while offering positive affirmations
              and direction in relationships and life decisions.
            </>
          )}
        </p>

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
            View Angel and Oracle Card Services
          </button>
        </div>
      </div>

      {/* Spiritual Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {spiritualImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Spiritual ${i + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-48 sm:h-56"
            loading="lazy"
          />
        ))}
      </div>

      {/* EXPANDED CONTENT */}
      {expanded && (
        <>
          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img
              src={fronangle}
              alt="Reading Session"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Angel and Oracle Card Reading
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                These readings offer insights, guidance, and emotional support
                for clarity in decision-making and navigating life challenges.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Providing Clarity and Insight
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Understand personal situations from new perspectives</li>
                <li>Assistance in making informed decisions</li>
              </ul>
            </div>
            <img
              src={aglecard}
              alt="Clarity Insight"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Section 4 */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img
              src="https://imgs.search.brave.com/XOMvH7-qYO9EHHUHUKiy51DwnVSNXzGlLu5ghU0xeGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzE2LzIyLzI2/LzM2MF9GXzEwMTYy/MjI2NjdfNGhMcEFN/NkhzbHl1VU1MaXhv/dk9UMUg2cnY1SWdG/ankuanBn"
              alt="Emotional Healing"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Emotional Healing and Support
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Messages from the cards often offer comfort, reassurance, and
                guidance for emotional recovery and self-care.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Spiritual Connection
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Many believe these readings connect with angels or spiritual
                guides, offering uplifting messages and personal growth.
              </p>
            </div>
            <img
              src={aglecard2}
              alt="Spiritual Growth"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">
              Angel and Oracle Card Reading Services
            </h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  title: "Book a Distance Healing",
                  desc: "Experience angel and oracle card guidance remotely.",
                  duration: "45 mins",
                  price: "₹999",
                },
                {
                  title: "In-Person Reading",
                  desc: "Join us for a personal, face-to-face session.",
                  duration: "60 mins",
                  price: "₹1499",
                },
                {
                  title: "Relationship Guidance",
                  desc: "Gain clarity and strengthen your connection.",
                  duration: "30 mins",
                  price: "₹799",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-amber-200"
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

export default AngelAndOracleCardReading;
