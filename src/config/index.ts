/**
 * Application configuration
 */

export const CONFIG = {
  // Feature flags
  features: {
    enableAnimations: true,
    enableSound: false, // Future feature
    enableInteractions: true,
  },

  // Performance settings
  performance: {
    maxDecorations: 30,
    animationThrottle: 50,
    enableOptimizations: true,
  },

  // Accessibility settings
  accessibility: {
    enableReducedMotion: true,
    enableHighContrast: false,
    enableScreenReader: true,
  },

  // Development settings
  development: {
    enableDebugMode: process.env.NODE_ENV === 'development',
    enablePerformanceMonitoring: process.env.NODE_ENV === 'development',
  },
} as const;

/**
 * Get configuration value with fallback
 * @param path - Dot-separated path to config value
 * @param fallback - Fallback value if not found
 * @returns Configuration value or fallback
 */
export const getConfig = <T>(path: string, fallback: T): T => {
  const keys = path.split('.');
  let value: unknown = CONFIG;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return fallback;
    }
  }

  return value as T;
};
