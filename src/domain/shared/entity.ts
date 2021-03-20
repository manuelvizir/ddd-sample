export interface Entity<T> {
  sameIdentityAs(other: T): boolean;
}
