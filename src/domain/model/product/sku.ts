import { assert } from "console";
import { ValueObject } from "../../shared/value-object";

export class SKU implements ValueObject<SKU> {
  constructor(public id: string) {
    assert(id, "sku_undefined");
  }

  sameValueAs(other: SKU): boolean {
    return this.id === other.id;
  }
}
