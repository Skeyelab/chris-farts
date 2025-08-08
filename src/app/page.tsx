'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [catPosition, setCatPosition] = useState({ x: 50, y: 50 });
  const [catVelocity, setCatVelocity] = useState({ x: 3, y: 2 });
  const [catRotation, setCatRotation] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  // Bouncing cat animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCatPosition(prev => {
        let newX = prev.x + catVelocity.x;
        let newY = prev.y + catVelocity.y;
        let newVelX = catVelocity.x;
        let newVelY = catVelocity.y;

        // Bounce off walls
        if (newX <= 0 || newX >= window.innerWidth - 100) {
          newVelX = -newVelX;
          newX = newX <= 0 ? 0 : window.innerWidth - 100;
          // Add some rotation when bouncing
          setCatRotation(prev => prev + 180);
        }
        if (newY <= 0 || newY >= window.innerHeight - 100) {
          newVelY = -newVelY;
          newY = newY <= 0 ? 0 : window.innerHeight - 100;
          // Add some rotation when bouncing
          setCatRotation(prev => prev + 180);
        }

        setCatVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [catVelocity]);

  // Flashing text animation
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setIsFlashing(prev => !prev);
    }, 500);

    return () => clearInterval(flashInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden relative">
      {/* Bouncing Cat */}
      <div
        className="fixed text-6xl z-10 transition-all duration-50 ease-linear animate-bounce-custom"
        style={{
          left: `${catPosition.x}px`,
          top: `${catPosition.y}px`,
          transform: `rotate(${catRotation}deg)`,
        }}
      >
        🐱
      </div>

      {/* Flashing "hi chris" text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1
          className={`text-8xl font-bold text-white drop-shadow-2xl transition-all duration-300 ${
            isFlashing
              ? 'scale-110 text-yellow-300 animate-pulse'
              : 'scale-100 text-white'
          }`}
          style={{
            textShadow: isFlashing
              ? '0 0 20px #fbbf24, 0 0 40px #f59e0b'
              : '0 0 10px rgba(255,255,255,0.5)'
          }}
        >
          hi chris
        </h1>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {['🌟', '✨', '💫', '⭐'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-3xl opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Fun subtitle */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold opacity-80 animate-rainbow">
        🎉 Welcome to the fun zone! 🎉
      </div>

      {/* Additional fun elements */}
      <div className="absolute top-10 right-10 text-white text-2xl animate-bounce">
        🎈
      </div>
      <div className="absolute top-20 left-10 text-white text-2xl animate-bounce" style={{ animationDelay: '1s' }}>
        🎪
      </div>
    </div>
  );
}
