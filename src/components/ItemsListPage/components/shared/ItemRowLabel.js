import React from "react";
import PropTypes from "prop-types";

const ItemRowLabel = ({ item, onLabelChange, onLabelFocusOut }) => {
  const { uuid, rowLabel } = item;
  return (
    <div className="label_input">
      <span>Label: </span>
      <input
        onChange={(e) => onLabelChange(e.target.value, uuid)}
        onBlur={(e) => onLabelFocusOut(e.target.value, uuid)}
        type="text"
        placeholder={rowLabel}
        value={rowLabel !== "Here you can add a text" ? rowLabel : ""}
        className="label"
      />
    </div>
  );
};
ItemRowLabel.propTypes = {};

export default ItemRowLabel;
