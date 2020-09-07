import React, { Component } from 'react';
import './Footer.css';
import bubbleSort from '../../algorithms/BubbleSort';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  bubbleSort(array, sorted) {
    console.log(array);
    console.log(sorted);
    if (array == null || sorted) return;
    const sortedArray = bubbleSort(
      array.slice(),
      animationSpeedMS,
      barsColour,
      greenColour,
      redColour,
      blueColour
    );
  }

  render() {
    const { array, isSorted } = this.props;
    console.log(array);
    return (
      <div id="footer" style={this.footerStyle}>
        <a id="generateArray" className="button hvr-fade" onClick={this.props.generateArray}>
          Generate New Array
        </a>
        <a
          id="bubbleSort"
          className="button hvr-fade"
          onClick={() => this.bubbleSort(array, isSorted)}
        >
          Bubble Sort
        </a>
        <a id="mergeSort" className="button hvr-fade" onClick={this.props.mergeSort}>
          Merge Sort
        </a>
        <a id="quickSort" className="button hvr-fade" onClick={this.props.quickSort}>
          Quick Sort
        </a>
      </div>
    );
  }
}

const animationSpeedMS = 10;
const greenColour = '#29D8A8';
const blueColour = '#227EE1';
const redColour = '#FF6263';
const barsColour = '#282a2b';

export default Footer;
