export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  set.forEach((x) => {
    if (i && i.startsWith(startString)) result += `${i.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}
