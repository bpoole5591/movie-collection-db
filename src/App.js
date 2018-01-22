import React, { Component } from 'react';

// MODULES
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import VideoList from './components/video_list/video_list';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/search_bar/search_bar';
import VideoModal from './components/video_detail/video_modal';

// REDUX
import { connect } from 'react-redux';
// import reducer from './reducers/reducer';

// CSS/Other Resources
import './App.css';
// import { fetchDetails } from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSelected: undefined,
    };

  }

  handleCloseDetail = () => {
    this.setState({ movieSelected: undefined });
  };

  handlePick = id => {
    this.setState({ movieSelected: id });
  };

  render() {
    return (
      <div className="body">
        <Navbar />
        <Dashboard />
        <SearchBar />
        {this.props.movie && <VideoList movieSelected={this.state.movieSelected} handlePick={this.handlePick} />}
        {this.props.detail && (
          <VideoModal movieSelected={this.state.movieSelected} handleCloseDetail={this.handleCloseDetail} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
