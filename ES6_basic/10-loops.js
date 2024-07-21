export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const index of array) {
    result.push(appendString + index);
  }

  return result;
}
