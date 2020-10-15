import React from "react";
import SearchBox from "../../../common/components/SearchBox";
import ItemRow from "./shared/ItemRow";
import Pagination from "../../../common/components/Pagination";
import ItemsList from "./shared/ItemsList";
import AvatarModal from "./shared/AvatarModal";

const ItemsListSection = ({
  items,
  totalCount,
  searchQuery,
  pageSize,
  currentPage,
  onSelectChange,
  onLabelChange,
  onLabelFocusOut,
  onChange,
  onPageChangeClick,
  onOpen,
}) => {
  return (
    <section className="item_list_section">
      <h1 className="item_list_section_heading">Employees List</h1>
      <SearchBox value={searchQuery} onChange={onChange} />
      <ItemsList className="item_list">
        {items.map((item) => (
          <ItemRow
            key={item.uuid}
            item={item}
            onSelectChange={onSelectChange}
            onLabelChange={onLabelChange}
            onLabelFocusOut={onLabelFocusOut}
            onOpen={onOpen}
          />
        ))}
      </ItemsList>
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChangeClick={onPageChangeClick}
      />
    </section>
  );
};

ItemsListSection.propTypes = {};

export default ItemsListSection;
