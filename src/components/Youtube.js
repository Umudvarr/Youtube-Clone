import React from "react";
import PropTypes from "prop-types";
import "../CSS/Youtube.css";

const Youtube = ({ Id, Name, Date, Image }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${Id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Youtube.propTypes = {
  Id: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Date: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
};

export default Youtube;
