import React, { Component } from 'react';
import './css/messages.css';
import MsgLine from './msgLine';
import Msg from './msg';
import MessageArray from './messagesLists/messageArray';

class Messages extends Component{
     constructor(props) {
         super(props)
         this.state ={
             array: MessageArray
         }
     }
     render(){
          return(
               <div className="messages">
                    <hr></hr>
                    <div className="chatBox">
                         {this.state.array.map((item, i) =>
                                   <Msg message={item} Key={i}/>
                         )}
                    </div>
                    <MsgLine/>
               </div>
          );
     }
}

export default Messages;
