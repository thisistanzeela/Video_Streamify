import React from 'react';
import './VideoCardStyle.css';

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
    <div className="card border border-gray-300 rounded overflow-hidden shadow-md w-72 ">
    <div className="heart-icon absolute top-2 right-2 text-red-500 text-2xl">
      <i className="fa fa-heart"></i>
    </div>
    <div className="channel-info absolute top-2 left-2 flex items-center">
      <div className="channel-image">
        <img
          alt={channel}
          src={channelImage}
          className="w-10 h-10 rounded-full mr-2"
        />
      </div>
      <div className="channel-name text-sm text-white bg-black bg-opacity-70 rounded px-2 py-1">
        {channel}
      </div>
    </div>
    <div className="card-bg">
      <img
        src={image}
        alt=""
        onClick={handleThumbnailClick}
        className="w-full"
      />
    </div>
    <div className="footer bg-white p-3">
      <div className="footer-content">
        <h2 className="title text-xl text-gray-700">{title}</h2>
        <div className="views-count text-sm text-gray-600">{views} views</div>
      </div>
    </div>
  </div>
  );
}

export default VideoCard;

