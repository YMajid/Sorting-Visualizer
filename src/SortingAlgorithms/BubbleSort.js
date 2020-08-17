function bubbleSortAnimations(array) {
  if (array.length <= 1) return array;

  const animations = [];
  bubbleSort(array, animations);

  return [animations, array];
}

function bubbleSort(numsArray, animations) {
  for (let i = 0; i < numsArray.length; i++) {
    for (let j = i + 1; j < numsArray.length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (numsArray[i] > numsArray[j]) {
        animations.push([i, numsArray[j]]);
        swap(numsArray, i, j);
      } else {
        animations.push([i, numsArray[i]]);
      }
    }
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i, numsArray[i]]);
  }
}

function swap(numsArray, i, j) {
  const temp = numsArray[i];
  numsArray[i] = numsArray[j];
  numsArray[j] = temp;
}

export default bubbleSortAnimations;
