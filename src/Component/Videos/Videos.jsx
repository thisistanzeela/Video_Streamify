import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoStyle.css";

function RecommendedVideos() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetchVideos(currentPage);
  }, [currentPage]);

  const fetchVideos = (page) => {
    axios
      .get(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.posts)
        ) {
          setVideos(response.data.data.posts);
        } else {
          console.error(
            "API response does not have the expected structure:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePagination = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleThumbnailClick = (video) => {
    if (video && video.submission && video.submission.mediaUrl) {
      window.open(video.submission.mediaUrl, "_blank");
    }
  };

  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos_videos">
        {videos.map((video) => (
          <VideoCard
            key={video.postId}
            title={video.submission.title}
            views={`${video.reaction.count} Views`}
            timestapms={video.timestamp}
            channelImage={video.creator.pic}
            channel={video.creator.name}
            image={video.submission.thumbnail}
            onClickThumbnail={() => handleThumbnailClick(video)}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 0}
          className={currentPage === 0 ? "disabled-button" : ""}
          >
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button style={{padding:"0px 34px"}} onClick={() => handlePagination(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default RecommendedVideos;

