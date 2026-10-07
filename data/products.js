/**
 * Native Flower Company - Product Catalog Data
 * Sourced authentically from nativeflowercompany.com (Salt Lake City, Utah)
 */
const PRODUCTS_DATA = [
  {
    id: "fall-birthday-bouquet",
    title: "Fall Birthday Bouquet",
    handle: "fall-birthday-bouquet",
    price: 65.00,
    deluxePrice: 95.00,
    premiumPrice: 130.00,
    category: ["all", "seasonal", "under80"],
    categoryLabel: "Seasonal Best Seller",
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 52,
    images: [
      "assets/images/prod-birthday-2.jpg",
      "assets/images/prod-birthday-1.jpg"
    ],
    stems: ["Utah Honey Dahlias", "Toffee Garden Roses", "Peach Ranunculus", "Autumn Eucalyptus", "Chocolate Cosmos"],
    description: "An exuberant, golden-hour celebration arrangement. Bursting with locally grown Utah honey dahlias, heirloom garden roses, and warm autumn foliage, arranged in a handcrafted matte ceramic vase.",
    dimensions: 'Approx. 14" W x 16" H',
    careTips: "Trim stems at a 45-degree angle every 2 days and refresh with cold water."
  },
  {
    id: "petals-with-a-purpose-fall",
    title: "Petals With a Purpose Fall",
    handle: "petals-with-a-purpose-fall",
    price: 85.00,
    deluxePrice: 115.00,
    premiumPrice: 155.00,
    category: ["all", "seasonal"],
    categoryLabel: "Community Benefit",
    badge: "10% Donated",
    rating: 5.0,
    reviewsCount: 38,
    images: [
      "assets/images/prod-purpose-2.jpg",
      "assets/images/prod-purpose-1.jpg"
    ],
    stems: ["Terracotta Roses", "Burgundy Scabiosa", "Preserved Desert Grasses", "Goldenrod", "Seed Eucalyptus"],
    description: "10% of every arrangement purchase is donated directly to Wasatch Community Gardens in Salt Lake City. A harmonious study in rich earth tones, wine-red scabiosa, and dried wild textures.",
    dimensions: 'Approx. 15" W x 17" H',
    careTips: "Keep away from direct HVAC vents and bright direct afternoon sunlight."
  },
  {
    id: "i-will-always-love-you",
    title: "I Will Always Love You",
    handle: "i-will-always-love-you",
    price: 130.00,
    deluxePrice: 175.00,
    premiumPrice: 220.00,
    category: ["all", "romance"],
    categoryLabel: "Luxury Romance",
    badge: "Artisan Luxury",
    rating: 5.0,
    reviewsCount: 64,
    images: [
      "assets/images/prod-love-2.jpg",
      "assets/images/prod-love-1.jpg"
    ],
    stems: ["Blush Ecuadorian Garden Roses", "Double Lisianthus", "Sweet Fragrant Jasmine Vine", "Astilbe", "Silver Dollar Eucalyptus"],
    description: "An unforgettable romantic statement piece. Velvety layers of soft blush garden roses, billowy lisianthus, and delicate trailing greens composed in an elevated glass pedestal urn.",
    dimensions: 'Approx. 18" W x 20" H',
    careTips: "Add floral food packet included upon arrival for maximum 7-10 day bloom longevity."
  },
  {
    id: "rainbowland",
    title: "RainbowLand",
    handle: "rainbowland",
    price: 140.00,
    deluxePrice: 185.00,
    premiumPrice: 235.00,
    category: ["all", "seasonal", "vases"],
    categoryLabel: "Vibrant Centerpiece",
    badge: "Statement Piece",
    rating: 4.8,
    reviewsCount: 29,
    images: [
      "assets/images/prod-rainbow-2.jpg",
      "assets/images/prod-rainbow-1.jpg"
    ],
    stems: ["Coral Charm Peonies", "Cobalt Delphinium", "Sunburst Marigolds", "Lilac Snapdragons", "Blue Thistle"],
    description: "Joyful, vivid, and full of creative vitality. RainbowLand combines expressive contrasts of coral, saturated sky blues, sunny yellows, and deep amethyst blooms designed to electrify any interior.",
    dimensions: 'Approx. 19" W x 22" H',
    careTips: "Top off vase water daily as large blooms drink up to 2 cups of water per day."
  },
  {
    id: "shine",
    title: "Shine",
    handle: "shine",
    price: 120.00,
    deluxePrice: 155.00,
    premiumPrice: 195.00,
    category: ["all", "seasonal", "vases"],
    categoryLabel: "Warm & Cheerful",
    badge: "Studio Favorite",
    rating: 4.9,
    reviewsCount: 41,
    images: [
      "assets/images/prod-shine-2.jpg",
      "assets/images/prod-shine-1.jpg"
    ],
    stems: ["High-Desert Sunflowers", "Buttercup Spray Roses", "Chamomile Daisies", "Hypericum Berries", "Lemon Leaf"],
    description: "Channeling the serene warmth of high-desert sunshine across Utah's valleys. Rich buttery petals, dancing chamomile blossoms, and rustic botanical greens in a fluted ceramic urn.",
    dimensions: 'Approx. 16" W x 18" H',
    careTips: "Remove any fallen foliage from the water line to prevent bacterial cloudiness."
  },
  {
    id: "rockin-years",
    title: "Rockin' Years",
    handle: "rockin-years",
    price: 135.00,
    deluxePrice: 175.00,
    premiumPrice: 225.00,
    category: ["all", "romance", "seasonal"],
    categoryLabel: "Moody Romance",
    badge: "Designer Pick",
    rating: 5.0,
    reviewsCount: 33,
    images: [
      "assets/images/prod-rockin-2.jpg",
      "assets/images/prod-rockin-1.jpg"
    ],
    stems: ["Antique Mauve Roses", "Wine Dahlia Blooms", "Copper Beech Foliage", "Black Scabiosa", "Cascading Pepperberry"],
    description: "Cinematic, moody, and deeply evocative. Rockin' Years showcases dramatic autumnal depths of burgundy, smoked plum, and antique mauve, styled for dinner tables, anniversaries, or intimate celebrations.",
    dimensions: 'Approx. 17" W x 19" H',
    careTips: "Keep in a cool room overnight to prolong the delicate dahlia petal life."
  },
  {
    id: "farm-fresh-vase",
    title: "Farm Fresh VASE",
    handle: "farm-fresh-vase",
    price: 100.00,
    deluxePrice: 135.00,
    premiumPrice: 175.00,
    category: ["all", "vases"],
    categoryLabel: "Daily Signature",
    badge: "Same-Day Ready",
    rating: 4.9,
    reviewsCount: 78,
    images: [
      "assets/images/prod-vase-2.jpg",
      "assets/images/prod-vase-1.jpg"
    ],
    stems: ["Fresh Market Stems", "Seasonal Fillers", "Fragrant Herbs", "Textured Greens", "Garden Roses"],
    description: "Our signature everyday arrangement. Designed fresh each morning with the best grower cuts from regional American flower farms. Arranged directly in a recyclable glass cylinder.",
    dimensions: 'Approx. 15" W x 16" H',
    careTips: "Place in a cool spot away from ripening fruit (which emits ethylene gas)."
  },
  {
    id: "local-farm-bundle",
    title: "DC: Farm Fresh Bundle",
    handle: "local-farm-bundle",
    price: 75.00,
    deluxePrice: 105.00,
    premiumPrice: 140.00,
    category: ["all", "under80"],
    categoryLabel: "Hand-Tied Wrap",
    badge: "Eco Wrap",
    rating: 4.8,
    reviewsCount: 46,
    images: [
      "assets/images/prod-bundle-2.jpg",
      "assets/images/prod-bundle-1.jpg"
    ],
    stems: ["Mixed Seasonal Stems", "Greens", "Hardy Botanicals"],
    description: "For the DIY flower enthusiast. A generous armful of premium grower stems, stripped and cleaned, hand-wrapped in recycled brown kraft paper and tied with natural jute twine.",
    dimensions: 'Approx. 18" stem length',
    careTips: "Give stems a fresh diagonal cut under running water before arranging in your vase."
  },
  {
    id: "assorted-dahlia-wrap",
    title: "Assorted Dahlia Wrap",
    handle: "assorted-dahlia-wrap",
    price: 75.00,
    deluxePrice: 110.00,
    premiumPrice: 150.00,
    category: ["all", "seasonal", "under80"],
    categoryLabel: "Farm Special",
    badge: "Limited Harvest",
    rating: 5.0,
    reviewsCount: 57,
    images: [
      "assets/images/prod-dahlia-2.jpg",
      "assets/images/prod-dahlia-1.jpg"
    ],
    stems: ["12-14 Dinnerplate & Ball Dahlias", "Fresh Mint & Bay Laurel foliage"],
    description: "Cut daily from our partner dahlia fields in northern Utah. A dreamy kaleidoscope of ball, decorative, and dinnerplate varieties in sunset hues of peach, blush, amber, and fuchsia.",
    dimensions: 'Approx. 12 stems, 16" length',
    careTips: "Dahlias are thirsty! Change water completely every 24-48 hours."
  },
  {
    id: "designers-choice",
    title: "Designer's Choice",
    handle: "designers-choice",
    price: 60.00,
    deluxePrice: 90.00,
    premiumPrice: 125.00,
    category: ["all", "under80", "vases"],
    categoryLabel: "Custom Florist Art",
    badge: "Most Popular",
    rating: 5.0,
    reviewsCount: 142,
    images: [
      "assets/images/prod-designers-1.jpg",
      "assets/images/prod-birthday-2.jpg"
    ],
    stems: ["Lead Florist's Curated Daily Palette"],
    description: "Give our master florists creative freedom! We select the absolute freshest, most exceptional seasonal stems arriving at the studio each morning to handcraft a unique botanical masterpiece.",
    dimensions: 'Custom scaled to selected tier',
    careTips: "Enjoy the natural beauty! Each Designer's Choice comes with our 7-day guarantee."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_DATA;
}
