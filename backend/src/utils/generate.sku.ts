export const generateSku = (name: string, index: number) => {
  const prefix = name.toUpperCase().replace(/\s+/g, '').slice(0, 5)
  return `${prefix}-${Date.now()}-${index}`
}
