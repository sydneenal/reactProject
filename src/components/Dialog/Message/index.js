import ImgContact from "../../../images/img_contact.png";
import * as React from "react";
import {MESSAGE_TYPES} from "../../../utils/const";

class Message extends React.Component{
    render(){
        const { messageType, message } = this.props;
        return(
            <React.Fragment>
                {
                    messageType === MESSAGE_TYPES.FROM ?
                    <div className="dialog-middle-message-to">
                    <div className="dialog-middle-message-to-username">
                    <img src={ImgContact} alt=""/>
                    <p>10.35AM</p>
                    </div>
                    <div className="dialog-middle-message-to-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    </div>
                    </div>:
                    <div className="dialog-middle-message-from">
                    <div className="dialog-middle-message-from-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    </div>
                    <div className="dialog-middle-message-from-username">
                    <img src={ImgContact} alt=""/>
                    <p>10.35AM</p>
                    </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Message;
