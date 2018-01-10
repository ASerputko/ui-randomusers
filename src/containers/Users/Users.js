import React, { Component } from 'react';
import './Users.css';
import { Spinner, UserList, Pagination } from '../../components';

class Users extends Component {

  state = {
    isFetching: false,
    pageNumber: 1,
    pageSize: 5,
    seed: 1,
    users: []
  };

  componentDidMount() {
    this.setState({ isFetching: true }, () => this.fetchUsers());
  };

  /**
   * Fetch users limited by pageSize and pageNumber.
   */
  fetchUsers = () => {
    const { pageSize, pageNumber, seed } = this.state;

    fetch(`https://randomuser.me/api/?results=${pageSize}&page=${pageNumber}&seed=${seed}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isFetching: false,
          users: data.results
        });
      })
      .catch((error) => {
        this.setState({
          isFetching: false
        });
      });
  };

  changeActivePage = (pageNumber) => {
    this.setState({
      pageNumber,
      isFetching: true
    }, () => this.fetchUsers());
  }

  /**
   * Render spinner while data is fetching.
   * Render user list and pagination.
   */
  render() {
    const { isFetching, users, pageNumber } = this.state;

    return (
      <div className="container user-container">
        { isFetching ? <Spinner /> : <React.Fragment /> }
        <UserList users={users} />
        { users.length ? <Pagination activePage={pageNumber} changeActivePage={this.changeActivePage} /> : <React.Fragment /> }
      </div>
    );
  };
}

export default Users;
