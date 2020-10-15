import React from "react";
import ItemRowAvatar from "./itemRowAvatar";
import ItemRowInfoBox from "./ItemRowInfoBox";

const ItemRow = (props) => {
  const { item, onSelectChange, onLabelChange, onLabelFocusOut } = props;
  const { avatar, rowColor } = props.item;

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
      <ItemRowAvatar src={avatar} />
      <ItemRowInfoBox
        onSelectChange={onSelectChange}
        onLabelChange={onLabelChange}
        onLabelFocusOut={onLabelFocusOut}
        item={item}
      />
    </li>
  );
};

export default ItemRow;
