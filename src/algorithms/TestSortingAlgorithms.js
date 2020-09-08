function testSortingAlgorithms(originalArray, sortedArray) {
  const jsSortedArray = originalArray.slice().sort((a, b) => a - b);
  const areEqual = arraysAreEqual(jsSortedArray, sortedArray);
  if (!areEqual) {
    alert('Sorting algorithm is not returning the correct result.');
  }
  console.log('arraysEqual: ', areEqual);
}

function arraysAreEqual(firstArray, secondArray) {
  if (firstArray == null || secondArray == null) return firstArray === secondArray;
  if (firstArray.length !== secondArray.length) return false;

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }

  return true;
}

export default testSortingAlgorithms;
