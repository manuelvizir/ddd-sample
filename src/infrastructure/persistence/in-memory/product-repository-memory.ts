import { Product } from "../../../domain/model/product/product";
import { ProductRepository } from "../../../domain/model/product/product-repository";
import { SKU } from "../../../domain/model/product/sku";

export class ProductRepositoryInMemory implements ProductRepository {
  private products: { [key: string]: Product } = {};

  findBy(identifier: SKU): Product {
    return this.products[identifier.id];
  }

  findAll(): Product[] {
    return Object.keys(this.products).map((k) => this.products[k]);
  }

  store(product: Product): void {
    this.products[product.id.id] = product;
  }
}
