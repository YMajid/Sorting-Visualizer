import React from 'react';
import './Body.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { generateValuesArray } = this.props;
    generateValuesArray();
  }

  render() {
    const { array, isSorted } = this.props;
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div className="array-bar" key={index} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    );
  }
}

export default Body;
