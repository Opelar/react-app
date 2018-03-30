import { connect } from "react-redux";
import Toast from "../component/common/Toast";

const mapStateToProps = (state, ownProps) => state.get("toast").toJS();

export default connect(mapStateToProps)(Toast);
