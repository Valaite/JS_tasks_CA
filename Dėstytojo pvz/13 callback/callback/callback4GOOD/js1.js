const users = ["Rob", "Tom"];

const addUser = (name, callback) => {
  setTimeout(() => {
    users.push(name);
    callback();
  }, 2000);
};

const getUsers = () => {
  setTimeout(() => {
    console.log(users);
  }, 1000);
};

addUser("Jerry", getUsers);
