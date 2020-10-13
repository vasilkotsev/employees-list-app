import React from "react";
import PropTypes from "prop-types";

const ItemRow = (props) => {
  //console.log(props);
  const { bio, name, title, avatar, company } = props.item;

  return (
    <li className="item_row">
      <div className="item_row_img_container">
        <div className="item_row_img_holder">
          <img className="item_row_img" src={avatar} alt="employee avatar" />
        </div>
      </div>
      <div className="item_row_info_box">
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
