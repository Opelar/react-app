import { connect } from 'react-redux';
import ArticleDetails from '../component/ArticleDetails/ArticleDetails.jsx';
import { getArticleDetails } from '../action/articleDetailsAction';

const mapStateToProps = state => {
  return {
    articleDetails: state.get('articleDetails')
  };
};

const mapDispatchToProps = dispath => ({
  getArticleContent: (id) => dispath(getArticleDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetails);
