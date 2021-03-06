import React from 'react';
import axios from 'axios';
import DeleteAction from './DeleteAction'
import AddStudent from "./component/AddStudent"
import DeleteStudent from "./DeleteStudent";

class UserList extends React.Component {
  state = { users: [] };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = [];
        res.data.map(key =>
          users.push(
            <li key={key.id}>
              {key.name} <DeleteAction />{" "}
            </li>
          )
        );
        this.setState({ users: users });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateList(newStudent) {
    console.log(newStudent + " GET request")
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = [];
        res.data.map(key =>
          users.push(
            <li key={key.id}>
              {key.name} <DeleteAction />{" "}
            </li>
          )
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <AddStudent update={this.updateList} />
        {this.state.users}
      </React.Fragment>
    );
  }
}
 
export default UserList;

