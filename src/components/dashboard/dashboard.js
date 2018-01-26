import React, { Component } from 'react';

// MODULES

// COMPONENTS
import Collection from '../collection_view/collection_view';
// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources
import './dashboard.css';

class Dashboard extends Component {
  // LIFECYCLE FUNCS
  nameHelper() {
    if (this.props.auth) {
      return this.props.auth.name;
    }
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
              His duobus, sicariorum. Et orci aetate erat, sed nescio quo modo se gerendo levir meus aufert a me.
              Propter hoc 'interventu 'vivere me scito. Et tamen hoc quod multo altius est eget arcu. Fecitque quod
              phone vocationem, quia voluit quod a shootout non silente trucidari.
            </p>
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
