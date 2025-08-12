import React, { useState } from "react";

const EmotionalFreedomTechniques = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToBooking = () => {
    if (!expanded) setExpanded(true); // auto-expand if collapsed
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const spiritualImages = [
    "/images/spiritual1.jpg", // replace with EFT-themed or spiritual images
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
      {/* Section 01 - Intro */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-amber-900">
          EFT: Tapping Therapy Session
        </h1>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 transition-all ${
            expanded
              ? "max-h-full opacity-100"
              : "max-h-[4.5rem] sm:max-h-[6rem] overflow-hidden opacity-90"
          }`}
        >
          An EFT (Emotional Freedom Techniques) tapping therapy session involves
          a structured process to address emotional distress, anxiety, trauma, or
          physical discomfort by combining acupressure point stimulation with
          cognitive and emotional techniques.
          {expanded && (
            <>
              {" "}
              It integrates principles of traditional Chinese medicine with
              modern psychology, making it versatile for both mental and physical
              healing.
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
            View Emotional Freedom Techniques Services
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

      {/* Expanded Content */}
      {expanded && (
        <>
          {/* How EFT Works */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
            <img
              src="/images/healing1.jpg"
              alt="Healing Session"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                Emotional Freedom Techniques
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Emotional Freedom Techniques, often called "tapping", involves
                tapping on acupressure points while voicing positive statements,
                blending elements of therapy and traditional medicine.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
                How EFT Works
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>Identify the issue together with the practitioner</li>
                <li>Measure the intensity of distress (0-10 scale)</li>
                <li>Create a setup phrase acknowledging the problem</li>
                <li>Tap specific acupressure points while repeating the phrase</li>
                <li>Re-evaluate intensity and repeat if needed</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-800">
              Benefits of EFT
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              <li>Reduces anxiety, stress, and negative emotions</li>
              <li>Helps with depression, PTSD, phobias</li>
              <li>Supports better sleep and emotional well-being</li>
              <li>Improves self-confidence and performance</li>
            </ul>
          </div>

          {/* Booking Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-6">
              Emotional Freedom Techniques Services
            </h2>
            <div
              id="booking-section"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  title: "Book a Distance Healing",
                  desc: "Experience EFT from the comfort of your home.",
                  duration: "45 mins",
                  price: "₹999",
                },
                {
                  title: "In-Person Healing",
                  desc: "Join us for an in-person EFT session.",
                  duration: "60 mins",
                  price: "₹1499",
                },
                {
                  title: "Group EFT Session",
                  desc: "Participate in healing with group energy.",
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

export default EmotionalFreedomTechniques;
