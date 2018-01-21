import React, { Component } from 'react';
// import Slider from 'react-slick';

// MODULES
import { bindActionCreators } from 'redux';

// COMPONENTS
import { fetchDetails } from '../../actions/index';

// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources

class VideoList extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.handlePick);
    this.handlePick = this.handlePick.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
    
  }

  handlePick(id) {
    this.props.handlePick(id);
    this.props.fetchDetails(id);
  }

  renderMovies(movieData) {
    return (
      <div className="col-md-3" key={movieData.imdbID}>
        <div className="well text-center">
          <img src={movieData.Poster} alt="Card image cap" />
          <h5>
            {movieData.Title} ({movieData.Year})
          </h5>
          <br />
          <button onClick={() => this.handlePick(movieData.imdbID)} className="btn btn-primary">
            View Detail
          </button>
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

function mapStateToProps({ movie }) {
  //console.log(movie);
  //console.log(typeof movie);
  return { movie };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);


