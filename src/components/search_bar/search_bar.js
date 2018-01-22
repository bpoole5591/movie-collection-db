import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchMovie(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search by movie title, actor, or genre"
            className="form-control short"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button id="search" type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
