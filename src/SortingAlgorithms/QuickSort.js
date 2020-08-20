import swap from './Swap';

function quickSortAnimation(array) {
  if (array.length <= 1) return array;

  const animations = [];
  quickSort(array, 0, array.length - 1, animations);

  return [animations, array];
}

function quickSort(numsArray, start, end, animations) {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    animations.push([left, right]);
    animations.push([left, right]);
    if (numsArray[pivot] > numsArray[right] && numsArray[left] > numsArray[pivot]) {
      animations.push([left, numsArray[right]]);
      animations.push([right, numsArray[left]]);
      swap(numsArray, left, right);
    } else {
      animations.push([left, numsArray[left]]);
      animations.push([right, numsArray[right]]);
    }
    if (numsArray[left] <= numsArray[pivot]) left++;
    if (numsArray[right] >= numsArray[pivot]) right--;
  }

  if (pivot !== right) {
    animations.push([pivot, right]);
    animations.push([pivot, right]);
    animations.push([right, numsArray[pivot]]);
    animations.push([pivot, numsArray[right]]);
    swap(numsArray, pivot, right);
  }

  quickSort(numsArray, start, right - 1, animations);
  quickSort(numsArray, right + 1, end, animations);
}

export default quickSortAnimation;
