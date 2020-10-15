// import React, { Fragment } from "react";
//import ImagePlaceholder from "./ImagePlaceholder";

// class Image extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//     };
//   }
//
//   handleImageLoaded() {
//     this.setState({ loaded: true });
//   }
//
//   render() {
//     const { loaded } = this.state;
//     const imageStyle = !loaded ? { display: "none" } : {};
//     return (
//       <div className="imageHolder">
//         {!loaded && <ImagePlaceholder />}
//         <img
//           src={this.props.src}
//           className="item_row_img"
//           onLoad={this.handleImageLoaded.bind(this)}
//         />
//       </div>
//     );
//   }
// }
// export default Image;
