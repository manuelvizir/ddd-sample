import { assert } from 'console'
import { ValueObject } from '../../shared/ValueObject'
import { ProductErrors } from './Errors'

export class SKU implements ValueObject<SKU> {
  constructor (public id: string) {
    assert(id, ProductErrors.skuIdUndefined)
  }

  sameValueAs (other: SKU): boolean {
    return this.id === other.id
  }
}
