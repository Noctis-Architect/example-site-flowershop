/**
 * Flower Studio - Product Catalog Data
 * Realistic boutique florist inventory
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
    stems: ["Honey Dahlias", "Toffee Garden Roses", "Peach Ranunculus", "Autumn Eucalyptus", "Chocolate Cosmos"],
    description: "A seasonal arrangement featuring honey dahlias, toffee garden roses, and peach ranunculus arranged in a matte ceramic vase.",
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
    description: "A warm earth-toned arrangement of terracotta roses, burgundy scabiosa, and dried wild grasses. 10% of proceeds support local community gardens.",
    dimensions: 'Approx. 15" W x 17" H',
    careTips: "Keep away from heating vents and direct hot afternoon sunlight."
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
    badge: "Studio Signature",
    rating: 5.0,
    reviewsCount: 64,
    images: [
      "assets/images/prod-love-2.jpg",
      "assets/images/prod-love-1.jpg"
    ],
    stems: ["Blush Garden Roses", "Double Lisianthus", "Jasmine Vine", "Astilbe", "Silver Dollar Eucalyptus"],
    description: "Layers of blush garden roses, double lisianthus, and fragrant greens arranged in an elevated glass compote urn.",
    dimensions: 'Approx. 18" W x 20" H',
    careTips: "Add the included nutrient packet on day one for maximum bloom longevity."
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
    description: "A colorful centerpiece featuring coral peonies, delphinium, and summer marigolds arranged in a white ceramic vase.",
    dimensions: 'Approx. 19" W x 22" H',
    careTips: "Check water levels daily as peonies and delphinium drink rapidly."
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
    stems: ["Sunflowers", "Buttercup Spray Roses", "Chamomile Daisies", "Hypericum Berries", "Lemon Leaf"],
    description: "Sunflowers paired with buttercup spray roses, chamomile, and fresh foliage in a fluted ceramic urn.",
    dimensions: 'Approx. 16" W x 18" H',
    careTips: "Remove any leaves below the water line to keep vase water clear."
  },
  {
    id: "rockin-years",
    title: "Rockin' Years",
    handle: "rockin-years",
    price: 135.00,
    deluxePrice: 175.00,
    premiumPrice: 225.00,
    category: ["all", "romance", "seasonal"],
    categoryLabel: "Autumn Romance",
    badge: "Designer Pick",
    rating: 5.0,
    reviewsCount: 33,
    images: [
      "assets/images/prod-rockin-2.jpg",
      "assets/images/prod-rockin-1.jpg"
    ],
    stems: ["Antique Mauve Roses", "Wine Dahlia Blooms", "Copper Beech Foliage", "Black Scabiosa", "Pepperberry"],
    description: "Autumnal table arrangement featuring antique mauve roses, dark wine dahlias, and copper foliage in a low stone vessel.",
    dimensions: 'Approx. 17" W x 19" H',
    careTips: "Keep in a cool room overnight to prolong dahlia petal life."
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
    description: "Our signature daily arrangement built with the morning's freshest grower stems in a clear cylinder vase.",
    dimensions: 'Approx. 15" W x 16" H',
    careTips: "Keep away from ripening fruit to prevent early petal aging."
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
    description: "A generous loose wrap of seasonal grower stems hand-tied in brown kraft paper, stripped and ready for your own vases.",
    dimensions: 'Approx. 18" stem length',
    careTips: "Trim stems under running water before placing in your vase."
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
    badge: "Seasonal Harvest",
    rating: 5.0,
    reviewsCount: 57,
    images: [
      "assets/images/prod-dahlia-2.jpg",
      "assets/images/prod-dahlia-1.jpg"
    ],
    stems: ["12-14 Dinnerplate & Ball Dahlias", "Fresh Mint & Bay Laurel foliage"],
    description: "A hand-tied bunch of fresh-cut dinnerplate and ball dahlias in mixed seasonal colors, wrapped in paper with garden foliage.",
    dimensions: 'Approx. 12 stems, 16" length',
    careTips: "Dahlias drink heavily. Change the water completely every 1-2 days."
  },
  {
    id: "designers-choice",
    title: "Designer's Choice",
    handle: "designers-choice",
    price: 60.00,
    deluxePrice: 90.00,
    premiumPrice: 125.00,
    category: ["all", "under80", "vases"],
    categoryLabel: "Custom Arrangement",
    badge: "Most Popular",
    rating: 5.0,
    reviewsCount: 142,
    images: [
      "assets/images/prod-designers-1.jpg",
      "assets/images/prod-birthday-2.jpg"
    ],
    stems: ["Florist-Selected Daily Palette"],
    description: "Allow our florists to hand-select the finest morning blooms to create a custom arrangement in your chosen size.",
    dimensions: 'Custom scaled to selected tier',
    careTips: "Includes our 7-day freshness guarantee and care card."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_DATA;
}
