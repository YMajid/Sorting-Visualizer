import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer" style={this.footerStyle}>
        <a id="generateArray" className="button hvr-fade" onClick={this.props.generateArray}>
          Generate New Array
        </a>
        <a id="bubbleSort" className="button hvr-fade" onClick={this.props.bubbleSort}>
          Bubble Sort
        </a>
        <a id="heapSort" className="button hvr-fade" onClick={this.props.heapSort}>
          Heap Sort
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

export default Footer;
