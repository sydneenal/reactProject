import React, { Component } from 'react';
import './css/calendar.css';

class Calendar extends Component{
     render(){
          return(
               <div className="calendar">
                    <div className="calendarname">
                         <div className="calendarnametext">My Calendar</div>
                         <div className="calendarnameicon"><i className="fas fa-ellipsis-v"></i></div>
                    </div>
                    <hr></hr>
               </div>
          );
     }
}

export default Calendar;
