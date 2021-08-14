const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    resolve(
      allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      )
    );
  });
};

const logger2 = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger2);
toggleUserState(users, "Lux").then(logger2);

// #2

// const toggleUserState = async (allUsers, userName) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );
//   return (updatedUsers);
// };

// function getResult(result) {
//   console.table(result);
// }
// /*
//  * Должно работать так
//  */
// toggleUserState(users, "Mango").then(getResult);
// toggleUserState(users, "Lux").then(getResult);

// #3

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );
//   return Promise.resolve(updatedUsers);
// };

// /*
//  * Должно работать так
//  */
// toggleUserState(users, "Mango").then((resp) => console.log(resp));
// toggleUserState(users, "Lux").then((resp) => console.log(resp));


export { users, toggleUserState, logger2 };


