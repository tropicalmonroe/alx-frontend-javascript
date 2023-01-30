export default function hasValuesFromArray(array, set) {
  return array.every((x) => set.has(x));
}
