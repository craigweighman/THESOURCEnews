import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
// import Auth from "../components/Auth";
import Home from "../components/Home";
import Articles from "../components/Articles";
import ArticlesByTopic from "../components/ArticlesByTopic";
import ArticlesByUser from "../components/ArticlesByUser";
import Article from "../components/Article";
import Topics from "../components/Topics";
import Users from "../components/Users";
import Nav from "../components/Nav";
import "./App.css";

class App extends Component {
  state = { user: "" };
  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Scroll>
          {/* <Auth user={user} login={this.setUser}> */}
          <Router>
            <Home path="/" />
            <Articles path="/articles" />
            <ArticlesByTopic path="/topics/:topic/articles" />
            <ArticlesByUser path="/users/:username/articles" />
            <Article path="/articles/:article_id/" />
            <Topics path="/topics" />
            <Users path="/users" />
          </Router>
          {/* </Auth> */}
        </Scroll>
        <Nav />
      </div>
    );
  }
}

export default App;