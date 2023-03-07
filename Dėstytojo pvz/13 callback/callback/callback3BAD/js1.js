const users = ["Rob", "Tom"];

const addUser = (name) => {
  setTimeout(() => {
    users.push(name);
  }, 2000);
};

const getUsers = () => {
  setTimeout(() => {
    console.log(users);
  }, 1000);
};

addUser("Jerry");

getUsers();
