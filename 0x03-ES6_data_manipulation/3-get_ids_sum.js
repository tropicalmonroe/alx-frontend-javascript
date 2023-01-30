export default function getStudentIdsSum(array) {
  return array.reduce((addd, x) => addd + x.id, 0);
}
