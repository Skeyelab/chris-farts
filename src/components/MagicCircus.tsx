import { useEffect, useState } from 'react';
import { CIRCUS_EMOJI } from '@/constants/animation';

/**
 * Super cool magic circus tent with amazing effects
 */
export const MagicCircus = () => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; color: string }>>([]);
  const [showMagic, setShowMagic] = useState(false);

  // Toggle circus magic
  const handleCircusClick = () => {
    setIsActive(!isActive);
    setShowMagic(true);
    
    // Create magical particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: 50, // Start from circus tent position
      y: 100,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'][Math.floor(Math.random() * 7)]
    }));
    setParticles(newParticles);
    
    // Hide magic effect after 3 seconds
    setTimeout(() => setShowMagic(false), 3000);
  };

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.1, // Gravity
          vx: particle.vx * 0.99, // Air resistance
        })).filter(particle => particle.y < window.innerHeight + 50) // Remove particles that fall off screen
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles.length]);

  return (
    <>
      {/* Magic Circus Tent */}
      <div
        className={`absolute top-20 left-10 text-white text-2xl cursor-pointer transition-all duration-500 ${
          isActive 
            ? 'animate-bounce scale-125 filter brightness-150 drop-shadow-lg' 
            : 'animate-bounce'
        }`}
        style={{ 
          animationDelay: '1s',
          filter: isActive ? 'hue-rotate(180deg) brightness(1.5) drop-shadow(0 0 20px rgba(255,255,255,0.8))' : undefined
        }}
        onClick={handleCircusClick}
        role="button"
        tabIndex={0}
        aria-label="Magic circus tent - click to activate"
        onKeyDown={(e) => e.key === 'Enter' && handleCircusClick()}
      >
        {CIRCUS_EMOJI}
      </div>

      {/* Magic Particles */}
      {showMagic && (
        <div className="absolute inset-0 pointer-events-none z-40">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                backgroundColor: particle.color,
                boxShadow: `0 0 10px ${particle.color}`,
                animation: 'pulse 0.5s ease-in-out infinite alternate',
              }}
            />
          ))}
        </div>
      )}

      {/* Magic Sparkles */}
      {showMagic && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-yellow-300 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      {/* Magic Portal Effect */}
      {showMagic && (
        <div className="absolute top-20 left-10 w-16 h-16 pointer-events-none z-20">
          <div className="w-full h-full border-4 border-purple-400 rounded-full animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-2 border-4 border-pink-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
          <div className="absolute inset-4 border-4 border-blue-400 rounded-full animate-spin" style={{ animationDuration: '1s' }} />
        </div>
      )}

      {/* Magic Text */}
      {showMagic && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold z-50 animate-bounce">
          🎪 MAGIC! 🎪
        </div>
      )}
    </>
  );
}; 