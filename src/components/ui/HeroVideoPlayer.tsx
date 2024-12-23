'use client';

import React, { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface HeroVideoPlayerProps {
  videoId: string;
}

const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
      {!isPlaying ? (
        <div className="relative group">
          {/* Thumbnail with gradient overlay */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div>
          
          {/* Play button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative group/btn">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F56565] via-[#6B46C1] to-[#F56565] rounded-full blur opacity-25 group-hover/btn:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
        </div>
      ) : (
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1A202C] rounded-2xl">
              <Loader2 className="w-8 h-8 text-[#F56565] animate-spin" />
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
            title="Hero video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
    </div>
  );
};

export default HeroVideoPlayer; 