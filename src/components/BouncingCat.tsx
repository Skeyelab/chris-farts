import { Position } from '@/types';
import { CAT_EMOJI } from '@/constants/animation';

interface BouncingCatProps {
  position: Position;
  rotation: number;
}

/**
 * Component for rendering the bouncing cat emoji
 * @param position - Current position of the cat
 * @param rotation - Current rotation angle of the cat
 */
export const BouncingCat = ({ position, rotation }: BouncingCatProps) => {
  return (
    <div
      className="fixed text-6xl z-10 transition-all duration-50 ease-linear animate-bounce-custom"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
      role="img"
      aria-label="Bouncing cat emoji"
    >
      {CAT_EMOJI}
    </div>
  );
};
