import * as React from "react";
import TopBar from "./TobBar";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

class Dialog extends React.Component{
    render(){
        const { messages } =this.props;
        return(
            <div className="dialog">
                <TopBar/>
                <Messages messages={messages}/>
                <MessageInput/>
            </div>
        )
    }
}

export default Dialog;
