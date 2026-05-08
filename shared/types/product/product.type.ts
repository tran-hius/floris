
export interface FlowerVariantProps {
  sku: string
  price: number
  discount: number
  stock: number
  color?: string
  size?: string
}

export interface FlowerImageProps {
  url: string
  isPrimary: boolean
  altText?: string
}

export interface FlowerProps {
  id?: number
  name: string
  description: string
  basePrice: number
  discount: number
  variants: FlowerVariantProps[]
  images: FlowerImageProps[]
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}
