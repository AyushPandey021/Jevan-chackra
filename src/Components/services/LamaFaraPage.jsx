import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for back button
import la1 from "../../assets/LA1.png";
import la2 from "../../assets/LA2.png";
import la3 from "../../assets/LA3.png";
import la4 from "../../assets/LA4.png";

const LamaFeraHealing = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true); // Expand if not already
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
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium text-sm sm:text-base transition-colors"
        >
          ← Back to Services
        </button>
      </div>

      {/* Intro Section */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-amber-900">
          Lama Fera Healing
        </h1>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          Lama Fera is a powerful spiritual healing technique rooted in the
          ancient teachings of Tibetan Buddhism, designed to balance energy and
          promote holistic wellness.
          {expanded && (
            <>
              {" "} It uses sacred mantras, Tibetan symbols, and unique energy
              transfer practices to promote deep physical, mental, emotional,
              and spiritual healing.
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
            View Services
          </button>
        </div>
      </div>

      {/* Spiritual Images Gallery */}
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

      {/* Expanded Sections */}
      {expanded && (
        <>
          {/* Origins */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img src={la1} alt="Healing Session" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">1. Origins and History</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Rooted in Tibetan Buddhist practices and Lama teachings.</li>
                <li>Passed down from Lord Buddha to disciples for spiritual evolution.</li>
              </ul>
            </div>
          </div>

          {/* Technique */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">2. Healing Technique</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Transfer of healing energy from healer to recipient.</li>
                <li>Done in deeply meditative settings invoking Tibetan deities.</li>
                <li>Incorporates sacred mantras and Tibetan symbols.</li>
              </ul>
            </div>
            <img src={la2} alt="Healing Technique" className="rounded-xl shadow-lg w-full" />
          </div>

          {/* Tools */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img src={la3} alt="Symbols and Mantras" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">3. Tools and Symbols</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Use of sacred Tibetan healing symbols.</li>
                <li>Chanting mantras for divine invocation and energy flow.</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">4. Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Physical, mental, and emotional healing.</li>
                <li>Clears negative energies and blockages.</li>
                <li>Promotes relaxation and well-being.</li>
              </ul>
            </div>
            <img src={la4} alt="Benefits of Healing" className="rounded-xl shadow-lg w-full" />
          </div>

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">
              Lama Fera Healing Services
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

export default LamaFeraHealing;
