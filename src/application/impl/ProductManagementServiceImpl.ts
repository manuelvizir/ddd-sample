import { Product } from '../../domain/model/product/Product'
import { ProductRepository } from '../../domain/model/product/ProductRepository'
import { SKU } from '../../domain/model/product/SKU'
import { Variation } from '../../domain/model/product/Variation'
import { ProductManagementService } from '../ProductManagementService'

export class ProductManagementServiceImpl implements ProductManagementService {
  constructor (private productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  novim (): void {
    throw new Error('Method not implemented.')
  }

  list (): Product[] {
    return this.productRepository.findAll()
  }

  createVariationFor (productIdentifier: SKU, variationIdentifier: SKU): void {
    const product = this.productRepository.find(productIdentifier)
    const variation = new Variation(variationIdentifier)
    product.addVariation(variation)
    this.productRepository.store(product)
  }

  create (identifier: SKU): void {
    const product = new Product(identifier)
    this.productRepository.store(product)
  }
}
