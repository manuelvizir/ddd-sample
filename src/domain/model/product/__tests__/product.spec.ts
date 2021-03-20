import { Product } from "../product";
import { SKU } from "../sku";
import { Variation } from "../variation";

describe("Product", () => {
  it("adds variation", () => {
    // given
    const product = new Product(new SKU("123"));
    // when
    product.addVariation(new Variation({ identifier: new SKU("123-var") }));
    // then
    expect(product.variations).toHaveLength(1);
  });
});
