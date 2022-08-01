import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../Controllers/ProductController";

const router =Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/',createProduct)
router.patch('/:id',updateProduct)
router.delete('/:id', deleteProduct)

export default router



