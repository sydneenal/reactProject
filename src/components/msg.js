import React, {Component} from 'react';
import './css/msg.css';

//const time = {(new Date()).toDateString()};
class Msg extends Component{
     constructor(props) {
         super(props)
         this.state ={
             me: true
         }
     }
     check = () => {
          const {message} = this.props;
          if(message.stateid == "me") this.setState({me: true})
          else this.setState({me: false})
     }
     meMsg = () => {
          const {message} = this.props;
          return(
               <div className="msgBlock">
                    <div className="msgPhoto"></div>
                    <div className="box">
                         <div className="msgVector"></div>
                         <div className="msgBox">
                              <div className="textMsg">{message.text}</div>
                              <div className="msgTime">{message.time}</div>
                         </div>
                    </div>
               </div>
     )}
     notMeMsg = () => {
          const {message} = this.props;
          return(
               <div className="msgBlock">
                    <div className="msgPhoto"></div>
                    <div className="box">
                         <div className="msgVector"></div>
                         <div className="msgBox">
                              <div className="textMsg">{message.text}</div>
                              <div className="msgTime">{message.time}</div>
                         </div>
                    </div>
               </div>
     )}
     render = () => {
          this.check()
          if(this.state.me == true) return this.meMsg()
          else return this.notMeMsg()
     }
}

export default Msg;
