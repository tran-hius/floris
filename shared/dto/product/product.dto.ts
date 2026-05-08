export interface CreateVariantDTO {
  sku: string
  price: number
  discount?: number
  stock: number
  color?: string
  size?: string
}

export interface CreateImageDTO {
  url: string
  isPrimary?: boolean
  altText?: string
}

export interface CreateProductDTO {
  name: string
  description: string

  basePrice: number
  discount?: number

  isActive?: boolean

  variants: CreateVariantDTO[]
  images: CreateImageDTO[]
}
