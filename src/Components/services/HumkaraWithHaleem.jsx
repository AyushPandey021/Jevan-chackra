import React, { useState } from "react";
import img1 from "../../assets/humkara-heelam.png";
import img2 from "../../assets/hil1.png";
import img3 from "../../assets/hil2.png";

const HumkaraWithHaleem = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true);
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
      className={`text-gray-800 p-4 mt-20 sm:p-6 md:p-12 font-sans transition-colors duration-500 ${
        expanded
          ? "bg-white"
          : " to-white"
      }`}
    >
      {/* Section 01 */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-amber-900">
          Humkara with Haleem Healing
        </h1>

        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all duration-400 ease-in-out ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          “Humkara with Haleem” is a simple, easy, quick & very powerful
          healing technique. In Humkara with Haleem, Prana energy is projected
          and directed in a systematic and balanced way, so that it implants
          the energy in the five sheaths of the body.
          {expanded && (
            <>
              {" "}
              This helps to reprogram the energy body and aura. Founded by
              Shri S. K. Sainiji, this evolved from Lama Fera into an
              independent modality.
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
            View Humkara with Haleem Services
          </button>
        </div>
      </div>

      {/* Spiritual Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {spiritualImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Spiritual Decor ${i + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-48 sm:h-56"
            loading="lazy"
          />
        ))}
      </div>

      {/* Expanded Detailed Sections */}
      {expanded && (
        <>
          {/* Section 02 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <img src={img1} alt="Healing Session" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Humkara with Haleem Healing
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Potent yet simple healing practice systematically projecting
                Prana to implant into the five sheaths of the body.
              </p>
              <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-amber-800">Symbols:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>
                  <strong>Humkara:</strong> Crafted by vibrations of 380,000 mantras.
                </li>
                <li>
                  <strong>Haleem:</strong> Composed of vibrations from 134,000 mantras.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 03 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-amber-800">
                Benefits
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li><strong>Brahma Nadi Activation:</strong> Opens higher channels.</li>
                <li><strong>Clears Vishuddhi Chakra:</strong> Boosts wisdom & finances.</li>
                <li><strong>Enhances Mental Capacity:</strong> For ages 5 to 80.</li>
                <li><strong>Boosts Productivity:</strong> For professionals, students, etc.</li>
              </ul>
            </div>
            <img src={img2} alt="Benefits" className="rounded-xl shadow-lg w-full" />
          </div>

          {/* Section 04 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <img src={img3} alt="Expected Outcomes" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Expected Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Better concentration & memory</li>
                <li>Increased efficiency & foresight</li>
                <li>Exam & interview success</li>
                <li>Confident communication</li>
                <li>Better persuasion abilities</li>
              </ul>
            </div>
          </div>

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">
              Humkara with Haleem Healing Services
            </h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  title: "Book a Distance Healing",
                  desc: "Experience Lama Fera healing from the comfort of your home.",
                  duration: "45 mins",
                  price: "₹999",
                },
                {
                  title: "In-Person Healing",
                  desc: "Visit us for a personalized healing session.",
                  duration: "60 mins",
                  price: "₹1499",
                },
                {
                  title: "Chakra Balancing",
                  desc: "Align your chakras and promote energy flow.",
                  duration: "30 mins",
                  price: "₹799",
                },
              ].map((card, index) => (
                <div
                  key={index}
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

export default HumkaraWithHaleem;
