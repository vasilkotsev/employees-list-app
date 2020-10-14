import React from "react";
import ItemRow from "./ItemRow";
import Pagination from "./common/Pagination";
import SearchBox from "./common/SearchBox";
import { paginate } from "../utils/paginate";

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      pageSize: 20,
      currentPage: 1,
      searchQuery: "",
    };
  }

  componentDidMount() {
    let url = "https://hiring.rewardgateway.net/list";
    let username = "medium";
    let password = "medium";

    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          result.map((item) => {
            item.rowColor = "default color";
            item.rowLabel = "Here you can add a text";
            return item;
          });
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectChange = (value, id) => {
    const items = [...this.state.items];
    const item = items.find((m) => m.uuid === id);
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].rowColor = value;
    this.setState({ items });
  };

  handleLabelChange = (value, id) => {
    const items = [...this.state.items];
    const item = items.find((m) => m.uuid === id);
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (value !== " ") {
      items[index].rowLabel = value;
      this.setState({ items });
    }
  };

  handleFocusOut = (value, id) => {
    if (value.trim() === "") {
      const items = [...this.state.items];
      const item = items.find((m) => m.uuid === id);
      const index = items.indexOf(item);
      items[index] = { ...item };
      items[index].rowLabel = "Here you can add a text";
      this.setState({ items });
    }
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    const {
      error,
      isLoaded,
      items: allItems,
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;
    const { length: count } = this.state.items;
    console.log(allItems);

    if (error) {
      return <div style={{ textAlign: "center" }}>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{ textAlign: "center" }}>LOADING...</div>;
    } else if (count === 0)
      return (
        <p style={{ textAlign: "center" }}>There is no employees in database</p>
      );
    else {
      let filteredItems = allItems;
      if (searchQuery) {
        filteredItems = allItems.filter((m) =>
          m.rowLabel.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      }
      const items = paginate(filteredItems, currentPage, pageSize);
      const { length: totalCount } = filteredItems;

      return (
        <section className="item_list_section">
          <h1 className="item_list_section_heading">Employees List</h1>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <ul className="item_list">
            {items.map((item) => (
              <ItemRow
                key={item.uuid}
                item={item}
                onSelectChange={this.handleSelectChange}
                onLabelChange={this.handleLabelChange}
                onLabelFocusOut={this.handleFocusOut}
              />
            ))}
          </ul>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChangeClick={this.handlePageChange}
          />
        </section>
      );
    }
  }
}

export default ItemsList;
