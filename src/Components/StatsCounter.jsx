import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import badgeBg from '../assets/45.png';
import './animatedBackground.css'; // import the CSS

const stats = [
  { end: 1000, suffix: '+', label: 'Trusted Clients' },
  { end: 15, suffix: '+', label: 'Years of Experience' },
  { end: 90, suffix: '%+', label: 'Success Rate' },
  { end: 100, suffix: '%', label: 'Transparency' },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className=" py-20 bg-[#FDC700] text-white" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="w-48 h-48 relative flex items-center justify-center"
          >
            {/* Glowing outer aura */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow z-0"></div>

            {/* Rotating background layer */}
            <div
              className="absolute text-red-400 w-full h-full rounded-full z-10 animated-rotate bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${badgeBg})` }}
            ></div>

            {/* Static text on top */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
                {inView && <CountUp end={item.end} duration={2} suffix={item.suffix} />}
              </h2>
              <p className="text-base mt-2 font-medium text-white">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
