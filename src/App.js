import "./App.css";
import React, { Component } from "react";
import Search from "./components/Search";
import youtubeAPI from "./api/youtube";
import YouTube from "react-youtube";

class App extends Component {
  // Create state
  state = {
    selectedVideoId: "",
  };

  onSearch = async (keyword) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: keyword,
        type: "video",
      },
    });

    this.setState(
      {
        selectedVideoId: response.data.items[0].id.videoId,
      },
      function () {
        console.log(this.state.selectedVideoId);
      }
    );
  };

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <YouTube videoId={this.state.selectedVideoId} />
      </div>
    );
  }
}

export default App;
