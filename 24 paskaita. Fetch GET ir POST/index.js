const state = {};

const displayProperty = (adv) => {
    const propertySector = document.getElementById('propertyList');
    propertySector.innerHTML = "";

    adv.forEach(property => {
        const img = document.createElement('img');
        img.width = '100';
        img.src = property.image;
        const image = document.createElement('div');
        image.append(img);

        const price = document.createElement('h2');
        price.innerText = `${property.price}€`;

        const city = document.createElement('h6');
        city.innerText = property.city;

        const comment = document.createElement('p');
        comment.innerText = property.description;

        const divForProperty = document.createElement('div');
        divForProperty.setAttribute("class", "property-card");
        divForProperty.append(img, price, city, comment);
        propertySector.append(divForProperty);
    });
}


const fetchProperty = async () => {
    try {
        const response = await fetch('https://robust-safe-crafter.glitch.me/');
        if (response.ok) {
            const adv = await response.json();
            displayProperty(adv);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchProperty();