// BASE URL = https://olive-bead-glazer.glitch.me

// 1.Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
// 2.Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url 
// (formatas: objektas su dviem properties: brand ir model).
// 3.Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// 4.Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)


const createTable = () => {
  const brand = document.createElement('th');
  brand.innerHTML = 'BRAND';

  const model = document.createElement('th');
  model.innerHTML = 'MODEL';

  const tr = document.createElement('tr')
  tr.append(brand, model);

  const thead = document.createElement('thead');
  thead.append(tr);

  const table = document.createElement('table');
  table.append(thead, document.createElement('tbody'));
  document.body.append(table);
}

const displayCars = (cars) => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = ' ';

  cars.forEach(car => {
    const brand = document.createElement('td');
    brand.innerText = car.brand;

    const model = document.createElement('td');
    model.innerText = car.model;

    const tr = document.createElement('tr')
    tr.append(brand, model);
    tbody.append(tr);
  })
}

createTable();


fetch("https://olive-bead-glazer.glitch.me")
.then ((res) => {
  return res.json();
})
  .then((data) => {
    displayCars(data)
    console.log(data)
  });

  