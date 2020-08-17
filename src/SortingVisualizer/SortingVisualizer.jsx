import React from 'react';
import './SortingVisualizer.css';
import testSortingAlgorithms from '../SortingAlgorithms/TestSortingAlgorithms';
import mergeSortAlgorithm from '../SortingAlgorithms/MergeSort';
import bubbleSortAlgorithm from '../SortingAlgorithms/BubbleSort';

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valuesArray: [],
    };
  }

  //TODO: Need to change to componentDidMount
  componentWillMount() {
    this.resetValuesArray();
  }

  resetValuesArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(generateRandomInteger(100, 800));
    }
    this.setState({ array });
  }

  bubbleSort(array) {
    const [animations, sortedArray] = bubbleSortAlgorithm(array.slice());
    drawAnimations(animations);
    testSortingAlgorithms(array, sortedArray);
  }

  heapSort(array) {}

  mergeSort(array) {
    const [animations, sortedArray] = mergeSortAlgorithm(array.slice());
    drawAnimations(animations);
    testSortingAlgorithms(array, sortedArray);
  }

  quickSort(array) {}

  render() {
    const { array } = this.state;
    console.log(array);
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div className="array-bar" key={index} style={{ height: `${value}px` }}></div>
        ))}
        <br></br>
        <button onClick={() => this.resetValuesArray()}>Generate New Array</button>
        <button onClick={() => this.bubbleSort(array)}>Bubble Sort</button>
        <button onClick={() => this.heapSort(array)}>Heap Sort</button>
        <button onClick={() => this.mergeSort(array)}>Merge Sort</button>
        <button onClick={() => this.quickSort(array)}>Quick Sort</button>
      </div>
    );
  }
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawAnimations(animations) {
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
      }, i * 1);
    } else {
      setTimeout(() => {
        const [firstBarIndex, newHeight] = animations[i];
        const firstBarStyle = arrayBars[firstBarIndex].style;
        firstBarStyle.height = `${newHeight}px`;
      }, i * 1);
    }
  }
}

export default SortingVisualizer;
