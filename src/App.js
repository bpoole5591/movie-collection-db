import React, { Component } from 'react';

// MODULES

// COMPONENTS
import VideoList from './components/video_list/video_list';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/search_bar/search_bar';

// REDUX
import { connect } from 'react-redux';
// import reducer from './reducers/reducer';

// CSS/Other Resources
import './App.css';

class App extends Component {
  // CUSTOM FUNCS

  // RENDER
  render() {
    return (
      <div className="body">
        <Navbar />
        <Dashboard />
        <SearchBar />
        <VideoList />}
      </div>
    );
  }
}
// REDUX

function mapStateToProps(state) {
  return state;
}

// EXPORT

// export default App;

// REDUX EXPORT

export default connect(mapStateToProps)(App);
