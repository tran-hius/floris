import { RowDataPacket } from 'mysql2/promise'

export interface ProductRow extends RowDataPacket {
  id: number
  name: string
  description: string
  base_price: number
  discount: number
  is_active: number
  created_at: Date
  updated_at: Date
}

export interface VariantRow extends RowDataPacket {
  sku: string
  price: number
  discount: number
  stock: number
  color: string | null
  size: string | null
}

export interface ImageRow extends RowDataPacket {
  url: string
  is_primary: number
  alt_text: string | null
}
