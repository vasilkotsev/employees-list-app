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
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>LOADING...</div>;
    } else if (count === 0) return <p>There is no employees in database</p>;
    else {
      const items = paginate(allItems, currentPage, pageSize);
      return (
        <section className="item_list_section">
          <h1 className="item_list_section_heading">Employees List</h1>
          <ul className="item_list">
            {items.map((item) => (
              <ItemRow key={item.uuid} item={item} />
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
