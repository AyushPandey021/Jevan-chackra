import React from "react";

const EmotionalFreedomTechniques  = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-white text-gray-800 p-6 md:p-12 font-sans">
      {/* session 01 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">EFT: TAPPING THERAPY SESSION</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
            An EFT (Emotional Freedom Techniques) tapping therapy session involves a structured process designed to address emotional distress, anxiety, trauma, or physical discomfort by combining acupressure point stimulation with cognitive and emotional techniques.
         </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-800 transition-all">
            Read More
          </button>
          <button className="border border-amber-700 text-amber-700 px-6 py-2 rounded-xl hover:bg-amber-700 hover:text-white transition-all" onClick={scrollToBooking}>
            View Emotional Freedom Techniques  Services
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
          <h2 className="text-2xl font-bold mb-2 text-amber-800"> EMOTIONAL FREEDOM TECHNIQUES</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <b>
             Emotional Freedom Techniques (EFT)</b><p>, Emotional Freedom Techniques, often referred to as &quot;tapping,&quot; is a form of alternative therapy that involves tapping on specific points on the body, primarily on the head and face, while voicing certain statements. It combines elements of cognitive therapy and exposure therapy with acupressure.
                </p>
              
          </ul>

        </div>
      </div>



      
      {/* session 03*/}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">How EFT Works</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
          <b>1. Identify the Issue:</b><p> The practitioner and patient identify the issue or problem to focus on.</p>
          <b>2. Measure the Intensity :</b><p> Before tapping, the patient rates the intensity of their distress on a scale from 0 to 10.</p>
          <b>3. The Setup:</b><p> The patient creates a simple phrase to acknowledge the problem and pairs it with a statement of self-acceptance, e.g., “Even though I have this [problem], I deeplyand completely accept myself.”</p>
          <b>4. The Sequence:</b><p> The patient taps on specific points on the body (acupressure points) in a sequence while repeating the setup phrase. </p>
          <b>5. Re-evaluation:</b><p>After the tapping sequence, the patient re-evaluates the intensity of the distress and repeats the process if necessary. </p>

          </ul>
        </div>
        
      </div>





      {/* session 04 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
        
        <div>
          <h2 className="text-2xl font-bold mb-2 text-amber-800">Benefits of EFT:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <b>1. Reduces Anxiety and Stress:</b><p>EFT has been shown to significantly lower stress levels and anxiety.</p>
            <b>2. Improves Mental Health:</b><p>It can help with issues such as depression, PTSD, and phobias.</p>
            <b>3. Pain Relief:</b><p>Many people use EFT to alleviate chronic pain.</p>
            <b>4. Enhances Performance:</b><p>It can improve performance in areas such as sports, work, and academics by reducing performance anxiety.</p>
            <b>5. Promotes Emotional Health:</b><p>EFT can help in dealing with negative emotions, enhancing overall emotional well-being.</p>
            <b>6. Supports Physical Health:</b><p> Some studies suggest that EFT can have a positive impact on physical health conditions, possibly by reducing stress and improving emotional health.</p>
            <b>7. Improves Sleep:</b><p> By reducing anxiety and stress, EFT can help improve sleep quality.</p>
          </ul>


            <h2 className="text-xl font-semibold text-amber-700 mt-6">Special Note:</h2>
        <ul className="list-disc list-inside">
          <p>EFT is a versatile and accessible therapy that can be used for a wide range of emotional and physical issues. Its combination of psychological techniques and acupressure makes it a unique tool for self-help and professional therapy.</p>
          </ul>



           <h3 className="text-xl font-semibold text-amber-700 mt-6">How Sessions are conducted in Jevan Chakra?</h3>
        <ul className="list-disc list-inside">
            <p>Online Video Call Sessions for individuals</p>


            <p>Personal Visit Sessions for Corporates, School Teachers, University Teachers, School Students,
University Students.</p>
        </ul>
        </div>
      </div>
     



        {/* services */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-amber-900"> Emotional Freedom Techniques (EFT) Service </h1>
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

export default EmotionalFreedomTechniques ;
