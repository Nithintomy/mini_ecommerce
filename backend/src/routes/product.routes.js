


import express from 'express'
import protect from '../middleware/auth.middleware.js'
import { createProduct, deleteProduct, getProducts, getProductsById, getProductsBySlug, updateProduct } from '../controllers/product.controller.js'
import { authorize } from '../middleware/role.middleware.js'

const productRoutes = express.Router()


productRoutes.get('',getProducts)
productRoutes.get('/:slug',getProductsBySlug)
productRoutes.get('/id/:id',getProductsById)


// Admin Only Routes

productRoutes.post('/',protect,authorize, createProduct)
productRoutes.put('/:id',protect, authorize,updateProduct)
productRoutes.delete('/',protect,authorize, deleteProduct)



export default productRoutes