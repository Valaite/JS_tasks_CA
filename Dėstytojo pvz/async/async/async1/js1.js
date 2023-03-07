const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ tekstas: "works" });
    // reject("labas, sufeilino nes servisas labai apkrautas");
  }, 2000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log("err", err));
