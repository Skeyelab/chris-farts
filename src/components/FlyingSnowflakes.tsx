import { useEffect, useState } from 'react';
import { Position, Velocity } from '@/types';
import { SPARKLE_EMOJIS } from '@/constants/animation';
import { getWindowDimensions, isBrowser, getRandomItem } from '@/utils/helpers';

interface FlyingSnowflake {
  id: number;
  position: Position;
  velocity: Velocity;
  size: number;
  opacity: number;
  emoji: string;
  rotation: number;
  rotationSpeed: number;
}

/**
 * Component for snowflakes that fly around the screen with physics
 */
export const FlyingSnowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<FlyingSnowflake[]>([]);

  // Initialize snowflakes
  useEffect(() => {
    if (!isBrowser()) return;

    const initialSnowflakes: FlyingSnowflake[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: {
        x: Math.random() * (window.innerWidth - 30),
        y: Math.random() * (window.innerHeight - 30),
      },
      velocity: {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5,
      },
      size: Math.random() * 15 + 15, // 15-30px
      opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6
      emoji: getRandomItem(SPARKLE_EMOJIS),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4, // -2 to 2 degrees per frame
    }));

    setSnowflakes(initialSnowflakes);
  }, []);

  // Animate snowflakes
  useEffect(() => {
    if (!isBrowser() || snowflakes.length === 0) return;

    const interval = setInterval(() => {
      setSnowflakes(prevSnowflakes =>
        prevSnowflakes.map(snowflake => {
          const dimensions = getWindowDimensions();
          if (!dimensions) return snowflake;

          let newX = snowflake.position.x + snowflake.velocity.x;
          let newY = snowflake.position.y + snowflake.velocity.y;
          let newVelX = snowflake.velocity.x;
          let newVelY = snowflake.velocity.y;

          // Bounce off walls
          if (newX <= 0 || newX >= dimensions.width - snowflake.size) {
            newVelX = -newVelX;
            newX = newX <= 0 ? 0 : dimensions.width - snowflake.size;
          }

          if (newY <= 0 || newY >= dimensions.height - snowflake.size) {
            newVelY = -newVelY;
            newY = newY <= 0 ? 0 : dimensions.height - snowflake.size;
          }

          // Add gentle gravity effect
          newVelY += 0.01;

          // Add some air resistance
          newVelX *= 0.998;
          newVelY *= 0.998;

          // Update rotation
          const newRotation = snowflake.rotation + snowflake.rotationSpeed;

          return {
            ...snowflake,
            position: { x: newX, y: newY },
            velocity: { x: newVelX, y: newVelY },
            rotation: newRotation,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [snowflakes.length]);

  return (
    <div className="absolute inset-0 pointer-events-none z-15">
      {snowflakes.map(snowflake => (
        <div
          key={snowflake.id}
          className="absolute transition-all duration-50 ease-linear"
          style={{
            left: `${snowflake.position.x}px`,
            top: `${snowflake.position.y}px`,
            fontSize: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            transform: `rotate(${snowflake.rotation}deg)`,
          }}
        >
          {snowflake.emoji}
        </div>
      ))}
    </div>
  );
};
