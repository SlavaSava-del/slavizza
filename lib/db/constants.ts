import {
  CategoriesInsert,
  IngredientsInsert,
  ProductsInsert,
  ProductVariantsInsert,
} from "./types";

export const categoriesData: CategoriesInsert[] = [
  {
    name: "Пиццы",
  },
  {
    name: "Закуски",
  },
  {
    name: "Кофе и чай",
  },
  {
    name: "Напитки",
  },
  {
    name: "Завтрак",
  },
];

export const ingredientsData: IngredientsInsert[] = [
  {
    name: "Соус бургер",
    price: 69,
    imageUrl: "/ingredients/01-sauce-burger.png",
  },
  {
    name: "Соус барбекю",
    price: 69,
    imageUrl: "/ingredients/02-sauce-barbeku.png",
  },
  {
    name: "Соус сладкий чили",
    price: 69,
    imageUrl: "/ingredients/03-sauce-chili.png",
  },
  {
    name: "Соус терияки",
    price: 69,
    imageUrl: "/ingredients/04-sauce-teraiki.png",
  },
  {
    name: "Соус том ям",
    price: 69,
    imageUrl: "/ingredients/05-sauce-tom-yam.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/ingredients/06-italian-gross.png",
  },
  {
    name: "Сырный бортик",
    price: 205,
    imageUrl: "/ingredients/07-cheese-border.png",
  },
  {
    name: "Пряная говядина",
    price: 119,
    imageUrl: "/ingredients/08-beef.png",
  },
  {
    name: "Моцарелла",
    price: 105,
    imageUrl: "/ingredients/09-mocarella.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/ingredients/10-cheder-parmezan.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/ingredients/11-halapenio.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "/ingredients/12-chiken.png",
  },
  {
    name: "Свиная шейка",
    price: 229,
    imageUrl: "/ingredients/13-pig.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/ingredients/14-shampinion.png",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl: "/ingredients/15-bacon.png",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "/ingredients/16-ham.png",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/ingredients/17-peperoni.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/ingredients/18-chorizo.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/ingredients/19-cucumbers.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/ingredients/20-tomato.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/ingredients/21-onion.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/ingredients/22-pineapple.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/ingredients/23-peper.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/ingredients/24-brinza.png",
  },
  {
    name: "Креветки",
    price: 239,
    imageUrl: "/ingredients/25-krevetka.png",
  },
];

export const productsData: ProductsInsert[] = [
  // ПИЦЦЫ
  {
    name: "Пепперони фреш",
    imageUrl: "/pizza/1-peperoni-fresh-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    isSuperPrice: true,
    ingredientsForProduct: [
      "Пикантная пепперони",
      "увеличенная порция моцареллы",
      "томаты",
      "фирменный томатный соус",
    ],
  },
  {
    name: "Чесночный цыпленок",
    imageUrl: "/pizza/2-garlic-chicken-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    isSuperPrice: true,
    ingredientsForProduct: [
      "Цыпленок",
      "томаты",
      "чеснок",
      "моцарелла",
      "фирменный соус альфредо",
    ],
  },
  {
    name: "Терияки",
    imageUrl: "/pizza/3-teriyaki-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    isHit: true,
    ingredientsForProduct: [
      "Цыпленок",
      "сладкий перец",
      "красный лук",
      "моцарелла",
      "соус терияки",
      "фирменный соус альфредо",
    ],
  },
  {
    name: "Сырная",
    imageUrl: "/pizza/4-cheesy-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    isSuperPrice: true,
    ingredientsForProduct: [
      "Моцарелла",
      "сыры чеддер и пармезан",
      "фирменный соус альфредо",
    ],
  },
  {
    name: "Аррива!",
    imageUrl: "/pizza/5-arriva-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    ingredientsForProduct: [
      "Цыпленок",
      "острые колбаски чоризо",
      "соус бургер",
      "сладкий перец",
      "красный лук",
      "томаты",
      "моцарелла",
      "соус ранч",
      "чеснок",
    ],
  },
  {
    name: "Карбонара",
    imageUrl: "/pizza/6-carbonara-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    ingredientsForProduct: [
      "Бекон",
      "сыры чеддер и пармезан",
      "моцарелла",
      "томаты",
      "красный лук",
      "чеснок",
      "фирменный соус альфредо",
      "итальянские травы",
    ],
  },
  {
    name: "Песто",
    imageUrl: "/pizza/7-pesto-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    isHit: true,
    ingredientsForProduct: [
      "Цыпленок",
      "соус песто",
      "кубики брынзы",
      "томаты",
      "моцарелла",
      "фирменный соус альфредо",
    ],
  },
  {
    name: "Додо",
    imageUrl: "/pizza/8-dodo-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    ingredientsForProduct: [
      "Бекон",
      "пряная говядина",
      "пикантная пепперони",
      "моцарелла",
      "томаты",
      "шампиньоны",
      "сладкий перец",
      "красный лук",
      "чеснок",
      "фирменный томатный соус",
    ],
  },
  {
    name: "Маргарита",
    imageUrl: "/pizza/9-margarita-30-traditional.webp",
    categoryId: 1,
    allowAdditionalIngredients: true,
    ingredientsForProduct: [
      "увеличенная порция моцареллы",
      "томаты",
      "итальянские травы",
      "фирменный томатный соус",
    ],
  },

  // ЗАКУСКИ
  {
    name: "Додстер",
    imageUrl: "/products/10-dodster.webp",
    categoryId: 2,
    ingredientsForProduct: [
      "Цыпленок",
      "томаты",
      "моцарелла",
      "соус ранч",
      "тонкая пшеничная лепешка",
    ],
  },
  {
    name: "Додстер Чилл Грилл",
    imageUrl: "/products/11-dodster-chill-grill.webp",
    categoryId: 2,
    description:
      "Горячая закуска в тонкой пшеничной лепешке с насыщенным вкусом гриля.",
  },
  {
    name: "Супермясной Додстер",
    imageUrl: "/products/12-beef-dodster.webp",
    categoryId: 2,
    description: "Сытный додстер для тех, кто любит яркий мясной вкус.",
  },
  {
    name: "Острый Додстер",
    imageUrl: "/products/13-hot-dodster.webp",
    categoryId: 2,
    description:
      "Горячая закуска в тонкой пшеничной лепешке с пикантным острым вкусом.",
  },
  {
    name: "Сырные палочки с чесноком",
    imageUrl: "/products/14-cheeze-palochki.webp",
    categoryId: 2,
    description: "Горячие сырные палочки с аппетитным чесночным ароматом.",
    isNew: true,
  },
  {
    name: "Салат Цезарь",
    imageUrl: "/products/15-cezar.webp",
    categoryId: 2,
    description:
      "Популярный салат в стиле «Цезарь» — свежий вариант для легкого перекуса.",
  },

  // КОФЕ И ЧАЙ
  {
    name: "Айс Кофе",
    imageUrl: "/products/16-ice-coffee-300ml.webp",
    categoryId: 3,
    isNew: true,
    description:
      "Освежающий холодный кофейный напиток с мягким кофейным вкусом.",
  },
  {
    name: "Айс Кофе с карамелью",
    imageUrl: "/products/17-ice-coffee-caramel-300ml.webp",
    categoryId: 3,
    description: "Холодный кофейный напиток с нежным сладким вкусом карамели.",
  },
  {
    name: "Холодный бамбл кофе",
    imageUrl: "/products/18-cold-bumble-coffee-300ml.webp",
    categoryId: 3,
    description: "Освежающий холодный кофе с яркими цитрусовыми нотами.",
  },
  {
    name: "Айс капучино",
    imageUrl: "/products/19-ice-capuccino-300ml.webp",
    categoryId: 3,
    description: "Освежающий холодный кофе с порцией эспрессо и пломбиром.",
  },
  {
    name: "Латте Темный лес",
    imageUrl: "/products/20-latte-dark-forest-200ml.webp",
    categoryId: 3,
    isNew: true,
    description:
      "Нежный латте с кофейным вкусом и десертными нотами «Темного леса».",
  },
  {
    name: "Кофе Американо",
    imageUrl: "/products/21-americano-300ml.webp",
    categoryId: 3,
    isHit: true,
    description: "Горячий кофе для ценителей чистого вкуса.",
  },

  // НАПИТКИ
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/products/22-oreo-milkshake-300ml.webp",
    categoryId: 4,
    description:
      "Густой молочный коктейль с нежным сливочным вкусом и печеньем Oreo.",
  },
  {
    name: "Классический молочный коктейль",
    imageUrl: "/products/23-classic-milkshake-300ml.webp",
    categoryId: 4,
    description: "Нежный молочный коктейль с классическим сливочным вкусом.",
  },
  {
    name: "Шоколадный молочный коктейль",
    imageUrl: "/products/24-chocolate-milkshake-300ml.webp",
    categoryId: 4,
    description: "Густой молочный коктейль с насыщенным шоколадным вкусом.",
  },
  {
    name: "Добрый Кола без сахара",
    imageUrl: "/products/25-dobry-cola-zero-500ml.webp",
    categoryId: 4,
    description: "Освежающий газированный напиток со вкусом колы без сахара.",
  },
  {
    name: "Добрый Лимон-Лайм",
    imageUrl: "/products/26-dobry-lemon-lime-500ml.webp",
    categoryId: 4,
    description: "Газированный напиток с освежающим вкусом лимона и лайма.",
  },
  {
    name: "Добрый Апельсин",
    imageUrl: "/products/27-dobry-orange-mandarin-300ml.webp",
    categoryId: 4,
    description: "Освежающий газированный напиток с апельсиновым вкусом.",
  },

  // ЗАВТРАКИ И ДЕСЕРТЫ
  {
    name: "Омлет с пепперони",
    imageUrl: "/products/28-omlet-peperoni.webp",
    categoryId: 5,
    description:
      "Нежный омлет с пикантной пепперони — сытный вариант завтрака.",
  },
  {
    name: "Омлет с томатами",
    imageUrl: "/products/29-omlet-tomato.webp",
    categoryId: 5,
    description: "Нежный омлет с сочными томатами.",
  },
  {
    name: "Омлет сырный",
    imageUrl: "/products/30-omlet-cheese.webp",
    categoryId: 5,
    description: "Нежный омлет с насыщенным сырным вкусом.",
  },
  {
    name: "Сырники",
    imageUrl: "/products/31-sirniki.webp",
    categoryId: 5,
    description: "Нежные творожные сырники с аппетитной румяной корочкой.",
  },
  {
    name: "Чизкейк Нью-Йорк",
    imageUrl: "/products/32-chizkeik.webp",
    categoryId: 5,
    description: "Классический чизкейк с нежной сливочной текстурой.",
  },
  {
    name: "Холодный чикен ролл",
    imageUrl: "/products/33-chiken-roll.webp",
    categoryId: 5,
    ingredientsForProduct: [
      "Цыпленок",
      "свежий салат",
      "томаты",
      "чеддер и пармезан",
      "соус ранч",
    ],
  },
];

const pizzaVariantsConfig = [
  {
    productId: 1,
    slug: "peperoni-fresh",
    sizes: [
      { size: 20, traditional: [299, 230] },
      { size: 25, traditional: [399, 370], thin: [399, 280] },
      { size: 30, traditional: [639, 580], thin: [639, 480] },
      { size: 35, traditional: [759, 780], thin: [759, 670] },
    ],
  },
  {
    productId: 2,
    slug: "garlic-chicken",
    sizes: [
      { size: 20, traditional: [299, 230] },
      { size: 25, traditional: [399, 370], thin: [399, 280] },
      { size: 30, traditional: [639, 520], thin: [639, 430] },
      { size: 35, traditional: [759, 700], thin: [759, 600] },
    ],
  },
  {
    productId: 3,
    slug: "teriyaki",
    sizes: [
      { size: 20, traditional: [329, 250] },
      { size: 25, traditional: [429, 390], thin: [429, 300] },
      { size: 30, traditional: [679, 530], thin: [679, 440] },
      { size: 35, traditional: [799, 720], thin: [799, 620] },
    ],
  },
  {
    productId: 4,
    slug: "cheesy",
    sizes: [
      { size: 20, traditional: [299, 220] },
      { size: 25, traditional: [399, 350], thin: [399, 270] },
      { size: 30, traditional: [599, 470], thin: [599, 390] },
      { size: 35, traditional: [719, 650], thin: [719, 560] },
    ],
  },
  {
    productId: 5,
    slug: "arriva",
    sizes: [
      { size: 20, traditional: [349, 250] },
      { size: 25, traditional: [489, 400], thin: [489, 310] },
      { size: 30, traditional: [749, 560], thin: [749, 470] },
      { size: 35, traditional: [899, 760], thin: [899, 660] },
    ],
  },
  {
    productId: 6,
    slug: "carbonara",
    sizes: [
      { size: 20, traditional: [349, 250] },
      { size: 25, traditional: [499, 400], thin: [499, 310] },
      { size: 30, traditional: [759, 590], thin: [759, 490] },
      { size: 35, traditional: [899, 800], thin: [899, 690] },
    ],
  },
  {
    productId: 7,
    slug: "pesto",
    sizes: [
      { size: 20, traditional: [339, 240] },
      { size: 25, traditional: [479, 390], thin: [479, 300] },
      { size: 30, traditional: [729, 550], thin: [729, 460] },
      { size: 35, traditional: [869, 750], thin: [869, 650] },
    ],
  },
  {
    productId: 8,
    slug: "dodo",
    sizes: [
      { size: 20, traditional: [329, 250] },
      { size: 25, traditional: [449, 400], thin: [449, 310] },
      { size: 30, traditional: [699, 580], thin: [699, 480] },
      { size: 35, traditional: [849, 790], thin: [849, 680] },
    ],
  },
  {
    productId: 9,
    slug: "margarita",
    sizes: [
      { size: 20, traditional: [299, 240] },
      { size: 25, traditional: [399, 390], thin: [399, 300] },
      { size: 30, traditional: [599, 590], thin: [599, 490] },
      { size: 35, traditional: [719, 800], thin: [719, 690] },
    ],
  },
];

const additionalVariantsPizza: ProductVariantsInsert[] =
  pizzaVariantsConfig.flatMap((pizza) =>
    pizza.sizes.flatMap((item) => {
      const variants = [
        {
          pizzaType: "1",
          data: item.traditional,
        },
        ...(item.thin
          ? [
              {
                pizzaType: "2",
                data: item.thin,
              },
            ]
          : []),
      ];

      return variants.map(({ pizzaType, data }) => ({
        price: data[0],
        size: item.size,
        sizeUnit: "см",
        pizzaType,
        weight: data[1],
        isDefault: pizzaType === "1" && item.size === 30,
        productId: pizza.productId,
        imageUrl: `/pizza/${pizza.productId}-${pizza.slug}-${item.size}-${pizzaType === "2" ? "thin" : "traditional"}.webp`,
      }));
    }),
  );

const drinksVariantsConfig = [
  {
    productId: 16,
    slug: "ice-coffee",
    sizes: [{ size: 300, price: 159, weight: 250 }],
  },
  {
    productId: 17,
    slug: "ice-coffee-caramel",
    sizes: [{ size: 300, price: 169, weight: 250 }],
  },
  {
    productId: 18,
    slug: "cold-bumble-coffee",
    sizes: [{ size: 300, price: 225, weight: 300 }],
  },
  {
    productId: 19,
    slug: "ice-capuccino",
    sizes: [
      { size: 300, price: 280, weight: 280 },
      { size: 600, price: 359, weight: 490 },
    ],
  },
  {
    productId: 20,
    slug: "latte-dark-forest",
    sizes: [
      { size: 200, price: 139, weight: 190 },
      { size: 300, price: 169, weight: 300 },
      { size: 400, price: 189, weight: 360 },
    ],
  },
  {
    productId: 21,
    slug: "americano",
    sizes: [
      { size: 300, price: 129, weight: 310 },
      { size: 400, price: 159, weight: 400 },
    ],
  },
  {
    productId: 22,
    slug: "oreo-milkshake",
    sizes: [
      { size: 300, price: 269, weight: 320 },
      { size: 600, price: 459, weight: 510 },
    ],
  },
  {
    productId: 23,
    slug: "classic-milkshake",
    sizes: [
      { size: 300, price: 225, weight: 270 },
      { size: 600, price: 309, weight: 430 },
    ],
  },
  {
    productId: 24,
    slug: "chocolate-milkshake",
    sizes: [
      { size: 300, price: 269, weight: 280 },
      { size: 600, price: 409, weight: 470 },
    ],
  },
  {
    productId: 25,
    slug: "dobry-cola-zero",
    sizes: [{ size: 500, price: 155, weight: 500 }],
  },
  {
    productId: 26,
    slug: "dobry-lemon-lime",
    sizes: [{ size: 500, price: 155, weight: 500 }],
  },
  {
    productId: 27,
    slug: "dobry-orange-mandarin",
    sizes: [
      { size: 300, price: 135, weight: 300 },
      { size: 1000, price: 279, weight: 1000 },
    ],
  },
];

const additionalVariantsDrinks: ProductVariantsInsert[] =
  drinksVariantsConfig.flatMap((drink) =>
    drink.sizes.flatMap((item) => ({
      price: item.price,
      size: item.size,
      sizeUnit: "мл",
      weight: item.weight,
      isDefault: item.size === drink.sizes[0].size,
      productId: drink.productId,
      imageUrl: `/products/${drink.productId}-${drink.slug}-${item.size}ml.webp`,
    })),
  );

export const productVariantsData: ProductVariantsInsert[] = [
  ...additionalVariantsPizza,
  ...additionalVariantsDrinks,
  {
    price: 269,
    size: 1,
    sizeUnit: "шт",
    weight: 190,
    isDefault: true,
    productId: 10,
    imageUrl: "/products/10-dodster.webp",
  },
  {
    price: 295,
    size: 1,
    sizeUnit: "шт",
    weight: 160,
    isDefault: true,
    productId: 11,
    imageUrl: "/products/11-dodster-chill-grill.webp",
  },
  {
    price: 329,
    size: 1,
    sizeUnit: "шт",
    weight: 170,
    isDefault: true,
    productId: 12,
    imageUrl: "/products/12-beef-dodster.webp",
  },
  {
    price: 295,
    size: 1,
    sizeUnit: "шт",
    weight: 170,
    isDefault: true,
    productId: 13,
    imageUrl: "/products/13-hot-dodster.webp",
  },
  {
    price: 265,
    size: 12,
    sizeUnit: "шт",
    weight: 170,
    isDefault: true,
    productId: 14,
    imageUrl: "/products/14-cheeze-palochki.webp",
  },
  {
    price: 375,
    size: 1,
    sizeUnit: "шт",
    weight: 180,
    isDefault: true,
    productId: 15,
    imageUrl: "/products/15-cezar.webp",
  },
  {
    price: 245,
    size: 1,
    sizeUnit: "шт",
    weight: 100,
    isDefault: true,
    productId: 28,
    imageUrl: "/products/28-omlet-peperoni.webp",
  },
  {
    price: 205,
    size: 1,
    sizeUnit: "шт",
    weight: 100,
    isDefault: true,
    productId: 29,
    imageUrl: "/products/29-omlet-tomato.webp",
  },
  {
    price: 245,
    size: 1,
    sizeUnit: "шт",
    weight: 100,
    isDefault: true,
    productId: 30,
    imageUrl: "/products/30-omlet-cheese.webp",
  },
  {
    price: 195,
    size: 2,
    sizeUnit: "шт",
    weight: 130,
    isDefault: true,
    productId: 31,
    imageUrl: "/products/31-sirniki.webp",
  },
  {
    price: 219,
    size: 1,
    sizeUnit: "шт",
    weight: 100,
    isDefault: true,
    productId: 32,
    imageUrl: "/products/32-chizkeik.webp",
  },
  {
    price: 269,
    size: 1,
    sizeUnit: "шт",
    weight: 160,
    isDefault: true,
    productId: 33,
    imageUrl: "/products/33-chiken-roll.webp",
  },
];
