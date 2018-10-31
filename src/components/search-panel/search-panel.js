import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchItem = (e) => {
    const term = e.target.value;
    this.setState({
      term
    });
    this.props.onSearchItem(term);
  }

  render() {
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                onChange={this.onSearchItem}
                value={this.state.term} />
    );
  }
}
