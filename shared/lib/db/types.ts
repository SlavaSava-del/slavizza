import {
  categories,
  ingredients,
  products,
  productVariants,
  cartItem,
  cartItemsToIngredients,
} from "./schema";

export type Products = typeof products.$inferSelect;
export type Categories = typeof categories.$inferSelect;
export type ProductVariants = typeof productVariants.$inferSelect;
export type Ingredients = typeof ingredients.$inferSelect;
export type CartItem = typeof cartItem.$inferSelect;
export type CartItemsToIngredients = typeof cartItemsToIngredients.$inferSelect;

export type ProductsInsert = typeof products.$inferInsert;
export type CategoriesInsert = typeof categories.$inferInsert;
export type ProductVariantsInsert = typeof productVariants.$inferInsert;
export type IngredientsInsert = typeof ingredients.$inferInsert;
export type CartItemInsert = typeof cartItem.$inferInsert;
export type CartItemsToIngredientsInsert =
  typeof cartItemsToIngredients.$inferInsert;
