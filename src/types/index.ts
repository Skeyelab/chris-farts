export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface AnimationConfig {
  interval: number;
  flashInterval: number;
  catSize: number;
  rotationAngle: number;
}

export interface DecorationItem {
  emoji: string;
  count: number;
  className: string;
  animationDuration: {
    min: number;
    max: number;
  };
  opacity: number;
}

export interface BackgroundConfig {
  gradient: string;
  decorations: DecorationItem[];
}
