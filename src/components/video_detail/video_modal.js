import React from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';

const VideoModal = props => (
  <Modal
    isOpen={!!props.movieSelected} //!!props.movieSelected
    contentLabel="Movie Detail"

  >
    {props.detail && console.log(props.detail.Title)}

    <div className="row">
      <div className="col-md-4">
        <img src={props.detail.Poster} className="thumbnail" />
        <h2>
          {props.detail.Title} ({props.detail.Year})
        </h2>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Released: </strong>
            {props.detail.Released}
          </li>
          <li className="list-group-item">
            <strong>Rated: </strong>
            {props.detail.Rated}
          </li>
          <li className="list-group-item">
            <strong>Runtime: </strong>
            {props.detail.Runtime}
          </li>
          <li className="list-group-item">
            <strong>Starring: </strong>
            {props.detail.Actors}
          </li>
          <li className="list-group-item">
            <strong>Director: </strong>
            {props.detail.Director}
          </li>
          <li className="list-group-item">
            <strong>Writer: </strong>
            {props.detail.Writer}
          </li>
          <li className="list-group-item">
            <strong>Plot: </strong>
            {props.detail.Plot}
          </li>
        </ul>
      </div>
    </div>

    <button onClick={props.handleCloseDetail}>Close Detail</button>
  </Modal>
);

function mapStateToProps({ detail }) {
  console.log();
  //console.log(typeof movie);
  return { detail };
}

// REDUX EXPORT

export default connect(mapStateToProps)(VideoModal);
