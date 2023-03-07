const id = "10";
let data;
const fetchAndDisplayData = async () => {
  data = await fetch(
    "https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/" + id
  ).then((res) => {
    return res.json();
  });

  const element = document.createElement("div");
  element.classList.add("child");
  element.innerHTML = data.destination;
  element.style.backgroundImage = "url(" + data.cityPhoto + ")";
  element.style.backgroundSize = "cover";

  document.body.append(element);
  console.log("data 1", data);
};

console.log("data 2", data);

fetchAndDisplayData();

// https://www.coingecko.com/api/documentations/v3
