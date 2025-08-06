import React from "react";

const TarotConsultancy = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Tarot Consultancy</h1>
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
            View Tarot Consultancy Services
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
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> Tarot Consultancy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
             <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Tarot Consultancy can be a useful tool for self-reflection and personal growth. Here are some ways it might help:
                </p>
          </ul>
        </div>
      </div>
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">1. Self-Awareness and Personal Growth</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
           <p>Tarot cards can help you gain insight into your thoughts, feelings, and behaviors. The symbolism in the cards can prompt you to think about aspects of your life you might not have considered.</p>
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
          <h2 className="text-2xl font-bold mb-2 text-amber-800">2.Self-Reflection and Insight:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
           <p>When faced with a difficult decision or a confusing situation, a tarot reading can provide clarity by highlighting important factors and potential outcomes.</p>
          </ul>
        </div>
      </div>
      {/* session 05 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">3. Emotional Healing: </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <p>Tarot readings can offer comfort and guidance during times of emotional distress. The process can help you understand and process your feelings, leading to healing and closure.</p>
          </ul>
        </div>
        <img
          src="/images/benefits.jpg"
          alt="Benefits of Healing"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src="/images/session.jpg"
          alt="Healing Session Image"
          className="rounded-xl shadow-lg"
        />
        {/* 10 rules */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">4. Personal Empowerment:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
          <p>Tarot can encourage you to take control of your life by revealing hidden strengths and opportunities. It can motivate you to take action and make positive changes.</p>          </ul>
        </div>
      </div>
      <div className="prose max-w-none mx-auto mt-16">
        <h2 className="text-2xl font-bold text-amber-800">5.  Creative Inspiration:</h2>
        <p>The imagery and symbolism of tarot cards can spark creativity and offer new perspectives, which can be especially useful for artists, writers, and other creatives.</p>      
        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Spiritual Growth:</h3>
        <ul className="list-disc list-inside">
          <li>Clarity and Direction: Numerology can offer clarity when faced with difficult decisionsor challenges, providing a fresh perspective and potential solutions</li>
          <li>Alignment with Life Path: By understanding your core numbers, you can makedecisions that align with your true self and long-term goals.</li>
        </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Spiritual Development</h3>
        <ul className="list-disc list-inside">
          <li>Soul Purpose: Numerology can reveal your spiritual mission and the lessons you’re here to learn, guiding your spiritual growth and development.</li>
          <li>Inner Peace: Understanding your core numbers can bring a sense of inner peace and acceptance, knowing you are on the right path and have the tools to navigate life’s challenges.</li>
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

export default TarotConsultancy;
