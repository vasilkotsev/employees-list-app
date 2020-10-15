import React from "react";

const ItemRowInfoText = ({ label, text }) => {
  return (
    <p className="item_company">
      <span>{label}</span>
      {text}
    </p>
  );
};

ItemRowInfoText.propTypes = {};

export default ItemRowInfoText;
