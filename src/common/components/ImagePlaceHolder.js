import React from "react";
import placeHolder from "../../images/placeholder.png";

const ImagePlaceHolder = () => {
  return (
    <React.Fragment>
      <img className="image_placeholder" src={placeHolder} alt="placeholder" />
    </React.Fragment>
  );
};

export default ImagePlaceHolder;
