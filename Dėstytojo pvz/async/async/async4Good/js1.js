const badFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("works");
    }, 2000);
  });
};

const result = badFunc();

badFunc()
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

// console.log(result);
