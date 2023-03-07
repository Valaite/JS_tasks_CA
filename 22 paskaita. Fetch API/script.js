const state = {};

const createCheckbox = () => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'checkbox');
  document.body.append(checkbox);

  const label = document.createElement('label');
  label.innerText = 'VIP';
  document.body.append(label);
}

const createSearchForm = () => {
  const searchBox = document.createElement('input');
  searchBox.setAttribute('id', 'search');
  document.body.appendChild(searchBox);

  const button = document.createElement('button');
  button.innerHTML = 'Search for name';

  const form = document.createElement('form');
  form.append(searchBox, button);
  document.body.append(form);
}

const createTable = () => {
  const id = document.createElement('th');
  id.innerText = 'ID';

  const img = document.createElement('th');
  img.innerText = "Picture";

  const firstName = document.createElement('th');
  firstName.innerText = "First Name";

  const secondName = document.createElement('th');
  secondName.innerText = "Second Name";

  const city = document.createElement('th');
  city.innerText = "City";

  const fav_color = document.createElement('th');
  fav_color.innerText = 'FavColor';

  const tr = document.createElement('tr');
  tr.append(id, img, firstName, secondName, city, fav_color);

  const thead = document.createElement('thead');
  thead.append(tr);

  const table = document.createElement('table');
  table.append(thead, document.createElement('tbody'));
  document.body.append(table);

}

function populateTable(users) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  users.forEach(user => {
    const id = document.createElement('td');
    id.innerText = user.id

    const img = document.createElement('img');
    img.width = '60';
    img.src = user.image;
    const image = document.createElement('td');
    image.append(img);

    const [name, surname] = user.name.split(' ');

    const firstName = document.createElement('td');
    firstName.innerText = name;

    const secondName = document.createElement('td');
    secondName.innerText = surname;

    const city = document.createElement('td');
    city.innerText = user.city;

    const favColor = document.createElement('td');
    favColor.innerText = user.fav_color;

    const tr = document.createElement('tr')
    tr.append(id, img, firstName, secondName, city, favColor);
    tbody.append(tr);
  });
}

createCheckbox();
createSearchForm();
createTable();

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const searchString = document.getElementById('search').value.toLowerCase();
  const filteredData = state.users.filter(user => user.name.toLowerCase().includes(searchString));

  populateTable(filteredData);
})

document.getElementById('checkbox').addEventListener('change', (event) => {
  populateTable(event.target.checked ? state.users.filter(user => user.vip) : state.users);
});

async function fetchData() {
  try {
    let response = await fetch('https://magnetic-melon-yam.glitch.me');
    if (response.ok) {
      state.users = await response.json();
      populateTable(state.users);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();