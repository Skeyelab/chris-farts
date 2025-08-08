import { useEffect, useState } from 'react';
import { Position, Velocity } from '@/types';
import { ANIMATION_CONFIG } from '@/constants/animation';
import { getWindowDimensions, isBrowser } from '@/utils/helpers';

/**
 * Custom hook for managing bouncing cat animation
 * @returns Object containing cat position, velocity, rotation, and update functions
 */
export const useBouncingCat = () => {
  const [catPosition, setCatPosition] = useState<Position>({ x: 50, y: 50 });
  const [catVelocity, setCatVelocity] = useState<Velocity>({ x: 3, y: 2 });
  const [catRotation, setCatRotation] = useState(0);

  useEffect(() => {
    // Only run in browser environment
    if (!isBrowser()) return;

    const interval = setInterval(() => {
      setCatPosition(prev => {
        const dimensions = getWindowDimensions();
        if (!dimensions) return prev;

        let newX = prev.x + catVelocity.x;
        let newY = prev.y + catVelocity.y;
        let newVelX = catVelocity.x;
        let newVelY = catVelocity.y;

        // Bounce off walls
        if (newX <= 0 || newX >= dimensions.width - ANIMATION_CONFIG.catSize) {
          newVelX = -newVelX;
          newX = newX <= 0 ? 0 : dimensions.width - ANIMATION_CONFIG.catSize;
          setCatRotation(prev => prev + ANIMATION_CONFIG.rotationAngle);
        }

        if (newY <= 0 || newY >= dimensions.height - ANIMATION_CONFIG.catSize) {
          newVelY = -newVelY;
          newY = newY <= 0 ? 0 : dimensions.height - ANIMATION_CONFIG.catSize;
          setCatRotation(prev => prev + ANIMATION_CONFIG.rotationAngle);
        }

        setCatVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, ANIMATION_CONFIG.interval);

    return () => clearInterval(interval);
  }, [catVelocity]);

  return {
    catPosition,
    catVelocity,
    catRotation,
  };
};
