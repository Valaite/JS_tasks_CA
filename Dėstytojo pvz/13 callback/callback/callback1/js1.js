function greeting(name) {
  alert("Hello " + name);
}

const processUserInput = (callback) => {
  var name = prompt("Please enter your name.");
  callback(name);
};

processUserInput(greeting);
