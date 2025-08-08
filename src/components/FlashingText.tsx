interface FlashingTextProps {
  isFlashing: boolean;
  text: string;
}

/**
 * Component for rendering flashing text with glow effects
 * @param isFlashing - Boolean indicating if text should be flashing
 * @param text - Text to display
 */
export const FlashingText = ({ isFlashing, text }: FlashingTextProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <h1
        className={`text-8xl font-bold text-white drop-shadow-2xl transition-all duration-300 ${
          isFlashing
            ? 'scale-110 text-yellow-300 animate-pulse'
            : 'scale-100 text-white'
        }`}
        style={{
          textShadow: isFlashing
            ? '0 0 20px #fbbf24, 0 0 40px #f59e0b'
            : '0 0 10px rgba(255,255,255,0.5)'
        }}
      >
        {text}
      </h1>
    </div>
  );
};
