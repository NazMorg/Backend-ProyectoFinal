import { Router } from "express";
import { cartsManager } from "../managers/cartsManager.js";

const router = Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await cartsManager.getCartById(+id);
        if (!cart) {
            res.status(400).json({ message: "Carrito no encontrado con el ID solicitado" });
        } else {
            res.status(200).json({ message: "Carrito encontrado: ", cart });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}) 

router.post('/', async (req, res) => {
    try {
        const newCart = req.body;
        const addNewCart = await cartsManager.addCart(newCart);
        res.status(200).json({ message: "Carrito creado" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.post('/:id/product/:pid', async (req, res) => {
    try {
        const { id, pid } = req.params;
        const addProductToCart = await cartsManager.addToCart(+id, +pid);
        res.status(200).json({ message: "Producto añadido al carrito." });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})


export default router;