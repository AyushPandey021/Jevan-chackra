import React from "react";
import img1 from "../../assets/1.png"
import aglecard from "../../assets/anglecard.jpg"
import aglecard2 from "../../assets/angle2.png"
import fronangle from "../../assets/front.png"




const AngelAndOracleCardReading = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">ANGEL AND ORACLE CARD READING</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Angel and oracle card readings helps an individual in various ways, like: offering insights, guidance, and
          emotional support.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
            View Angel and Oracle Card reading Services
          </button>
        </div>
      </div>
      {/* session 02 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={fronangle}
          alt="Healing Session"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> ANGEL AND ORACLE CARD READING</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Angel and oracle card readings helps an individual in various ways, like: offering insights, guidance, and emotional support.
            </p>
          </ul>
        </div>
      </div>
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">1. Providing Clarity and Insight:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personal Situations:</li>
            <p>Angel and oracle cards can provide clarity on personal situations, helping individuals see their circumstances from a new perspective.</p>
            <li>Decision Making:</li>
            <p>The guidance from these readings can assist in making informed decisions by highlighting potential outcomes and considerations.</p>
          </ul>
        </div>
        <img
          src={aglecard}
          alt="Healing Technique"
          className="rounded-xl shadow-lg"
        />
      </div>
      {/* session 04 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src="https://imgs.search.brave.com/XOMvH7-qYO9EHHUHUKiy51DwnVSNXzGlLu5ghU0xeGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzE2LzIyLzI2/LzM2MF9GXzEwMTYy/MjI2NjdfNGhMcEFN/NkhzbHl1VU1MaXhv/dk9UMUg2cnY1SWdG/ankuanBn"
          alt="Symbols and Mantras"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">2.Emotional Healing and Support:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comfort and Reassurance:</li>
            <p>The messages from the cards often offer comfort and reassurance during difficult times, providing a sense of peace and hope.</p>
            <li>Healing Guidance:</li>
            <p>Readings can suggest ways to heal emotional wounds, encouraging self-care and self-compassion.</p>
          </ul>
        </div>
      </div>
      {/* session 05 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">3.  Spiritual Connection </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Higher Guidance:</li>
            <p>Many believe that these readings connect them with higher spiritual entities, such as angels or spirit guides, offering divine wisdom and support.</p>
            <li>Personal Growth:</li>
            <p>They can facilitate a deeper understanding of one’s spiritual path, promoting personal and spiritual growth.</p>
          </ul>
        </div>
        <img
          src={aglecard2}
          alt="Benefits of Healing"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={img1}
          alt="Healing Session Image"
          className="rounded-xl shadow-lg"
        />
        {/* 10 rules */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">4. Self-Reflection and Awareness</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Introspection:</li>
            <p>The cards can prompt self-reflection, helping individuals understand their feelings, behaviors, and motivations better.</p>
            <li>Inner Wisdom:</li>
            <p>They often guide individuals to tap into their inner wisdom and intuition, fostering greater self-awareness.</p>
          </ul>
        </div>
      </div>
      <div className="prose max-w-none mx-auto mt-16">
        <h2 className="text-2xl font-bold text-amber-800">5. Positive Affirmations</h2>
        <li>Encouragement:</li>
        <p>he messages in angel and oracle cards are usually positive and uplifting, offering encouragement and affirmations that boost morale.</p>
        <li>Empowerment:</li>
        <p>They can empower individuals to take positive actions and believe in their own abilities.</p>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Guidance on Relationships</h3>
        <ul className="list-disc list-inside">
          <li>Interpersonal Dynamics:</li>
          <p>Readings can provide insights into relationships, helping individuals understand and improve their interactions with others.</p>
          <li>Conflict Resolution:</li>
          <p>They can offer advice on resolving conflicts and enhancing communication within relationships</p>

        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">7. Future Insights</h3>
        <ul className="list-disc list-inside">
          <li>Potential Outcomes:</li>
          <p>While not predictive in the same way as fortune-telling, angel and oracle cards can suggest potential outcomes based on current energies, helping individuals prepare for possible future scenarios..</p>
          <li>Navigating Challenges:</li>
          <p>They can offer strategies for navigating upcoming challenges or changes.</p>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">8. Personal Empowerment</h3>
        <ul className="list-disc list-inside">
          <li>Encouragement:</li>
          <p>Angel and oracle cards can boost confidence and encourage individuals to trust themselves and their journe</p>
          <li>Motivation:</li>
          <p>The guidance can inspire and motivate individuals to pursue their goals and dreams with renewed vigor.</p>
        </ul>

        <h2 className="text-xl font-semibold text-amber-700 mt-6">Conclusion</h2>
        <ul className="list-disc list-inside">

          <p className="mt-6">
            Angel and oracle card readings can serve as valuable tools for guidance, healing, and empowerment. They offer a gentle, supportive approach to personal and spiritual development, helping individuals navigate their lives with greater clarity and confidence.</p>
        </ul>

        {/* services */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900">Angel and  Oracle Card Reading Service</h2>
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

export default AngelAndOracleCardReading;
