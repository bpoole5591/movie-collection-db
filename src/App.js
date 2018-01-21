import React, { Component } from 'react';

// MODULES



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

    // this.handlePick = this.handlePick.bind(this);
  }

  handleCloseDetail = () => {
    this.setState({ movieSelected: undefined });
  };

  handlePick = id => {
    this.setState({ movieSelected: id });
    //fetchDetails(id);
    // console.log(this.state.movieSelected);
  };

  // RENDER
  render() {
    return (
      <div className="body">
        <Navbar />
        <Dashboard />
        <SearchBar />
        {this.props.movie && <VideoList movieSelected={this.state.movieSelected} handlePick={this.handlePick} />}
        <VideoModal movieSelected={this.state.movieSelected} handleCloseDetail={this.handleCloseDetail} />
      </div>
    );
  }
}
// REDUX

function mapStateToProps(state) {
  return state;
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchDetails }, dispatch);
// }

// EXPORT

// export default App;

// REDUX EXPORT

//export default connect((null, mapDispatchToProps), mapStateToProps)(App);
export default connect(mapStateToProps)(App);