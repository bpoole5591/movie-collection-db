import React, { Component } from 'react';
import Slider from 'react-slick';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchCollection, fetchDetails, fetchColDetails, deleteMovie } from '../../actions';

// import * as actions from '../../actions';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.auth) {
      let googleId = this.props.auth.googleId;
      this.props.fetchCollection(googleId).then(() => this.props.fetchColDetails(this.props.collection.data));
    }
  }

  handleClick(id) {
    console.log('deleteMovie fired!');
    deleteMovie(this.props.auth.googleId, id);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <Slider {...settings}>
        {this.props.collection.details.length &&
          this.props.collection.details[0].map((details, i) => {
            return (
              <div className="det well" key={i}>
                <div className="well">
                  <img
                    src={
                      details.Poster !== 'N/A'
                        ? details.Poster
                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2000px-No_image_available.svg.png'
                    }
                    alt=":)"
                  />
                  {details.Title} ({details.Year})
                  <button onClick={() => { this.handleClick(details.imdbID) }}>Remove</button>
                </div>
              </div>
            );
          })}
      </Slider>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchCollection, fetchDetails, fetchColDetails, deleteMovie })(Collection);
