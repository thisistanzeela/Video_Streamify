import React from 'react';
import './VideoCardStyle.css';
import Avatar from '@material-ui/core/Avatar';
import { FaHeart } from 'react-icons/fa';

function VideoCard({
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
      <div className="videoCard-thumbnail-container">
        <img
          className="videoCard-thumbnail"
          src={image}
          alt=""
          onClick={handleThumbnailClick}
        />
      </div>
      <div className="videoCard-info">
        <Avatar className="videoCard-avatar" alt={channel} src={channelImage} />
        <div className="videoCard-text">
          <h4 className="videoCard-title">{title}</h4>
          <p className="videoCard-channel">{channel}</p>
          <p className="videoCard-views">{views} views</p>
        </div>
        <div className="">
        <FaHeart className="thumbnail-icon" style={{marginLeft:"80px",marginBottom:"32px"}}/>
        </div>

      </div>
    </div>
  );
}

export default VideoCard;