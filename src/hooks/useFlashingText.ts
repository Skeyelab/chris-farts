import { useEffect, useState } from 'react';
import { ANIMATION_CONFIG } from '@/constants/animation';

/**
 * Custom hook for managing flashing text animation
 * @returns Boolean indicating if text should be flashing
 */
export const useFlashingText = (): boolean => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const flashInterval = setInterval(() => {
      setIsFlashing(prev => !prev);
    }, ANIMATION_CONFIG.flashInterval);

    return () => clearInterval(flashInterval);
  }, []);

  return isFlashing;
};
