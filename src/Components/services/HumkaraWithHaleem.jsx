import React from "react";
import img2 from "../../assets/hil1.png"


import img3 from "../../assets/hil2.png"

import img1 from "../../assets/humkara-heelam.png"
const HumkaraWithHaleem = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Humkara with Haleem Healing</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
         
         Humkara with Haleem” is a simple, easy, quick & very powerful healing technique.
         In Humkara with Haleem, Prana energy is projected and directed in a systematic and balanced way,
         so that it implants the energy in the five sheaths of the body. This helps to reprogram the energy body and aura.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
            View Humkara with Haleem Healing Services
          </button>
        </div>
      </div>
      {/* session 02 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={img1}
          alt="Healing Session"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> Humkara with Haleem Healingy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
             <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Humkara with Haleem is an incredibly potent healing technique that is simple, quick, and effective.
              This practice involves systematically projecting and directing Prana energy to implant it into the five sheaths of the body, 
              thereby reprogramming the energy body and aura.
                </p>
               <p>Founded by Shri S. K. Sainiji, Humkara with Haleem originated as part of Lama Fera but has since evolved into an independent modality.</p> 
          </ul>
           <h3 className="text-2xl font-bold mb-2 text-amber-800">Symbols:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <b>Humkara symbol: <p>Crafted by merging the vibrations of 380,000 mantras.</p></b>
             <b>Haleem symbol: <p>Composed of the vibrations from 134,000 mantras.</p></b>
            </ul>
        </div>
      </div>



      
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
     <div>
  <h2 className="text-2xl font-bold mb-4 text-amber-800">Benefits of Humkara with Haleem:</h2>
  <ul className="list-disc list-inside space-y-4 text-gray-700">
    <li>
      <strong>BRAHMA NADI Activation:</strong>
      <p>Opens the higher channels of the subtle body.</p>
    </li>
    <li>
      <strong>Clears Vishuddhi Chakra Blockages:</strong>
      <p>Provides wisdom to access different dimensions and enhances intuition, aiding in financial abundance.</p>
    </li>
    <li>
      <strong>Mental Capacity Enhancement:</strong>
      <p>Suitable for individuals aged 5 to 80, accelerating their performance in mental, emotional, and spiritual tasks.</p>
    </li>
    <li>
      <strong>Productivity Boost:</strong>
      <p>Beneficial for judicial professionals, students, officials, IT workers, researchers, BPO employees, and personnel in the IPS, IAS, management, and marketing sectors.</p>
    </li>
  </ul>
</div>

        <img
          src={img2}
          alt="Healing Technique"
          className="rounded-xl shadow-lg"
        />
      </div>





      {/* session 04 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={img3}
          alt="Symbols and Mantras"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">Expected Outcomes:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <b>1. Enhanced Concentration and Memory: <p> Improves focus and retention, key to achieving excellence. </p></b>
            <b>2. Increased Efficiency:<p>Enables faster task completion. </p></b>
            <b>3. Foresight<p> Provides practitioners and recipients with the ability to foresee future trends, facilitating timely adjustments and consistent business and life success. </p></b>
            <b>4. Interview and Exam Success:<p>Students achieve better results through improved communication skills and memory. </p></b>
            <b>5. Confident Communication: <p>  Reduces stage fright and fear of interacting with higher authorities and large groups.</p></b>
            <b>6. Influential Communication and Persuasion:<p>With the blessings of Goddess Baglamukhi and Kaali, practitioners become more persuasive and influential in their work and financial matters. </p></b>
            <b>7. Overall Effectiveness:<p>  Enhances mental, spiritual, emotional, and verbal aspects of personality.</p></b>
            <b>8. Severs Deep-Rooted Cords: <p> The Haleem symbol is highly effective in cutting deep-rooted energetic cords instantly.</p></b>
          </ul>
        </div>
      </div>
     



        {/* services */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900">Humkara with Haleem Healing Service </h1>
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


  );
};

export default HumkaraWithHaleem;
