import React from "react";
import PropTypes from "prop-types";
import ItemRowInfoBoxWrapper from "./ItemRowInfoBoxWrapper";
import ItemRowColorPickerSelect from "./ItemRowColorPickerSelect";
import ItemRowInfoText from "./ItemRowInfoText";
import ItemRowLabel from "./ItemRowLabel";

const ItemRowInfoBox = ({
  item,
  onSelectChange,
  onLabelChange,
  onLabelFocusOut,
}) => {
  const { rowColor, uuid, company, name, title, bio } = item;

  return (
    <ItemRowInfoBoxWrapper>
      <ItemRowColorPickerSelect
        onSelectChange={onSelectChange}
        rowColor={rowColor}
        uuid={uuid}
      />
      <ItemRowInfoText label="Company: " text={company} />
      <ItemRowInfoText label="Person name: " text={name} />
      <ItemRowInfoText label="Job title: " text={title} />
      <ItemRowInfoText label="Bio: " text={bio} />
      <ItemRowLabel
        item={item}
        onLabelChange={onLabelChange}
        onLabelFocusOut={onLabelFocusOut}
      />
    </ItemRowInfoBoxWrapper>
  );
};

ItemRowInfoBox.propTypes = {};

export default ItemRowInfoBox;
