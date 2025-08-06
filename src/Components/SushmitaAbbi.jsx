import React from 'react';
import sushmitaImg from '../assets/jivan-founder.png'; // Make sure the image name matches

const SushmitaAbbi = () => {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={sushmitaImg}
            alt="Sushmita Abbi"
            className="rounded-lg max-h-[600px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full  md:w-1/2">
          <h1 className="text-6xl font-bold text-yellow-500 mb-6">Meet Our Founder.</h1>
          <h1 className="text-3xl font-bold text-black mb-6">Sushmita Abbi</h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-4">
            Sushmita Abbi experiences and shares life through Love, Care, Goodness & Compassion.
            A postgraduate, Sushmita began her career in Corporate Sector, moved to Education Sector.
            But being a Natural Healer with inborn Intuitive Instincts and an adviser all her life,
            she realized her mission to be an Occultist, Wellness Coach, Spiritual Therapist & a Holistic Healer
            practicing and teaching various forms of Predictive Sciences & Healing Modalities.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This multifaceted personality uses her all-embracing knowledge to empower people to achieve
            their full potential in their journey towards Personal & Spiritual growth. She is a Numerologist,
            Tarot Consultant, Angel Card Reader, Angel Healer, Spiritual Healer, Switch word Expert,
            Motivational Speaker & Life Coach.
          </p>
           <button
        className="w-[120px] h-[30px] bg-gradient-to-b from-purple-200 to-purple-400 border-none rounded-full text-white font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-[1px_3px_0px_rgb(139,113,255)] transition duration-300 active:translate-x-[2px] active:shadow-[0px_1px_0px_rgb(139,113,255)] active:pb-[1px]"
      >
       Read More
      
      </button>
        </div>
      
      </div>
    </div>
  );
};

export default SushmitaAbbi;
