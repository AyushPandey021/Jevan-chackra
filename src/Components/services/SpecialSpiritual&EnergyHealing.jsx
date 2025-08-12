import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SPfront from "../../assets/SPfront.png";
import SP1 from "../../assets/SP1.png";
import SP2 from "../../assets/SP2.png";
import SP3 from "../../assets/SP3.png";
import SP4 from "../../assets/SP4.png";

const SpecialSpiritualAndEnergyHealing = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true);
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    "/images/spiritual1.jpg",
    "/images/spiritual2.jpg",
    "/images/spiritual3.jpg",
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
          className="flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium text-sm sm:text-base transition-colors"
        >
          ← Back to Services
        </button>
      </div>

      {/* Intro */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 text-amber-900">
          Special Spiritual & Energy Healing
        </h1>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          Spiritual healing encompasses a range of practices and beliefs aimed
          at enhancing well-being through the connection of mind, body, and
          spirit.
          {expanded && (
            <>
              {" "} It integrates physical, emotional, mental, and spiritual
              aspects to help cleanse your energy field, restore balance, and
              promote a feeling of deep harmony.
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

      {/* Gallery */}
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
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img src={SPfront} alt="Healing Session" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Spiritual healing connects the mind, body, and spirit to bring
                balance and improve holistic health.
              </p>
            </div>
          </div>

          {/* Benefit Sections */}
          {[
            { title: "Emotional Balance", img: SP1, points: ["Reduces stress, anxiety, and depression.", "Promotes peace, joy, and emotional well-being."] },
            { title: "Physical Health", img: SP2, points: ["Improves overall physical health and vitality.", "Boosts immunity and accelerates healing."] },
            { title: "Mental Clarity", img: SP3, points: ["Enhances focus and mental sharpness.", "Encourages positivity and cognitive strength."] },
            { title: "Enhanced Relationships", img: SP4, points: ["Promotes empathy and compassion.", "Improves communication and reduces conflict."] },
          ].map((section, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-6 items-center mb-10">
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                      {section.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <img src={section.img} alt={section.title} className="rounded-xl shadow-lg w-full" />
                </>
              ) : (
                <>
                  <img src={section.img} alt={section.title} className="rounded-xl shadow-lg w-full" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                      {section.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
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
              Special Spiritual & Energy Healing Services
            </h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                { title: "Book a Distance Healing", desc: "Experience healing from your home.", duration: "45 mins", price: "₹999" },
                { title: "In-Person Healing", desc: "Personalized healing session in person.", duration: "60 mins", price: "₹1499" },
                { title: "Chakra Balancing", desc: "Align your chakras & promote energy flow.", duration: "30 mins", price: "₹799" },
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-amber-200">
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

export default SpecialSpiritualAndEnergyHealing;
