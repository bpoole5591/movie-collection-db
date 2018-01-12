import React, { Component } from 'react';

// MODULES
import { findDOMNode } from 'react-dom';
// COMPONENTS

// REDUX
// import { connect } from 'react-redux';

// CSS/Other Resources
import $ from 'jquery';
import './navbar.css';
import Logo from './logo.png';

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

  // componentWillMount() {} // is run before mounting. setState won't trigger re-render. avoid side-effects or subscriptions
  // componentDidMount() {} // is run after mounting. target DOM nodes here. load async data here.
  // componentWillReceiveProps(nextProps) {} // is run before props changed or parent triggers rerender. use to setState. may run
  // when new props aren't received.
  // shouldComponentUpdate(nextProps, nextState) {} // is run before props or state change triggers rerender. return false to stop
  // component rerender
  // componentWillUpdate(nextProps, nextState) {} // is run after new props or state are received and comp will rerender. can't
  // call setState
  // componentDidUpdate() {} // is run after initial rerender. operate on DOM. make network requests if state or props changed
  // componentWillUnmount() {} // is run after component unmounts. cancel timers, event listeners, network requests, destroy
  // manually created DOM elements, etc...

  // CUSTOM FUNCS
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };
  // RENDER
  render() {
    return (
      <header>
        <nav id="main-nav">
          <div className="ellipsis-click" onClick={this.handleToggle}>
            <div className="navbar-header">
              <button className="navbar-toggle">
                <div className="nav-title">Menu</div>
                <div className="nav-icon">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </div>
              </button>
            </div>
</div>
            <div className="navbar-info">
              <ul>
                <li>
                  <img height="50px" width="60px" src={Logo} />
                </li>
                <li>
                  <h3>theMovieCollectionDatabase</h3>
                </li>
              </ul>
            </div>
            <div className="navbar-collapse" ref="toggle">
              <ul>
                <li>
                  <a id="home" href="/" className="clickable" target="_self">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    id="about"
                    href="/about"

                    target="_self"
                  >
                    <span>Some Value</span>
                  </a>
                </li>
                <li>
                  <a
                    id="services"
                    href="/services"

                    target="_self"
                  >
                    <span>Yet Another Value</span>
                  </a>
                </li>
              </ul>
            </div>
          
        </nav>
      </header>
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
