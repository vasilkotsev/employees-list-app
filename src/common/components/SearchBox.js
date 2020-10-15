import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3 search-box"
      placeholder="Search by labels..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBox;
