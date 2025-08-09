import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import badgeBg from '../assets/45.png';
import './animatedBackground.css'; // your glow + rotate animation

const stats = [
  { end: 1000, suffix: '+', label: 'Trusted Clients' },
  { end: 15, suffix: '+', label: 'Years of Experience' },
  { end: 90, suffix: '%+', label: 'Success Rate' },
  { end: 100, suffix: '%', label: 'Transparency' },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="py-16 text-black" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto flex items-center justify-center"
          >
            {/* Glowing outer aura */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow z-0"></div>

            {/* Rotating background layer */}
            <div
              className="absolute text-red-400 w-full h-full rounded-full z-10 animated-rotate bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${badgeBg})` }}
            ></div>

            {/* Static content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-400 drop-shadow-md">
                {inView && <CountUp end={item.end} duration={2} suffix={item.suffix} />}
              </h2>
              <p className="text-sm sm:text-base mt-2 font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
