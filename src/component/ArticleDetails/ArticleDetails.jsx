import "../../style/articleDetails.css";
import React, { Component } from "react";
import ArticleHeader from "../Headers/ArticleHeader";
import CommentList from "../CommentList/CommentList";

// const articleDetails = {
//   id: "1",
//   mainTitle: "推进党的建设伟大工程",
//   cdate: "2017-10-14",
//   author: "某五毛狗",
//   tagName: "电影",
//   tagId: "100",
//   articleContent:
//     '<section data-role="outer" label="Powered by 135editor.com" style="font-size:16px;"><section class="_135editor" data-tools="135编辑器" data-id="90595" style="border: 0px none; padding: 0px;"><section style="width:100%;display:flex; display:-webkit-felx;justify-content:center; -webkit-justify-content:center;" data-width="100%"><section style="height: 40px; background-color: rgb(247, 244, 239); padding-right: 10px;"><section style="height: 30px; float: right; border: 1px solid rgb(255, 255, 255); margin-top: 5px; padding-left: 50px; padding-right: 5px; margin-left: -55px; color: rgb(195, 43, 40); line-height: 30px; white-space: nowrap;" class="135brush" data-brushtype="text">推进党的建设伟大工程</section><section style="width:51px; float:right;"><img style="width:100%; display:block;" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvZmdua3hmR25ua1RwWkRXTEY0RTJ6aFJhNllzUnROcUZrYUt5QThwMmljbm5NN0pFSFdXMVpUcU91MW1UaWFJOTJpYTJhYVRYMUV4bWNsY01jYkFLeXV4WVEvMD93eF9mbXQ9cG5n" data-width="100%"></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="90594" style="border: 0px none; padding: 0px;"><section style="width:100%;display:flex; display:-webkit-felx;justify-content:center; -webkit-justify-content:center;" data-width="100%"><section style="height: 40px; background-color: rgb(247, 244, 239); padding-right: 10px;"><section style="height: 30px; float: right; border: 1px solid rgb(255, 255, 255); margin-top: 5px; padding-left: 70px; padding-right: 5px; margin-left: -65px; color: rgb(195, 43, 40); line-height: 30px;" class="135brush" data-brushtype="text">喜迎十九大</section><section style="width:71px; float:right;"><img style="width:100%; display:block;" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvZmdua3hmR25ua1RwWkRXTEY0RTJ6aFJhNllzUnROcUZ0aFYwZ3ZpYnRXYVZFOERPUnlMU0NCQm5Ud1JzYVd5aWFUU0d1WDRMM2ZwVERPbVptSDlXd1Zrdy8wP3d4X2ZtdD1wbmc=" data-width="100%"></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="90866" style="border: 0px none; padding: 0px;"><section style="width:100%;" data-width="100%"><section style="width:200px; height:170px; margin:10px auto; background-image:url(http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9mZ25reGZHbm5rUlB1R2NHQ3htNW94a2ViMm0walNtcW5aQ3ZYZXVmazBVeEdCUlpsd24wQWliTHVBd2V3MlFuQTVlSmNHVFdPeTBrUEt2VWxKelRIbXcvMD93eF9mbXQ9cG5n); background-repeat:no-repeat; background-size:100% auto; overflow:hidden;"><section style="width:100%; text-align:center; margin-top:58px; color:#fff; font-weight:bold;" data-width="100%"><p style="margin-bottom: 0px;">铭记历史</p><p style="margin-bottom: 0px;">珍惜现在</p></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="90862" style="border: 0px none; padding: 0px;"><section style="padding: 10px;"><section style="width:100%;" data-width="100%"><img style="width:100%; display:block;" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9mZ25reGZHbm5rUlB1R2NHQ3htNW94a2ViMm0walNtcWxUUXkwa0htblpuakJuWlRxREJJNXZGZnpYTVBZQ01CVlVab3JJTENqRlRHc0E4bDdHeVRoQS8wP3d4X2ZtdD1wbmc=" data-width="100%"></section><section style="background-color: rgb(193, 30, 40); padding: 5px 20px;"><section style="width:100%; text-align:center; font-size:20px; color:#fff;" class="135brush" data-brushtype="text" data-width="100%">伟大的胜利</section><section style="font-size: 14px; text-align: center;" class="135brush"><p style=""><span style="color: rgb(255, 255, 255);">在那战火纷飞的年月，革命先烈为了民族的独立、国家的自由、世界的和平前仆后继，历经一次次的战斗，用鲜血与生命换来今天我们的和平、自由、幸福的生活。</span></p></section></section><section style="width:100%;" data-width="100%"><img style="width:100%; display:block;" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9mZ25reGZHbm5rUlB1R2NHQ3htNW94a2ViMm0walNtcVp3SFlIMzlLZU93eE9RRVA4Mk1IbGxNc3ZUSzF2dElOYXZsaWJmaWMyTE1UNWliVjlxYVRNdHVLdy8wP3d4X2ZtdD1wbmc=" data-width="100%"></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="90604" style="border: 0px none; padding: 0px;"><section style="padding: 10px;"><section style="padding: 30px 15px 0px; background-image: url(&quot;http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9mZ25reGZHbm5rVHBaRFdMRjRFMnpoUmE2WXNSdE5xRmdZVGVnODNycjEwMWp0aWFaSFFxbENMb2hKV1d4eWliVWRyM3JpY05seUllNmFxbUdCUkVWUVJ5Zy8wP3d4X2ZtdD1wbmc=&quot;); background-repeat: repeat-x; background-size: auto 100%;"><section style="font-size:14px; width:100%;" class="135brush" data-width="100%"><p>聪明从来都是把事情归纳得更简单。by 何禾</p></section><section style="width:100%; margin-top:50px;" data-width="100%"><img style="width:100%; display:block;" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvZmdua3hmR25ua1RwWkRXTEY0RTJ6aFJhNllzUnROcUZLOFhFTUo4czRLNllDbUJuSXQyWk1SVFhCWWJTaWNpYlJCUjVET3RHVGpiaWF1SU16UkNiWUxSalEvMD93eF9mbXQ9cG5n" data-width="100%"></section></section></section></section><p><br></p></section>'
// };

class ArticleDetails extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      mainTitle,
      cdate,
      author,
      tagName,
      articleContent
    } = this.props.articleDetails.toJS();

    const articleId = this.props.location.query.id;

    return (
      <div className="article-details animated fadeIn">
        <ArticleHeader title={tagName} {...this.props} />

        <section className="article-sec">
          <h2 className="mainTitle">{mainTitle}</h2>
          <div className="article-info">
            <div className="col cdate">{cdate}</div>
            <div className="col author">{author}</div>
            <div className="col tagName">{tagName}</div>
          </div>

          <div
            id="article"
            ref="content"
            className="article-content"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
        </section>

        <CommentList articleId={articleId} />
      </div>
    );
  }

  componentDidMount() {
    const query = this.props.location.query;
    this.props.getArticleContent(query.id);
  }
}

export default ArticleDetails;
