import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Youtube from "./components/Youtube";
import Main from "./components/Main";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const dummyVideoData = [
      {
        Id: "3elGSZSWTbM",
        Name: "Flexbox or grid - How to decide?",
        Image: "https://picsum.photos/200/305",
        RealCreationDate: "2022-01-26T10:30:00",
      },
      {
        Id: "bMknfKXIFA8",
        Name: "React Course - Beginner's Tutorial for React JavaScript Library [2022]",
        Image: "https://picsum.photos/200/304",
        RealCreationDate: "2020-01-27T12:45:00",
      },
      {
        Id: "W6NZfCO5SIk",
        Name: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
        Image: "https://picsum.photos/200/303",
        RealCreationDate: "2019-01-28T08:15:00",
      },
      {
        Id: "TeeAp5zkYnI",
        Name: "Introduction to React JS | ReactJS Setup and Resources",
        Image: "https://picsum.photos/200/302",
        RealCreationDate: "2022-01-29T15:20:00",
      },
      {
        Id: "5ChkQKUzDCs",
        Name: "Big projects are ditching TypeScript… why?",
        Image: "https://picsum.photos/200/351",
        RealCreationDate: "2023-01-30T14:10:00",
      },
      {
        Id: "m55PTVUrlnA",
        Name: "All The JavaScript You Need To Know For React",
        Image: "https://picsum.photos/200/341",
        RealCreationDate: "2023-01-30T14:10:00",
      },
      {
        Id: "vyQv563Y-fk",
        Name: "You probably won’t survive 2024... Top 10 Tech Trends",
        Image: "https://picsum.photos/200/331",
        RealCreationDate: "2023-01-30T14:10:00",
      },
      {
        Id: "RdAQnkDzGvc",
        Name: "Testing the limits of ChatGPT and discovering a dark side",
        Image: "https://picsum.photos/200/321",
        RealCreationDate: "2023-01-30T14:10:00",
      },
      {
        Id: "41qC3w3UUkU",
        Name: "2Pac - Hit 'Em Up (Dirty) (Music Video) HD",
        Image: "https://picsum.photos/200/311",
        RealCreationDate: "2014-01-30T14:10:00",
      },
      {
        Id: "Wpk7gisNYis",
        Name: "İsrail Məmmədov ft Coolio - Sən Gəlin Köçən Gün (Remix)",
        Image: "https://picsum.photos/200/310",
        RealCreationDate: "2018-01-30T14:10:00",
      },
    ];

    setVideos(dummyVideoData);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Header videos={videos} />
      {/* <Main /> */}
      <div className="flex-container">
        <div className="video">
          {videos.slice(0, 10).map((video, index) => (
            <div key={index} className="video-item">
              <Youtube Id={video.Id} />
              <div className="card-body">
                <img
                  className="video-img"
                  src={video.Image}
                  alt={`Thumbnail for ${video.Name}`}
                />
                <h3 className="videoName">{video.Name}</h3>
              </div>
              <p className="video-text">
                {calculateYearsAgo(video.RealCreationDate)} years ago
              </p>
            </div>
          ))}
        </div>
      </div>
      <footer
        className="footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Made by Ümüdvar Habiloğlu</h3>
      </footer>
    </div>
  );
}

const calculateYearsAgo = (videoDate) => {
  const currentDate = new Date();
  const videoCreationDate = new Date(videoDate);

  const yearsAgo = currentDate.getFullYear() - videoCreationDate.getFullYear();

  return yearsAgo;
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

export default App;
