import { Product } from '../Product'
import { SKU } from '../SKU'
import { Variation } from '../Variation'

describe('Product', () => {
  it('adds variation', () => {
    // given
    const product = new Product(new SKU('123'))
    // when
    product.addVariation(new Variation(new SKU('123-var')))
    // then
    expect(product.variations).toHaveLength(1)
  })
})
