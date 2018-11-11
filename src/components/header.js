import React, { Component } from 'react';
import './css/headerStyle.css';
import UserIcon from './userIcon'


class Header extends Component{
     render(){
          return(
               <div className="header">
                    <div className="left">
                         <div className="headericon"><i className="fas fa-bars"></i></div>
                    </div>
                    <div className="right"><UserIcon name="Dmitriy " surname="Erokhin"/></div>
               </div>
          );
     }
}

export default Header;
