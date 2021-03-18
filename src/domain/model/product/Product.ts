import assert from 'assert'
import { Entity } from '#/domain/shared/Entity'
import { Timestamp } from '../../shared/Timestamp'
import { SKU } from './SKU'
import { Variation } from './Variation'

export class Product implements Entity<Product> {
  public id: SKU
  public variations: Variation[]
  public timestamp: Timestamp

  constructor (
    id: SKU,
    variations: Variation[] = [],
    timestamp: Timestamp = new Timestamp(new Date())
  ) {
    assert(id, 'sku_undefined')
    assert(timestamp)

    this.id = id
    this.variations = variations
    this.timestamp = timestamp
  }

  public addVariation (variation: Variation): void {
    this.variations.push(variation)
  }

  // sync (marketplaces: Marketplaces[]): void {
  //   // MarketplacesService.sync(this, marketplaces)
  //   // console.log('Synced', this, 'to', marketplaces)
  //   throw new Error('Method not implemented')
  // }

  sameIdentityAs (other: Product): boolean {
    return this.id === other.id
  }
}
