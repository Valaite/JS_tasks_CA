
const form = document.querySelector("form"); 

function addPropertyFunction(event){
    event.preventDefault();
    const image = document.getElementById('img').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const city = document.getElementById('city').value;
    const newProperty = {
        image: image,
        price: price,
        description: description,
        city: city,
    }
    fetch('https://robust-safe-crafter.glitch.me/',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => { 
      console.log(data);
     
    })
    .catch((error) => {
      console.log(error)
    
    })
  }
form.addEventListener("submit", addPropertyFunction)