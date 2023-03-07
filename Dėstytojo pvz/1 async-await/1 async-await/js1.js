const getRandomCocktail = async () => {
  const cocktail = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/random.php"
  ).then((res) => {
    return res.json();
  });

  console.log("cocktail", cocktail.drinks[0]);
};
