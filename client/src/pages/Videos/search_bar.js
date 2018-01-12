import React, { Component } from 'react';
console.log("Running client/src/pages/Videos/search_bar.js");
class SearchBar extends Component {
  constructor(props) {
    // calling the parent method and passing it all the props
    super(props);

    this.state = {
      term: ""
    };
  }

  onInputChange(term) {
     // this.setState({ term });
      this.setState({ term: term });
      this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter search term here!"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
    )
  }

}

export default SearchBar;