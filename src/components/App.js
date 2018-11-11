import React, { Component } from 'react';
import '../styles/App.sass';
import LeftSideBar from "./LeftSideBar";
import Dialog from "./Dialog";
import RightSideBar from "./RightSideBar";


class App extends Component {
  render() {
    return (
      <div className="app">
          <LeftSideBar/>
          <Dialog/>
          <RightSideBar/>
      </div>
    );
  }
}

export default App;
