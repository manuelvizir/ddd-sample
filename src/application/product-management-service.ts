import { Product } from "../domain/model/product/product";
import { SKU } from "../domain/model/product/sku";

export interface ProductManagementService {
  createProduct(sku: SKU): void;
  createVariationFor(productIdentifier: SKU, variationIdentifier: SKU): void;
  list(): Product[];
  novim(): void;
}
