import React from 'react';

function VideoPage({ video }) {
  return (
    <div className="video-page">
      <video
        controls
        src={video.submission.mediaUrl}
        poster={video.submission.thumbnail}
        autoPlay
      />
      <h2>{video.submission.title}</h2>
      <p>{video.submission.description}</p>
      <div className="api-data">
        <h3>API Data Format:</h3>
        <pre>{JSON.stringify(video, null, 2)}</pre>
      </div>
    </div>
  );
}

export default VideoPage;
