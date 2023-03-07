
const getCarInfo = () => {
 let carInfo = {
    brand: document.getElementById('brand').value,
    model: document.getElementById('model').value,
 };

 fetch("https://olive-bead-glazer.glitch.me", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(carInfo),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => { 
    console.log(data);
    document.getElementById('notification').innerHTML = 'duomenys sekmingai ivesti';
  })
  .catch((error) => {
    console.log(error)
    document.getElementById('notification').innerHTML = 'error'
  })
  





