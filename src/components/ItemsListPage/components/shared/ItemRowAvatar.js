import React from "react";
import Image from "../../../../common/components/Image";
import PropTypes from "prop-types";

const ItemRowAvatar = ({ src, onOpen }) => {
  return (
    <div className="item_row_img_container">
      <div className="item_row_img_holder">
        <img
          className="item_row_img"
          src={src}
          alt="employee avatar"
          onClick={() => onOpen(src)}
        />
      </div>
    </div>
  );
};

ItemRowAvatar.propTypes = {};

export default ItemRowAvatar;
