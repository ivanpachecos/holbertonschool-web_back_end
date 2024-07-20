export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx of array) {
    const value = array[idx];
    result.push(appendString + value);
  }

  return result;
}
