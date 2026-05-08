import { Product } from '../models/product/product'

export interface IProductRepository {
  findById(id: number): Promise<Product | null>

  findAll(
    limit?: number,
    offset?: number
  ): Promise<{
    data: Product[]
    pagination: {
      limit: number
      offset: number
      total: number
    }
  }>

  create(product: Product): Promise<Product>

  update(product: Product): Promise<boolean>

  delete(id: number): Promise<boolean>
}
