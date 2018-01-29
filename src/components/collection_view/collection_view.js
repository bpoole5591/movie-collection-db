import React, { Component } from 'react';
import Slider from 'react-slick';

import { connect } from 'react-redux';

import { fetchCollection, fetchDetails, fetchColDetails, deleteMovie } from '../../actions';

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
    deleteMovie(this.props.auth.googleId, id);
    window.location.reload(true);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        { breakpoint: 2000, settings: { slidesToShow: 7 } },
        { breakpoint: 1680, settings: { slidesToShow: 6 } },
        { breakpoint: 1500, settings: { slidesToShow: 5 } },
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 1000, settings: { slidesToShow: 3 } },
        { breakpoint: 780, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 500, settings: { slidesToShow: 1, dots: false } },
      ],
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
                  <button
                    onClick={() => {
                      this.handleClick(details.imdbID);
                    }}
                  >
                    Remove
                  </button>
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
