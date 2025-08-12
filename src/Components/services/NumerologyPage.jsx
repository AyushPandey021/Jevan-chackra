import React, { useState } from "react";

const NumerologyServices = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToBooking = () => {
    // Expand content if not already
    if (!expanded) setExpanded(true);

    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Spiritual images to add within the page
 
  return (
    <div className={`text-gray-800 p-4 sm:p-6 md:p-12 mt-20 font-sans transition-colors duration-500 ${
      expanded ? "bg-white" : "  to-white"
    }`}>

      {/* Section 01 */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-amber-900">
          Numerology
        </h1>

        <p className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all duration-400 ease-in-out ${
          expanded ? "max-h-full opacity-100" : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
        }`}>
          Numerology is the study of numbers and their mystical significance. 
          <span className="hidden sm:inline text-2xl font-semibold">
            It can provide deep insights into various aspects of life by analyzing the numbers derived from your birth date and name.
          </span>
          {expanded && (
            <>
              {" "}Numerology uncovers hidden patterns and connections that guide your personal growth, relationships, and career through the power of numbers.
              Understanding these insights can enrich your life decisions and align you with your true path.
            </>
          )}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-amber-700 text-white px-4 sm:px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all text-sm sm:text-base"
            aria-expanded={expanded}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
          <button
            onClick={scrollToBooking}
            className="border border-amber-700 text-amber-700 px-4 sm:px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all text-sm sm:text-base"
          >
            View Numerology Services
          </button>
        </div>
      </div>

      {/* Spiritual Images Grid */}
  

      {/* Detailed Sections - Show only when expanded */}
      {expanded && (
        <>
          {/* Section 02 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <img src="/images/healing1.jpg" alt="Healing Session" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">Numerology</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Numerology is the study of numbers and their mystical significance. It can help you understand life by analyzing numbers from your birth date and name.
              </p>
            </div>
          </div>

          {/* Section 03 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">1. Self-Awareness</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Life Path Number shows purpose & opportunities.</li>
                <li>Expression Number gives insight into talents.</li>
                <li>Soul Urge Number reveals inner desires.</li>
                <li>Personality Number shows others' perception of you.</li>
              </ul>
            </div>
            <img src="/images/technique.jpg" alt="Healing Technique" className="rounded-xl shadow-lg w-full" />
          </div>

          {/* Section 04 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <img src="/images/symbols.jpg" alt="Symbols" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">2. Relationships</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Compatibility insights strengthen bonds.</li>
                <li>Understanding dynamics fosters empathy.</li>
              </ul>
            </div>
          </div>

          {/* Section 05 */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10">
            <img src="/images/session.jpg" alt="Career" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">3. Career & Finance</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Career choices aligned to strengths.</li>
                <li>Timing guidance for investments.</li>
              </ul>
            </div>
          </div>

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">Numerology Services</h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  title: "Book a Distance Healing",
                  desc: "Experience healing from home.",
                  duration: "45 mins",
                  price: "₹999",
                },
                {
                  title: "In-Person Healing",
                  desc: "Visit us for a personalized session.",
                  duration: "60 mins",
                  price: "₹1499",
                },
                {
                  title: "Chakra Balancing",
                  desc: "Align your chakras & energy flow.",
                  duration: "30 mins",
                  price: "₹799",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-amber-200"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-4">{card.desc}</p>
                  <p className="text-sm sm:text-base text-gray-500">Duration: {card.duration}</p>
                  <p className="text-lg sm:text-xl font-semibold text-amber-700 mt-3">{card.price}</p>
                  <button className="mt-5 bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-all text-base sm:text-lg">
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

export default NumerologyServices;
