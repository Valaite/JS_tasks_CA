fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById("wrapper").innerHTML =
      data.drinks[0].strInstructions;

    console.log(data.drinks);
  });
