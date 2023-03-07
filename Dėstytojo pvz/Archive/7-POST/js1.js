const duomenys = {
  destination: value,
  price: 90,
  duration: "1.2h",
  flightCompany: "LOT",
  cityPhoto: "xxxx",
};

fetch("https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(duomenys),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
