const getRandomCocktail = async () => {
  const cocktail = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/random.php"
  );

  console.log("cocktail", cocktail.ok);
};
