import IconAdd from "../../../images/ic_add_dialog.svg";
import IconMore from "../../../images/ic_more.svg";
import * as React from "react";

class TopBar extends React.Component {
    render(){
        return(
            <div className="leftSide-top">
                <div className="topLeft">
                    <div className="topLeft-piper">piper</div>
                    <div className="topLeft-chat">chat</div>
                </div>
                <div className="topRight">
                    <div className="topRight-add">
                        <img src={IconAdd} alt=""/>
                    </div>
                    <div className="topRight-options">
                        <img src={IconMore} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;
