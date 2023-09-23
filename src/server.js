import express from 'express';
import productsRouter from './router/products.router.js';
import cartsRouter from './router/carts.router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers:
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


app.listen(8080, () => {
    console.log('Escuchando puerto 8080...');
})