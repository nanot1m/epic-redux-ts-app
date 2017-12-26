import { Record } from "immutable";
import { ProductCategery } from "./ProductCategory";
import { IPrice, Price, Currency } from "./Price";

type ProductProps = {
  id: string;
  name: string;
  category: ProductCategery;
  price: IPrice;
};

export const Product: Record.Factory<ProductProps> = Record({
  id: "",
  name: "",
  category: ProductCategery.None,
  price: Price({ value: 0, currency: Currency.Rub })
});

const _product = (false as true) && Product();
export type IProduct = typeof _product;
