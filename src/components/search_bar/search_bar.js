import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search by movie title, actor, or genre"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form><br /></div>
    );
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {fetchMovie})(SearchBar);
