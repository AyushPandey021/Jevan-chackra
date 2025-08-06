import React from "react";

const NumerologyServices = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Numerology</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Numerology is the study of numbers and their mystical significance. It can provide deep
insights into various aspects of life by analyzing the numbers derived from your birth
date and name.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
            View Numerology Services
          </button>
        </div>
      </div>
      {/* session 02 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/healing1.jpg"
          alt="Healing Session"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> Numerology</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
             <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Numerology is the study of numbers and their mystical significance. 
It can provide deep insights into various aspects of life by analyzing the numbers derived from your birth date and name.
 Here’s how numerology can help you understand life:
                </p>
          </ul>
        </div>
      </div>
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">1. Self-Awareness and Personal Growth</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Life Path Number: This number, calculated from your birth date, reveals your life’s purpose, challenges, and opportunities. It acts as a guide to your overall journey.</li>
            <li>Expression/Destiny Number: Derived from your full name, it indicates your talents, abilities, and potential. It can help you understand your inherent strengths and how to best utilize them..</li>
            <li>Soul Urge/Heart’s Desire Number: This number, calculated from the vowels in your full name, represents your inner desires, motivations, and what drives you at a soul level.</li>
            <li>Personality Number: Derived from the consonants in your full name, it reveals how others perceive you and the first impression you make.</li>
          </ul>
        </div>
        <img
          src="/images/technique.jpg"
          alt="Healing Technique"
          className="rounded-xl shadow-lg"
        />
      </div>
      {/* session 04 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src="/images/symbols.jpg"
          alt="Symbols and Mantras"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">2. Relationships and Compatibility</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Compatibility: By comparing your numerology chart with someone else’s, you can gain insights into how well you might get along, potential areas of conflict, and how to strengthen your relationship..</li>
            <li>Understanding Dynamics: Knowing the core numbers of family members, friends, or partners can help you understand their motivations, challenges, and behaviors, fostering empathy and better communication.</li>
          </ul>
        </div>
      </div>
      {/* session 05
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
          src="/images/benefits.jpg"
          alt="Benefits of Healing"
          className="rounded-xl shadow-lg"
        />
      </div> */}

      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src="/images/session.jpg"
          alt="Healing Session Image"
          className="rounded-xl shadow-lg"
        />
        {/* 10 rules */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">3. Career and Financial Guidance</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Career Path: Your numerology chart can highlight careers that align with your strengths and passions, helping you make fulfilling professional choices..</li>
            <li>Financial Decisions: Numerology can offer guidance on when to take financial risks, invest, or save, based on your personal cycles and life path number..</li>
          </ul>
        </div>
      </div>
      <div className="prose max-w-none mx-auto mt-16">
        <h2 className="text-2xl font-bold text-amber-800">4. Life Cycles and Timing</h2>
       <li>Personal Year Number: This number, which changes annually, indicates the themes and energies you’ll experience each year. It can help you plan and make decisions aligned with the prevailing energy.</li>
       <li>Personal Month and Day Numbers: These provide more specific guidance on the energies at play each month and day, helping you make the most of short-term opportunities.</li>
        <h3 className="text-xl font-semibold text-amber-700 mt-6">5. Problem Solving and Decision Making</h3>
        <ul className="list-disc list-inside">
          <li>Clarity and Direction: Numerology can offer clarity when faced with difficult decisionsor challenges, providing a fresh perspective and potential solutions</li>
          <li>Alignment with Life Path: By understanding your core numbers, you can makedecisions that align with your true self and long-term goals.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Spiritual Development</h3>
        <ul className="list-disc list-inside">
          <li>Soul Purpose: Numerology can reveal your spiritual mission and the lessons you’re here to learn, guiding your spiritual growth and development.</li>
          <li>Inner Peace: Understanding your core numbers can bring a sense of inner peace and acceptance, knowing you are on the right path and have the tools to navigate life’s challenges.</li>
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

        <p className="mt-6">
        By integrating numerology into your life, you can gain valuable insights, make more informed choices, and align yourself more closely with your true path and purpose.</p>
        {/* services */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900">Services.</h1>
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

export default NumerologyServices;
