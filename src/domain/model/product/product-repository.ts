import { Product } from "./product";
import { SKU } from "./sku";

export interface ProductRepository {
  store(product: Product): void;
  findAll(): Product[];
  findBy(identifier: SKU): Product;
}
