import { AnimationConfig, BackgroundConfig } from '@/types';

export const ANIMATION_CONFIG: AnimationConfig = {
  interval: 50,
  flashInterval: 500,
  catSize: 100,
  rotationAngle: 180,
};

export const BACKGROUND_CONFIG: BackgroundConfig = {
  gradient: 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500',
  decorations: [
    {
      emoji: '🌟',
      count: 20,
      className: 'text-2xl opacity-20 animate-sparkle',
      animationDuration: { min: 2, max: 4 },
      opacity: 0.2,
    },
    {
      emoji: '💖',
      count: 10,
      className: 'text-3xl opacity-30 animate-bounce',
      animationDuration: { min: 3, max: 5 },
      opacity: 0.3,
    },
  ],
};

export const SPARKLE_EMOJIS = ['🌟', '✨', '💫', '⭐'];

export const CAT_EMOJI = '🐱';
export const HEART_EMOJI = '💖';
export const BALLOON_EMOJI = '🎈';
export const CIRCUS_EMOJI = '🎪';
