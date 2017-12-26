import { Record } from "immutable";

export enum Currency {
  Rub
}

export const Price = Record({
  value: 0,
  currency: Currency.Rub
});

const _price = (false as true) && Price();
export type IPrice = typeof _price;
