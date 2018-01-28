import React, { Component } from 'react';

// MODULES

// COMPONENTS
import Collection from '../collection_view/collection_view';
// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources
import './dashboard.css';

import { deleteCollection } from '../../actions/index';

class Dashboard extends Component {
  // LIFECYCLE FUNCS
  nameHelper() {
    if (this.props.auth) {
      return this.props.auth.name;
    }
  }

  handleClick(id) {
    console.log('deleteCollection fired!');
    deleteCollection(this.props.auth.googleId);
  }
  // RENDER
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="">
          <div>
            <h1 className="jumbotron-heading">Welcome, {this.nameHelper()}</h1>
          </div>
          <div>
            <p className="lead">
              Welcome to your movie collection! <br /> To add a movie to your collection, search for the movie using the search bar at the top of the page. Then click on the "add to collection" button below the movie poster! <br /> To start your collection from scratch just click the button below!
            </p>
            <button className="btn btn-primary" onClick={() => { this.handleClick() }}>Delete Your Collection</button><br />
          </div>
          {/* <div>
            <p>
              <a href="/" className="btn btn-primary">
                I'll put something here
              </a>
              <br />
              <a href="/" className="btn btn-primary">
                I'll put something here, too
              </a>
            </p>
          </div> */}
          <div>
            <Collection />
          </div>
        </div>
      </section>
    );
  }
}
// REDUX

function mapStateToProps(state) {
  return state;
}

// EXPORT

// REDUX EXPORT

export default connect(mapStateToProps)(Dashboard);
