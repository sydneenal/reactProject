import IconPhone from "../../../images/ic_phone.svg";
import * as React from "react";

class TopBar extends React.Component{
    render(){
        return (
            <div className="dialog-top">
                <div className="dialog-top__left">
                    <div className="dialog-top__left lineState"/>
                    <div className="dialog-top__left userName">Erlich Bachman</div>
                </div>
                <div className="dialog-top__right">
                    <div className="dialog-top__right phoneCall">
                        <img src={IconPhone} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;
