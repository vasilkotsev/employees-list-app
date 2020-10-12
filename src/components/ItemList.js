import React from "react";
import ItemRow from "./ItemRow";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    let url = "http://hiring.rewardgateway.net/list";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let username = "medium";
    let password = "medium";

    let headers = new Headers();

    headers.set(
      "Authorization",
      "Basic " + Buffer.from(username + ":" + password).toString("base64")
    );
    headers.set("Authorization", "Basic " + btoa(username + ":" + password));

    fetch(proxyurl + url, {
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="item_list_section">
          <h1 className="item_list_section_heading">Employees List App</h1>
          <ul className="item_list">
            {items.map((item) => (
              <ItemRow key={item.uuid} item={item} />
            ))}
          </ul>
        </section>
      );
    }
  }
}

ItemList.propTypes = {};

export default ItemList;
