fetch("https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
