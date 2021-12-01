export default function minmax(val: any, min: number = Number.MIN_VALUE, max: number = Number.MAX_VALUE) {
  return Math.min(Math.max(val, min), max);
}
