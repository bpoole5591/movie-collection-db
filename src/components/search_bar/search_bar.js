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
      <form onSubmit={this.onFormSubmit} className="form-inline my-2 my-lg-0">
        <input
          placeholder="Movie Search"
          className="form-control mr-sm-2"
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary my-2 my-sm-0">
          Submit
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
