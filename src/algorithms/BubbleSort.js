import swap from './Swap';

function bubbleSort(array, animationSpeed, barsColour, pivotColour, selectionColour, sortedColour) {
  console.log('clicked');
  if (array.length <= 1) return array;

  const animations = [];
  bubbleSortAlgorithm(array, animations);

  drawAnimation(animations, animationSpeed, barsColour, pivotColour, selectionColour, sortedColour);

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

function drawAnimation(
  animations,
  animationSpeed,
  barsColour,
  pivotColour,
  selectionColour,
  sortedColour
) {
  var previousFirstIndex = 0;
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    const colourChange = i % 4 < 2;
    if (colourChange) {
      const [firstBarIndex, secondBarIndex] = animations[i];
      const firstBarStyle = arrayBars[firstBarIndex].style;
      const secondBarStyle = arrayBars[secondBarIndex].style;
      const colour = i % 4 === 0 ? selectionColour : barsColour;
      setTimeout(() => {
        if (firstBarIndex !== previousFirstIndex) {
          const previouFirstBarStyle = arrayBars[previousFirstIndex].style;
          previouFirstBarStyle.backgroundColor = sortedColour;
          previousFirstIndex = firstBarIndex;
        } else {
          firstBarStyle.backgroundColor = pivotColour;
          secondBarStyle.backgroundColor = colour;
        }
        if (firstBarIndex === arrayBars.length - 1) {
          firstBarStyle.backgroundColor = sortedColour;
        }
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
