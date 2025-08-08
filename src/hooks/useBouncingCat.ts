import { useEffect, useState } from 'react';
import { Position, Velocity } from '@/types';
import { ANIMATION_CONFIG } from '@/constants/animation';
import { getWindowDimensions, isBrowser } from '@/utils/helpers';

/**
 * Custom hook for managing bouncing cat animation with mouse avoidance
 * @returns Object containing cat position, velocity, rotation, and update functions
 */
export const useBouncingCat = () => {
  const [catPosition, setCatPosition] = useState<Position>({ x: 50, y: 50 });
  const [catVelocity, setCatVelocity] = useState<Velocity>({ x: 3, y: 2 });
  const [catRotation, setCatRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    if (!isBrowser()) return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Bouncing cat animation with mouse avoidance
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

        // Calculate distance from mouse
        const distanceFromMouse = Math.sqrt(
          Math.pow(prev.x - mousePosition.x, 2) + Math.pow(prev.y - mousePosition.y, 2)
        );

        // Mouse avoidance behavior
        const avoidanceRadius = 150; // Distance at which cat starts avoiding mouse
        if (distanceFromMouse < avoidanceRadius) {
          // Calculate direction away from mouse
          const dx = prev.x - mousePosition.x;
          const dy = prev.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 0) {
            // Normalize and apply avoidance force
            const avoidanceForce = (avoidanceRadius - distance) / avoidanceRadius;
            const normalizedDx = dx / distance;
            const normalizedDy = dy / distance;
            
            // Add avoidance velocity
            newVelX += normalizedDx * avoidanceForce * 2;
            newVelY += normalizedDy * avoidanceForce * 2;
          }
        }

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

        // Add some air resistance to prevent excessive speed
        newVelX *= 0.95;
        newVelY *= 0.95;

        // Limit maximum velocity
        const maxVelocity = 8;
        newVelX = Math.max(-maxVelocity, Math.min(maxVelocity, newVelX));
        newVelY = Math.max(-maxVelocity, Math.min(maxVelocity, newVelY));

        setCatVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, ANIMATION_CONFIG.interval);

    return () => clearInterval(interval);
  }, [catVelocity, mousePosition]);

  return {
    catPosition,
    catVelocity,
    catRotation,
  };
};
