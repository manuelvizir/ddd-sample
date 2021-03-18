import { Product } from '../domain/model/product/Product'
import { SKU } from '../domain/model/product/SKU'

export interface ProductManagementService {
  create(sku: SKU): void
  createVariationFor(productIdentifier: SKU, variationIdentifier: SKU): void
  list(): Product[]
  novim(): void
}
