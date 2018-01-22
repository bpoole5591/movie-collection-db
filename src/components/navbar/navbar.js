import React, { Component } from 'react';

// MODULES
import { findDOMNode } from 'react-dom';
// COMPONENTS

// REDUX
// import { connect } from 'react-redux';

// CSS/Other Resources
import $ from 'jquery';
import './navbar.css';
// import Logo from './logo.png';

export default class Navbar extends Component {
  // LIFECYCLE FUNCS
  constructor(props) {
    // define state and bind methods
    super(props); // defines props in constructor, reduces bugs
    this.state = {};
    // BIND CUSTOM FUNCS
    // ( (comp, funcsList) => {
    //     funcsList.forEach( func => comp.func = func.bind(comp) )
    // } )(this, [])
  }

  // CUSTOM FUNCS
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };
  // RENDER
  render() {
    return (
      <div className="container">
        <div>
          <h3>theMovieCollectionDatabase</h3>
        </div>
        <div>
          <div className="home">
            <a href="/">Home</a>
          </div>
        </div>
        <div>
          <div className="othernav">
            <a href="/">Random Movie</a>
          </div>
        </div>
        <div>
          <div className="othernav">
            <a href="/auth/google">Login</a>
          </div>
        </div>
      </div>
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
