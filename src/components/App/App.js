import React from "react";
import Header from "../Header/Header";
import FilterPane from "../FilterPane/FilterPane";
import Cards from "../Cards/Cards";
import { connect } from 'react-redux';
import { downloadComments } from '../../redux/actions';
import { getComments } from "../../api/comments";
import "./App.css";

function App({ downloadComments, comments }) {
  React.useEffect(() => {
    getComments()
      .then((res) => downloadComments(res))
      .catch((err) => console.log(err));
  }, [downloadComments]);

  return (
    <div className="app">
      <Header />
      <FilterPane />
      {comments.length !== 0 && <Cards />}
      {comments.length === 0 && <h2 className="app__without-result">Нет загруженных комментариев</h2>}
    </div>
  );
}

const mapDispatchToProps = {
  downloadComments
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
