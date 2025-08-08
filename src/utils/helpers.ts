/**
 * Utility functions for the Chris Farts website
 */

/**
 * Generates a random number between min and max
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random number between min and max
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Generates a random percentage for positioning
 * @returns Random percentage between 0 and 100
 */
export const getRandomPercentage = (): number => {
  return Math.random() * 100;
};

/**
 * Generates a random animation delay
 * @param maxDelay - Maximum delay in seconds
 * @returns Random delay in seconds
 */
export const getRandomDelay = (maxDelay: number = 2): number => {
  return Math.random() * maxDelay;
};

/**
 * Generates a random animation duration
 * @param min - Minimum duration in seconds
 * @param max - Maximum duration in seconds
 * @returns Random duration in seconds
 */
export const getRandomDuration = (min: number, max: number): number => {
  return min + Math.random() * (max - min);
};

/**
 * Picks a random item from an array
 * @param array - Array to pick from
 * @returns Random item from the array
 */
export const getRandomItem = <T>(array: T[]): T => {
  if (!array || array.length === 0) {
    throw new Error('Cannot pick random item from empty or undefined array');
  }
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Checks if the code is running in the browser
 * @returns True if running in browser, false otherwise
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Safely gets window dimensions
 * @returns Object with width and height, or null if not in browser
 */
export const getWindowDimensions = (): { width: number; height: number } | null => {
  if (!isBrowser()) return null;

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};
