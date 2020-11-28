console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    //   select and create tags
    const ulTag = document.querySelector("ul");
    const liTag = document.createElement("li");
    const nameTag = document.createElement("h3");
    const pricetag = document.createElement("span");
    const ratingTag = document.createElement("span");
    const br = document.createElement("br");

    // populate tags
    nameTag.innerHTML = products[i].name;
    pricetag.innerHTML = "price: " + products[i].price;
    ratingTag.innerHTML = "rating: " + products[i].rating;

    // append tags
    liTag.appendChild(nameTag);
    liTag.appendChild(pricetag);
    liTag.appendChild(br);
    liTag.appendChild(ratingTag);
    ulTag.appendChild(liTag);
  }
}
renderProducts(products);
