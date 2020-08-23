import swap from './Swap';

function quickSort(array, animationSpeed) {
  if (array.length <= 1) return array;

  const animations = [];
  quickSortAlgorithm(array, 0, array.length - 1, animations);

  drawAnimation(animations, animationSpeed);

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

  quickSortAlgorithm(numsArray, start, right - 1, animations);
  quickSortAlgorithm(numsArray, right + 1, end, animations);
}

function drawAnimation(animations, animationSpeed) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const colourChange = i % 4 < 2;
    if (colourChange) {
      const [firstBarIndex, secondBarIndex] = animations[i];
      const firstBarStyle = arrayBars[firstBarIndex].style;
      const secondBarStyle = arrayBars[secondBarIndex].style;
      const colour = i % 4 === 0 ? 'red' : 'black';
      setTimeout(() => {
        firstBarStyle.backgroundColor = colour;
        secondBarStyle.backgroundColor = colour;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const [firstBarIndex, newHeight] = animations[i];
        const firstBarStyle = arrayBars[firstBarIndex].style;
        firstBarStyle.height = `${newHeight}px`;
      }, i * animationSpeed);
    }
  }
}

export default quickSort;
