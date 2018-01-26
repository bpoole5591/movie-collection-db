import React, { Component } from 'react';
import Slider from 'react-slick';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchCollection } from '../../actions';
// import * as actions from '../../actions';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: '',
    };
    this.renderMovies = this.renderMovies.bind(this);
    
  }

  componentWillReceiveProps(newProps) {
    if (!!this.props.auth) {
      console.log('i am firing');
      if (newProps.auth && this.props.auth.googleId !== newProps.auth.googleId) {
        let googleId = this.props.auth.googleId;
        this.props.fetchCollection(googleId);
        console.log(this.props);
      }
    }
  }

  renderMovies(movieData) {
    return (
      <div className="col-md-3" key={movieData.imdbID}>
        <div className="well text-center">
          <img src={movieData.Poster} alt="" onError={this.imgError()} /> 
          <h5>
            {movieData.Title} ({movieData.Year})
          </h5>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.collection.data.imdbid);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
         <div className="container">
         <div className="row" id="movies">
           {this.props.collection.data.map(this.renderMovies)}
         </div>
       </div>
      </Slider>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchCollection })(Collection);
