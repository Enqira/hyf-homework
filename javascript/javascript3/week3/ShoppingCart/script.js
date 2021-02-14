const usersURL = "https://jsonplaceholder.typicode.com/users/1"
const exchangeURL = "https://api.exchangerate-api.com/v4/latest/dkk"

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  convertToCurrency(currency) {
    fetch(exchangeURL)
      .then(res => res.json())
      .then(data => {
        const num = Math.round(this.price * data.rates[currency])
        console.log(`${num} ${currency}`)
      })
  }
}

class ShoppingCart {
  constructor() {
    this.products = []
  }

  addProduct(product) {
    // Implement functionality here
    return this.products.push(product)
  }

  removeProduct(product) {
    // Implement functionality here
    return (this.products = this.products.filter(name => name != product))
  }

  searchProduct(productName) {
    // Implement functionality here
    return this.products.filter(product => product.name === productName.name)
  }

  getTotal() {
    // Implement functionality here
    return this.products.forEach(product => {
      let totalPrice = 0
      totalPrice += product.price
    })
  }

  renderProducts() {
    // Implement functionality here
    const cart = document.getElementById("cart")

    this.products.forEach(item => {
      const li = document.createElement("li")

      li.textContent = `Product name: ${item.name} - Price: ${item.price} dkk`

      cart.appendChild(li)
    })
  }
  getUser() {
    // Implement functionality here
    const getUser = new Promise(reslove => reslove(fetch(usersURL)))
      .then(response => response.json())
      .then(data => {
        const user = document.getElementById("user")
        const h3 = document.createElement("h3")
        h3.textContent = `User : ${data.name}`
        user.appendChild(h3)
      })
  }
}

const shoppingCart = new ShoppingCart()
const smartphone = new Product("smartphone", 5000)
const curvedscreen = new Product("curved-screen", 4000)
const computer = new Product("computer", 7000)
shoppingCart.addProduct(smartphone)
shoppingCart.addProduct(curvedscreen)
shoppingCart.addProduct(computer)
shoppingCart.getUser()
shoppingCart.removeProduct(smartphone)
shoppingCart.renderProducts()

// console.log(smartphone.convertToCurrency("EUR"))

computer.convertToCurrency("EUR")
smartphone.convertToCurrency("USD")
