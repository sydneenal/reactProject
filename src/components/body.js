import React, { Component } from 'react';
import './css/bodyStyle.css';
import Contacts from './contacts';
import Messages from './messages';
import Calendar from './calender';

class Body extends Component{
     render(){
          return(
               <div className="bodyBlocks">
                    <div className="bodyLeft">
                         <div className="sidebar">
                              <div className="sbicon"><i className="fas fa-comment-alt"></i></div>
                              <div className="sbicon"><i className="fas fa-address-card"></i></div>
                              <div className="sbicon"><i className="fas fa-adjust"></i></div>
                              <div className="sbicon"><i className="fas fa-sliders-h"></i></div>
                         </div>
                    </div>
                    <div className="bodyRight">
                         <div className="things">
                              <Contacts/>
                              <Messages/>
                              <Calendar/>
                         </div>
                    </div>
               </div>
          );
     }
}

export default Body;
