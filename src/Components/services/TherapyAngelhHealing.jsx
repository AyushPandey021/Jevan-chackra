import React from "react";
import Front from "../../assets/Tfront.png"
import    t1 from "../../assets/T1.jpg"
import t2 from "../../assets/T2.png"
import t3 from "../../assets/T3.jpg"
const   TherapyAngelHealing = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Angel Healing and Therapy</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
      Angel healing and therapy can offer numerous benefits to individuals, promoting holistic well-being.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
         View Angel Healing and Therapy Services
          </button>
        </div>
      </div>
      {/* session 02 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={Front}
          alt="Healing Session"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> Angel Healing and Therapy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
             <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Angel healing and therapy can offer numerous benefits to individuals, promoting holistic well-being. Here are the key advantages:
                </p>
          </ul>
        </div>
      </div>
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">1. Emotional and Psychological Well-being</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Emotional Support:</li>
           <p>Angel healing provides comfort and support, helping individuals cope with grief, depression, and anxiety.</p>       
           <li>Stress Relief:</li>
           <p>The calming presence of angels can reduce stress levels, promoting relaxation and a sense of peace.</p>
           <li>Positive Outlook:</li>
           <p>By connecting with angelic energy, individuals can cultivate a more positive and hopeful outlook on life.</p>
          </ul>
        </div>
        <img
          src={t1}
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
          <h2 className="text-2xl font-bold mb-2 text-amber-800">2. Physical Health</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Healing Energy:</li>
           <p>Practitioners believe that angelic energy can aid in physical healing, boosting the body’s natural healing processes.</p>
            <li>Pain Relief:</li>
            <p>Some individuals report relief from chronic pain and other physical ailments through angel healing sessions.</p>
          </ul>
        </div>
      </div>
      {/* session 05 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">3. Spiritual Growth </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Deepened Spiritual Connection:</li>
            <p>Angel therapy helps individuals feel more connected to their spiritual beliefs and higher self.</p>
            <li>Guidance and Wisdom:</li>
            <p>Angels are believed to provide divine guidance, helping individuals navigate life’s challenges with greater wisdom and clarity.</p>
          </ul>
        </div>
        <img
          src={t2}
          alt="Benefits of Healing"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <img
          src={t3}
          alt="Healing Session Image"
          className="rounded-xl shadow-lg"
        />
        {/* 10 rules */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">4. Mental Clarity and Intuition</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Enhanced Intuition:</li>
          <p>Regular practice can heighten intuition and psychic abilities, making it easier to receive and interpret divine messages.</p>  
           <li>Clearer Decision Making:</li>     
           <p>Angelic guidance can lead to more aligned and purposeful decisions in various aspects of life.</p>
                 </ul>
        </div>
      </div>
      <div className="prose max-w-none mx-auto mt-16">
        <h2 className="text-2xl font-bold text-amber-800">5. Improved Relationships</h2>
        <li>Conflict Resolution:</li>
        <p>Angel healing can help resolve conflicts and improve relationships by fostering understanding, compassion, and forgiveness.</p>
        <li>Harmonious Interactions:</li>     
        <p>Harmonious Interactions:</p> 
        
        <h3 className="text-xl font-semibold text-amber-700 mt-6">6. Personal Empowerment</h3>
        <ul className="list-disc list-inside">
          <li>Inner Strength:</li>
         <p>Feeling supported by angelic beings can empower individuals to overcome fears, self-doubt, and limiting beliefs.</p>
         <li>Confidence Boost:</li>
         <p>It fosters a sense of inner strength and confidence, enabling individuals to take on challenges with a positive mindset.</p>
         
         </ul>

        <h3 className="text-xl font-semibold text-amber-700 mt-6">7. Holistic Healing</h3>
        <ul className="list-disc list-inside">
          <li>Comprehensive Well-being:</li>
        <p>Angel healing addresses the physical, emotional, mental, and spiritual aspects of an individual, promoting overall well-being.</p>
          <li>Balance and Harmony:</li>
          <p>It helps in balancing energies, ensuring a harmonious flow that supports holistic health.</p>
          </ul>

         <h3 className="text-xl font-semibold text-amber-700 mt-6">8. Protection and Safety</h3>
        <ul className="list-disc list-inside">
          <li>Energetic Protection:</li>
        <p>Angels are often invoked for protection against negative influences and harmful energies.</p>
          <li>Safe Environment:</li>
          <p>Creating a sense of safety and security, which is crucial for healing and personal growth.</p>
          </ul>

           <h3 className="text-xl font-semibold text-amber-700 mt-6">9. Manifestation and Abundance</h3>
        <ul className="list-disc list-inside">
          <li>Attracting Positivity:</li>

        <p>
        Angel healing can help individuals attract positive outcomes and abundance in various areas of life.</p>
          <li>Manifesting Desires:</li>  
        <p>By aligning with divine energy, individuals can better manifest their desires and goals.</p>     
        </ul>


           <h2 className="text-xl font-semibold text-amber-700 mt-6">When to take Angel Healing and Therapy?</h2>
        <ul className="list-disc list-inside">
          <li>If you feel you are in need of protection against negative influences and harmful energies</li>
          <li>If you feel that after all efforts you are unable to manifest your dreams/goals/desires</li>
          <li>If you feel that your house/business/career/factory/industry/school/college etc. needs safety and protection from unexpected incidents happening again and again like fire, accidents, robbery etc.</li>
          <li>If you feel any area of your life is blocked by someone because of some black magic, evil eye, spells, curses etc.</li> 
          <li>If you feel that you are unable to grow in career.</li>  
          <li>If you feel that you are lacking support and opportunity</li>  
          <li>If you are having relationship issues with your husband, wife, in laws, boss, colleagues, with employer or employees, son, daughter, friends, sister, brother etc.</li>  
          <li>If you are going through any health issues and unbale to come out of it.</li>
          <li>If you want to grow spiritually but unable to make the connections</li>
          <li>If you are suffering from anxiety, depression, self-doubt, lack of confidence etc.</li> 
        
        </ul>        

           <h2 className="text-xl font-semibold text-amber-700 mt-6">How healing will be conducted?</h2>
        <ul className="list-disc list-inside">
          <p>Shivangi Di (Sushmita Abbi) is gifted with the psychic abilities of clairvoyance, clairaudience, clairsentience, and claircognizance, developed through years of dedicated practice, rituals, and prayers. When you share your challenges and life issues with her, she connects with your Guardian Angel to address and heal the root causes of your concerns.</p>
          <p>Upon booking your session, you will have a 15-minute audio call with Shivangi Di (Sushmita Abbi) to discuss your issues in detail. Following this discussion, the healing process begins. Shivangi Di spends 20-30 minutes praying for all registered members, using personalized written prayers, candles, and symbols directed to one or multiple Archangels and Masters on your behalf.</p>
          <p>For the best results, it is recommended to continue the healing process with faith for at least 90 days (3 months) and then surrender. Shivangi Di has witnessed miraculous transformations in people’s lives through Angel Healing and Therapy. Angels are always ready to assist; we just need to ask, believe, and surrender to receive their help.</p>

        </ul>
        {/* services */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900">Angel Healing and Therapy Services</h1>
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

export default TherapyAngelHealing;
