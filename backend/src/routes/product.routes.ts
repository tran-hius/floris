import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'
import { ProductRepository } from '../repositories/product/product.repository'
import { ProductService } from '../services/product/product.service'

const router = Router()

const productRepository = new ProductRepository()
const productService = new ProductService(productRepository)
const productController = new ProductController(productService)

router.post('/', productController.createProduct)

export default router
