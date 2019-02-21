import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import CommentDelete from "../buttons/CommentDelete";
import CommentVoter from "../buttons/CommentVoter";
import "../style/CommentCard.css";
import usericon from "../icons/single-user.png";

class UserCommentCard extends Component {
  state = {
    article: ""
  };

  render() {
    const { comments, user } = this.props;
    const { article } = this.state;
    return (
      <div className="comment-card">
        <Link to={`/users/${comments.username}/articles`} className="author">
          <img src={usericon} alt="user icon" width="15px" height="15px" />
          <span> </span>
          {comments.username}
        </Link>
        <CommentDelete
          user={user}
          author={comments.author}
          article_id={comments.article_id}
          comment_id={comments.comment_id}
        />
        <h6 className="time">{comments.created_at.slice(0, 10)}</h6>
        <h6 className="body">{comments.body}</h6>
        <div className="votes">
          <CommentVoter
            votes={comments.votes}
            comment_id={comments.comment_id}
            article_id={comments.article_id}
            author={comments.author}
            user={user}
          />
        </div>
        <Link to={`/articles/${comments.article_id}`} className="voting">
          <h6>{article}</h6>
        </Link>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticle();
  };

  fetchArticle = () => {
    const { comments } = this.props;
    api
      .getArticle(comments.article_id)
      .then(({ data }) => this.setState({ article: data.title }));
  };
}

export default UserCommentCard;