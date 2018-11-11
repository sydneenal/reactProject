import * as React from "react";
import Contact from "../Contact";

class Contacts extends React.Component{
    render(){
        return(
            <div className="leftSide-contacts">
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
            </div>
        )
    }
}

export default Contacts;
