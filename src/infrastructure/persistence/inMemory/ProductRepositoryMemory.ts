import { Product } from '../../../domain/model/product/Product'
import { ProductRepository } from '../../../domain/model/product/ProductRepository'
import { SKU } from '../../../domain/model/product/SKU'

export class ProductRepositoryInMemory implements ProductRepository {
  private products: { [key: string]: Product } = {}

  find (identifier: SKU): Product {
    return this.products[identifier.id]
  }

  findAll (): Product[] {
    return Object.keys(this.products).map((k) => this.products[k])
  }

  store (product: Product): void {
    this.products[product.id.id] = product
  }
}
