function mergeSort(array, animationSpeed) {
  if (array.length <= 1) return array;

  const animations = [];
  const auxiliaryArray = array.slice();
  mergeSortAlgorithm(array, 0, array.length - 1, auxiliaryArray, animations);

  drawAnimation(animations, animationSpeed);

  return array;
}

function mergeSortAlgorithm(numsArray, start, end, auxiliaryArray, animations) {
  if (start === end) return;

  const middle = Math.floor(start + (end - start) / 2);
  mergeSortAlgorithm(auxiliaryArray, start, middle, numsArray, animations);
  mergeSortAlgorithm(auxiliaryArray, middle + 1, end, numsArray, animations);
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

function drawAnimation(animations, animationSpeed) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const colourChange = i % 3 !== 2;
    if (colourChange) {
      const [firstBarIndex, secondBarIndex] = animations[i];
      const firstBarStyle = arrayBars[firstBarIndex].style;
      const secondBarStyle = arrayBars[secondBarIndex].style;
      const colour = i % 3 === 0 ? 'red' : 'black';
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

export default mergeSort;
