
import GestockAPI from "../GestockAPI.js";

const api = new GestockAPI();

async function main() {
  try {
    
    const products = await api.getProducts("Your UID");
    console.log("Productos:", products);
    
    
    const newProduct = await api.createProduct("Your UID", "Producto Nuevo", 100);
    console.log("Producto creado:", newProduct);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
