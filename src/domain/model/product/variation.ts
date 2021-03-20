import { Entity } from "../../shared/entity";
import { SKU } from "./sku";

type VariationProperties = {
  identifier: SKU;
};

export class Variation implements Entity<Variation> {
  public identifier!: SKU;

  constructor(properties: VariationProperties) {
    Object.assign(this, properties);
  }

  sameIdentityAs(other: Variation): boolean {
    return this.identifier === other.identifier;
  }
}
