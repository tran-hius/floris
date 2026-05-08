import { CreateProductDTO } from '../../../../shared/dto/product/product.dto'
import { IProductRepository } from '../../interfaces/IProductRepository'
import { Image } from '../../models/product/image'
import { Variant } from '../../models/product/variant'
import { generateSku } from '../../utils/generate.sku'
import { Product } from '../../models/product/product'
import { logger } from '../../utils/logger'
import { NotFoundError } from '../../utils/errors'

export class ProductService {
  constructor(private productRepository: IProductRepository) {}

  async create(data: CreateProductDTO) {
    try {
      const variants = data.variants.map((v, index) => {
        const sku = generateSku(data.name, index)
        return new Variant({
          ...v,
          sku,
          discount: v.discount ?? 0
        })
      })

      const images = data.images.map((img, index) => {
        return new Image({
          ...img,
          isPrimary: img.isPrimary ?? index === 0
        })
      })

      const product = new Product({
        name: data.name,
        description: data.description,
        basePrice: data.basePrice,
        discount: data.discount ?? 0,
        variants: variants.map((v) => v.toJSON()),
        images: images.map((i) => i.toJSON()),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      const savedProduct = await this.productRepository.create(product)

      return savedProduct.toJSON()
    } catch (error) {
      logger.error('[ProductService]: Create product failed', error)
      throw error
    }
  }

  async findById(id: number) {
    const product = await this.productRepository.findById(id)

    if (!product) {
      throw new NotFoundError('Product not found')
    }

    return product.toJSON()
  }

  async findAll(limit = 10, offset = 0) {
    const result = await this.productRepository.findAll(limit, offset)

    return {
      data: result.data.map((p) => p.toJSON()),
      pagination: result.pagination
    }
  }

  async delete(id: number) {
    try {
      const product = await this.productRepository.findById(id)

      if (!product) {
        throw new Error('Product not found')
      }

      const success = await this.productRepository.delete(id)

      if (!success) {
        throw new Error('Delete failed')
      }

      return { message: 'Product deleted successfully' }
    } catch (error) {
      logger.error('[ProductService]: Delete failed', error)
      throw error
    }
  }
}
