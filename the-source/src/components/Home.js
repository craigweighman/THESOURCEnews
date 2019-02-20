import React, { Component } from "react";
import * as api from "../api/api";
import ArticleCard from "./ArticleCard";
import "./Home.css";

class Home extends Component {
  state = {
    articles: [],
    articlesMostComments: [],
    articlesMostVotes: []
  };

  render() {
    const { articles, articlesMostComments, articlesMostVotes } = this.state;

    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">most recent</h2>
          <br />
          <div className="section-main">
            {articles.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
          </div>
          <br />
        </div>
        <div className="main-section-head">
          <h2 className="section-title">most commented</h2>
          <br />
          <div className="section-main">
            {articlesMostComments.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
            {/* <FetchArticles query={"sort_by=comment_count&order=DESC"} /> */}
          </div>
          <br />
        </div>
        <div className="main-section-head">
          <h2 className="section-title">most votes</h2>
          <br />
          <div className="section-main">
            {articlesMostVotes.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
            {/* <FetchArticles query={"sort_by=votes&order=DESC"} /> */}
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = props => {
    this.fetchArticles();
    this.fetchArticlesMostComments();
    this.fetchArticlesMostVotes();
  };

  fetchArticles = () => {
    const { topic, username, query } = this.props;
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articles: data.articles }));
  };

  fetchArticlesMostComments = () => {
    const { topic, username } = this.props;
    const query = "sort_by=comment_count&order=DESC";
    api
      .getArticles(topic, username, query)
      .then(({ data }) =>
        this.setState({ articlesMostComments: data.articles })
      );
  };

  fetchArticlesMostVotes = () => {
    const { topic, username } = this.props;
    const query = "sort_by=votes&order=DESC";
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articlesMostVotes: data.articles }));
  };
}

export default Home;