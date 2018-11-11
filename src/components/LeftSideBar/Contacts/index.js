import * as React from "react";
import Contact from "../Contact";

class Contacts extends React.Component{
    render(){
        const { contacts } = this.props;
        return(
            <div className="leftSide-contacts">
                {
                    contacts.map((item)=>
                        <Contact data={item} key={item.id}/>
                    )
                }
            </div>
        )
    }
}

export default Contacts;
