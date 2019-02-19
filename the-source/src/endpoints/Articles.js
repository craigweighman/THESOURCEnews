import React, { Component } from "react";
import TopArticles from "../components/TopArticles";

class Articles extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS ARTICLES</h1>
        <br />
        <h2>This is the first 100 articles</h2>
        <TopArticles query={"limit=100"} />
      </div>
    );
  }
}

export default Articles;
