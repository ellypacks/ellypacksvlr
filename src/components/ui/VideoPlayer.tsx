'use client';

import React, { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className="relative aspect-video w-full bg-[#1A202C] overflow-hidden group">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group/btn"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F56565] via-[#6B46C1] to-[#F56565] rounded-full blur opacity-25 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-[#F56565] hover:bg-[#E53E3E] w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1A202C]">
              <Loader2 className="w-8 h-8 text-[#F56565] animate-spin" />
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 