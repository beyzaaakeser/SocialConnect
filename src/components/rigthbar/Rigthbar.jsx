import React from 'react';
import './rigthbar.css';
import {Users} from "../../dummyData"
import Online from '../online/Online';
const Rigthbar = () => {
  return (
    <div className="rigthbar">
      <div className="rigthbarWrapper">
        <div className="brithdayContainer">
          <img className="birthdayImg" src="assets/gift1.png" alt="" />
          <span className="brithdayText">
            <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
          </span>
        </div>

        <img className="rigthbarAd" src="assets/ad.jpg" alt="" />
        <h4 className="rigthbarTitle">Online Friends</h4>

        <ul className="rigthbarFriendList">
         {
          Users.map((u) => (
              <Online key={u.id} user={u}/>  
          ))
         }
          
         
        </ul>
      </div>
    </div>
  );
};

export default Rigthbar;
