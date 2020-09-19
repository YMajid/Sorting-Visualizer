import Footer from '../components/Footer/Footer';
import { connect } from 'react-redux';
import constants from '../constants';
import mergeSort from '../algorithms/MergeSort';
import quickSort from '../algorithms/QuickSort';
import bubbleSort from '../algorithms/BubbleSort';
import { setArray } from '../reducers/arrayReducer';
import { setSorted } from '../reducers/sortedReducer';
import testSortingAlgorithms from '../algorithms/TestSortingAlgorithms.js';

const { animationSpeedMS, greenColour, blueColour, redColour, barsColour } = constants;

const mapStateToProps = (state) => ({
  array: state.array,
  isSorted: state.isSorted,
});

const mapDispatchToProps = () => (dispatch) => ({
  generateNewArray: () => {
    const array = [];
    const minHeight = window.innerHeight <= 500 ? 1 : 100;
    const maxHeight = window.innerHeight - 200;
    const barsCount = Math.floor((window.innerWidth * 5) / 192);
    for (let i = 0; i < barsCount; i++) {
      array.push(generateRandomInteger(minHeight, maxHeight));
    }
    changeArrayBarColours(barsColour);
    dispatch(setArray(array));
    dispatch(setSorted(false));
  },
  bubbleSort: (array, sorted) => {
    if (array == null || sorted) return;
    const sortedArray = bubbleSort(
      array.slice(),
      animationSpeedMS,
      barsColour,
      greenColour,
      redColour,
      blueColour
    );
    dispatch(setSorted(true));
    testSortingAlgorithms(array, sortedArray);
  },
  mergeSort: (array, sorted) => {
    if (array == null || sorted) return;
    const sortedArray = mergeSort(
      array.slice(),
      animationSpeedMS,
      barsColour,
      redColour,
      blueColour
    );
    dispatch(setSorted(true));
    testSortingAlgorithms(array, sortedArray);
  },
  quickSort: (array, sorted) => {
    if (array == null || sorted) return;
    const sortedArray = quickSort(
      array.slice(),
      animationSpeedMS,
      barsColour,
      greenColour,
      redColour,
      blueColour
    );
    dispatch(setSorted(true));
    testSortingAlgorithms(array, sortedArray);
  },
});

function changeArrayBarColours(colour) {
  const arrayBars = document.getElementsByClassName('array-bar');
  for (let i = 0; i < arrayBars.length; i++) {
    const barStyle = arrayBars[i].style;
    barStyle.backgroundColor = colour;
  }
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
