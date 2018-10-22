import '../../style/search.css';
import React, { Component } from 'react';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-header">
          <div className="back" onClick={e => window.history.back()} />
          <div className="right">
            <input
              className="search-input"
              type="text"
              placeholder="搜索"
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
