import '../../style/articleDetails.css';
import React, { useEffect } from 'react';
import ArticleHeader from '../Headers/ArticleHeader';
import CommentList from '../CommentList/CommentList';

export default props => {
  const {
    mainTitle,
    cdate,
    author,
    tagName,
    articleContent
  } = props.articleDetails.toJS();

  useEffect(() => {
    const query = props.location.query;
    props.getArticleContent(query.id);
  }, []);

  return (
    <div className="article-details animated fadeIn">
      <ArticleHeader title={tagName} {...props} />

      <section className="article-sec">
        <h2 className="mainTitle">{mainTitle}</h2>
        <div className="article-info">
          <div className="col cdate">{cdate}</div>
          <div className="col author">{author}</div>
          <div className="col tagName">{tagName}</div>
        </div>

        <div
          id="article"
          className="article-content"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
      </section>

      <CommentList articleId={props.location.query.id} />
    </div>
  );
};
