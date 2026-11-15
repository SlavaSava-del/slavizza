import { defineRelations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  text,
  varchar,
} from "drizzle-orm/pg-core";

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

export const cartItem = pgTable("cart_item", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  productVariantId: integer("product_variant_id")
    .notNull()
    .references(() => productVariants.id),
  quantity: integer("quantity").notNull().default(1),
});

export const cartItemsToIngredients = pgTable(
  "cart_items_to_ingredients",
  {
    cartItemId: integer("cart_item_id")
      .notNull()
      .references(() => cartItem.id),
    ingredientId: integer("ingredient_id")
      .notNull()
      .references(() => ingredients.id),
  },
  (t) => [primaryKey({ columns: [t.cartItemId, t.ingredientId] })],
);

export const relations = defineRelations(
  {
    categories,
    products,
    ingredients,
    productVariants,
    cartItem,
    cartItemsToIngredients,
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

    cartItem: {
      productVariant: r.one.productVariants({
        from: r.cartItem.productVariantId,
        to: r.productVariants.id,
        optional: false,
      }),

      ingredients: r.many.ingredients({
        from: r.cartItem.id.through(r.cartItemsToIngredients.cartItemId),
        to: r.ingredients.id.through(r.cartItemsToIngredients.ingredientId),
      }),
    },

    ingredients: {
      cartItems: r.many.cartItem(),
    },
  }),
);
