import React from "react";

const ItemRowLabel = ({ item, onLabelChange, onLabelFocusOut }) => {
  const { uuid, rowLabel } = item;
  return (
    <div className="item-row-label_input">
      <span>Label: </span>
      <input
        onChange={(e) => onLabelChange(e.target.value, uuid)}
        onBlur={(e) => onLabelFocusOut(e.target.value, uuid)}
        type="text"
        placeholder={rowLabel}
        value={rowLabel !== "Here you can add a text" ? rowLabel : ""}
        className="form-control item-row-label"
      />
    </div>
  );
};
ItemRowLabel.propTypes = {};

export default ItemRowLabel;
