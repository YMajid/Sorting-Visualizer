import React from 'react';
import './SortingVisualizer.css';
import testSortingAlgorithms from '../SortingAlgorithms/TestSortingAlgorithms';
import bubbleSortAlgorithm from '../SortingAlgorithms/BubbleSort';
import bubbleSortAnimation from '../Animations/BubbleSortAnimation';
import mergeSortAlgorithm from '../SortingAlgorithms/MergeSort';
import mergeSortAnimation from '../Animations/MergeSortAnimation';
import quickSortAlgorithm from '../SortingAlgorithms/QuickSort';
import quickSortAnimation from '../Animations/QuickSortAnimation';
import Footer from '../Components/Footer';

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valuesArray: [],
      sorted: false,
    };
  }

  //TODO: Need to change to componentDidMount
  componentWillMount() {
    this.resetValuesArray();
  }

  resetValuesArray() {
    const array = [];
    for (let i = 0; i < 80; i++) {
      array.push(generateRandomInteger(100, 800));
    }
    this.setState({ valuesArray: array, sorted: false });
  }

  bubbleSort(array, sorted) {
    if (sorted) return;
    const [animations, sortedArray] = bubbleSortAlgorithm(array.slice());
    bubbleSortAnimation(animations, animationSpeedMS);
    testSortingAlgorithms(array, sortedArray);
    this.setState({ sorted: true });
  }

  mergeSort(array, sorted) {
    if (sorted) return;
    const [animations, sortedArray] = mergeSortAlgorithm(array.slice());
    mergeSortAnimation(animations, animationSpeedMS);
    testSortingAlgorithms(array, sortedArray);
    this.setState({ sorted: true });
  }

  quickSort(array, sorted) {
    if (sorted) return;
    const [animations, sortedArray] = quickSortAlgorithm(array.slice());
    quickSortAnimation(animations, animationSpeedMS);
    testSortingAlgorithms(array, sortedArray);
    this.setState({ sorted: true });
  }

  render() {
    const array = this.state.valuesArray;
    const sorted = this.state.sorted;
    console.log(array);
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div className="array-bar" key={index} style={{ height: `${value}px` }}></div>
        ))}
        <br></br>
        <Footer
          generateArray={() => this.resetValuesArray()}
          bubbleSort={() => this.bubbleSort(array, sorted)}
          mergeSort={() => this.mergeSort(array, sorted)}
          quickSort={() => this.quickSort(array, sorted)}
        ></Footer>
      </div>
    );
  }
}

const animationSpeedMS = 10;

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default SortingVisualizer;
