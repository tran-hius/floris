import { Request, Response, NextFunction } from 'express'
import { ProductService } from '../services/product/product.service'

export class ProductController {
  constructor(private productService: ProductService) {}

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.productService.create(req.body)

      return res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        data: result
      })
    } catch (error) {
      next(error)
    }
  }
}
