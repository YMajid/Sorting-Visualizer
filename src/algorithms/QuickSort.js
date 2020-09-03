import swap from './Swap';

function quickSort(array, animationSpeed, barsColour, pivotColour, selectionColour, sortedColour) {
  if (array.length <= 1) return array;

  const animations = [];
  quickSortAlgorithm(array, 0, array.length - 1, animations);

  drawAnimation(animations, animationSpeed, barsColour, pivotColour, selectionColour, sortedColour);

  return array;
}

function quickSortAlgorithm(numsArray, start, end, animations) {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    animations.push([pivot, left, right]);
    animations.push([pivot, left, right]);
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
    animations.push([pivot, pivot, right]);
    animations.push([pivot, pivot, right]);
    animations.push([right, numsArray[pivot]]);
    animations.push([pivot, numsArray[right]]);
    swap(numsArray, pivot, right);
  }

  quickSortAlgorithm(numsArray, start, right - 1, animations);
  quickSortAlgorithm(numsArray, right + 1, end, animations);
}

function drawAnimation(
  animations,
  animationSpeed,
  barsColour,
  pivotColour,
  selectionColour,
  sortedColour
) {
  var previousPivotIndex = 0;
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    const colourChange = i % 4 < 2;
    if (colourChange) {
      const [pivotBarIndex, firstBarIndex, secondBarIndex] = animations[i];
      const pivotBarStyle = arrayBars[pivotBarIndex].style;
      const firstBarStyle = arrayBars[firstBarIndex].style;
      const secondBarStyle = arrayBars[secondBarIndex].style;
      const colour = i % 4 === 0 ? selectionColour : barsColour;
      setTimeout(() => {
        if (pivotBarIndex !== previousPivotIndex) {
          updatePivotColour(arrayBars, previousPivotIndex, pivotBarIndex, sortedColour);
          previousPivotIndex = pivotBarIndex;
        } else {
          pivotBarStyle.backgroundColor = pivotColour;
          firstBarStyle.backgroundColor = colour;
          secondBarStyle.backgroundColor = colour;
        }
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        if (i === animations.length - 1) {
          updatePivotColour(arrayBars, 0, arrayBars.length, sortedColour);
        }
        const [firstBarIndex, newHeight] = animations[i];
        const firstBarStyle = arrayBars[firstBarIndex].style;
        firstBarStyle.height = `${newHeight}px`;
      }, i * animationSpeed);
    }
  }
}

function updatePivotColour(arrayBars, previousPivot, currentPivot, sortedColour) {
  for (let i = previousPivot; i < currentPivot; i++) {
    const previousPivotStyle = arrayBars[i].style;
    previousPivotStyle.backgroundColor = sortedColour;
  }
}

export default quickSort;
