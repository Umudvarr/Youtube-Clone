import React, { useEffect, useState } from "react";
import Youtube from "../components/Youtube";
import "../CSS/Header.css";
import "../CSS/Youtube.css";

function Header({ videos }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-slice">
      <div className="header-container">
        <div className="header-left">
          <div className="left-items">
            <img
              src={require("../images/home.png")}
              alt="home"
              className="leftIMG"
            />
            Home
          </div>
          <div className="left-items">
            <img
              src={require("../images/shorts.png")}
              alt="shorts"
              className="leftIMG"
            />
            Shorts
          </div>
          <div className="left-items subscription">
            <img
              src={require("../images/subscriptions.png")}
              alt="subscriptions"
              className="leftIMG"
            />
            Subscriptions
          </div>
          <div className="left-items You leftIMG">
            You
            <img
              src={require("../images/icons8-next-50.png")}
              style={{ width: 25 }}
              alt="you"
              className="you-img leftIMG"
            />
          </div>
          <div className="left-items">
            <img
              src={require("../images/history - Copy.png")}
              alt="history"
              className="leftIMG"
            />
            History
          </div>
          <div className="left-items">
            <img
              src={require("../images/music icon.png")}
              alt="history"
              className="leftIMG"
            />
            Musics
          </div>
          <div className="left-items vids">
            <img
              src={require("../images/videos.png")}
              alt="history"
              className="leftIMG"
            />
            Movies
          </div>
          <div className="left-items">
            <img
              src={require("../images/tree dot.png")}
              alt="history"
              className="leftIMG"
            />
            More
          </div>
          <div className="left-items">
            <img
              src={require("../images/search btn.png")}
              alt="history"
              className="leftIMG"
            />
            Search
          </div>
          <div className="left-items ">
            <img
              src={require("../images/icons8-like-50.png")}
              alt="history"
              style={{ width: 24 }}
              className="leftIMG"
            />
            Likes
          </div>
          <div className="left-items subscription">
            <img
              src={require("../images/icons8-video-24.png")}
              alt="history"
              className="leftIMG"
            />
            Videos
          </div>
          <div className="left-items subscripshion">Subscriptions</div>
          <div className="left-items ">
            <img
              src={require("../images/icons8-download-24.png")}
              alt="history"
              className="leftIMG subs"
            />
            Downloaded
          </div>
          <div className="left-items">
            <img
              src={require("../images/icons8-clock-24.png")}
              alt="history"
              className="leftIMG subs"
            />
            Watch Later
          </div>
          <div className="left-items">
            <img
              src={require("../images/icons8-star-24.png")}
              alt="history"
              className="leftIMG subs"
            />
            Liked
          </div>
          <div className="left-items">
            <img
              src={require("../images/icons8-feedback-24.png")}
              alt="history"
              className="leftIMG subs"
            />
            Feedback
          </div>
          <div className="left-items">
            <img
              src={require("../images/icons8-help-24.png")}
              alt="history"
              className="leftIMG subs"
            />
            Help
          </div>
        </div>
        <div className={`header ${isScrolled ? "scrolled" : ""}`}>
          {videos.slice(0, 10).map((video, index) => (
            <div key={index} className="videoItem">
              <Youtube Id={video.Id} />
              <img
                className="video-img "
                src={video.Image}
                alt={`Thumbnail for ${video.Name}`}
              />
              <h3 className="video-name">{video.Name}</h3>
              <p className="video-text">
                {calculateYearsAgo(video.RealCreationDate)} years ago
              </p>
            </div>
          ))}
        </div>
      </div>
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

export default Header;
