import React from "react";
import PropTypes from "prop-types";

const ItemsList = ({ children }) => {
  return <ul className="item_list">{children}</ul>;
};

ItemsList.propTypes = {};

export default ItemsList;
