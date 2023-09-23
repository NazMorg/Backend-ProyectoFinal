import { Router } from "express";
import { productsManager } from "../managers/productsManager.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const products = await productsManager.getProducts(req.query);
        if (!products.length) {
            res.status(200).json({ message: 'No se encontraron productos' });
        } else {
            res.status(200).json({ message: 'Productos encontrados', products });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productsManager.getProductById(+id);
        if (!product) {
            res.status(400).json({ message: "Producto no encontrado con el ID solicitado" });
        } else {
            res.status(200).json({ message: "Producto encontrado", product });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.post('/', async (req, res) => {
    try {
        const productData = req.body
        const added = await productsManager.addProduct(productData);
        res.status(200).json({ message: "Producto creado" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const update = await productsManager.updateProduct(+id, req.body);
        if (update === -1) {
            res.status(400).json({ message: "Producto no encontrado con el ID solicitado" });
        } else {
            res.status(200).json({ message: "Producto actualizado:", update });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await productsManager.getProductById(+id);
    if (!product) {
        res.status(400).json({ message: "Producto no encontrado con el ID solicitado" });
    } else {
        console.log(product);
    }
    try {
        const del = await productsManager.deleteProduct(+id);
        if (del === -1) {
            res.status(400).json({ message: "Producto no encontrado con el ID solicitado" });
        } else {
            res.status(200).json({ message: "Producto eliminado:", product });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
})

export default router;