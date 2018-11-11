import IconSend from "../../../images/ic_send.svg";
import * as React from "react";

class MessageInput extends React.Component{
    render(){
        return(
            <div className="dialog-bottom">
                <div className="dialog-bottom-input">Type your message here…</div>
                <div className="dialog-bottom-send">
                    <img src={IconSend} alt=""/>
                </div>
            </div>
        )
    }
}

export default MessageInput;
