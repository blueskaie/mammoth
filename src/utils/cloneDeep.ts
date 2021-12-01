export default function cloneDeep(data: any) {
  return JSON.parse(JSON.stringify(data));
}
