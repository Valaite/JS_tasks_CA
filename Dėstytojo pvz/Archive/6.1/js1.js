const id = "10";

fetch("https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/" + id)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    const element = document.createElement("div");
    element.classList.add("child");
    element.innerHTML = data.destination;
    element.style.backgroundImage = "url(" + data.cityPhoto + ")";
    element.style.backgroundSize = "cover";

    document.body.append(element);
  });

// https://www.coingecko.com/api/documentations/v3
