import React from "react";
import { connect } from "react-redux";
import "./Cards.css";

const Cards = ({ comments }) => {
  return (
    <ul className="cards">
      {comments.map((comment) => (
        <li className="card" key={comment.id}>
          <p className="card__title">{comment.name}</p>
          <p className="card__email">{comment.email}</p>
          <p className="card__text">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.visibleComments
  };
};

export default connect(mapStateToProps, null)(Cards);
