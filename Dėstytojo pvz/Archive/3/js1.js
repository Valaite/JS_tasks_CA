fetch(
  "https://api.coingecko.com/api/v3/coins/markets?" +
    new URLSearchParams({
      vs_currency: "usd",
      per_page: 10,
      page: 1,
    })
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// https://www.coingecko.com/api/documentations/v3
