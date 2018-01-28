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

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }

  handlePick(id) {
    this.props.handlePick(id);
    this.props.fetchDetails(id);
  }

  addToCollection(id) {
    this.props.collectionAdd(this.props.auth.googleId, id);
    window.location.reload(true);
  }

  renderMovies(movieData) {
    return (
      <div className="col-md-3" key={movieData.imdbID}>
        <div className="well text-center">
          <img
            src={
              movieData.Poster !== 'N/A'
                ? movieData.Poster
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2000px-No_image_available.svg.png'
            }
            alt="nothing here"
          />
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
    return (
      <div className="container">
        <div className="row" id="movies">
          {this.props.movie.map(this.renderMovies)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetails, collectionAdd }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
