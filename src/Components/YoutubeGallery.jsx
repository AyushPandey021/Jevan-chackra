import React, { useRef } from 'react';

const videos = [
  {
    id: 1,
    title: "Ganesh Chaturthi Special Vedic Ritual",
    url: "https://www.youtube.com/embed/jh2LJVDtGIY",
  },
  {
    id: 2,
    title: "Ganpati Bappa Remove All Obstacles",
    url: "https://www.youtube.com/embed/Q1soJLmfxJU",
  },
  {
    id: 3,
    title: "Ganesha Knot Manifestation Process",
    url: "https://www.youtube.com/embed/pOyPo18ymyA",
  },
  {
    id: 4,
    title: "Swastik Symbol of Well-Being",
    url: "https://www.youtube.com/embed/fzreyz-zWRs",
  },
];

const VideoCard = ({ title, url }) => {
  const iframeRef = useRef(null);

  const handleMouseEnter = () => {
    const iframe = iframeRef.current;
    // Only add autoplay if not already added
    if (!iframe.src.includes("autoplay=1")) {
      iframe.src = `${url}?autoplay=1&mute=1`;
    }
  };

  const handleMouseLeave = () => {
    const iframe = iframeRef.current;
    iframe.src = url; // Reset to pause video
  };

  return (
    <div
      className="rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full aspect-video">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};

const YouTubeGallery = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {videos.map((video) => (
        <VideoCard key={video.id} title={video.title} url={video.url} />
      ))}
    </div>
  );
};

export default YouTubeGallery;
