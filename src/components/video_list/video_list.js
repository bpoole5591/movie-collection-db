import React, { Component } from 'react';
import Slider from 'react-slick';

// MODULES

// COMPONENTS

// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources

// class VideoList extends Component {
//   render() {
//     // const title = this.props.movie.title;
//     // const poster = this.props.movie.map(movie => movie.poster);
//     // const length = this.props.movie.map(movie => movie.runtime);
//     // const director = this.props.movie.map(movie => movie.director);
//     // const stars = this.props.movie.map(movie => movie.actors);
//     // const plot = this.props.movie.map(movie => movie.plot);
//     // const genre = this.props.movie.map(movie => movie.genre);
//     // const rated = this.props.movie.map(movie => movie.rated);
//     // const year = this.props.movie.map(movie => movie.year);

// const { title, poster, length } = this.props.movie;

//     console.log('VideoList', this.props.movie);
//     return (
//       <div className="album text-muted">
//         <div className="container">
//           <div className="row">
//             <div className="card">
//               <img src={poster} alt="Card image cap" />
//               <p className="card-text">{title}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
class VideoList extends Component {
  renderMovies(movieData) {
    return (
      <div>
        <img src={movieData.poster} alt="Card image cap" />
        <div>{movieData.title}</div>
      </div>
    );
  }

  render() {
    //console.log(Array.from(this.props.movie));
    return (
      <div>
        <div>Test Line</div>
        {/* <div>{this.props.movie.map(this.renderMovies)}</div> */ }
      </div>
    );
  }
}
// REDUX

function mapStateToProps({ movie }) {
  console.log(movie);
  return { movie };
}
// EXPORT

// export default AllVideos;

// REDUX EXPORT

export default connect(mapStateToProps)(VideoList);
