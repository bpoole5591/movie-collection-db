import React, { Component } from 'react';

// MODULES
// import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
// COMPONENTS
import SearchBar from '../search_bar/search_bar';
import Payments from '../payments';

// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources
import './navbar.css';
// import Logo from './logo.png';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
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
          <li className="nav-item" key="2">
            <Payments />
          </li>,
        ];
    }
  }

  render() {
    console.log(this.props);
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
            <li className="nav-item">
              <a className="nav-link" href="/">
                Random Movie
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
