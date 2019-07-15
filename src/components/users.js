import React, { Component } from "react";
// import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
// import { indexServices } from "../services/index";
import axios from 'axios';


const URL = `https://randomuser.me/api/`;

class Users extends Component {
  state = {
    githubUsers: '',
  };

  abortController = new AbortController();

  componentWillMount() {
    this.getUser();
  }

  getUser = async () => {
    try{
    const res = await axios.get(URL,{signal:this.abortController.signal});
    this.setState({
      githubUsers: res.data.results
    })
    }catch(error) {
      if (error.name === 'AbortError') return; 
      throw error; 
    };
  };
  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    return (
      <>
        <input type="button" value="Show" onClick={this.getUser} />
        {!this.state.githubUsers ? 
        <p>LOading wait...</p>:
        <div>
          {this.state.githubUsers &&
            this.state.githubUsers.map((value, key) => (
              <h2 key={value.id}>name : {value.email}</h2>
            ))}
        </div>
        }
      </>
    );
  }
}
export default Users;
