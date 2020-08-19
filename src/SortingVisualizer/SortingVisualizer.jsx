import React from 'react';
import './SortingVisualizer.css';
import testSortingAlgorithms from '../SortingAlgorithms/TestSortingAlgorithms';
import bubbleSortAlgorithm from '../SortingAlgorithms/BubbleSort';
import bubbleSortAnimation from '../Animations/BubbleSortAnimation';
import mergeSortAlgorithm from '../SortingAlgorithms/MergeSort';
import mergeSortAnimation from '../Animations/MergeSortAnimation';
import quickSortAlgorithm from '../SortingAlgorithms/QuickSort';

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
    bubbleSortAnimation(animations);
    testSortingAlgorithms(array, sortedArray);
  }

  heapSort(array) {}

  mergeSort(array) {
    const [animations, sortedArray] = mergeSortAlgorithm(array.slice());
    mergeSortAnimation(animations);
    testSortingAlgorithms(array, sortedArray);
  }

  quickSort(array) {
    // const [animations, sortedArray] = quickSortAlgorithm(array.slice());
    // console.log(sortedArray);
    // drawAnimations(animations);
    // testSortingAlgorithms(array, sortedArray);
  }

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

export default SortingVisualizer;
