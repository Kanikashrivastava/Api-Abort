import React, { Component } from "react";
import { indexServices } from "../../services/index";

class Users extends Component {
  state = {
    githubUsers: null,
  };

  getUser = async () => {
    const res = await indexServices.getUsers();
    this.setState({
      githubUsers: res ? res.data.results : []
    });
  };

  componentWillUnmount() {
    this.indexServices.abort();
  }

  render() {
    return (
      <>
        <input type="button" value="Show" onClick={this.getUser} />

        <div>
          {this.state.githubUsers &&
            this.state.githubUsers.map((value, key) => (
              <h2 key={value.id}>name : {value.email}</h2>
            ))}
        </div>
      </>
    );
  }
}
export default Users;
