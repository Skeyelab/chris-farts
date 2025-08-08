import { Position } from '@/types';
import { CAT_EMOJI } from '@/constants/animation';

interface BouncingCatProps {
  position: Position;
  rotation: number;
  velocity?: { x: number; y: number };
}

/**
 * Component for rendering the bouncing cat emoji
 * @param position - Current position of the cat
 * @param rotation - Current rotation angle of the cat
 * @param velocity - Current velocity of the cat (optional)
 */
export const BouncingCat = ({ position, rotation, velocity }: BouncingCatProps) => {
  // Calculate if cat is moving fast (chasing)
  const speed = velocity ? Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y) : 0;
  const isChasing = speed > 3;

  return (
    <div
      className={`fixed text-6xl z-10 transition-all duration-50 ease-linear animate-bounce-custom ${
        isChasing ? 'scale-110 filter brightness-110' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
      role="img"
      aria-label={`Bouncing cat emoji ${isChasing ? 'chasing mouse' : ''}`}
    >
      {CAT_EMOJI}
    </div>
  );
};
