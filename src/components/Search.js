import React, { Component } from "react";

class Search extends Component {
  state = {
    title: "",
  };

  onSearchChanged = (event) => {
    const titile = event.target.value;
    console.log(titile);
    this.setState({ title: titile });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="">
            <label>Search</label>
            <input
              values={this.state.title}
              onChange={this.onSearchChanged}
              id="video-search"
              type="text"
              placeholder="Search for..."
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
