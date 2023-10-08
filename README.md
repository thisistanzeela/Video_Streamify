# Video Clone Web Application

This is a simplified "Video Clone" web application built using React.js. It allows users to view a list of predefined video thumbnails, click on a thumbnail to play the video, and see basic information about the video.

## Project Link
[Visit the Hosted Website](https://video-streamify.onrender.com/)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   bash
   git clone https://github.com/your-username/video-clone.git
   cd video-clone
   npm start
2. Open your web browser and visit http://localhost:3000 to view the application.

## Features
- View a list of video thumbnails.
- Click on a thumbnail to play the video.
- See basic video information, including the title and description.
- Pagination to fetch more videos from the API.

## Technologies Used
- React.js
- React Router (for routing)
- HTML5 Video (for video playback)
- Tailwind CSS (for styling)
- Axios (for API requests)

## API Pagination
This application fetches videos from an API in a paginated manner. The API endpoint used for fetching videos is:
  bash
    https://internship-service.onrender.com/videos?page={page_number}
  ```
The {page_number} parameter starts at 0, and you should increment it to retrieve more videos.

## Contributing
Contributions to this project are welcome! You can contribute by opening issues, suggesting improvements, or submitting pull requests.
