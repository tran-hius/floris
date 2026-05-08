import { FlowerVariantProps } from '@shared/types/product/product.type'

export class Variant {
  private props: FlowerVariantProps

  constructor(props: FlowerVariantProps) {
    this.props = {
      ...props,
      discount: props.discount ?? 0,
      stock: props.stock ?? 0
    }
  }

  get sku() {
    return this.props.sku
  }

  get price() {
    return this.props.price
  }

  get discount() {
    return this.props.discount
  }

  get stock() {
    return this.props.stock
  }

  get color() {
    return this.props.color
  }

  get size() {
    return this.props.size
  }

  updatePrice(price: number) {
    if (price < 0) {
      throw new Error('Price must be >= 0')
    }
    this.props.price = price
  }

  updateDiscount(discount: number) {
    if (discount < 0) {
      throw new Error('Discount must be >= 0')
    }
    this.props.discount = discount
  }

  increaseStock(quantity: number) {
    if (quantity <= 0) {
      throw new Error('Quantity must be > 0')
    }
    this.props.stock += quantity
  }

  decreaseStock(quantity: number) {
    if (quantity <= 0) {
      throw new Error('Quantity must be > 0')
    }
    if (this.props.stock < quantity) {
      throw new Error('Not enough stock')
    }
    this.props.stock -= quantity
  }

  isOutOfStock() {
    return this.props.stock <= 0
  }

  getFinalPrice() {
    return this.props.price - this.props.discount
  }

  toJSON(): FlowerVariantProps {
    return { ...this.props }
  }
}
