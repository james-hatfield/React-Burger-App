export enum Ingredient {
  BREADBOTTOM = "bread-bottom",
  BREADTOP = "bread-top",
  MEAT = "meat",
  CHEESE = "cheese",
  SALAD = "salad",
  BACON = "bacon",
}

export interface IngredientType {
  type: Ingredient;
}

export interface AddableIngredient {
  [Ingredient.SALAD]: number;
  [Ingredient.BACON]: number;
  [Ingredient.CHEESE]: number;
  [Ingredient.MEAT]: number;
}
