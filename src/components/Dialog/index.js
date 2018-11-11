import * as React from "react";
import TopBar from "./TobBar";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

class Dialog extends React.Component{
    render(){
        return(
            <div className="dialog">
                <TopBar/>
                <Messages/>
                <MessageInput/>
            </div>
        )
    }
}

export default Dialog;
