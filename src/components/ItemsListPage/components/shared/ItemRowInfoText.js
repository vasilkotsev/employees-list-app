import React from "react";
import PropTypes from "prop-types";
import ItemRowInfoBoxWrapper from "./ItemRowInfoBoxWrapper";

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
