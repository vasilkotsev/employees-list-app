import React from "react";
import PropTypes from "prop-types";

const ItemRowColorPickerSelect = ({ onSelectChange, rowColor, uuid }) => {
  return (
    <div className="color-picker-form-holder">
      <select
        onChange={(e) => onSelectChange(e.target.value, uuid)}
        defaultValue={rowColor}
        name="colors"
        id="colors"
        className="form-control-sm color-picker-form"
      >
        <option value="select-color">Select a color</option>
        <option value="default-color">Default color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
};

ItemRowColorPickerSelect.propTypes = {};

export default ItemRowColorPickerSelect;
