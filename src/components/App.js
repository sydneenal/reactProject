import React, { Component } from 'react';
import '../styles/App.sass';
import LeftSideBar from "./LeftSideBar";
import Dialog from "./Dialog";
import RightSideBar from "./RightSideBar";


class App extends Component {
    state={
        messages: [
            {
                id: 0,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                time: "12:00AM",
                avatarUrl: "https://johnochwat.files.wordpress.com/2010/07/mini-avatar.gif"
            }
        ],
        contacts: [
            {
                id: 0,
                avatarUrl: "https://johnochwat.files.wordpress.com/2010/07/mini-avatar.gif",
                fullName: "Erlich Bachman",
                notification: 1,
                status: "are you sure This isn't overdoing…"
            }
        ]
    };
    render() {
    const { contacts, messages } = this.state;
    return (
      <div className="app">
          <LeftSideBar contacts={contacts}/>
          <Dialog messages={messages}/>
          <RightSideBar/>
      </div>
    );
    }
}

export default App;
