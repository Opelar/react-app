import { connect } from "react-redux";
import {
  getArticleGroup,
  getImgGroup,
  getVideoGroup
} from "../action/homeAction";
import HomePage from "../component/Home/HomePage.jsx";

const mapStateToProps = (state, ownProps) => {
  return {
    articleList: state.get("articleList"),
    imgList: state.get("imgList"),
    videoList: state.get("videoList")
  };
};

const mapDispatchToProps = dispatch => ({
  getArticle() {
    dispatch(getArticleGroup());
  },
  getImg() {
    dispatch(getImgGroup());
  },
  getVideo() {
    dispatch(getVideoGroup());
  }
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(
  HomePage
);

export default HomePageContainer;
