function mergeSortAnimation(array) {
  if (array.length <= 1) return array;

  const animations = [];
  const auxiliaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);

  return animations;
}

function mergeSort(numsArray, start, end, auxiliaryArray, animations) {
  if (start === end) return;

  const middle = Math.floor(start + (end - start) / 2);
  mergeSort(auxiliaryArray, start, middle, numsArray, animations);
  mergeSort(auxiliaryArray, middle + 1, end, numsArray, animations);
  merge(numsArray, start, middle, end, auxiliaryArray, animations);
}

function merge(numsArray, start, middle, end, auxiliaryArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;

  while (i <= middle && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      numsArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      numsArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middle) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    numsArray[k++] = auxiliaryArray[i++];
  }

  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    numsArray[k++] = auxiliaryArray[j++];
  }
}

export default mergeSortAnimation;
