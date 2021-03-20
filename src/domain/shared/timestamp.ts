type TimestampProperties = {
  createdAt: Date;
  updatedAt: Date;
};

export class Timestamp {
  public createdAt: Date = new Date();
  public updatedAt?: Date;

  public constructor(properties?: TimestampProperties) {
    Object.assign(this, properties);
  }
}
