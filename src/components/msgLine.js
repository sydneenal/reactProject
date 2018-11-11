import React, { Component } from 'react';
import './css/messages.css';
import Msg from './msg';
import MessageArray from './messagesLists/messageArray';

class MsgLine extends Component{
     render(){
          return(
               <div className="textline">
                    <div className="inputMessage">
                         <input type="text" placeholder="Type your message..." value={this.props.value}></input>
                    </div>
                    <div className="fileSend">
                         <i className="fas fa-paperclip"></i>
                    </div>
                    <div className="messageSend">
                         <div className="circlebtn" onClick={this.msgSend}><i className="fas fa-paper-plane"></i></div>
                    </div>
               </div>
          );
     }
     msgSend(){
          React.createElement(<Msg/>, null);
     }
}

export default MsgLine;
