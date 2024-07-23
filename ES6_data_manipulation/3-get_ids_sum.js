export default function getStudentIdsSum(studentsList) {
  const initialCount = 0;
  // get id using mapping
  const allListId = studentsList.map((students) => students.id);
  return allListId.reduce((acc, cur) => acc + cur, initialCount);
}
