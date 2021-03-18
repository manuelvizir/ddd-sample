import { Product } from "./Product";
import { SKU } from "./SKU";

export interface ProductRepository {
  store(product: Product): void
  findAll(): Product[]
  find(identifier: SKU): Product
}
