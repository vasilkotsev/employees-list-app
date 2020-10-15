import React from "react";
import AvatarImage from "../../../../common/components/AvatarImage";

const ItemRowAvatar = ({ src, onOpen }) => {
  return (
    <div className="item_row_img_container">
      <div className="item_row_img_holder">
        <AvatarImage
          className="item_row_img"
          src={src}
          alt="employee avatar"
          onOpen={onOpen}
        />
      </div>
    </div>
  );
};

ItemRowAvatar.propTypes = {};

export default ItemRowAvatar;
