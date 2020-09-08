import './Footer.css';
import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { generateNewArray } = this.props;
    generateNewArray();
  }

  render() {
    const { generateNewArray, bubbleSort, mergeSort, quickSort, array, isSorted } = this.props;
    return (
      <div id="footer" style={this.footerStyle}>
        <a id="generateArray" className="button hvr-fade" onClick={() => generateNewArray()}>
          Generate New Array
        </a>
        <a id="bubbleSort" className="button hvr-fade" onClick={() => bubbleSort(array, isSorted)}>
          Bubble Sort
        </a>
        <a id="mergeSort" className="button hvr-fade" onClick={() => mergeSort(array, isSorted)}>
          Merge Sort
        </a>
        <a id="quickSort" className="button hvr-fade" onClick={() => quickSort(array, isSorted)}>
          Quick Sort
        </a>
      </div>
    );
  }
}

export default Footer;
