import React, { Component } from 'react';
// import Slider from 'react-slick';

// MODULES
import { bindActionCreators } from 'redux';

// COMPONENTS
import { fetchDetails } from '../../actions/index';
import { collectionAdd } from '../../actions/index';

// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources
import noimage from '../../noimage.png';

class VideoList extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.handlePick);
    this.handlePick = this.handlePick.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
    this.imgError = this.imgError.bind(this);
  }

  handlePick(id) {
    this.props.handlePick(id);
    this.props.fetchDetails(id);
  }

  addToCollection(id) {
    console.log(this.props);
    console.log(id);
    alert('Movie added to your collection!');
    this.props.collectionAdd(this.props.auth.googleId, id);
  }

  imgError() { // alt image handling not working yet
    let no = () => {
      return { noimage };
    }
    return no;
  }

  renderMovies(movieData) {
    return (
      <div className="col-md-3" key={movieData.imdbID}>
        <div className="well text-center">
          <img src={movieData.Poster} alt="" onError={this.imgError()} /> 
          <h5>
            {movieData.Title} ({movieData.Year})
          </h5>
          <br />
          <button onClick={() => this.handlePick(movieData.imdbID)} className="btn btn-primary">
            View Detail
          </button>
          <button onClick={() => this.addToCollection(movieData.imdbID)}>+Add to Collection</button>
        </div>
      </div>
    );
  }

  render() {
    //console.log(this.props.movie[0]);
    return (
      <div className="container">
        <div className="row" id="movies">
          {this.props.movie.map(this.renderMovies)}
        </div>
      </div>
    );
  }
}

// REDUX

// function mapStateToProps({ movie }) {
//   //console.log(movie);
//   //console.log(typeof movie);
//   return { movie };
// }

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetails, collectionAdd }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
