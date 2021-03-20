import { Product } from "../../domain/model/product/product";
import { ProductRepository } from "../../domain/model/product/product-repository";
import { SKU } from "../../domain/model/product/sku";
import { Variation } from "../../domain/model/product/variation";
import { ProductManagementService } from "../product-management-service";

export class ProductManagementServiceImpl implements ProductManagementService {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  novim(): void {
    throw new Error("Method not implemented.");
  }

  list(): Product[] {
    return this.productRepository.findAll();
  }

  createVariationFor(productIdentifier: SKU, variationIdentifier: SKU): void {
    const product = this.productRepository.findBy(productIdentifier);
    const variation = new Variation({ identifier: variationIdentifier });
    product.addVariation(variation);
    this.productRepository.store(product);
  }

  createProduct(identifier: SKU): void {
    const product = new Product(identifier);
    this.productRepository.store(product);
  }
}
