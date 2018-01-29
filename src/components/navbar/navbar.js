import React, { Component } from 'react';

// MODULES
import _ from 'underscore';
import { Link } from 'react-router-dom';
// COMPONENTS
import SearchBar from '../search_bar/search_bar';
import Payments from '../payments';

// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.randomMovie = this.randomMovie.bind(this);
  }
  renderContent() {
    switch (this.props.auth.googleId) {
      case '':
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login
            </a>
          </li>
        );
      default:
        return [
          <li className="nav-item" key="1">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </li>,
          <li className="nav-item" key="3">
            <button className="random nav-link" onClick={() => this.randomMovie()}>
              Random Movie
            </button>
          </li>,
          <li className="nav-item" key="2">
            <Payments />
          </li>,
        ];
    }
  }

  randomMovie() {
    if (this.props.collection.data.length > 0) {
      const id = _.sample(this.props.collection.data).imdbid;
      this.props.handlePick(id);
      this.props.fetchDetails(id);
    } else {
      alert("You don't have a collection to choose from!");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-brand">
          <Link to={this.props.auth ? '/dashboard' : '/'} className="navbar-brand">
            theMovieCollectionDatabase
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {this.renderContent()}
          </ul>
          <SearchBar />
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Navbar);
