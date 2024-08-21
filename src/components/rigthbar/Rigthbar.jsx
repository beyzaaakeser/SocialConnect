import React from 'react';
import './rigthbar.css';

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/6.jpg"
                alt=""
              />

              <span className='rigthbarOnline'></span>
            </div>

            <span className='rigthbarUsername'>Jhon Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rigthbar;
