console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const ulTag = document.querySelector("ul");
    const liTag = document.createElement("li");
    const nameTag = document.createElement("h3");
    const pricetag = document.createElement("span");
    const ratingTag = document.createElement("span");

    liTag.innerHTML;
    ulTag.appendChild(liTag);
    // console.log(products[i].name);
  }
}
renderProducts(products);
