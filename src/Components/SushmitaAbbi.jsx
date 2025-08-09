import React from "react";
import { useNavigate } from "react-router-dom";
import sushmitaImg from "../assets/jivan-founder.png"; // Make sure the path is correct

const SushmitaAbbi = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex items-start justify-center p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full items-center">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={sushmitaImg}
            alt="Sushmita Abbi"
            className="rounded-lg max-h-[600px] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-4">
            Meet Our Founder
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Sushmita Abbi
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Sushmita Abbi experiences and shares life through Love, Care, Goodness & Compassion.
            A postgraduate, Sushmita began her career in Corporate Sector, moved to Education Sector.
            But being a Natural Healer with inborn Intuitive Instincts and an adviser all her life,
            she realized her mission to be an Occultist, Wellness Coach, Spiritual Therapist & a Holistic Healer
            practicing and teaching various forms of Predictive Sciences & Healing Modalities.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            This multifaceted personality uses her all-embracing knowledge to empower people to achieve
            their full potential in their journey towards Personal & Spiritual growth. She is a Numerologist,
            Tarot Consultant, Angel Card Reader, Angel Healer, Spiritual Healer, Switch word Expert,
            Motivational Speaker & Life Coach.
          </p>

          {/* Read More Button */}
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Read More
          </button>
        </div>

      </div>
    </div>
  );
};

export default SushmitaAbbi;
