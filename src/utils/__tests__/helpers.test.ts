import {
  getRandomNumber,
  getRandomPercentage,
  getRandomDelay,
  getRandomDuration,
  getRandomItem,
  isBrowser,
  getWindowDimensions,
} from '../helpers';

describe('Utility Helper Functions', () => {
  describe('getRandomNumber', () => {
    it('should return a number between min and max', () => {
      const result = getRandomNumber(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThan(10);
    });

    it('should handle negative numbers', () => {
      const result = getRandomNumber(-5, 5);
      expect(result).toBeGreaterThanOrEqual(-5);
      expect(result).toBeLessThan(5);
    });
  });

  describe('getRandomPercentage', () => {
    it('should return a number between 0 and 100', () => {
      const result = getRandomPercentage();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(100);
    });
  });

  describe('getRandomDelay', () => {
    it('should return a number between 0 and maxDelay', () => {
      const result = getRandomDelay(5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(5);
    });

    it('should use default maxDelay of 2', () => {
      const result = getRandomDelay();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(2);
    });
  });

  describe('getRandomDuration', () => {
    it('should return a number between min and max', () => {
      const result = getRandomDuration(1, 5);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThan(5);
    });
  });

  describe('getRandomItem', () => {
    it('should return a random item from array', () => {
      const array = ['a', 'b', 'c'];
      const result = getRandomItem(array);
      expect(array).toContain(result);
    });

    it('should handle empty array', () => {
      const array: string[] = [];
      expect(() => getRandomItem(array)).toThrow();
    });
  });

  describe('isBrowser', () => {
    it('should return true in browser environment', () => {
      expect(isBrowser()).toBe(true);
    });
  });

  describe('getWindowDimensions', () => {
    beforeEach(() => {
      // Mock window dimensions
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 1080,
      });
    });

    it('should return window dimensions', () => {
      const result = getWindowDimensions();
      expect(result).toEqual({
        width: 1920,
        height: 1080,
      });
    });
  });
});
