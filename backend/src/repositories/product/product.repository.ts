import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { Database } from '../../config/database'
import { IProductRepository } from '../../interfaces/IProductRepository'
import { Product } from '../../models/product/product'
import { logger } from '../../utils/logger'
import { ProductRow, VariantRow, ImageRow } from '~/types/db/ProductRow'

export class ProductRepository implements IProductRepository {
  private pool: Pool

  constructor() {
    this.pool = Database.getInstance()
  }

  async findById(id: number): Promise<Product | null> {
    try {
      const [productRows] = await this.pool.query<ProductRow[]>(
        `SELECT id, name, description, base_price, discount, is_active, created_at, updated_at
         FROM products
         WHERE id = ? LIMIT 1`,
        [id]
      )

      if (productRows.length === 0) return null

      const product = productRows[0]

      const [[variantRows], [imageRows]] = await Promise.all([
        this.pool.query<VariantRow[]>(
          `SELECT sku, price, discount, stock, color, size
           FROM product_variants
           WHERE product_id = ?`,
          [id]
        ),
        this.pool.query<ImageRow[]>(
          `SELECT url, is_primary, alt_text
           FROM product_images
           WHERE product_id = ?`,
          [id]
        )
      ])

      return new Product({
        id: product.id,
        name: product.name,
        description: product.description,
        basePrice: product.base_price,
        discount: product.discount,
        isActive: Boolean(product.is_active),
        createdAt: product.created_at,
        updatedAt: product.updated_at,

        variants: variantRows.map((v) => ({
          sku: v.sku,
          price: v.price,
          discount: v.discount,
          stock: v.stock,
          color: v.color ?? undefined,
          size: v.size ?? undefined
        })),

        images: imageRows.map((img) => ({
          url: img.url,
          isPrimary: Boolean(img.is_primary),
          altText: img.alt_text ?? undefined
        }))
      })
    } catch (error) {
      logger.error(`[ProductRepository] findById(${id}) error:`, error)
      throw error
    }
  }

  async findAll(limit = 20, offset = 0) {
    try {
      const [rows] = await this.pool.query<ProductRow[]>(
        `SELECT id, name, description, base_price, discount, is_active, created_at, updated_at
         FROM products
         ORDER BY created_at DESC
         LIMIT ? OFFSET ?`,
        [limit, offset]
      )

      const [countResult] = await this.pool.query<RowDataPacket[]>(`SELECT COUNT(id) as total FROM products`)

      return {
        data: rows.map(
          (row) =>
            new Product({
              id: row.id,
              name: row.name,
              description: row.description,
              basePrice: row.base_price,
              discount: row.discount,
              isActive: Boolean(row.is_active),
              createdAt: row.created_at,
              updatedAt: row.updated_at,
              variants: [],
              images: []
            })
        ),
        pagination: {
          limit,
          offset,
          total: (countResult[0] as any).total
        }
      }
    } catch (error) {
      logger.error('[ProductRepository] findAll error:', error)
      throw error
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const data = product.toJSON()

      const [result] = await this.pool.query<ResultSetHeader>(
        `INSERT INTO products 
         (name, description, base_price, discount, is_active, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          data.name,
          data.description,
          data.basePrice,
          data.discount,
          data.isActive ?? true,
          data.createdAt ?? new Date(),
          data.updatedAt ?? new Date()
        ]
      )

      const productId = result.insertId

      await Promise.all([
        ...(data.variants || []).map((v) =>
          this.pool.query(
            `INSERT INTO product_variants 
             (product_id, sku, price, discount, stock, color, size)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [productId, v.sku, v.price, v.discount, v.stock, v.color, v.size]
          )
        ),

        ...(data.images || []).map((img) =>
          this.pool.query(
            `INSERT INTO product_images 
             (product_id, url, is_primary, alt_text)
             VALUES (?, ?, ?, ?)`,
            [productId, img.url, img.isPrimary, img.altText]
          )
        )
      ])

      product.setId(productId)
      return product
    } catch (error) {
      logger.error('[ProductRepository] create error:', error)
      throw error
    }
  }

  async update(): Promise<boolean> {
    throw new Error('Not implemented')
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.pool.query(`DELETE FROM product_variants WHERE product_id = ?`, [id])

      await this.pool.query(`DELETE FROM product_images WHERE product_id = ?`, [id])

      const [result] = await this.pool.query<ResultSetHeader>(`DELETE FROM products WHERE id = ?`, [id])

      return result.affectedRows > 0
    } catch (error) {
      logger.error(`[ProductRepository] delete(${id}) error:`, error)
      throw error
    }
  }
}
