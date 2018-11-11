import React, { Component } from 'react';
import './css/contacts.css';

class Contacts extends Component{
     render(){
          return(
               <div className="contacts">
                    <div className="chat">
                         <div className="chattext">Chat</div>
                         <div className="chatbtn"><button>New</button></div>
                    </div>
                    <hr></hr>
               </div>
          );
     }
}

export default Contacts;
