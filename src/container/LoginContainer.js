import { connect } from "react-redux";
import LoginPage from "../component/User/LoginPage";
import { login } from "../action/userAction";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispath => ({
  userLogin(tel, password, onOK) {
    dispath(login(tel, password, onOK));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
