const tripsWrapper = document.getElementById('trips');

let allTrips;

const deleteItem = (id) => {
  fetch(
    `https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/${id}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => {
      console.log('Trip was deleted successfully');
      tripsWrapper.innerHTML = '';
      getAllTrips();
    })
    .catch((err) => {
      console.log('err', err);
    });
};

const createTrip = (trip) => {
  const tripWrapper = document.createElement('div');
  tripWrapper.classList.add('trip');

  const tripImageWrapper = document.createElement('div');
  tripImageWrapper.classList.add('trip-image-section');
  tripImageWrapper.style.backgroundImage = `url(${trip.cityPhoto})`;

  const titleSection = document.createElement('div');
  titleSection.classList.add('title-section');

  const title = document.createElement('div');
  title.classList.add('title');

  const buttonSection = document.createElement('div');
  buttonSection.classList.add('button-section');

  const button = document.createElement('button');
  button.classList.add('button');

  const tripPrice = document.createElement('div');
  tripPrice.classList.add('trip-price');
  tripPrice.innerHTML = `${trip.price}$`;

  const removeItemButton = document.createElement('button');
  removeItemButton.classList.add('remove-item');
  removeItemButton.innerHTML = 'X';
  removeItemButton.addEventListener('click', () => {
    deleteItem(trip.id);
  });

  title.innerHTML = trip.destination;
  button.innerHTML = 'Placiau';

  buttonSection.append(button);
  titleSection.append(removeItemButton, tripPrice, title, buttonSection);
  tripWrapper.append(tripImageWrapper, titleSection);
  tripsWrapper.append(tripWrapper);
};

const getAllTrips = async () => {
  allTrips = await fetch(
    'https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius'
  ).then((response) => {
    return response.json();
  });
  console.log('all', allTrips);

  allTrips.forEach((trip) => {
    createTrip(trip);
  });
};

getAllTrips();

const filterButton = document.getElementById('filter-button');

filterButton.addEventListener('click', () => {
  const filterValue = document.getElementById('filter-input').value;

  const filteredData = allTrips.filter((trip) =>
    trip.destination.includes(filterValue)
  );

  tripsWrapper.innerHTML = '';

  filteredData.forEach((trip) => {
    createTrip(trip);
  });

  console.log('filteredData', filteredData);
});

const getCityButton = document.getElementById('addCityButton');

getCityButton.addEventListener('click', () => {
  const priceValue = document.getElementById('price-input').value;
  const durationValue = document.getElementById('duration-input').value;
  const companyValue = document.getElementById('company-input').value;
  const cityPhoto = document.getElementById('city-photo-input').value;
  const destinationValue = document.getElementById('destination-input').value;

  const data = {
    destination: destinationValue,
    price: priceValue,
    duration: durationValue,
    flightCompany: companyValue,
    cityPhoto: cityPhoto,
  };

  fetch('https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log('success!!!!!', data);

      tripsWrapper.innerHTML = '';
      getAllTrips();
    });
});
