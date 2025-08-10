import { ArrowUp } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow motion
    }
  }, []);

  return (
    <footer className="relative py-12 px-4 bg-card border-2 border-primary mt-12 pt-8 flex flex-wrap justify-between items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/binarywaterfall.mp4"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0  backdrop-blur-xs bg-black/80 z-0" />

      {/* Footer Content */}
      <div className="relative z-10 w-full flex flex-wrap justify-between items-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} WalterMatsinhe.co, All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
