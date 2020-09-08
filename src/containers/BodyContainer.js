import Body from '../components/Body/Body';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  array: state.array,
  isSorted: state.isSorted,
});

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
