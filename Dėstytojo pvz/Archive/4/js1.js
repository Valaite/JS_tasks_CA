fetch(
  "https://api.coingecko.com/api/v3/coins/markets?" +
    new URLSearchParams({
      vs_currency: "eur",
      per_page: 20,
    })
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("data", data);
    data.forEach((currency) => {
      const element = document.createElement("div");
      // const img = document.createElement("img");
      // img.setAttribute("src", currency.image);
      // img.setAttribute("class", "img");

      element.classList.add("child");
      element.innerHTML = currency.symbol;
      document.body.append(element);
      // element.append(img);
    });
  });

// https://www.coingecko.com/api/documentations/v3
