const getStudentsByLocation = (listStudents, city) => {
  const result = listStudents.filter((student) => student.location === city);
  return result;
};

export default getStudentsByLocation;
