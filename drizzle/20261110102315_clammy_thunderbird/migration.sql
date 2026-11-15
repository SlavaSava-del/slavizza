CREATE TABLE "cart_item" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "cart_item_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"product_variant_id" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cart_items_to_ingredients" (
	"cart_item_id" integer,
	"ingredient_id" integer,
	CONSTRAINT "cart_items_to_ingredients_pkey" PRIMARY KEY("cart_item_id","ingredient_id")
);
--> statement-breakpoint
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_product_variant_id_product_variants_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variants"("id");--> statement-breakpoint
ALTER TABLE "cart_items_to_ingredients" ADD CONSTRAINT "cart_items_to_ingredients_cart_item_id_cart_item_id_fkey" FOREIGN KEY ("cart_item_id") REFERENCES "cart_item"("id");--> statement-breakpoint
ALTER TABLE "cart_items_to_ingredients" ADD CONSTRAINT "cart_items_to_ingredients_ingredient_id_ingredients_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients"("id");