import React from 'react';
import jivanVideo from '../assets/jivan-pg2-vid.mp4';

const Pg02 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 bg-yellow-400 p-6 gap-10">
      {/* Video Box */}
      <div className="w-full md:w-1/2 flex justify-center">
        <video
          src={jivanVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-[80%] rounded-full object-contain shadow-xl"
        />
      </div>

      {/* Text Box */}
      <div className="w-full md:w-1/2 text-center space-y-4 px-4">
        <h2 className="text-green-700 text-3xl font-bold">Who Are We.</h2>
        <h1 className="text-4xl md:text-4xl font-semibold">Jevan Chakra:</h1>
        <p className="text-2xl md:text-lg leading-relaxed text-gray-800">
          Cycle of Life is a spiritual wellness company devoted to helping individuals find inner peace, self-discovery, and holistic well-being. We offer a wide spectrum of personalized spiritual services, including <strong>Astro-Numerology, Tarot Consultancy, Spiritual Healing, Lama Fera, Angel Healing, Crystal Therapy, Tapping Therapy, Humkara with Haleem,</strong> and <strong>Reiki Healing</strong>. Each service is designed to guide you on your unique journey toward balance, clarity, and transformation.
        </p>
      </div>
    </div>
  );
};

export default Pg02;
