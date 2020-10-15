import React from "react";
import { paginate } from "../common/utils/paginate";
import ItemsListSection from "./ItemsListPage/components/ItemsListSection";
import AvatarModal from "./ItemsListPage/components/shared/AvatarModal";

class ItemsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      pageSize: 20,
      currentPage: 1,
      searchQuery: "",
      modalAvatar: {
        isVisible: false,
        src: "",
      },
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

  handleCloseAvatar = () => {
    this.setState({ modalAvatar: { isVisible: false, src: "" } });
    document.body.style.overflow = "auto";
  };

  handleOpenAvatar = (src) => {
    this.setState({ modalAvatar: { isVisible: true, src: src } });
    document.body.style.overflow = "hidden";
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
    const { isVisible, src } = this.state.modalAvatar;

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
        <React.Fragment>
          <AvatarModal
            onClose={this.handleCloseAvatar}
            isVisible={isVisible}
            src={src}
          />
          <ItemsListSection
            onOpen={this.handleOpenAvatar}
            items={items}
            totalCount={totalCount}
            pageSize={pageSize}
            searchQuery={searchQuery}
            currentPage={currentPage}
            onSelectChange={this.handleSelectChange}
            onLabelChange={this.handleLabelChange}
            onLabelFocusOut={this.handleFocusOut}
            onChange={this.handleSearch}
            onPageChangeClick={this.handlePageChange}
          />
        </React.Fragment>
      );
    }
  }
}

export default ItemsListContainer;
