export enum Ingredient {
  MEAT = "meat",
  CHEESE = "cheese",
  SALAD = "salad",
  BACON = "bacon",
  BREADTOP = "bread-top",
  BREADBOTTOM = "bread-bottom",
}

// Condiments are a tuple with an ingredient, amount, and a price
export type Condiment = [Ingredient, number, number];

export interface BuilderState {
  condiments: Condiment[];
  totalPrice: number;
  canPurchase: boolean;
  purchasing: boolean;
}
