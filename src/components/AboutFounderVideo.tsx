import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const AboutFounderVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const video = document.getElementById('founderVideo') as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <video
        id="founderVideo"
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3"
      >
        <source 
          src="https://player.vimeo.com/external/459389137.sd.mp4?s=d5491e371826d2279b9c9c185f2d7753df56889f&profile_id=164&oauth2_token_id=57447761" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
      <button
        onClick={toggleVideo}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-6 transition-all"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="h-12 w-12 text-white" />
        ) : (
          <Play className="h-12 w-12 text-white" />
        )}
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-2xl font-semibold mb-2">Our Journey</h3>
        <p className="text-lg">Watch how we've helped transform lives through coaching</p>
      </div>
    </div>
  );
};

export default AboutFounderVideo;