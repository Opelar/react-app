// style
import './style/reset.css';
import './style/common.css';
import './style/animate.css';
import './style/index.css';
import './style/toast.css';
// base
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './configureStore';
import initReactFastclick from 'react-fastclick';
// component || container
import App from './component/App';
import HomePageContainer from './container/HomePageContainer';
import PersonalPage from './component/Personal/PersonalPage.jsx';
// import Recommend from "./component/Recommend/Recommend.jsx";
import CirclePage from './component/Circle/CirclePage.jsx';
import ArticleDetailsContainer from './container/ArticleDetailsContainer';
// import MyEditor from "./component/Editor/MyEditor.jsx";
// User
import LoginContainer from './container/LoginContainer';
import RegisterPage from './component/User/RegisterPage';
import ForgetPassword from './component/User/ForgetPassword';
import ReadHubContainer from './container/ReadHubContainer';
// search
import SearchPage from './component/Home/SearchPage';

const store = configureStore();
initReactFastclick();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePageContainer} />
        <Route path="/article" component={ArticleDetailsContainer} />
        <Route path="/personal" component={PersonalPage} />
        <Route path="/recommend" component={ReadHubContainer} />
        <Route path="/circle" component={CirclePage} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path="/search" component={SearchPage} />
        {/* <Route path="/myEditor" component={MyEditor} /> */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
