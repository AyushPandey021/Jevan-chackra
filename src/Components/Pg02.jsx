import React from 'react';
import jivanVideo from '../assets/jivan-pg2-vid.mp4';

const Pg02 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 bg-[#EAC3D0] p-4 md:p-8 gap-8">
      
      {/* Video Box - Fixed size, responsive on small screens */}
      <div className="w-full md:w-1/2 flex justify-center">
        <video
          src={jivanVideo}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-full object-contain shadow-xl w-[450px] max-w-[80vw] h-auto"
        />
      </div>

      {/* Text Box - Responsive font sizes */}
      <div className="w-full md:w-1/2 text-center space-y-3 md:space-y-4 px-2 md:px-6">
        <h2 className="text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Who Are We.
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Jevan Chakra:
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800">
          Cycle of Life is a spiritual wellness company devoted to helping individuals find inner peace,
          self-discovery, and holistic well-being.
          We offer a wide spectrum of personalized spiritual services, including 
          <strong> Astro-Numerology, Tarot Consultancy, Spiritual Healing, Lama Fera, Angel Healing,
          Crystal Therapy, Tapping Therapy, Humkara with Haleem,</strong> and 
          <strong> Reiki Healing</strong>. Each service is designed to guide you on your unique journey
          toward balance, clarity, and transformation.
        </p>
      </div>
    </div>
  );
};

export default Pg02;
