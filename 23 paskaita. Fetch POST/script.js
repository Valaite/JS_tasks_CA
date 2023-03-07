const displayCars = (cars) => {
    const tbody = document.querySelector('tbody');
    cars.forEach(auto => {
        const brand = document.createElement('td');
        brand.innerText = auto.brand;

        const model = document.createElement('td');
        model.innerText = auto.model;

        const tr = document.createElement('tr');
        tr.append(brand, model);
        tbody.append(tr);
    })
}

const fetchCars = async () => {
    try {
        const response = await fetch('https://olive-bead-glazer.glitch.me/');
        if (response.ok) {
            const cars = await response.json();
            displayCars(cars);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchCars();



document.querySelector("form"); addEventListener("submit", myFunction);
function myFunction(event) {
    event.preventDefault();
    const brand = document.querySelector("input[name=brand]").value;
    const model = document.querySelector("input[name=model]").value;
    const newAuto =
    {
        brand: brand,
        model: model,
    };
    fetch("https://olive-bead-glazer.glitch.me/",
        {
            method: "POST",
            headers:
            {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAuto),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("data", data);
                    const element = document.createElement("h1");
                    element.innerHTML = ("Duomenys sėkmingai išsaugoti");
                    document.body.append(element);
                })
            .catch((error) => alert("Oops"));
        }

