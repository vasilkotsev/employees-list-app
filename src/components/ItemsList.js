import React from "react";
import ItemRow from "./ItemRow";
import Pagination from "./common/Pagination";
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

  render() {
    const {
      error,
      isLoaded,
      items: allItems,
      pageSize,
      currentPage,
    } = this.state;
    const { length: count } = this.state.items;

    if (error) {
      return <div style={{ textAlign: "center" }}>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{ textAlign: "center" }}>LOADING...</div>;
    } else if (count === 0)
      return (
        <p style={{ textAlign: "center" }}>There is no employees in database</p>
      );
    else {
      const items = paginate(allItems, currentPage, pageSize);
      return (
        <section className="item_list_section">
          <h1 className="item_list_section_heading">Employees List</h1>
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
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChangeClick={this.handlePageChange}
          />
        </section>
      );
    }
  }
}

ItemsList.propTypes = {};

export default ItemsList;
