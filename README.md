# Gestock API
Gestock API is a client library to interact with the product management API on Firebase

## Installation
You can install the library from npm with:
```
npm install gestock-api
```

## Usage
Import the GestockAPI class into your project:

```js
import GestockAPI from "gestock-api";

const api = new GestockAPI();
```

### Get products
To retrieve the list of products associated with a user, call getProducts(uid), providing the user's Firebase uid:

```js
async function fetchProducts() {
  try {
    const products = await api.getProducts("EdnrTi9G41ajFv8tjj1qoj5rcv43");
    console.log("Products:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
```

### Create a Product
```js
async function addProduct() {
  try {
    const newProduct = await api.createProduct("EdnrTi9G41ajFv8tjj1qoj5rcv43", "New Product", 100);
    console.log("Product created:", newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

addProduct();
```

# API

getProducts(uid): Returns the list of products associated with the given uid.

createProduct(uid, name, price): Creates a new product with the specified name and price, associated with the given uid.