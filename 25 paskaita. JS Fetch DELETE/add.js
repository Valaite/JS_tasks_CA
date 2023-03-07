const form = document.querySelector("form"); 

function addProductFunction(event){
    event.preventDefault();
    const title = document.getElementById('title').value;
    const image = document.getElementById('img').value;
    const price = document.getElementById('price').value;
    const newProduct = {
        title: title,
        image: image,
        price: price,
    };
    fetch('https://golden-whispering-show.glitch.me/',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => { 
        console.log("data", data);
        const element = document.createElement("h1");
        element.innerHTML = ("Duomenys sėkmingai išsaugoti");
        document.body.append(element);
        window.location.replace("./index.html");
    })
    .catch((error) => {
      console.log(error)
    
    })
  }
form.addEventListener("submit", addProductFunction)