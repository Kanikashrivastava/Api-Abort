import React, { Component } from "react";
import { indexServices } from "../../services/index";

class Gender extends Component {
  state = {
    users: null
  };

  getUsers = async () => {
    const res = await indexServices.getUser();
    this.setState({
      users: res ? res.data.results : []
    });
  };
  componentWillUnmount() {
    this.indexServices.abort();
  }

  render() {
    return (
      <>
        <input type="button" value="Cancel" onClick={this.getUsers} />
        <div>
          {this.state.users &&
            this.state.users
              .slice(0, 1)
              .map((value, key) => (
                <h2 key={value.id}>name : {value.gender}</h2>
              ))}
        </div>
      </>
    );
  }
}
export default Gender;
