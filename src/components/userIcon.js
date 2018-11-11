import React from 'react';
import './css/userIcon.css';

var UserIcon = function(props){
     return(
          <div className="user">
               <div className="userBlock">
                    <div className="search"><i className="fas fa-search"></i></div>
                    <div className="photo"><div className="circle"></div></div>
                    <div className="userInfo">
                         <div className="name">
                              {props.name + props.surname}
                         </div>
                         <div className="undertext">
                              <div>avaliabe</div>
                              <div><i className="fas fa-caret-down"></i></div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default UserIcon;
