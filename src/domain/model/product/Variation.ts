import { Entity } from "../../shared/Entity";
import { Product } from "./Product";
import { SKU } from "./SKU";

export class Variation implements Entity<Variation> {
  constructor(public identifier: SKU) {}
  sameIdentityAs(other: Variation): boolean {
    return this.identifier === other.identifier
  }
}
