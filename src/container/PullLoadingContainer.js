import { connect } from "react-redux";
import PullLoading from "../component/common/PullLoading";

function mapStateToProps(state) {
  return state.get("invokeService").toJS();
}

export default connect(mapStateToProps)(PullLoading);
