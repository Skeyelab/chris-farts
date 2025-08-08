import { DecorationItem } from '@/types';
import { SPARKLE_EMOJIS } from '@/constants/animation';
import { getRandomPercentage, getRandomDelay, getRandomDuration, getRandomItem } from '@/utils/helpers';

interface BackgroundDecorationsProps {
  decorations: DecorationItem[];
}

/**
 * Component for rendering background decorations
 * @param decorations - Array of decoration items to render
 */
export const BackgroundDecorations = ({ decorations }: BackgroundDecorationsProps) => {
  return (
    <>
      {decorations.map((decoration, decorationIndex) => (
        <div key={`decoration-${decorationIndex}`} className="absolute inset-0 pointer-events-none">
          {[...Array(decoration.count)].map((_, i) => {
            const randomEmoji = decoration.emoji === '🌟'
              ? getRandomItem(SPARKLE_EMOJIS)
              : decoration.emoji;

            return (
              <div
                key={`${decorationIndex}-${i}`}
                className={decoration.className}
                style={{
                  left: `${getRandomPercentage()}%`,
                  top: `${getRandomPercentage()}%`,
                  animationDelay: `${getRandomDelay()}s`,
                  animationDuration: `${getRandomDuration(
                    decoration.animationDuration.min,
                    decoration.animationDuration.max
                  )}s`
                }}
              >
                {randomEmoji}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};
