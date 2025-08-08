'use client';

import {
  ErrorBoundary,
  BouncingCat,
  FlashingText,
  FunElements,
  GitHubLink,
  FlyingHearts,
  FlyingSnowflakes
} from '@/components';
import { useBouncingCat, useFlashingText } from '@/hooks';
import { BACKGROUND_CONFIG } from '@/constants/animation';

/**
 * Main page component featuring a bouncing cat and flashing text
 * Uses modular components and custom hooks for better maintainability
 */
export default function Home() {
  const { catPosition, catRotation } = useBouncingCat();
  const isFlashing = useFlashingText();

  return (
    <ErrorBoundary>
      <div className={`min-h-screen ${BACKGROUND_CONFIG.gradient} overflow-hidden relative`}>
        <GitHubLink />

        <BouncingCat position={catPosition} rotation={catRotation} />

        <FlashingText isFlashing={isFlashing} text="hi chris" />

        <FlyingSnowflakes />

        <FlyingHearts />

        <FunElements />
      </div>
    </ErrorBoundary>
  );
}
