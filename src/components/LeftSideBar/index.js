import * as React from "react";
import IconTabRecent from "../../images/ic_tab_recent.svg";
import IconTabContact from "../../images/ic_tab_contact.svg";
import IconTabContacts from "../../images/ic_tab_contacts.svg";
import IconTabArchive from "../../images/ic_tab_archive.svg";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import Contacts from "./Contacts";

class LeftSideBar extends React.Component{
    render(){
        const { contacts } = this.props;
        return (
            <div className="leftSide">
                <TopBar/>
                <SearchBar/>
                <div className="leftSide-tabs">
                    <img src={IconTabRecent} alt=""/>
                    <img src={IconTabContact} alt=""/>
                    <img src={IconTabContacts} alt=""/>
                    <img src={IconTabArchive} alt=""/>
                </div>
                <Contacts contacts={contacts}/>
            </div>
        );
    }
}

export default LeftSideBar;
