export default function numberFormat(n: string | number, d = 3) {
  return Number(Number(n).toFixed(d));
}
