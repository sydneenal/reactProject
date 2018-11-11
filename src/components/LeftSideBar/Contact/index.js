import * as React from "react";
import ImgContact from "../../../images/img_contact.png";

class Contact extends React.Component{
    render(){
        return(
            <div className="leftSide-contacts-item">
                <div className="leftSide-contacts-item__left">
                    <div className="leftSide-contacts-item__avatar">
                        <img src={ImgContact} alt=""/>
                        <div className="leftSide-contacts-item__avatar lineState"/>
                    </div>
                    <div className="leftSide-contacts-item-text">
                        <div className="leftSide-contacts-item-text__name">Richards Hendrics</div>
                        <div className="leftSide-contacts-item-text__status">Sup man, Wanna go out?</div>
                    </div>
                </div>


                <div className="leftSide-contacts-item-notification">
                    <div>1</div>
                </div>
            </div>
        );
    }
}
export default Contact;
