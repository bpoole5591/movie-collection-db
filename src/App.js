import React, { Component } from 'react';

// MODULES
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import VideoList from './components/video_list/video_list';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';
import VideoModal from './components/video_detail/video_modal';
import Landing from './components/landing/landing';

// REDUX
import { connect } from 'react-redux';
import * as actions from './actions';

// CSS/Other Resources
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSelected: undefined,
    };
  }

  componentDidMount() {
    this.props.fetchUser().then(() => {
      if (this.props.auth.googleId) {
        this.props.addUser(this.props.auth.googleId, this.props.auth.name);
      }
    });
  }
  handleCloseDetail = () => {
    this.setState({ movieSelected: undefined });
  };

  handlePick = id => {
    this.setState({ movieSelected: id });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar fetchDetails={this.props.fetchDetails} handlePick={this.handlePick}/>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            {this.props.movie && <VideoList movieSelected={this.state.movieSelected} handlePick={this.handlePick} />}
            {this.props.detail && (
              <VideoModal movieSelected={this.state.movieSelected} handleCloseDetail={this.handleCloseDetail} />
            )}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
