CREATE TABLE "categories" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL UNIQUE
);
--> statement-breakpoint
CREATE TABLE "ingredients" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "ingredients_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"price" integer NOT NULL,
	"image_url" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_variants" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "product_variants_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"price" integer NOT NULL,
	"image_url" varchar NOT NULL,
	"size" integer,
	"size_unit" varchar,
	"pizza_type" varchar,
	"weight" integer,
	"is_default" boolean DEFAULT false NOT NULL,
	"product_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "products_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"ingredients_for_product" varchar[],
	"allow_additional_ingredients" boolean DEFAULT false NOT NULL,
	"description" text,
	"category_id" integer NOT NULL,
	"is_new" boolean DEFAULT false NOT NULL,
	"is_hit" boolean DEFAULT false NOT NULL,
	"is_super_price" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_products_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id");--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id");