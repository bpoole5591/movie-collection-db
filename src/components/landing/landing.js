import React, { Component } from 'react';

// MODULES

// COMPONENTS

// REDUX
// import { connect } from 'react-redux';
import logo from '../../logo.png';

// CSS/Other Resources

export default class Landing extends Component {
  // LIFECYCLE FUNCS
  constructor(props) {
    // define state and bind methods
    super(props); // defines props in constructor, reduces bugs
    this.state = {};
  }
  // RENDER
  render() {
    return (
      <section className="jumbotron text-center">
        <div>
          <div>
            <h2 className="jumbotron-heading">
              Welcome to <br />theMovieCollectionDatabase
            </h2>
          </div>
          <div>
            <br />
            <img src={logo} style={{ height: '14vh', width: '16vw' }} alt="mcd logo" />
            <p className="lead text-muted">
              <br />You are not logged in. Please <a href="/auth/google">log in</a> now.
            </p>
          </div>
          {/* <div>
            <p>
              <a href="#" className="btn btn-primary">
                I'll put something here
              </a>
              <br />
              <a href="#" className="btn btn-primary">
                I'll put something here, too
              </a>
            </p>
          </div> */}
        </div>
      </section>
    );
  }
}
// REDUX

// function mapStateToProps(state) {
//     return state
// }

// EXPORT

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(CarouselBanner)
