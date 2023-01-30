export default function getStudentsByLocation(array, city, grad) {
  return array
    .filter((x) => x.location === city)
    .map((student) => {
      const gradeI = grad
	.filter((x) => x.studentId === student.id)
	.map((i) => i.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
