import { Record } from "immutable";

export enum ProductCategery {
  None,
  Electronics
}

type CategeryDescriptionProps = {
  id: ProductCategery;
  name: string;
};

export const CategoryDescription = Record<CategeryDescriptionProps>({
  id: ProductCategery.None,
  name: ""
});

const _description = (false as true) && CategoryDescription();
export type ICategoryDescription = typeof _description;
