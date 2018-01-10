class UserService {

  fetchUsers({ pageSize, pageNumber, seed}) {
    return fetch(`https://randomuser.me/api/?results=${pageSize}&page=${pageNumber}&seed=${seed}`)
      .then((res) => res.json())
      .then((data) => data.results);
  }
}

const userService = new UserService();

export { userService };
