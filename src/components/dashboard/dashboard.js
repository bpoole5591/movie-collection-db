import React, { Component } from 'react';

// MODULES
import { Field, reduxForm } from 'redux-form';

// COMPONENTS

// REDUX
// import { connect } from 'react-redux';

// CSS/Other Resources
const TEXT_FIELDS = [
  { label: 'Name', prop: 'name' }
];

class Dashboard extends Component {
  // LIFECYCLE FUNCS
  constructor(props) {
    // define state and bind methods
    super(props); // defines props in constructor, reduces bugs
    this.state = {};
  }
  handleSubmit(formProps) {
    this.props.searchArtists({
      name: '',
      ...formProps,
    });
  }
  renderInputs() {
    return TEXT_FIELDS.map(({ label, prop }) =>
      <div className="input-field" key={prop}>
        <Field
          placeholder={label}
          id={prop}
          name={prop}
          component="input"
          type="text"
        />
      </div>
    );
  }
  // RENDER
  render() {
    const { handleSubmit } = this.props;
    return (
      <section className="jumbotron text-center">
        <div className="card blue-grey darken-1 row">
          <div className="card-content white-text">
            <form >
              <div className="center-align card-title">Search</div>

              {this.renderInputs()}

              <div className="input-field">
                <Field id="age" label="Age" component={Range} type="text" name="age" range={this.props.ageRange} />
              </div>

              <div className="input-field">
                <Field
                  id="years-active"
                  label="Years Active"
                  component={Range}
                  type="text"
                  name="yearsActive"
                  range={this.props.yearsActive}
                />
              </div>

              <div>
                <label className="select" htmlFor="sort">
                  Sort By
                </label>
                <Field id="sort" name="sort" component="select">
                  <option value="name">Name</option>
                  <option value="age">Age</option>
                  <option value="albums">Albums Released</option>
                </Field>
              </div>

              <div className="center-align">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="container">
          <h2>
            <br />
          </h2>
          <h1 className="jumbotron-heading">Welcome, User</h1>
          <p className="lead text-muted">
            His duobus, sicariorum. Et orci aetate erat, sed nescio quo modo se gerendo levir meus aufert a me. Propter
            hoc 'interventu 'vivere me scito. Et tamen hoc quod multo altius est eget arcu. Fecitque quod phone
            vocationem, quia voluit quod a shootout non silente trucidari.
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
        </div> */}
      </section>
    );
  }
}
// REDUX

// function mapStateToProps(state) {
//     return state
// }
Dashboard = reduxForm({
  form: 'Dashboard'
})(Dashboard);

// EXPORT
export default Dashboard;
// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(CarouselBanner)
