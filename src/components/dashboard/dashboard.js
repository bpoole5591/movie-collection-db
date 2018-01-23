import React, { Component } from 'react';

// MODULES

// COMPONENTS

// REDUX
import { connect } from 'react-redux';

// CSS/Other Resources

class Dashboard extends Component {
  // LIFECYCLE FUNCS
  nameHelper() {
    if (this.props.auth) {
      return this.props.auth.name;
    }
  }
  // RENDER
  render() {
    {
      this.props.auth && console.log(this.props.auth.name);
    }

    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h2>
            <br />
          </h2>
          <div>
            <h1 className="jumbotron-heading">Welcome, {this.nameHelper()}</h1>
          </div>
          <div>
            <p className="lead text-muted">
              His duobus, sicariorum. Et orci aetate erat, sed nescio quo modo se gerendo levir meus aufert a me.
              Propter hoc 'interventu 'vivere me scito. Et tamen hoc quod multo altius est eget arcu. Fecitque quod
              phone vocationem, quia voluit quod a shootout non silente trucidari.
            </p>
          </div>
          <div>
            <p>
              <a href="/" className="btn btn-primary">
                I'll put something here
              </a>
              <br />
              <a href="/" className="btn btn-primary">
                I'll put something here, too
              </a>
            </p>
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
