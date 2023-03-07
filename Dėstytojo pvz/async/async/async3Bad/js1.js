const badFunc = (resolve, reject) => {
  setTimeout(() => {
    return "fail";
  }, 3000);
};

const goodFunc = () => {
  return "works";
};

// const result = badFunc();
const result = goodFunc();

console.log(result);
