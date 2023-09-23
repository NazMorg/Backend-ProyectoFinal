import fs from 'fs';

class CartsManager {
    constructor(path) {
        this.path = path
    }
    async getCarts() {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const carts = JSON.parse(data);
                return carts;
            } else {
                const carts = [];
                await fs.promises.writeFile(this.path, JSON.stringify(carts))
                return carts;
            }
        } catch (error) {
            return error;
        }
    }
    async addCart() {
        try{
            const carts = await this.getCarts();
            let id, products;
            if(!carts.length){
                id = 1;
                products = []; 
            } else {
                id = carts[carts.length - 1].id + 1;
                products = [];
            }
            carts.push({id, products});
            await fs.promises.writeFile(this.path, JSON.stringify(carts));
        } catch (error) {
            return error;
        }
    }
    async getCartById(id) {
        try {
            const carts = await this.getCarts();
            const cart = carts.find((c) => c.id === id);
            return cart;
        } catch (error) {
            return error;
        }
    }
    async addToCart(id, pid) {
        try {
            const carts = await this.getCarts();
            let cart = await this.getCartById(+id);

            const productIndex = cart.products.findIndex((product) => product.product === +pid);
            if(productIndex === -1) {
                cart.products.push({ product:+pid, quantity:1 });
            } else {
                cart.products[productIndex].quantity += 1;
            }
            
            const cartIndex = carts.findIndex((cart) => cart.id === +id);
            carts[cartIndex] = cart;

            await fs.promises.writeFile(this.path, JSON.stringify(carts));
        } catch (error) {
            return error;
        }
    }
}

export const cartsManager = new CartsManager('carts.json');