import React from 'react';
import './SortingVisualizer.css';

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

  render() {
    const { array } = this.state;
    console.log(array);
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div className="array-bar" key={index}>
            {value}
          </div>
        ))}
      </div>
    );
  }
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default SortingVisualizer;
