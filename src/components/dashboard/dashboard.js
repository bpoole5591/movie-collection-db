import React, { Component } from 'react';

// MODULES

// COMPONENTS

// REDUX
// import { connect } from 'react-redux';

// CSS/Other Resources

export default class Dashboard extends Component {
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

  // RENDER
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Welcome, User</h1>
          <p className="lead text-muted">
            His duobus, sicariorum. Et orci aetate erat, sed nescio quo modo se
            gerendo levir meus aufert a me. Propter hoc 'interventu 'vivere me
            scito. Et tamen hoc quod multo altius est eget arcu. Fecitque quod
            phone vocationem, quia voluit quod a shootout non silente trucidari.
          </p>
          <p>
            <a href="#" className="btn btn-primary">
              I'll put something here
            </a>
            <br />
            <a href="#" className="btn btn-primary">
              I'll put something here, too
            </a>
          </p>
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
