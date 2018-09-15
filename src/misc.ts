export const strokeColors = [
  '#f33',
  '#090',
  '#36f',
  '#fff',
  '#333',
];
export const defaultStrokeColors = strokeColors[4];
export const strokeWidths = [
  2,
  5,
  10,
];
export const defaultStrokeWidth = strokeWidths[1];
export type unixMs = number; // e.g. Date.now()
export type AnimationFrameId = number; // requestAnimationFrame()
export interface IPos {
  x: number;
  y: number;
}
export interface ISize {
  height: number;
  width: number;
}
export const appSpace = 16; // index.css
export function between (min: number, n: number, max: number) {
  if (min > max) {
    throw new Error(`Contradictory numbers: min ${min} must be`
      + ` less than or equal to max ${max}`);
  }
  return Math.max(min, Math.min(n, max));
}
