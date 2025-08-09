import React from "react";
import la1 from "../assets/LA1.png"

import la2 from "../assets/LA2.png"
import la3 from "../assets/LA3.png"
import la4 from "../assets/LA4.png"


const LamaFeraHealing = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Lama Fera Healing</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Lama Fera is a powerful spiritual healing technique rooted in the ancient
          teachings of Tibetan Buddhism, designed to balance energy and promote holistic wellness.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
            View Services
          </button>
        </div>
      </div>
      {/* session 02 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={la1}
          alt="Healing Session"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">1. Origins and History</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Rooted in ancient Tibetan Buddhist practices and teachings of Lamas.</li>
            <li>Passed down from Lord Buddha to his disciples to support spiritual evolution.</li>
          </ul>
        </div>
      </div>
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">2. Healing Technique</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Transfer of powerful energy from healer to recipient.</li>
            <li>Performed in serene, meditative environments invoking Tibetan deities.</li>
            <li>Use of sacred mantras and energy symbols by the practitioner.</li>
          </ul>
        </div>
        <img
          src={la2}
          alt="Healing Technique"
          className="rounded-xl shadow-lg"
        />
      </div>
      {/* session 04 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={la3}
          alt="Symbols and Mantras"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">3. Tools and Symbols</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Use of sacred Tibetan symbols with healing properties.</li>
            <li>Chanting mantras to enhance spiritual energy and divine invocation.</li>
          </ul>
        </div>
      </div>
      {/* session 05 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">4. Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Physical, mental, and emotional healing.</li>
            <li>Clears negative energies and emotional blockages.</li>
            <li>Reduces stress and promotes overall well-being.</li>
            <li>Enhances spiritual growth and inner awareness.</li>
          </ul>
        </div>
        <img
          src={la4}
          alt="Benefits of Healing"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={la1}
          alt="Healing Session Image"
          className="rounded-xl shadow-lg"
        />
        {/* 10 rules */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">5. Sessions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Recipient lies comfortably while healing is performed.</li>
            <li>Session duration ranges from 30 to 60 minutes based on individual needs.</li>
          </ul>
        </div>
      </div>
      <div className="prose max-w-none mx-auto mt-16">
        <h2 className="text-2xl font-bold text-amber-800">Lama Fera Healing by Jevan Chakra</h2>
        <p>
          Distance Lama Fera healing offers several benefits almost similar to in-person sessions, leveraging the belief that energy is not bound by physical space or time.
        </p>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">1. Accessibility</h3>
        <ul className="list-disc list-inside">
          <li>Allows individuals to receive healing regardless of their geographical location.</li>
          <li>Ideal for those who are unable to travel or have mobility issues.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">2. Convenience</h3>
        <ul className="list-disc list-inside">
          <li>Sessions can be scheduled at a mutually convenient time for both the practitioner and the recipient.</li>
          <li>No need to physically visit a healer, saving time and effort.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">3. Comfort</h3>
        <ul className="list-disc list-inside">
          <li>Recipients can receive healing in the comfort of their own home or any familiar environment.</li>
          <li>Reduces anxiety or stress associated with traveling to a new place.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">4. Enhanced Focus</h3>
        <ul className="list-disc list-inside">
          <li>Both the healer and the recipient can focus better without the distractions of a physical environment.</li>
          <li>The recipient can relax more deeply, potentially enhancing the effectiveness of the session.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">5. Flexibility</h3>
        <ul className="list-disc list-inside">
          <li>Suitable for people with busy schedules or those in different time zones.</li>
          <li>Easier to fit into daily routines without significant disruption.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Safety</h3>
        <ul className="list-disc list-inside">
          <li>Particularly beneficial during times when in-person meetings are not feasible due to health concerns.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">7. Energetic Connection</h3>
        <ul className="list-disc list-inside">
          <li>The belief that energy can be transmitted over any distance, maintaining the potency and effectiveness of the healing.</li>
          <li>The connection between the healer and the recipient is based on intention and focused energy.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">8. Emotional and Mental Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Can help reduce stress, anxiety, and emotional blockages.</li>
          <li>Promotes mental clarity, peace, and emotional balance.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">9. Spiritual Growth</h3>
        <ul className="list-disc list-inside">
          <li>Assists in clearing negative energy and enhancing spiritual awareness and growth.</li>
          <li>Supports the recipient’s journey towards higher consciousness and spiritual development.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">10. Physical Healing</h3>
        <ul className="list-disc list-inside">
          <li>Aids in the alleviation of physical ailments and discomfort.</li>
          <li>Promotes overall well-being and health.</li>
        </ul>

        <p className="mt-6">Distance Lama Fera healing is a versatile and powerful method that transcends physical limitations, offering a holistic approach to healing that addresses the mind, body, and spirit.
          
        </p>
        {/* services */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900">Lama Fera Healing</h1>
        <div id="booking-section" className="grid md:grid-cols-3 gap-8 mt-12">

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
              <h3 className="text-xl font-bold text-amber-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <p className="text-sm text-gray-500">Duration: {card.duration}</p>
              <p className="text-lg font-semibold text-amber-700 mt-2">{card.price}</p>
              <button className="mt-4 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-all">
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>

  );
};

export default LamaFeraHealing;
