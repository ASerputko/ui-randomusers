import React, { Component } from 'react';
import './Users.css';
import { Spinner, Pagination } from '../../components';
import UserList from './UserList';

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

  /**
   * Render spinner.
   */
  renderSpiner = () => {
    return (
      <Spinner />
    );
  };

  /**
   * Render users and pagination.
   */
  renderUsers = () => {
    const { users, pageNumber } = this.state;

    return (
      <React.Fragment>
        <UserList users={users} />
        <Pagination activePage={pageNumber} />
      </React.Fragment>
    );
  };


  /**
   * Render spinner while data is fetching.
   * Render user list and pagination.
   */
  render() {
    const { isFetching } = this.state;

    return (
      <div className="container">
        { isFetching ? this.renderSpiner() : this.renderUsers() }
      </div>
    );
  };
}

export default Users;
