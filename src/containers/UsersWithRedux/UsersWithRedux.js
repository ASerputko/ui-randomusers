import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './UsersWithRedux.css';
import { Spinner, UserList, Pagination } from '../../components';
import {
  fetchUsersUsingFetchAPI,
  fetchUsersUsingAxiosAPI,
  fetchUsersUsingUserService
} from '../../redux/entities/users/actions';

class UsersWithRedux extends Component {

  componentDidMount() {
    const { fetchUsers, users } = this.props;
    const { pageNumber, pageSize, seed } = users;

    fetchUsers({ pageNumber, pageSize, seed });
  };

  changeActivePage = (pageNumber) => {
    const { fetchUsers, users } = this.props;
    const { pageSize, seed } = users;

    fetchUsers({ pageNumber, pageSize, seed });
  };

  /**
   * Render spinner while data is fetching.
   * Render user list and pagination.
   */
  render() {
    const { isFetching, entities, pageNumber } = this.props.users;

    return (
      <div className="container user-container">
        { isFetching ? <Spinner /> : <React.Fragment /> }
        <UserList users={entities} />
        { entities.length ? <Pagination activePage={pageNumber} changeActivePage={this.changeActivePage} /> : <React.Fragment /> }
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUsers: bindActionCreators(fetchUsersUsingFetchAPI, dispatch)
    // fetchUsers: bindActionCreators(fetchUsersUsingAxiosAPI, dispatch)
    fetchUsers: bindActionCreators(fetchUsersUsingUserService, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersWithRedux);
