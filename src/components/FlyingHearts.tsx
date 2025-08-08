import { useEffect, useState } from 'react';
import { Position, Velocity } from '@/types';
import { HEART_EMOJI } from '@/constants/animation';
import { getWindowDimensions, isBrowser } from '@/utils/helpers';

interface FlyingHeart {
  id: number;
  position: Position;
  velocity: Velocity;
  size: number;
  opacity: number;
}

/**
 * Component for hearts that fly around the screen with physics
 */
export const FlyingHearts = () => {
  const [hearts, setHearts] = useState<FlyingHeart[]>([]);

  // Initialize hearts
  useEffect(() => {
    if (!isBrowser()) return;

    const initialHearts: FlyingHeart[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: {
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 50),
      },
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
      size: Math.random() * 20 + 20, // 20-40px
      opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
    }));

    setHearts(initialHearts);
  }, []);

  // Animate hearts
  useEffect(() => {
    if (!isBrowser() || hearts.length === 0) return;

    const interval = setInterval(() => {
      setHearts(prevHearts => 
        prevHearts.map(heart => {
          const dimensions = getWindowDimensions();
          if (!dimensions) return heart;

          let newX = heart.position.x + heart.velocity.x;
          let newY = heart.position.y + heart.velocity.y;
          let newVelX = heart.velocity.x;
          let newVelY = heart.velocity.y;

          // Bounce off walls
          if (newX <= 0 || newX >= dimensions.width - heart.size) {
            newVelX = -newVelX;
            newX = newX <= 0 ? 0 : dimensions.width - heart.size;
          }
          
          if (newY <= 0 || newY >= dimensions.height - heart.size) {
            newVelY = -newVelY;
            newY = newY <= 0 ? 0 : dimensions.height - heart.size;
          }

          // Add some gravity effect
          newVelY += 0.02;

          // Add some air resistance
          newVelX *= 0.999;
          newVelY *= 0.999;

          return {
            ...heart,
            position: { x: newX, y: newY },
            velocity: { x: newVelX, y: newVelY },
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [hearts.length]);

  return (
    <div className="absolute inset-0 pointer-events-none z-15">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute transition-all duration-50 ease-linear"
          style={{
            left: `${heart.position.x}px`,
            top: `${heart.position.y}px`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            transform: `rotate(${heart.velocity.x * 10}deg)`,
          }}
        >
          {HEART_EMOJI}
        </div>
      ))}
    </div>
  );
}; 