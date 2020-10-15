import React from "react";
import ImagePlaceHolder from "./ImagePlaceHolder";

class AvatarImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  handleImageError() {
    this.setState({ loaded: false });
  }

  render() {
    const { loaded } = this.state;
    const { onOpen, src } = this.props;
    const imageStyle = !loaded ? { display: "none" } : {};
    return (
      <React.Fragment>
        {!loaded && <ImagePlaceHolder />}
        <img
          src={src}
          style={imageStyle}
          className="item_row_img"
          onClick={() => onOpen(src)}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageError.bind(this)}
          alt="img-avatar"
        />
      </React.Fragment>
    );
  }
}
export default AvatarImage;
