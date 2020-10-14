import React from "react";
import PropTypes from "prop-types";

const ItemRow = (props) => {
  const {
    uuid,
    bio,
    name,
    title,
    avatar,
    company,
    rowColor,
    rowLabel,
  } = props.item;
  const { onSelectChange } = props;

  function getItemRowColorClassName(rowColor) {
    let className;
    switch (rowColor) {
      case "yellow":
        className = "yellow";
        break;
      case "green":
        className = "green";
        break;
      case "blue":
        className = "blue";
        break;
      case "red":
        className = "red";
        break;
      default:
        className = "";
    }
    return className;
  }

  return (
    <li className={["item_row", getItemRowColorClassName(rowColor)].join(" ")}>
      <div className="item_row_img_container">
        <div className="item_row_img_holder">
          <img className="item_row_img" src={avatar} alt="employee avatar" />
        </div>
      </div>
      <div className="item_row_info_box">
        <div className="color-picker-form-holder">
          <select
            onChange={(e) => onSelectChange(e.target.value, uuid)}
            defaultValue={rowColor}
            name="colors"
            id="colors"
            className="color-picker-form"
          >
            <option value="select-color">Select a color</option>
            <option value="default-color">Default color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
        </div>
        <p className="item_company">
          <span>Company: </span>
          {company}
        </p>
        <p className="item_name">
          <span>Person name: </span>
          {name}
        </p>
        <p className="item_job_title">
          <span>Job title: </span>
          {title}
        </p>
        <p className="item bio">
          <span>Bio: </span>
          {bio}
        </p>
      </div>
    </li>
  );
};

ItemRow.propTypes = {};

export default ItemRow;
