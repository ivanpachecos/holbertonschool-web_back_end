export default function createEmployeesObject(departamentName, employees) {
  const obj = {};
  obj[departamentName] = employees;
  return obj;
}
