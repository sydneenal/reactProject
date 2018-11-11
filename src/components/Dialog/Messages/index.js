import * as React from "react";
import Message from "../Message";

class Messages extends React.Component{
    render(){
        const { messages } = this.props;
        return(
            <div className="dialog-middle">
                {
                    messages.map((item)=>
                        <Message data={item} key={item.id}/>
                    )
                }
            </div>
        );
    }
}

export default Messages;
