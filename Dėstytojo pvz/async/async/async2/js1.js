const func = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && password) {
        resolve("Stuff worked!");
      } else {
        reject(Error("It broke"));
      }
    }, 2000);
  });
};

func("rob", "slaptazodis")
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => console.log("err", err));
