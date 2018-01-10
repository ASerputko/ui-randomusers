export const userService = {
  fetchUsers() {
    return new Promise((resolve, reject) => {
      process.nextTick(() => resolve(['user1', 'user2']));
    });
  }
}

// export default function request(url) {
//   return new Promise((resolve, reject) => {
//     const userID = parseInt(url.substr('/users/'.length), 10);
//     process.nextTick(
//       () =>
//         users[userID]
//           ? resolve(users[userID])
//           : reject({
//               error: 'User with ' + userID + ' not found.',
//             }),
//     );
//   });
// }