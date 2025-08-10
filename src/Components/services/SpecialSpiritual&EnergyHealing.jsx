import React from "react";
import SPfront from "../../assets/SPfront.png"
import SP1 from "../../assets/SP1.png"
import SP2 from "../../assets/SP2.png"
import SP3 from "../../assets/SP3.png"
import SP4 from "../../assets/SP4.png"
const  SpecialSpiritualAndEnergyHealing = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900"> Special Spiritual & Energy Healing</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
       Spiritual healing encompasses a range of practices and beliefs aimed at enhancing well-being
through the connection of mind, body, and spirit.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
         View  Special Spiritual & Energy Healing Services
          </button>
        </div>
      </div>
      {/* session 02 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={SPfront}
          alt="Healing Session"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> Special Spiritual & Energy Healing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
             <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Spiritual healing encompasses a range of practices and beliefs aimed at enhancing well-being
                through the connection of mind, body, and spirit. Here are some potential benefits
                </p>
          </ul>
        </div>
      </div>
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">1. Emotional Balance:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Helps to manage and reduce stress, anxiety, and depression.</li>
            <li>Promotes feelings of peace, joy, and overall emotional well-being.</li>
           </ul>
        </div>
        <img
          src={SP1}
          alt="Healing Technique"
          className="rounded-xl shadow-lg"
        />
      </div>
      {/* session 04 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={SP2}
          alt="Symbols and Mantras"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">2. Physical Health:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Can lead to improvements in physical ailments and pain relief.</li>
            <li>Boosts the immune system and enhances overall physical vitality.</li>
            
          </ul>
        </div>
      </div>
      {/* session 05 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">3. Mental Clarity: </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Aids in achieving mental clarity and focus.:</li>
            <li>Encourages positive thinking and improved cognitive functions.</li>
          </ul>
        </div>
        <img
          src={SP3}
          alt="Benefits of Healing"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={SP4}
          alt="Healing Session Image"
          className="rounded-xl shadow-lg"
        />
        {/* 10 rules */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">4. Enhanced Relationships:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Fosters compassion, empathy, and understanding in relationships.</li>
         
           <li>Improves communication and reduces conflicts</li>     
          
                 </ul>
        </div>
      </div>
      <div className="prose max-w-none mx-auto mt-16">
        <h2 className="text-2xl font-bold text-amber-800">5. Spiritual Growth:</h2>
        <li>Deepens the connection to one’s spiritual beliefs and practices.</li>
        <li>Promotes a sense of purpose and meaning in life.</li>     
      
        
        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Stress Reduction:</h3>
        <ul className="list-disc list-inside">
          <li>Practices like meditation and mindfulness can significantly reduce stress levels.</li>
          <li>Encourages relaxation and inner peace.</li>

         </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">7. Improved Coping Mechanisms:</h3>
        <ul className="list-disc list-inside">
          <li>Provides tools and practices for better handling life’s challenges and adversities.</li>
          <li>Enhances resilience and adaptability.</li>
         
          </ul>

         <h3 className="text-xl font-semibold text-amber-700 mt-6">8. Personal Empowerment:</h3>
        <ul className="list-disc list-inside">
          <li>Encourages self-discovery and personal growth.</li>
        
          <li>Helps in recognizing and tapping into one’s inner strengths and abilities.</li>
         
          </ul>

           <h3 className="text-xl font-semibold text-amber-700 mt-6">9. Holistic Health:</h3>
        <ul className="list-disc list-inside">
           <li>Integrates physical, emotional, mental, and spiritual aspects for a balanced approach to health.</li>
           <li>Encourages a holistic view of well-being.</li>
          </ul>


          <h3 className="text-xl font-semibold text-amber-700 mt-6">10. Release of Toxins:</h3>
        <ul className="list-disc list-inside">
           <li>Helps in the detoxification process by clearing energetic blockages.</li>
           <li>Supports the body’s natural ability to eliminate toxins.</li>
          </ul>


        
        {/* services */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900">SPECIAL SPIRITUAL & ENERGY HEALING SERVICES</h1>
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

export default SpecialSpiritualAndEnergyHealing;
