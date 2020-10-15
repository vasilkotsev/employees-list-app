import React from "react";
import PropTypes from "prop-types";

const ItemRowAvatar = ({ src }) => {
  return (
    <div className="item_row_img_container">
      <div className="item_row_img_holder">
        <img className="item_row_img" src={src} alt="employee avatar" />
      </div>
    </div>
  );
};

ItemRowAvatar.propTypes = {};

export default ItemRowAvatar;
