export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  shortDescription: string;
  description: string;
  extendedDescription?: string;
  origin?: string;
  period?: string;
  material?: string;
  dimensions?: string;
  condition?: string;
  price?: string;
  enquiryOnly: boolean;
  images: string[];
  tags: string[];
  featured: boolean;
  relatedSlugs?: string[];
  features?: string[];
}

export const productCategories = [
  "LIVING ROOM HERITAGE",
  "DINING ROOM HERITAGE",
  "BEDROOM HERITAGE",
  "SEATING & SOFAS",
  "ACCENT PIECES",
  "LIGHTING & ACCESSORIES",
];

export const products: Product[] = [
  {
    id: "p001",
    slug: "rustic-timber-dining-ensemble",
    name: "The Rustic Timber Dining Ensemble",
    category: "DINING ROOM HERITAGE",
    subcategory: "Heritage Furniture / Rustic Dining",
    shortDescription:
      "A Celebration of Natural Craftsmanship. Rooted in the beauty of raw authenticity, bringing together organic textures and sculptural forms.",
    description:
      "Rooted in the beauty of raw authenticity, the distinctive dining ensemble brings together organic textures, sculptural forms, and sheer presence. Its substantial presence and intentionally asymmetrical wooden form create a warm, inviting setting inspired by the enduring charm of heritage spaces.",
    extendedDescription:
      "Designed for more than functional dining space, it celebrates the timeless tradition of gathered moments around a table — where craftsmanship, conversation, and meaningful memories come together.",
    origin: "To be confirmed",
    period: "To be confirmed",
    material: "Wood species to be identified",
    dimensions: "L: 280cm | W: 110cm | H: 78cm",
    condition: "Preserved natural live-edge grain with organic oil polish",
    price: "₹80,000 - ₹2,50,000",
    enquiryOnly: true,
    images: [
      "/images/heritage-furniture.jpg",
      "/images/antique-showroom.jpg",
      "/images/antique-objects.jpg",
      "/images/jaipur-palace.jpg",
      "/images/heritage-furniture.jpg",
      "/images/antique-showroom.jpg",
    ],
    features: [
      "Handcrafted timber with a natural raw character",
      "Distinctive massive framework with organic edges",
      "Complementary wooden chairs with sculptural form",
      "Wood inlay and handcrafted exposed wood grain",
      "Smooth resting handrail with authentic cast-iron fasteners",
      "Authentic brass property identifier, forged screws, and edition details",
    ],
    tags: ["dining", "timber", "rustic", "wood", "heritage"],
    featured: true,
    relatedSlugs: ["carved-teak-wardrobe", "bronze-nataraj", "brass-oil-lamp"],
  },
  {
    id: "p002",
    slug: "carved-teak-wardrobe",
    name: "19th Century Carved Teak Wardrobe",
    category: "BEDROOM HERITAGE",
    subcategory: "Heritage Furniture / Storage",
    shortDescription:
      "A masterfully carved teak wood wardrobe from Shekhawati, Rajasthan with intricate floral motifs.",
    description:
      "This magnificent wardrobe dates to the late 19th century, crafted by master artisans of Shekhawati. The doors are adorned with hand-carved floral and geometric patterns typical of Marwari craftsmanship.",
    origin: "Shekhawati, Rajasthan",
    period: "Late 19th Century",
    material: "Solid Teak Wood",
    dimensions: "H: 210cm | W: 130cm | D: 55cm",
    condition: "Good — original finish with natural ageing",
    price: "₹1,40,000 - ₹3,20,000",
    enquiryOnly: true,
    images: [
      "/images/heritage-furniture.jpg",
      "/images/antique-objects.jpg",
    ],
    tags: ["teak", "wardrobe", "Rajasthani", "carved", "furniture"],
    featured: true,
    relatedSlugs: ["rustic-timber-dining-ensemble", "bronze-nataraj"],
  },
  {
    id: "p003",
    slug: "bronze-nataraj",
    name: "Chola-Style Bronze Nataraj",
    category: "ACCENT PIECES",
    subcategory: "Sculpture & Art",
    shortDescription:
      "A hand-cast lost-wax bronze representation of Shiva Nataraja in an arch of fire.",
    description:
      "Cast using the traditional cire-perdue (lost wax) process that has been maintained in Tamil Nadu for over a millennium. Every curve and mudra captures the celestial dance of dissolution and creation.",
    origin: "Swamimalai, Tamil Nadu",
    period: "Mid 20th Century, Chola Tradition",
    material: "Panchaloha Bronze",
    dimensions: "H: 76cm | W: 58cm | D: 22cm",
    condition: "Excellent — authentic temple patina",
    price: "₹95,000 - ₹2,10,000",
    enquiryOnly: true,
    images: ["/images/antique-objects.jpg", "/images/jaipur-palace.jpg"],
    tags: ["bronze", "sculpture", "Chola", "Nataraj", "art"],
    featured: true,
    relatedSlugs: ["rustic-timber-dining-ensemble", "carved-teak-wardrobe"],
  },
  {
    id: "p004",
    slug: "brass-oil-lamp",
    name: "Traditional Hanging Brass Deepam Lamp",
    category: "LIGHTING & ACCESSORIES",
    subcategory: "Lighting",
    shortDescription:
      "An authentic multi-tiered temple oil lamp cast in heavy bell-metal brass.",
    description:
      "Cast by generational brass-smiths, this ceremonial deepam features multiple oil reservoirs with intricate swan and peacock finials. Designed for suspension in high-ceiling heritage interiors.",
    origin: "Kerala / Tamil Nadu",
    period: "Early 20th Century",
    material: "Cast Brass",
    dimensions: "H: 95cm | Diameter: 32cm",
    condition: "Cleaned and stabilized patina",
    price: "₹45,000 - ₹85,000",
    enquiryOnly: true,
    images: ["/images/antique-objects.jpg"],
    tags: ["brass", "lamp", "temple", "lighting"],
    featured: false,
    relatedSlugs: ["bronze-nataraj"],
  },
  {
    id: "p005",
    slug: "marwar-haveli-armchair",
    name: "Marwar Haveli Armchair",
    category: "SEATING & SOFAS",
    subcategory: "Heritage Seating",
    shortDescription:
      "Turned-wood ceremonial armchair with brass finials and hand-woven cane work.",
    description:
      "Handcrafted for a noble residence in Marwar, featuring sculptural solid rosewood posts, turned armrests, and brass capped feet.",
    origin: "Jodhpur, Rajasthan",
    period: "Circa 1910",
    material: "Rosewood & Natural Cane",
    dimensions: "H: 92cm | W: 68cm | D: 65cm",
    condition: "Restored frame with new natural cane",
    price: "₹65,000 - ₹1,20,000",
    enquiryOnly: true,
    images: ["/images/heritage-furniture.jpg"],
    tags: ["chair", "marwar", "seating", "cane"],
    featured: true,
    relatedSlugs: ["rustic-timber-dining-ensemble"],
  },
  {
    id: "p006",
    slug: "shekhawati-painted-door",
    name: "Shekhawati Architectural Painted Door",
    category: "LIVING ROOM HERITAGE",
    subcategory: "Architectural Element",
    shortDescription:
      "A monumental dual-panel haveli entrance door with carved iron studs and painted lintel.",
    description:
      "Recovered from a restored merchant haveli in Mandawa. Solid wood panels reinforced with forged iron flower studs and brass locking plates.",
    origin: "Mandawa, Shekhawati",
    period: "Late 19th Century",
    material: "Teak & Hand-Forged Iron",
    dimensions: "H: 220cm | W: 140cm",
    condition: "Original natural weathered patina",
    price: "₹1,80,000 - ₹3,50,000",
    enquiryOnly: true,
    images: ["/images/jaipur-palace.jpg", "/images/heritage-furniture.jpg"],
    tags: ["door", "shekhawati", "architectural", "iron"],
    featured: true,
    relatedSlugs: ["rustic-timber-dining-ensemble"],
  },
  {
    id: "p007",
    slug: "jaipur-court-banquet-table",
    name: "Jaipur Court Banquet Table",
    category: "DINING ROOM HERITAGE",
    subcategory: "Heritage Furniture / Dining",
    shortDescription:
      "Grand 12-seater banquet table with fluted baluster legs and brass inlay edging.",
    description:
      "Designed for palace entertaining, this monumental table combines seasoned shisham timber with delicate brass strip inlay along the bevelled perimeter.",
    origin: "Jaipur, Rajasthan",
    period: "Early 20th Century",
    material: "Seasoned Shisham & Brass",
    dimensions: "L: 360cm | W: 120cm | H: 77cm",
    condition: "Masterfully restored French polish",
    price: "₹2,20,000 - ₹4,80,000",
    enquiryOnly: true,
    images: ["/images/heritage-furniture.jpg", "/images/antique-showroom.jpg"],
    tags: ["table", "banquet", "jaipur", "dining"],
    featured: true,
    relatedSlugs: ["rustic-timber-dining-ensemble"],
  },
  {
    id: "p008",
    slug: "royal-palace-mirror",
    name: "Gilded Thikri Glass Arch Mirror",
    category: "ACCENT PIECES",
    subcategory: "Mirrors & Glass",
    shortDescription:
      "Handmade Belgian mirror set inside a cusped Mughal arch frame with convex Thikri glass work.",
    description:
      "Crafted by traditional Thikri glass-mosaic artisans of Udaipur. Hundreds of hand-cut silvered glass convex pieces form shimmering peacock and lotus arabesques.",
    origin: "Udaipur, Rajasthan",
    period: "Mid 20th Century",
    material: "Carved Teak & Thikri Convex Glass",
    dimensions: "H: 145cm | W: 85cm",
    condition: "Pristine mosaic intact",
    price: "₹75,000 - ₹1,60,000",
    enquiryOnly: true,
    images: ["/images/antique-objects.jpg"],
    tags: ["mirror", "thikri", "glass", "udaipur"],
    featured: true,
    relatedSlugs: ["bronze-nataraj"],
  },
  {
    id: "p009",
    slug: "rajasthani-carved-daybed",
    name: "Royal Takhat Carved Daybed",
    category: "LIVING ROOM HERITAGE",
    subcategory: "Daybeds & Loungers",
    shortDescription:
      "Traditional low-seating royal daybed with carved ball-and-claw legs and bolster cushions.",
    description:
      "An aristocratic daybed designed for royal salons and courtyards. Features substantial carved rails, traditional turned legs, and handwoven cotton webbing foundation.",
    origin: "Bikaner, Rajasthan",
    period: "Circa 1920",
    material: "Solid Teak & Brass Fittings",
    dimensions: "L: 210cm | W: 110cm | H: 55cm",
    condition: "Fully restored and structurally stabilized",
    price: "₹1,10,000 - ₹2,30,000",
    enquiryOnly: true,
    images: ["/images/heritage-furniture.jpg"],
    tags: ["daybed", "takhat", "living", "bikaner"],
    featured: true,
    relatedSlugs: ["marwar-haveli-armchair"],
  },
  {
    id: "p010",
    slug: "hand-hammered-brass-planter",
    name: "Monumental Hand-Hammered Urli Planter",
    category: "LIGHTING & ACCESSORIES",
    subcategory: "Metalware",
    shortDescription:
      "Wide-rim ceremonial urli with hand-hammered repoussé rim and heavy cast handles.",
    description:
      "Substantial heavy-gauge brass vessel once used in grand courtyard water features, floating flower arrangements, or palace entrances.",
    origin: "Thanjavur, Tamil Nadu",
    period: "Early 20th Century",
    material: "Heavy Gauge Bell Metal",
    dimensions: "Diameter: 85cm | H: 38cm",
    condition: "Rich aged brass patina with subtle verdigris",
    price: "₹38,000 - ₹72,000",
    enquiryOnly: true,
    images: ["/images/antique-objects.jpg"],
    tags: ["urli", "brass", "planter", "metalware"],
    featured: false,
    relatedSlugs: ["brass-oil-lamp"],
  },
  {
    id: "p011",
    slug: "colonial-four-poster-bed",
    name: "Anglo-Indian Carved Four-Poster Bed",
    category: "BEDROOM HERITAGE",
    subcategory: "Beds & Suites",
    shortDescription:
      "Magnificent canopy four-poster bed with spiral fluted posts and carved cresting.",
    description:
      "An exceptional example of Anglo-Indian cabinet-making from the Malabar coast, showcasing intricately turned spiral columns, acanthus leaf cornices, and solid headboard paneling.",
    origin: "Malabar Coast, Kerala",
    period: "Late 19th Century",
    material: "Solid Indian Rosewood",
    dimensions: "H: 235cm | L: 215cm | W: 190cm",
    condition: "Museum grade restoration",
    price: "₹2,60,000 - ₹5,40,000",
    enquiryOnly: true,
    images: ["/images/heritage-furniture.jpg", "/images/jaipur-palace.jpg"],
    tags: ["bed", "four-poster", "colonial", "rosewood"],
    featured: true,
    relatedSlugs: ["carved-teak-wardrobe"],
  },
  {
    id: "p012",
    slug: "jodhpur-campaign-chair-pair",
    name: "Pair of Royal Jodhpur Campaign Chairs",
    category: "SEATING & SOFAS",
    subcategory: "Chairs",
    shortDescription:
      "Folding teak and saddlery-grade bridle leather campaign armchairs with brass buckles.",
    description:
      "Originally engineered for royal shikar expeditions, these chairs fold smoothly via interlocking brass hinges while offering exceptional comfort and enduring style.",
    origin: "Jodhpur, Rajasthan",
    period: "Circa 1930",
    material: "Burma Teak, Cast Brass & Vegetable-Tanned Leather",
    dimensions: "H: 86cm | W: 64cm | D: 70cm",
    condition: "Supple conditioned leather with rich aged honey wood",
    price: "₹85,000 - ₹1,75,000",
    enquiryOnly: true,
    images: ["/images/antique-showroom.jpg", "/images/heritage-furniture.jpg"],
    tags: ["chair", "campaign", "leather", "jodhpur"],
    featured: true,
    relatedSlugs: ["marwar-haveli-armchair"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All" || !category) return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
  if (product.relatedSlugs && product.relatedSlugs.length > 0) {
    const related = products.filter((p) =>
      product.relatedSlugs?.includes(p.slug)
    );
    if (related.length >= 3) return related.slice(0, 3);
  }
  return products.filter((p) => p.id !== product.id).slice(0, 3);
}
