import React from "react";
import ImagePlaceHolder from "./ImagePlaceHolder";

class ModalImage extends React.Component {
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
    const imageStyle = !loaded ? { display: "none" } : {};
    return (
      <React.Fragment>
        {!loaded && <ImagePlaceHolder />}
        <img
          src={this.props.src}
          style={imageStyle}
          className="avatar-modal-img"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageError.bind(this)}
          alt="img-avatar"
        />
      </React.Fragment>
    );
  }
}
export default ModalImage;
