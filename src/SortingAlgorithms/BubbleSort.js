import swap from './Swap';

function bubbleSort(array, animationSpeed) {
  if (array.length <= 1) return array;

  const animations = [];
  bubbleSortAlgorithm(array, animations);

  drawAnimation(animations, animationSpeed);

  return array;
}

function bubbleSortAlgorithm(numsArray, animations) {
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

function drawAnimation(animations, animationSpeed) {
  var previousFirstIndex = 0;

  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const colourChange = i % 4 < 2;
    if (colourChange) {
      const [firstBarIndex, secondBarIndex] = animations[i];
      const firstBarStyle = arrayBars[firstBarIndex].style;
      const secondBarStyle = arrayBars[secondBarIndex].style;
      const colour = i % 4 === 0 ? 'red' : 'black';
      setTimeout(() => {
        if (firstBarIndex !== previousFirstIndex) {
          const previouFirstBarStyle = arrayBars[previousFirstIndex].style;
          previouFirstBarStyle.backgroundColor = 'black';
          previousFirstIndex = firstBarIndex;
        } else firstBarStyle.backgroundColor = 'red';
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

export default bubbleSort;
