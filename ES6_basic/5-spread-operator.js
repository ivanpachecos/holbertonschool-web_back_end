export default function concatArrays(array1, array2, string) {
  const arrString = string.split('');
  const arr = [...array1, ...array2, ...arrString];
  return arr;
}
