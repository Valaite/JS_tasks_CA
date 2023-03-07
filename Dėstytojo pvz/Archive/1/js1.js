fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.drinks[0]);
  });
