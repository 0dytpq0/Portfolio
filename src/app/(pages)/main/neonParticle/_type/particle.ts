export interface Particle {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  active: boolean;
}

export interface ParticleOptions {
  colors?: string[];
  poolSize?: number;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  spawnRate?: number;
  initialCount?: number;
}
