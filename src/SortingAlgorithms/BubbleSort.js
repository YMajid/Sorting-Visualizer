import swap from './Swap';

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
        animations.push([j, numsArray[i]]);
        swap(numsArray, i, j);
      } else {
        animations.push([i, numsArray[i]]);
        animations.push([j, numsArray[j]]);
      }
    }
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i, numsArray[i]]);
    animations.push([i, numsArray[i]]);
  }
}

export default bubbleSortAnimations;
