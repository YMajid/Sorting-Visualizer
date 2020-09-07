import { connect } from 'react-redux';
import Footer from './Footer';

const mapStateToProps = ({ array, isSorted }) => ({
  array,
  isSorted,
});

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
