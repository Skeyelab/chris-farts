import { BALLOON_EMOJI, CIRCUS_EMOJI } from '@/constants/animation';

/**
 * Component for rendering fun decorative elements
 */
export const FunElements = () => {
  return (
    <>
      {/* Fun subtitle */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold opacity-80 animate-rainbow">
        🎉 Welcome to the fun zone! 🎉
      </div>

      {/* Additional fun elements */}
      <div className="absolute top-10 right-10 text-white text-2xl animate-bounce">
        {BALLOON_EMOJI}
      </div>
      <div
        className="absolute top-20 left-10 text-white text-2xl animate-bounce"
        style={{ animationDelay: '1s' }}
      >
        {CIRCUS_EMOJI}
      </div>
    </>
  );
};
