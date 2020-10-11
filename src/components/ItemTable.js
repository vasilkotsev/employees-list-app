import React from "react";

class ItemTable extends React.Component {
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
        <ul>
          {items.map((item) => (
            <li key={item.uuid}>
              <br />
              {item.company}
              <br />
              {item.bio}
              <br />
              {item.name}
              <br />
              {item.title}
              <br />
              <img src={item.avatar} alt="employ avatar" />
            </li>
          ))}
        </ul>
      );
    }
  }
}

ItemTable.propTypes = {};

export default ItemTable;
