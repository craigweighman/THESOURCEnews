import React, { Component } from "react";
import * as api from "../../api/api";
import UserCard from "../cards/UserCard";
import PostUser from "../PostUser";

class Users extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">users</h2>
          <br />
          <div className="section-main">
            {users.map(user => (
              <div key={user.username}>
                <UserCard users={user} />
              </div>
            ))}
          </div>
          <br />
        </div>
        <div className="main-section-head">
          <h2 className="section-title">add user</h2>
          <br />
          <div className="section-main">
            <PostUser />
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };
}

export default Users;