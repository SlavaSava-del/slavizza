import { defineRelations } from "drizzle-orm";
import { boolean, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull().unique(),
});

export const products = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull(),
  imageUrl: varchar("image_url").notNull(),
  ingredientsForProduct: varchar("ingredients_for_product").array(),
  allowAdditionalIngredients: boolean("allow_additional_ingredients")
    .notNull()
    .default(false),
  description: text("description"),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
  isNew: boolean("is_new").notNull().default(false),
  isHit: boolean("is_hit").notNull().default(false),
  isSuperPrice: boolean("is_super_price").notNull().default(false),
});

export const productVariants = pgTable("product_variants", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  price: integer("price").notNull(),
  imageUrl: varchar("image_url").notNull(),
  size: integer("size").notNull(),
  sizeUnit: varchar("size_unit").notNull(),
  pizzaType: varchar("pizza_type"),
  weight: integer("weight"),
  isDefault: boolean("is_default").notNull().default(false),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
});

export const ingredients = pgTable("ingredients", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull(),
  price: integer("price").notNull(),
  imageUrl: varchar("image_url").notNull(),
});

export const relations = defineRelations(
  {
    categories,
    products,
    ingredients,
    productVariants,
  },
  (r) => ({
    products: {
      category: r.one.categories({
        from: r.products.categoryId,
        to: r.categories.id,
        optional: false,
      }),

      productVariants: r.many.productVariants(),
    },

    categories: {
      products: r.many.products(),
    },

    productVariants: {
      product: r.one.products({
        from: r.productVariants.productId,
        to: r.products.id,
        optional: false,
      }),
    },
  }),
);
