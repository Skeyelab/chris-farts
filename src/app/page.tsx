'use client';

import {
  ErrorBoundary,
  BouncingCat,
  FlashingText,
  BackgroundDecorations,
  FunElements
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
        <BouncingCat position={catPosition} rotation={catRotation} />

        <FlashingText isFlashing={isFlashing} text="hi chris" />

        <BackgroundDecorations decorations={BACKGROUND_CONFIG.decorations} />

        <FunElements />
      </div>
    </ErrorBoundary>
  );
}
