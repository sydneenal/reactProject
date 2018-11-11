import * as React from "react";
import Message from "../Message";
import {MESSAGE_TYPES} from "../../../utils/const";

class Messages extends React.Component{
    render(){
        return(
            <div className="dialog-middle">
                <Message messageType={MESSAGE_TYPES.FROM}/>
                <Message messageType={MESSAGE_TYPES.TO}/>
                <Message messageType={MESSAGE_TYPES.FROM}/>
                <Message messageType={MESSAGE_TYPES.TO}/>
            </div>
        );
    }
}

export default Messages;
