import * as React from "react";
import ImgContact from "../../../images/img_contact.png";

class Contact extends React.Component{
    render(){
        const { data } = this.props;
        return(
            <div className="leftSide-contacts-item">
                <div className="leftSide-contacts-item__left">
                    <div className="leftSide-contacts-item__avatar">
                        <img src={data.avatarUrl} alt=""/>
                        <div className="leftSide-contacts-item__avatar lineState"/>
                    </div>
                    <div className="leftSide-contacts-item-text">
                        <div className="leftSide-contacts-item-text__name">{data.fullName}</div>
                        <div className="leftSide-contacts-item-text__status">{data.status}</div>
                    </div>
                </div>


                <div className="leftSide-contacts-item-notification">
                    <div>{data.notification}</div>
                </div>
            </div>
        );
    }
}
export default Contact;
