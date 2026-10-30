import { categories, ingredients, products, productVariants } from "./schema";

export type Products = typeof products.$inferSelect;
export type Categories = typeof categories.$inferSelect;
export type ProductVariants = typeof productVariants.$inferSelect;
export type Ingredients = typeof ingredients.$inferSelect;

export type ProductsInsert = typeof products.$inferInsert;
export type CategoriesInsert = typeof categories.$inferInsert;
export type ProductVariantsInsert = typeof productVariants.$inferInsert;
export type IngredientsInsert = typeof ingredients.$inferInsert;
