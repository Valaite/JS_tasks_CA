const productSector = document.getElementById('productList');

let allProducts;

const deleteItem = (id) => {
    fetch(
        `https://golden-whispering-show.glitch.me/${id}`,
        {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
    )
        .then((res) => {
            console.log('Product was deleted successfully');
            productSector.innerHTML = '';
            fetchProducts();
        })
        .catch((err) => {
            console.log('err', err);
        });
}

const displayProduct = (product) => {
  
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = product.title;

    const price = document.createElement('h1');
    price.classList.add('price');
    price.innerText = `${product.price} €`;

    const removeItemButton = document.createElement('button');
    removeItemButton.classList.add('remove-item');
    removeItemButton.innerHTML = 'Ištrinti';
    removeItemButton.addEventListener('click', () => {
        deleteItem(product.id);
    });

    const divForProduct = document.createElement('div');
    divForProduct.setAttribute("class", "product-card");
    divForProduct.append(img, title, price, removeItemButton);
    productSector.append(divForProduct);
};


const fetchProducts = async () => {
    allProducts = await fetch(
        'https://golden-whispering-show.glitch.me/'
    ).then((response) => {
        return response.json();
    });
    console.log('all', allProducts);

    allProducts.sort((a, b) => a.price - b.price);

    allProducts.forEach((product) => {

        displayProduct(product);

    });
};

fetchProducts();

