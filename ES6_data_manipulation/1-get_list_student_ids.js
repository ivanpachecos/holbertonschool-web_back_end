export default function getListStudentsIds(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.map((studentsId) => studentsId.id);
}
