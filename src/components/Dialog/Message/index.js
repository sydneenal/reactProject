import ImgContact from "../../../images/img_contact.png";
import * as React from "react";
import {MESSAGE_TYPES} from "../../../utils/const";

class Message extends React.Component{
    render(){
        const { data } = this.props;
        return(
            <React.Fragment>
                {
                    data.messageType === MESSAGE_TYPES.FROM ?
                    <div className="dialog-middle-message-to">
                        <div className="dialog-middle-message-to-username">
                            <img src={data.avatarUrl} alt=""/>
                            <p>{data.time}</p>
                        </div>
                        <div className="dialog-middle-message-to-text">
                            <p>
                                {data.text}
                            </p>
                        </div>
                    </div>:
                    <div className="dialog-middle-message-from">
                        <div className="dialog-middle-message-from-text">
                            <p>
                                {data.text}
                            </p>
                        </div>
                        <div className="dialog-middle-message-from-username">
                            <img src={data.avatarUrl} alt=""/>
                            <p>{data.time}</p>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Message;
