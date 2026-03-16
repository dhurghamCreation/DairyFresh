const superMilkImage = new URL("../../images/super mil.png", import.meta.url).href;
const organicMilkImage = new URL("../../images/organ mi.png", import.meta.url).href;
const skimmedMilkImage = new URL("../../images/skimm milk.png", import.meta.url).href;
const cheddarImage = new URL("../../images/chee.png", import.meta.url).href;
const cheeseSelectionImage = new URL("../../images/chees.png", import.meta.url).href;
const greekYogurtImage = new URL("../../images/Greece.png", import.meta.url).href;
const yogurtImage = new URL("../../images/youg.png", import.meta.url).href;
const probioticYogurtImage = new URL("../../images/Activ.png", import.meta.url).href;
const butterImage = new URL("../../images/butter.png", import.meta.url).href;
const anchoButterImage = new URL("../../images/Ancho butter.png", import.meta.url).href;
const vanillaIceCreamImage = new URL("../../images/ice crin.png", import.meta.url).href;
const chocolateIceCreamImage = new URL("../../images/choc ice.png", import.meta.url).href;
const strawberryIceCreamImage = new URL("../../images/stra ice.png", import.meta.url).href;
const creamImage = new URL("../../images/cre.png", import.meta.url).href;
const whippingCreamImage = new URL("../../images/cream'.png", import.meta.url).href;
const sourCreamImage = new URL("../../images/diff you.png", import.meta.url).href;
const ricottaImage = new URL("../../images/rico.png", import.meta.url).href;
const turkishYogurtImage = new URL("../../images/Turk.png", import.meta.url).href;
const norwegianImage = new URL("../../images/Nor.png", import.meta.url).href;
const kefirImage = new URL("../../images/kefir.png", import.meta.url).href;
const generalButterImage = new URL("../../images/butter deli.png", import.meta.url).href;
const deli = new URL("../../images/deli you.png", import.meta.url).href;
const chee = new URL("../../images/chee.png", import.meta.url).href;
const Burrata = new URL("../../images/Burrata.png", import.meta.url).href;
const gre = new URL("../../images/gre you.png", import.meta.url).href;
const but = new URL("../../images/but.png", import.meta.url).href;
const ched = new URL("../../images/ched.png", import.meta.url).href;
const coffee = new URL("../../images/coffee.png", import.meta.url).href;
const ice = new URL("../../images/ice shop.png", import.meta.url).href;
const NDC = new URL("../../images/NDC.png", import.meta.url).href;
const Green = new URL("../../images/Green.png", import.meta.url).href;

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  size: string;
  organic: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // Milk Products
  {
    id: "1",
    name: "Whole Milk",
    category: "Milk",
    price: 0.39,
    image: superMilkImage,
    description: "Fresh whole milk from local farms. Rich, creamy, and packed with nutrients.",
    size: "1 Gallon",
    organic: true,
    inStock: true,
    rating: 4.8,
    reviews: 342
  },
  {
    id: "2",
    name: "Organic Semi-Skimmed Milk",
    category: "Milk",
    price: 2.79,
    image: organicMilkImage,
    description: "Premium organic semi-skimmed milk, perfect for daily consumption.",
    size: "2 Liters",
    organic: true,
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: "3",
    name: "Skimmed Milk",
    category: "Milk",
    price: 2.29,
    image: skimmedMilkImage,
    description: "Low-fat skimmed milk, ideal for health-conscious consumers.",
    size: "1 Liter",
    organic: false,
    inStock: true,
    rating: 4.5,
    reviews: 189
  },
  
  // Cheese Products
  {
    id: "4",
    name: "Aged Cheddar Cheese",
    category: "Cheese",
    price: 5.99,
    image: cheddarImage,
    description: "Sharp, rich cheddar cheese aged for 12 months. Perfect for sandwiches and cooking.",
    size: "400g",
    organic: false,
    inStock: true,
    rating: 4.9,
    reviews: 521
  },
  {
    id: "5",
    name: "Ricotta Cheese",
    category: "Cheese",
    price: 4.49,
    image: ricottaImage,
    description: "Authentic Italian ricotta, soft and creamy. Ideal for pasta and desserts.",
    size: "250g",
    organic: true,
    inStock: true,
    rating: 4.8,
    reviews: 412
  },
  {
    id: "6",
    name: "Artisan Cheese Selection",
    category: "Cheese",
    price: 12.99,
    image: cheeseSelectionImage,
    description: "A curated selection of premium artisan cheeses from around the world.",
    size: "500g",
    organic: true,
    inStock: true,
    rating: 5.0,
    reviews: 287
  },
  
  // Yogurt Products
  {
    id: "7",
    name: "Greek Yogurt Natural",
    category: "Yogurt",
    price: 3.99,
    image: gre,
    description: "Thick and creamy Greek yogurt, high in protein and perfect for breakfast.",
    size: "500g",
    organic: true,
    inStock: true,
    rating: 4.7,
    reviews: 398
  },
  {
    id: "8",
    name: "Berry Fusion Yogurt",
    category: "Yogurt",
    price: 2.99,
    image: yogurtImage,
    description: "Delicious yogurt with mixed berries, perfect for a healthy snack.",
    size: "350g",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 276
  },
  {
    id: "9",
    name: "Probiotic Yogurt",
    category: "Yogurt",
    price: 4.49,
    image: probioticYogurtImage,
    description: "Yogurt enriched with live cultures to support digestive health.",
    size: "400g",
    organic: true,
    inStock: true,
    rating: 4.8,
    reviews: 334
  },
  
  // Butter Products
  {
    id: "10",
    name: "Salted Butter",
    category: "Butter",
    price: 3.49,
    image: butterImage,
    description: "Rich and creamy salted butter made from the finest cream.",
    size: "250g",
    organic: false,
    inStock: true,
    rating: 4.7,
    reviews: 445
  },
  {
    id: "11",
    name: "Organic Unsalted Butter",
    category: "Butter",
    price: 4.29,
    image: generalButterImage,
    description: "Premium organic unsalted butter, perfect for baking and cooking.",
    size: "250g",
    organic: true,
    inStock: true,
    rating: 4.9,
    reviews: 378
  },
  
  // Ice Cream Products
  {
    id: "12",
    name: "Vanilla Bean Ice Cream",
    category: "Ice Cream",
    price: 5.99,
    image: vanillaIceCreamImage,
    description: "Classic vanilla ice cream made with real vanilla beans.",
    size: "500ml",
    organic: false,
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  {
    id: "13",
    name: "Chocolate Fudge Ice Cream",
    category: "Ice Cream",
    price: 6.49,
    image: chocolateIceCreamImage,
    description: "Rich chocolate ice cream with fudge swirls throughout.",
    size: "500ml",
    organic: false,
    inStock: true,
    rating: 4.9,
    reviews: 623
  },
  {
    id: "14",
    name: "Strawberry Cream Ice Cream",
    category: "Ice Cream",
    price: 5.79,
    image: strawberryIceCreamImage,
    description: "Creamy strawberry ice cream made with fresh strawberries.",
    size: "500ml",
    organic: true,
    inStock: true,
    rating: 4.7,
    reviews: 489
  },
  
  // Cream Products
  {
    id: "15",
    name: "Double Cream",
    category: "Cream",
    price: 2.99,
    image: creamImage,
    description: "Thick double cream, perfect for desserts and cooking.",
    size: "300ml",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: "16",
    name: "Whipping Cream",
    category: "Cream",
    price: 2.49,
    image: whippingCreamImage,
    description: "Light whipping cream that whips up beautifully for toppings.",
    size: "250ml",
    organic: false,
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    id: "17",
    name: "Sour Cream",
    category: "Cream",
    price: 2.29,
    image: sourCreamImage,
    description: "Tangy sour cream, great for dips and toppings.",
    size: "200ml",
    organic: true,
    inStock: true,
    rating: 4.7,
    reviews: 312
  },
  {
    id: "18",
    name: "General Butter",
    category: "International",
    price: 3.99,
    image: generalButterImage,
    description: "Versatile butter suitable for all cooking and baking needs, made from high-quality cream.",
    size: "400g",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 211,
  },
];

export const categories = [
  "All",
  "Milk",
  "Cheese",
  "Yogurt",
  "Butter",
  "Ice Cream",
  "Cream",
  "International",
  "Ghee & Oils",
  "Fermented",
];

// ─── Bonus: International & Specialty Dairy ─────────────────────────
const internationalProducts: Product[] = [
  // France
  {
    id: "19",
    name: "French Brie de Meaux",
    category: "International",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
    description: "Authentic AOC Brie de Meaux – a creamy, velvet-rind French classic with mushroomy, buttery depth.",
    size: "300g",
    organic: false,
    inStock: true,
    rating: 4.9,
    reviews: 412,
  },
  {
    id: "20",
    name: "Land O Lakes Butter",
    category: "International",
    price: 1.99,
    image: but,
    description: "Classic American butter from Land O Lakes – creamy, spreadable, and perfect for everyday use.",
    size: "200g",
    organic: true,
    inStock: true,
    rating: 5.0,
    reviews: 547,
  },
  
  // Italy
  {
    id: "21",
    name: "Burrata di Andria",
    category: "International",
    price: 8.99,
    image: Burrata,
    description: "Fresh Italian burrata from Andria – a mozzarella shell filled with stracciatella cream. Spectacular on bruschetta.",
    size: "200g",
    organic: true,
    inStock: true,
    rating: 5.0,
    reviews: 547,
  },
  {
    id: "22",
    name: "General Cheddar",
    category: "International",
    price: 3.99,
    image: ched,
    description: "Classic cheddar cheese with a rich, sharp flavor. Perfect for sandwiches, cooking, and snacking.",
    size: "300g",
    organic: true,
    inStock: true,
    rating: 4.0,
    reviews: 347,
  },
 
 
  // Greece
  {
    id: "24",
    name: "Greek Feta PDO",
    category: "International",
    price: 6.99,
    image: greekYogurtImage,
    description: "Protected Designation of Origin feta brined in whey brine – tangy, crumbly, made from Greek sheep and goat milk.",
    size: "400g",
    organic: false,
    inStock: true,
    rating: 4.8,
    reviews: 501,
  },
  {
    id: "25",
    name: "Halloumi (Cyprus)",
    category: "International",
    price: 7.79,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&q=80",
    description: "The iconic squeaky grilling cheese from Cyprus – salty, resilient, and spectacular pan-fried or BBQ'd.",
    size: "250g",
    organic: false,
    inStock: true,
    rating: 4.9,
    reviews: 687,
  },
  // Switzerland
  {
    id: "26",
    name: "Appenzeller Cave-Aged",
    category: "International",
    price: 11.49,
    image: chee,
    description: "Alpine Swiss Appenzeller rubbed with herbal brine – pungent, complex, spicy with a firm body.",
    size: "350g",
    organic: false,
    inStock: true,
    rating: 4.8,
    reviews: 244,
  },
  
  // India
  {
    id: "28",
    name: "Fresh Indian Paneer",
    category: "International",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
    description: "Firm, fresh-pressed cottage cheese made daily from whole milk – the backbone of Indian vegetarian cuisine.",
    size: "400g",
    organic: true,
    inStock: true,
    rating: 4.8,
    reviews: 465,
  },
  {
    id: "29",
    name: "Pure Desi Ghee",
    category: "Ghee & Oils",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1590147315472-e701a4775379?w=600&q=80",
    description: "Slow-simmered clarified butter from grass-fed cows – golden, nutty, with a high smoke point perfect for frying.",
    size: "500ml",
    organic: true,
    inStock: true,
    rating: 4.9,
    reviews: 589,
  },
  {
    id: "30",
    name: "Rose Lassi",
    category: "International",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80",
    description: "Chilled Indian yogurt drink blended with rose water and a hint of cardamom – refreshing and floral.",
    size: "500ml",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 234,
  },
  {
    id: "31",
    name: "Khoya (Mawa)",
    category: "International",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    description: "Thick, slow-reduced milk solids used as the base for Indian sweets like gulab jamun and barfi.",
    size: "300g",
    organic: false,
    inStock: true,
    rating: 4.7,
    reviews: 178,
  },
  // Netherlands
  {
    id: "32",
    name: "Aged Gouda 18-Month",
    category: "International",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1717957352201-1d3ee984b6ed?w=600&q=80",
    description: "Dutch Gouda aged 18 months until caramel-sweet with crunchy tyrosine crystals throughout.",
    size: "350g",
    organic: false,
    inStock: true,
    rating: 4.9,
    reviews: 412,
  },
  {
    id: "33",
    name: "Red Wax Edam",
    category: "International",
    price: 7.29,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80",
    description: "Classic Dutch Edam wrapped in its iconic red wax – mild, slightly springy, great for snacking.",
    size: "400g",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 267,
  },
  // Turkey
  {
    id: "34",
    name: "Kaymak (Clotted Cream)",
    category: "International",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1684135347630-82c37ed5c7b8?w=600&q=80",
    description: "Ultra-thick Turkish clotted cream, traditionally served with honey on fresh bread for breakfast.",
    size: "200g",
    organic: false,
    inStock: true,
    rating: 4.8,
    reviews: 196,
  },
  {
    id: "35",
    name: "Ayran (Turkish Yogurt Drink)",
    category: "Fermented",
    price: 2.49,
    image: turkishYogurtImage,
    description: "Cold, frothy salted yogurt drink – Turkey's beloved refreshment, perfect with spiced food.",
    size: "330ml",
    organic: false,
    inStock: true,
    rating: 4.5,
    reviews: 311,
  },
  // Japan
  {
    id: "36",
    name: "Hokkaido Full-Fat Milk",
    category: "Milk",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1768850418251-17480117ac9b?w=600&q=80",
    description: "Prized Hokkaido island milk with exceptionally high butterfat – silky rich and naturally sweet.",
    size: "1 Liter",
    organic: true,
    inStock: true,
    rating: 5.0,
    reviews: 382,
  },
  // Norway
  {
    id: "37",
    name: "Norwegian Brunost",
    category: "International",
    price: 8.49,
    image: norwegianImage,
    description: "Iconic Norwegian brown cheese made from caramelised whey – sweet, fudgy and uniquely addictive.",
    size: "250g",
    organic: false,
    inStock: true,
    rating: 4.7,
    reviews: 143,
  },
  // Mexico
  {
    id: "38",
    name: "Queso Fresco",
    category: "International",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80",
    description: "Fresh, crumbly Mexican white cheese – mild and salty, essential for tacos, enchiladas and salads.",
    size: "300g",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 222,
  },
  {
    id: "39",
    name: "Mexican Crema",
    category: "Cream",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1684135347630-82c37ed5c7b8?w=600&q=80",
    description: "Rich, tangy cultured cream similar to crème fraîche – a drizzle transforms any Mexican dish.",
    size: "250ml",
    organic: false,
    inStock: true,
    rating: 4.7,
    reviews: 189,
  },
  // Russia
  {
    id: "40",
    name: "Kefir Probiotic Drink",
    category: "Fermented",
    price: 3.99,
    image: kefirImage,
    description: "Traditional Eastern European fermented milk kefir with over 30 probiotic cultures – tangy and gut-friendly.",
    size: "500ml",
    organic: true,
    inStock: true,
    rating: 4.8,
    reviews: 356,
  },
  {
    id: "41",
    name: "Russian Smetana",
    category: "Cream",
    price: 3.49,
    image: deli,
    description: "Full-fat cultured sour cream from Russia – richer and less acidic than Western sour cream.",
    size: "300ml",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 167,
  },
  // Spain
  {
    id: "42",
    name: "Manchego Curado DOP",
    category: "International",
    price: 10.49,
    image: "https://images.unsplash.com/photo-1757857755327-5b38c51a0302?w=600&q=80",
    description: "Spanish Manchego aged 6 months – firm, complex, with a sweet buttery finish. Made from La Mancha sheep milk.",
    size: "350g",
    organic: false,
    inStock: true,
    rating: 4.9,
    reviews: 434,
  },
  // Pakistan
  {
    id: "43",
    name: "Doodh Pati Mix",
    category: "International",
    price: 2.49,
    image: coffee,
    description: " Instant milk tea mix from Pakistan – blend with hot water for a sweet, spiced chai experience in seconds.",
    size: "500ml",
    organic: false,
    inStock: true,
    rating: 4.7,
    reviews: 298,
  },
  // Australia
  {
    id: "44",
    name: "Anchor Premium Butter",
    category: "Butter",
    price: 5.49,
    image: anchoButterImage,
    description: "Award-winning Australian butter from Warrnambool – rich, golden and made from grass-fed cream.",
    size: "250g",
    organic: true,
    inStock: true,
    rating: 4.8,
    reviews: 312,
  },
  // Lebanon (Middle East)
 
  // Germany
  {
    id: "46",
    name: "German Quark",
    category: "International",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1641494587136-eec74f1944ae?w=600&q=80",
    description: "Smooth, fresh German quark – a cross between yogurt and cream cheese, beloved for cheesecakes and dips.",
    size: "400g",
    organic: false,
    inStock: true,
    rating: 4.6,
    reviews: 211,
  },
  

  
];

// Merge all products into the single exported array
products.push(...internationalProducts);
