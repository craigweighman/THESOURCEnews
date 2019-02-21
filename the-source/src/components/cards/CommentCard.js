import React from "react";
import { Link } from "@reach/router";
import CommentVoter from "../buttons/CommentVoter";
import "../style/CommentCard.css";
import usericon from "../icons/single-user.png";
import CommentDelete from "../buttons/CommentDelete";

const CommentCard = ({ comments, article_id, user }) => {
  return (
    <div className="comment-card">
      <Link to={`/users/${comments.author}/articles`} className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {comments.author}
      </Link>
      <CommentDelete
        user={user}
        author={comments.author}
        article_id={article_id}
        comment_id={comments.comment_id}
      />
      <h6 className="time">{comments.created_at.slice(0, 10)}</h6>
      <h6 className="body">{comments.body}</h6>
      <div className="votes">
        <CommentVoter
          votes={comments.votes}
          comment_id={comments.comment_id}
          article_id={article_id}
          author={comments.author}
          user={user}
        />
      </div>
    </div>
  );
};

export default CommentCard;