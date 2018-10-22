import { connect } from 'react-redux';
import Toast from '../component/common/Toast';

const mapStateToProps = state => state.get('toast').toJS();

export default connect(mapStateToProps)(Toast);
