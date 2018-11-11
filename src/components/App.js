import React, { Component } from 'react';
import IconAdd from "../images/ic_add_dialog.svg";
import IconMore from "../images/ic_more.svg";
import IconTabRecent from "../images/ic_tab_recent.svg";
import IconTabContact from "../images/ic_tab_contact.svg";
import IconTabContacts from "../images/ic_tab_contacts.svg";
import IconTabArchive from "../images/ic_tab_archive.svg";
import IconSearch from "../images/ic_search.svg";
import ImgContact from "../images/img_contact.png";
import '../styles/App.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="leftSide">
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
              <div className="leftSide-search">
                  <img src={IconSearch} alt=""/>
                  <p>Search Here…</p>
              </div>
              <div className="leftSide-tabs">
                  <img src={IconTabRecent} alt=""/>
                  <img src={IconTabContact} alt=""/>
                  <img src={IconTabContacts} alt=""/>
                  <img src={IconTabArchive} alt=""/>
              </div>
              <div className="leftSide-contacts">
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
                  <div className="leftSide-contacts-item active">
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
                  <div className="leftSide-contacts-item active">
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
                  <div className="leftSide-contacts-item active">
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
              </div>
          </div>
      </div>
    );
  }
}

export default App;
