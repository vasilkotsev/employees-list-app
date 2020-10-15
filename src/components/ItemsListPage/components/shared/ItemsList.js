import React from "react";

const ItemsList = ({ children }) => {
  return <ul className="item_list">{children}</ul>;
};

ItemsList.propTypes = {};

export default ItemsList;
