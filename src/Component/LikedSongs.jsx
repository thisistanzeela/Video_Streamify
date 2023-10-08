import React from 'react';
import '../Component/VideoCard/VideoCardStyle.css';
import Avatar from '@material-ui/core/Avatar';
import { FaHeart } from 'react-icons/fa';

function LikedSongs({
  title,
  views,
  channelImage,
  channel,
  image,
  onClick,
  onClickThumbnail,
}) {
  const handleThumbnailClick = () => {
    onClickThumbnail();
  };

  return (
    <div className="videoCard">
      <img
        className="videoCard-thumbnail"
        src={image}
        alt=""
        onClick={() => {
          handleThumbnailClick();
        }}
      />
      <div className="videoCard-info">
        <Avatar className="videoCard-avatar" alt={channel} src={channelImage} />
        <div className="videoCard-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views}</p>
        </div>
        <div className="">
        <FaHeart className="thumbnail-icon" style={{marginLeft:"80px",marginBottom:"32px"}}/>
        </div>
        
      </div>
    </div>
  );
}

export default LikedSongs;