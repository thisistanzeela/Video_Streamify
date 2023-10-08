import React from 'react';
import './HeaderStyle.css';
import { FaHeart } from 'react-icons/fa';

function Header() {
  const handleAddFavorite = () => {
    console.log('Adding to favorites...');
  };

  return (
    <div className="header">
      <div className="header_left">
        <h2>VedioPlayer</h2>
      </div>
      <div className="header_right">
        <button className="favorite-button" onClick={handleAddFavorite}>
          <FaHeart  style={{color:"white" ,marginTop:"6px",fontSize:"22px"}}/>
        </button>
      </div>
    </div>
  );
}

export default Header;

