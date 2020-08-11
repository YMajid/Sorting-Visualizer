import React from 'react';
import './SortingVisualizer.css';
import mergeSortHelper from '../SortingAlgorithms/MergeSort';

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

  bubbleSort(array) {}

  heapSort(array) {}

  mergeSort(array) {
    const sortedArray = mergeSortHelper(array);
  }

  quickSort(array) {}

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const length = generateRandomInteger(1, 1000);
      const array = [];
      for (let j = 0; j < length; j++) {
        array.push(generateRandomInteger(-1000, 1000));
      }
      const mergeSortArray = mergeSortHelper(array);
      const jsSortedArray = array.slice().sort((a, b) => a - b);
      console.log(arraysAreEqual(mergeSortArray, jsSortedArray));
    }
  }

  render() {
    const { array } = this.state;
    console.log(array);
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <br></br>
        <button onClick={() => this.resetValuesArray()}>
          Generate New Array
        </button>
        <button onClick={() => this.bubbleSort(array)}>Bubble Sort</button>
        <button onClick={() => this.heapSort(array)}>Heap Sort</button>
        <button onClick={() => this.mergeSort(array)}>Merge Sort</button>
        <button onClick={() => this.quickSort(array)}>Quick Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>Test</button>
      </div>
    );
  }
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arraysAreEqual(firstArray, secondArray) {
  if (firstArray == null || secondArray == null)
    return firstArray === secondArray;
  if (firstArray.length !== secondArray.length) return false;

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }

  return true;
}

export default SortingVisualizer;
