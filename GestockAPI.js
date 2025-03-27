
import axios from 'axios';

class GestockAPI {
  constructor(baseURL = 'https://lnd-api-gestock.onrender.com') {
    this.client = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async getProducts(uid) {
    if (!uid) throw new Error('El UID es obligatorio.');
    const response = await this.client.get(`/products`, { params: { uid } });
    return response.data;
  }

  async createProduct(uid, name, price) {
    if (!uid || !name || !price) throw new Error('UID, name y price son obligatorios.');
    const response = await this.client.post('/products', { uid, name, price });
    return response.data;
  }
}

export default GestockAPI;
