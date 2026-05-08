import { FlowerImageProps } from '@shared/types/product/product.type'

export class Image {
  private props: FlowerImageProps

  constructor(props: FlowerImageProps) {
    if (!props.url || !props.url.trim()) {
      throw new Error('Image URL is required')
    }

    this.props = {
      ...props,
      isPrimary: props.isPrimary ?? false
    }
  }

  get url() {
    return this.props.url
  }

  get isPrimary() {
    return this.props.isPrimary
  }

  get altText() {
    return this.props.altText
  }

  setAsPrimary() {
    this.props.isPrimary = true
  }

  removePrimary() {
    this.props.isPrimary = false
  }

  updateAltText(altText: string) {
    this.props.altText = altText
  }

  updateUrl(url: string) {
    if (!url.trim()) {
      throw new Error('URL cannot be empty')
    }
    this.props.url = url
  }

  hasAltText() {
    return !!this.props.altText
  }

  toJSON(): FlowerImageProps {
    return { ...this.props }
  }
}
