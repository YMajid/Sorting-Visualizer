import { connect } from 'react-redux';
import Body from './Body';
import { setArray } from '../../reducers/array/arrayReducer';
import { setSorted } from '../../reducers/sorted/sortedReducer';

const mapStateToProps = ({ array, isSorted }) => ({
  array,
  isSorted,
});

const mapDispatchToProps = () => (dispatch) => ({
  generateValuesArray: () => {
    const array = [];
    const minHeight = window.innerHeight <= 500 ? 1 : 100;
    const maxHeight = window.innerHeight - 200;
    const barsCount = Math.floor((window.innerWidth * 5) / 192);
    for (let i = 0; i < barsCount; i++) {
      array.push(generateRandomInteger(minHeight, maxHeight));
    }
    dispatch(setArray(array));
    dispatch(setSorted(false));
  },
});

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
