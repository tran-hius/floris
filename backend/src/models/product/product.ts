import { FlowerProps } from '@shared/types/product/product.type'
import { Variant } from './variant'
import { Image } from './image'

export class Product {
  private props: Omit<FlowerProps, 'variants' | 'images'> & {
    variants: Variant[]
    images: Image[]
  }

  constructor(props: FlowerProps) {
    this.props = {
      ...props,
      variants: props.variants.map((v) => new Variant(v)),
      images: props.images.map((i) => new Image(i)),
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date()
    }
  }

  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  get variants() {
    return this.props.variants
  }

  get images() {
    return this.props.images
  }

  setId(id: number) {
    if (this.props.id) {
      throw new Error('ID already set')
    }
    this.props.id = id
  }

  // ===== PRODUCT INFO =====
  updateName(name: string) {
    if (!name.trim()) throw new Error('Name required')
    this.props.name = name
    this.touch()
  }

  updatePrice(price: number) {
    if (price < 0) throw new Error('Price invalid')
    this.props.basePrice = price
    this.touch()
  }

  updateDiscount(discount: number) {
    this.props.discount = discount
    this.touch()
  }

  activate() {
    this.props.isActive = true
    this.touch()
  }

  deactivate() {
    this.props.isActive = false
    this.touch()
  }

  addVariant(variant: Variant) {
    const exists = this.props.variants.some((v) => v.sku === variant.sku)
    if (exists) {
      throw new Error('Variant SKU already exists')
    }

    this.props.variants.push(variant)
    this.touch()
  }

  removeVariant(sku: string) {
    this.props.variants = this.props.variants.filter((v) => v.sku !== sku)
    this.touch()
  }

  findVariant(sku: string) {
    return this.props.variants.find((v) => v.sku === sku)
  }

  addImage(image: Image) {
    this.props.images.push(image)
    this.touch()
  }

  removeImage(url: string) {
    this.props.images = this.props.images.filter((img) => img.url !== url)
    this.touch()
  }

  setPrimaryImage(url: string) {
    let found = false

    this.props.images.forEach((img) => {
      if (img.url === url) {
        img.setAsPrimary()
        found = true
      } else {
        img.removePrimary()
      }
    })

    if (!found) {
      throw new Error('Image not found')
    }

    this.touch()
  }

  getPrimaryImage() {
    return this.props.images.find((img) => img.isPrimary)
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  toJSON(): FlowerProps {
    return {
      ...this.props,
      variants: this.props.variants.map((v) => v.toJSON()),
      images: this.props.images.map((i) => i.toJSON())
    }
  }
}
