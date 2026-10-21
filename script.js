/**
 * ShopEase - Modern Static E-Commerce Platform
 * Vanilla JavaScript Logic & State Management
 */

/* --------------------------------------------------------------------------
   1. Sample Product Dataset (16 Curated Products across 6 Categories)
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: "SonicWave Pro Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 3499,
    originalPrice: 5999,
    rating: 4.8,
    reviewsCount: 342,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Immerse yourself in high-fidelity sound with 40mm titanium drivers, active noise cancellation up to 35dB, and 45-hour ultra-long battery life with quick charging.",
    specs: ["Bluetooth 5.3 + AAC Codec", "Active Noise Cancellation (ANC)", "45-Hour Battery Life", "Ergonomic Memory Foam Earcups"]
  },
  {
    id: 2,
    name: "AuraPulse Ultra Smartwatch & Health Tracker",
    category: "Electronics",
    price: 2799,
    originalPrice: 4499,
    rating: 4.7,
    reviewsCount: 218,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "Stay ahead of your wellness goals with a 1.96-inch AMOLED display, 24/7 heart-rate monitoring, SpO2 sensor, and 100+ professional sports modes.",
    specs: ["1.96\" Crisp AMOLED Display", "Continuous Heart & SpO2 Monitor", "IP68 Water & Dust Resistance", "Up to 10 Days Battery Life"]
  },
  {
    id: 3,
    name: "UrbanKnit Oversized Heavyweight Cotton Hoodie",
    category: "Fashion",
    price: 1299,
    originalPrice: 2199,
    rating: 4.6,
    reviewsCount: 184,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    description: "Crafted from 100% premium combed organic cotton (380 GSM). Delivers maximum warmth, a stylish relaxed drape, and ribbed cuffs for cozy everyday street fashion.",
    specs: ["380 GSM Heavyweight Terry", "100% Combed Organic Cotton", "Kangaroo Pocket & Double Hood", "Pre-shrunk Anti-fade Fabric"]
  },
  {
    id: 4,
    name: "VelocityGlide Air Cushion Running Shoes",
    category: "Shoes",
    price: 2499,
    originalPrice: 4299,
    rating: 4.9,
    reviewsCount: 412,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description: "Engineered for high performance runners. Features responsive dual-density air-cushion foam, breathable jacquard mesh upper, and high-traction rubber outsole.",
    specs: ["Dynamic Air-Spring Midsole", "Breathable Engineered Mesh", "Anti-Skid High Abrasion Outsole", "Weight: 260g (Super lightweight)"]
  },
  {
    id: 5,
    name: "ChronoMaster Precision Black Dial Chronograph",
    category: "Watches",
    price: 4499,
    originalPrice: 7499,
    rating: 4.8,
    reviewsCount: 156,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    description: "Masterpiece chronograph featuring Japanese quartz movement, scratch-resistant sapphire crystal glass, 3 functional sub-dials, and genuine stainless-steel link bracelet.",
    specs: ["Japanese Multi-Function Movement", "Scratch-Resistant Sapphire Glass", "5 ATM (50m) Water Resistant", "Surgical Grade 316L Stainless Steel"]
  },
  {
    id: 6,
    name: "ErgoComfort High-Back Mesh Ergonomic Office Chair",
    category: "Home & Living",
    price: 8999,
    originalPrice: 13999,
    rating: 4.9,
    reviewsCount: 298,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80",
    description: "Designed for all-day posture support with adjustable 3D lumbar cushioning, breathable Korean mesh back, multi-angle synchro recline, and class-4 heavy-duty hydraulic piston.",
    specs: ["Adjustable 3D Lumbar Support", "3-Stage Synchro Tilt Lock", "Class 4 BIFMA Certified Gas Lift", "Breathable Korean Nylon Mesh"]
  },
  {
    id: 7,
    name: "NomadPro Anti-Theft Water-Resistant Laptop Backpack",
    category: "Accessories",
    price: 1899,
    originalPrice: 3199,
    rating: 4.7,
    reviewsCount: 204,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "Smart 30L commuter backpack equipped with a padded compartment for up to 16-inch laptops, hidden anti-theft back pocket, external USB fast charging port, and water-repellent oxford fabric.",
    specs: ["Fits up to 16\" Laptops", "Water-Repellent 900D Oxford Fabric", "Integrated External USB Port", "TSA-Friendly 180° Lay-Flat Opening"]
  },
  {
    id: 8,
    name: "BassStorm 360 Portable Bluetooth Speaker",
    category: "Electronics",
    price: 1899,
    originalPrice: 2999,
    rating: 4.6,
    reviewsCount: 165,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    description: "Fill any room or outdoor gathering with punchy 360-degree surround sound, dual passive radiators, IPX7 waterproof rating, and up to 18 hours of continuous playtime.",
    specs: ["24W Powerful 360° Output", "IPX7 Full Waterproof Submersion", "18-Hour Battery with Powerbank Mode", "TWS Pairing Support"]
  },
  {
    id: 9,
    name: "AeroTech Waterproof Windbreaker Jacket",
    category: "Fashion",
    price: 2199,
    originalPrice: 3499,
    rating: 4.5,
    reviewsCount: 119,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    description: "Lightweight, packable outdoor windbreaker with DWR water-repellent coating, adjustable hood, storm flap zipper, and breathable underarm mesh ventilation.",
    specs: ["DWR Water-Repellent Shell", "Ultra-Lightweight & Packable", "Reflective Safety Trims", "Zippered Weather-Proof Pockets"]
  },
  {
    id: 10,
    name: "ApexStreet Retro High-Top Sneakers",
    category: "Shoes",
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    reviewsCount: 275,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    description: "Timeless vintage court style fused with modern street comfort. Features genuine leather trims, padded collar, cushioned insole, and durable cupsole construction.",
    specs: ["Supple Vegan Leather & Suede", "Padded Ankle Support Collar", "Shock-Absorbing Memory Insole", "Classic Textured Vulcanized Sole"]
  },
  {
    id: 11,
    name: "Minimalist Rose Gold Mesh Strap Classic Watch",
    category: "Watches",
    price: 2299,
    originalPrice: 3799,
    rating: 4.7,
    reviewsCount: 143,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    description: "Effortlessly elegant ultra-slim 7mm case profile with sunray dial, delicate rose gold stainless steel mesh strap, and accurate Japanese quartz caliber.",
    specs: ["Ultra-Slim 7mm Case Thickness", "Interchangeable Quick-Release Mesh Band", "Hardened Mineral Crystal", "Splash & Rain Resistant (3 ATM)"]
  },
  {
    id: 12,
    name: "Nordic Mist Ultrasonic Aroma Diffuser & Humidifier",
    category: "Home & Living",
    price: 1199,
    originalPrice: 1899,
    rating: 4.7,
    reviewsCount: 198,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    description: "Transform your home atmosphere with 500ml ultrasonic cool mist diffusion, 7 soothing ambient LED mood lights, whisper-quiet 22dB operation, and auto shut-off.",
    specs: ["500ml Large Capacity Tank", "7 Ambient Soothing LED Colors", "Whisper Quiet Ultrasonic Mode (<22dB)", "Timer Setting: 1h / 3h / 6h / On"]
  },
  {
    id: 13,
    name: "AviatorPolarized UV400 Matte Finish Sunglasses",
    category: "Accessories",
    price: 999,
    originalPrice: 1799,
    rating: 4.6,
    reviewsCount: 220,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    description: "Classic teardrop aviator silhouette engineered with triacetate TAC polarized lenses that eliminate 99.9% of glare and provide 100% UV400 full ultraviolet defense.",
    specs: ["TAC 9-Layer Polarized Lenses", "100% UV400 Protection", "Featherlight Stainless Steel Frame", "Soft Silicone Nose Pads"]
  },
  {
    id: 14,
    name: "VisionPad 4K Ultra-Slim 27-inch IPS Monitor",
    category: "Electronics",
    price: 14999,
    originalPrice: 19999,
    rating: 4.9,
    reviewsCount: 182,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    description: "Breathtaking 4K UHD (3840x2160) IPS panel offering 99% sRGB color gamut, HDR10 support, micro-edge 3-sided borderless frame, and USB-C 65W charging input.",
    specs: ["4K UHD (3840 x 2160) Resolution", "99% sRGB Color Accuracy + HDR10", "USB-C Single Cable Video & 65W Power", "Adjustable Height, Pivot & Tilt Stand"]
  },
  {
    id: 15,
    name: "Classic Indigo Denim Slim-Fit Stretch Jeans",
    category: "Fashion",
    price: 1499,
    originalPrice: 2499,
    rating: 4.5,
    reviewsCount: 310,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    description: "Engineered with 98% cotton and 2% elastane for the ideal balance between authentic denim look and flexible all-day stretch comfort. Finished in a versatile deep indigo rinse.",
    specs: ["Flex-Recovery Stretch Denim", "Authentic 5-Pocket Styling", "Reinforced Rivets & YKK Zipper", "Signature Slim-Tapered Leg"]
  },
  {
    id: 16,
    name: "Monarch Handcrafted Genuine Leather Oxford Shoes",
    category: "Shoes",
    price: 3799,
    originalPrice: 5999,
    rating: 4.9,
    reviewsCount: 144,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
    description: "Hand-burnished full-grain crust leather oxford shoes with closed lacing, padded insole, breathable sheepskin lining, and durable Goodyear-welted look composite sole.",
    specs: ["Full-Grain Handcrafted Leather", "Soft Sheepskin Breathable Lining", "Cushioned Ortho-Comfort Footbed", "Formal Closed-Lacing Silhouette"]
  }
];

// Fallback SVG image for broken network requests
const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%22%20viewBox%3D%220%200%20400%20400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2248%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%2394a3b8%22%20font-weight%3D%22bold%22%3EShopEase%20Product%3C%2Ftext%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2256%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23cbd5e1%22%3EImage%20Preview%3C%2Ftext%3E%3C%2Fsvg%3E";

/* --------------------------------------------------------------------------
   2. Application State & Storage
   -------------------------------------------------------------------------- */
const AppState = {
  cart: [],
  wishlist: [],
  activeCategory: "all",
  searchQuery: "",
  sortBy: "default",
  maxPrice: 20000,
  minRating: 0,
  appliedCoupon: null, // { code: 'FLASH15', discountRate: 0.15 }
  freeShippingThreshold: 999
};

// Available Coupons
const VALID_COUPONS = {
  FLASH15: 0.15,
  SHOPENEW: 0.15,
  WELCOME10: 0.10
};

/* --------------------------------------------------------------------------
   3. Initialization & LocalStorage
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
  startFlashCountdown();
  setupEventListeners();
  updatePriceFilterLabel();
});

function loadStoredData() {
  try {
    const savedCart = localStorage.getItem("shopease_cart");
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
    }
  } catch (err) {
    console.warn("Could not load cart from storage", err);
    AppState.cart = [];
  }

  try {
    const savedWishlist = localStorage.getItem("shopease_wishlist");
    if (savedWishlist) {
      AppState.wishlist = JSON.parse(savedWishlist);
    }
  } catch (err) {
    console.warn("Could not load wishlist from storage", err);
    AppState.wishlist = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("shopease_cart", JSON.stringify(AppState.cart));
  } catch (e) {
    console.warn("Cart storage error", e);
  }
}

function saveWishlistToStorage() {
  try {
    localStorage.setItem("shopease_wishlist", JSON.stringify(AppState.wishlist));
  } catch (e) {
    console.warn("Wishlist storage error", e);
  }
}

/* --------------------------------------------------------------------------
   4. Currency Formatting Helper
   -------------------------------------------------------------------------- */
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/* --------------------------------------------------------------------------
   5. Product Filtering & Rendering
   -------------------------------------------------------------------------- */
function getFilteredAndSortedProducts() {
  let list = [...PRODUCTS];

  // 1. Category Filter
  if (AppState.activeCategory && AppState.activeCategory !== "all") {
    list = list.filter(item => 
      item.category.toLowerCase() === AppState.activeCategory.toLowerCase()
    );
  }

  // 2. Search Query Filter
  if (AppState.searchQuery.trim() !== "") {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  }

  // 3. Price Filter (Maximum Price)
  list = list.filter(item => item.price <= AppState.maxPrice);

  // 4. Rating Filter
  if (AppState.minRating > 0) {
    list = list.filter(item => item.rating >= AppState.minRating);
  }

  // 5. Sorting
  switch (AppState.sortBy) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "discount":
      list.sort((a, b) => {
        const discA = ((a.originalPrice - a.price) / a.originalPrice);
        const discB = ((b.originalPrice - b.price) / b.originalPrice);
        return discB - discA;
      });
      break;
    case "default":
    default:
      // Preserves original order
      break;
  }

  return list;
}

function renderProducts() {
  const container = document.getElementById("productsGrid");
  const countDisplay = document.getElementById("resultsCount");
  if (!container) return;

  const filtered = getFilteredAndSortedProducts();

  if (countDisplay) {
    countDisplay.innerHTML = `Showing <span>${filtered.length}</span> of <span>${PRODUCTS.length}</span> products`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <i class="fa-solid fa-box-open"></i>
        </div>
        <h4 class="empty-title">No products match your criteria</h4>
        <p class="empty-desc">Try resetting your filters or search terms to explore our full collection of premium products.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">
          <i class="fa-solid fa-arrows-rotate"></i> Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => {
    const isWishlisted = AppState.wishlist.includes(prod.id);
    const cartItem = AppState.cart.find(c => c.id === prod.id);
    const discountPercent = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

    let badgeClass = "sale";
    if (prod.badge === "Hot") badgeClass = "hot";
    if (prod.badge === "Bestseller") badgeClass = "bestseller";

    return `
      <div class="product-card" data-id="${prod.id}">
        <div class="product-image-box">
          <div class="product-badge-stack">
            <span class="prod-badge ${badgeClass}">${prod.badge}</span>
            <span class="prod-badge discount">-${discountPercent}% OFF</span>
          </div>

          <div class="card-floating-actions">
            <button 
              class="btn-card-action ${isWishlisted ? 'active-wishlist' : ''}" 
              title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
              onclick="toggleWishlist(${prod.id})"
              aria-label="Wishlist"
            >
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <button 
              class="btn-card-action" 
              title="Quick View"
              onclick="openQuickView(${prod.id})"
              aria-label="Quick View"
            >
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>

          <img 
            src="${prod.image}" 
            alt="${prod.name}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
          />
        </div>

        <div class="product-details">
          <div class="product-category-row">
            <span class="product-category-tag">${prod.category}</span>
            <div class="product-rating" title="Rated ${prod.rating} out of 5 stars">
              <i class="fa-solid fa-star"></i>
              <span>${prod.rating}</span>
              <span class="count">(${prod.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title" onclick="openQuickView(${prod.id})" title="${prod.name}">
            ${prod.name}
          </h3>

          <div class="product-price-row">
            <span class="current-price">${formatCurrency(prod.price)}</span>
            <span class="original-price">${formatCurrency(prod.originalPrice)}</span>
            <span class="discount-text">Save ${formatCurrency(prod.originalPrice - prod.price)}</span>
          </div>

          <button 
            class="btn-add-cart ${cartItem ? 'in-cart' : ''}" 
            onclick="addToCart(${prod.id}, 1)"
            aria-label="Add to cart"
          >
            <i class="fa-solid ${cartItem ? 'fa-check' : 'fa-cart-shopping'}"></i>
            <span>${cartItem ? `In Cart (${cartItem.quantity})` : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   6. Shopping Cart Operations
   -------------------------------------------------------------------------- */
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    AppState.cart.push({
      id: productId,
      quantity: qty
    });
  }

  saveCartToStorage();
  updateCartBadge(true);
  renderCartDrawer();
  renderProducts(); // Refresh card button text

  showToast(`Added <strong>${product.name}</strong> to your shopping cart!`, "success");
}

function updateCartQuantity(productId, delta) {
  const item = AppState.cart.find(c => c.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId, false);
    return;
  }

  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  renderProducts();
}

function removeFromCart(productId, notify = true) {
  const product = PRODUCTS.find(p => p.id === productId);
  AppState.cart = AppState.cart.filter(item => item.id !== productId);

  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  renderProducts();

  if (notify && product) {
    showToast(`Removed <strong>${product.name}</strong> from your cart.`, "info");
  }
}

function clearCart() {
  if (AppState.cart.length === 0) return;
  if (confirm("Are you sure you want to clear all items from your cart?")) {
    AppState.cart = [];
    AppState.appliedCoupon = null;
    saveCartToStorage();
    updateCartBadge();
    renderCartDrawer();
    renderProducts();
    showToast("Your shopping cart has been cleared.", "info");
  }
}

function updateCartBadge(pop = false) {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cartBadge");
  if (badge) {
    badge.textContent = totalCount;
    if (pop) {
      badge.classList.add("pop");
      setTimeout(() => badge.classList.remove("pop"), 300);
    }
  }
}

function calculateCartTotals() {
  let subtotal = 0;
  AppState.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      subtotal += prod.price * item.quantity;
    }
  });

  let discount = 0;
  if (AppState.appliedCoupon) {
    discount = Math.round(subtotal * AppState.appliedCoupon.discountRate);
  }

  // Free shipping over threshold (₹999)
  let shipping = 0;
  if (subtotal > 0 && subtotal < AppState.freeShippingThreshold) {
    shipping = 99; // Flat standard shipping if under threshold
  }

  const grandTotal = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, grandTotal };
}

function renderCartDrawer() {
  const drawerBody = document.getElementById("cartDrawerBody");
  const drawerFooter = document.getElementById("cartDrawerFooter");
  const shippingBarFill = document.getElementById("shippingBarFill");
  const shippingNotice = document.getElementById("shippingNotice");
  const cartDrawerCount = document.getElementById("cartDrawerCount");

  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartDrawerCount) {
    cartDrawerCount.textContent = `(${totalCount})`;
  }

  const { subtotal, discount, shipping, grandTotal } = calculateCartTotals();

  // Shipping progress indicator
  if (shippingBarFill && shippingNotice) {
    if (subtotal >= AppState.freeShippingThreshold || subtotal === 0) {
      shippingBarFill.style.width = "100%";
      shippingNotice.innerHTML = subtotal === 0 
        ? `Free standard delivery on orders over ${formatCurrency(AppState.freeShippingThreshold)}` 
        : `🎉 You unlocked <strong>FREE Express Delivery</strong>!`;
    } else {
      const remaining = AppState.freeShippingThreshold - subtotal;
      const progressPercent = Math.min(100, (subtotal / AppState.freeShippingThreshold) * 100);
      shippingBarFill.style.width = `${progressPercent}%`;
      shippingNotice.innerHTML = `Add <strong>${formatCurrency(remaining)}</strong> more to get <strong>FREE Express Delivery</strong>!`;
    }
  }

  if (AppState.cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="empty-state" style="padding: 40px 10px;">
        <div class="empty-icon" style="width: 64px; height: 64px; font-size: 1.8rem;">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <h4 class="empty-title">Your shopping cart is empty</h4>
        <p class="empty-desc">Looks like you haven't added any products yet.</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); scrollToSection('shop');" style="margin-top: 10px;">
          Start Shopping Now
        </button>
      </div>
    `;
    if (drawerFooter) drawerFooter.style.display = "none";
    return;
  }

  if (drawerFooter) drawerFooter.style.display = "block";

  drawerBody.innerHTML = AppState.cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return "";

    return `
      <div class="cart-item">
        <button class="btn-remove-item" onclick="removeFromCart(${prod.id})" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <img 
          src="${prod.image}" 
          alt="${prod.name}" 
          class="cart-item-img"
          onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
        />
        <div class="cart-item-info">
          <div class="cart-item-title">${prod.name}</div>
          <div class="cart-item-price">${formatCurrency(prod.price)}</div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartQuantity(${prod.id}, -1)" title="Decrease quantity">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${prod.id}, 1)" title="Increase quantity">+</button>
            </div>
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">
              Total: ${formatCurrency(prod.price * item.quantity)}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Update footer summary
  document.getElementById("cartSubtotalVal").textContent = formatCurrency(subtotal);
  
  const discountRow = document.getElementById("cartDiscountRow");
  if (AppState.appliedCoupon && discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("cartDiscountVal").textContent = `-${formatCurrency(discount)} (${AppState.appliedCoupon.code})`;
  } else {
    discountRow.style.display = "none";
  }

  const shippingVal = document.getElementById("cartShippingVal");
  if (shipping === 0) {
    shippingVal.innerHTML = `<span style="color: var(--success); font-weight: 700;">FREE</span>`;
  } else {
    shippingVal.textContent = formatCurrency(shipping);
  }

  document.getElementById("cartGrandTotalVal").textContent = formatCurrency(grandTotal);
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("drawerBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  if (!document.getElementById("wishlistDrawer").classList.contains("active")) {
    document.getElementById("drawerBackdrop").classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* --------------------------------------------------------------------------
   7. Coupon Code Engine
   -------------------------------------------------------------------------- */
function applyCouponCode() {
  const input = document.getElementById("cartCouponInput");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast("Please enter a coupon code.", "warning");
    return;
  }

  if (VALID_COUPONS[code]) {
    AppState.appliedCoupon = {
      code: code,
      discountRate: VALID_COUPONS[code]
    };
    renderCartDrawer();
    showToast(`Coupon <strong>${code}</strong> applied! You saved ${(VALID_COUPONS[code] * 100)}% on your order.`, "success");
    input.value = "";
  } else {
    showToast("Invalid coupon code. Try <strong>FLASH15</strong> or <strong>SHOPENEW</strong>.", "danger");
  }
}

function copyCoupon(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Coupon <strong>${code}</strong> copied to clipboard! Paste it in the cart drawer.`, "success");
  }).catch(() => {
    showToast(`Code: ${code}`, "info");
  });
}

/* --------------------------------------------------------------------------
   8. Wishlist Operations
   -------------------------------------------------------------------------- */
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast(`Removed <strong>${product.name}</strong> from wishlist.`, "info");
  } else {
    AppState.wishlist.push(productId);
    showToast(`Added <strong>${product.name}</strong> to your wishlist!`, "success");
  }

  saveWishlistToStorage();
  updateWishlistBadge(true);
  renderProducts();
  renderWishlistDrawer();
}

function updateWishlistBadge(pop = false) {
  const badge = document.getElementById("wishlistBadge");
  if (badge) {
    badge.textContent = AppState.wishlist.length;
    if (pop) {
      badge.classList.add("pop");
      setTimeout(() => badge.classList.remove("pop"), 300);
    }
  }
}

function renderWishlistDrawer() {
  const body = document.getElementById("wishlistDrawerBody");
  const countBadge = document.getElementById("wishlistDrawerCount");
  if (!body) return;

  if (countBadge) {
    countBadge.textContent = `(${AppState.wishlist.length})`;
  }

  if (AppState.wishlist.length === 0) {
    body.innerHTML = `
      <div class="empty-state" style="padding: 40px 10px;">
        <div class="empty-icon" style="width: 64px; height: 64px; font-size: 1.8rem; color: var(--danger-light);">
          <i class="fa-solid fa-heart" style="color: var(--danger);"></i>
        </div>
        <h4 class="empty-title">Your wishlist is empty</h4>
        <p class="empty-desc">Save items you love by tapping the heart icon on any product.</p>
        <button class="btn btn-primary" onclick="closeWishlistDrawer(); scrollToSection('shop');" style="margin-top: 10px;">
          Explore Products
        </button>
      </div>
    `;
    return;
  }

  body.innerHTML = AppState.wishlist.map(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return "";

    return `
      <div class="cart-item">
        <button class="btn-remove-item" onclick="toggleWishlist(${prod.id})" title="Remove from wishlist">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img 
          src="${prod.image}" 
          alt="${prod.name}" 
          class="cart-item-img"
          onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
        />
        <div class="cart-item-info">
          <div class="cart-item-title">${prod.name}</div>
          <div class="cart-item-price">${formatCurrency(prod.price)}</div>
          <div style="margin-top: auto; display: flex; gap: 8px;">
            <button 
              class="btn btn-primary" 
              style="padding: 6px 14px; font-size: 0.8rem;" 
              onclick="addToCart(${prod.id}, 1); toggleWishlist(${prod.id});"
            >
              <i class="fa-solid fa-cart-shopping"></i> Move to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openWishlistDrawer() {
  renderWishlistDrawer();
  document.getElementById("wishlistDrawer").classList.add("active");
  document.getElementById("drawerBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  document.getElementById("wishlistDrawer").classList.remove("active");
  if (!document.getElementById("cartDrawer").classList.contains("active")) {
    document.getElementById("drawerBackdrop").classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* --------------------------------------------------------------------------
   9. Quick View Modal
   -------------------------------------------------------------------------- */
let quickViewActiveQty = 1;

function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  quickViewActiveQty = 1;
  const modal = document.getElementById("quickViewModal");
  const modalBody = document.getElementById("quickViewContent");
  const discountPercent = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

  modalBody.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-media">
        <img 
          src="${prod.image}" 
          alt="${prod.name}"
          onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
        />
      </div>

      <div class="quickview-info">
        <div class="product-category-row" style="margin-bottom: 10px;">
          <span class="product-category-tag">${prod.category}</span>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <span>${prod.rating}</span>
            <span class="count">(${prod.reviewsCount} customer reviews)</span>
          </div>
        </div>

        <h2 class="quickview-title">${prod.name}</h2>

        <div class="product-price-row" style="margin-bottom: 16px;">
          <span class="current-price" style="font-size: 1.6rem;">${formatCurrency(prod.price)}</span>
          <span class="original-price" style="font-size: 1.1rem;">${formatCurrency(prod.originalPrice)}</span>
          <span class="discount-text" style="font-size: 0.9rem;">Save ${discountPercent}% (${formatCurrency(prod.originalPrice - prod.price)})</span>
        </div>

        <p class="quickview-desc">${prod.description}</p>

        <div class="quickview-specs">
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Key Highlights:</div>
          ${prod.specs.map(spec => `
            <div class="spec-item">
              <i class="fa-solid fa-circle-check"></i>
              <span>${spec}</span>
            </div>
          `).join("")}
        </div>

        <div style="display: flex; align-items: center; gap: 16px; margin-top: auto; padding-top: 16px; border-top: 1px solid var(--border-light);">
          <div class="qty-stepper" style="height: 44px;">
            <button class="qty-btn" style="width: 38px; font-size: 1rem;" onclick="changeQuickViewQty(-1)">-</button>
            <span id="quickViewQtyVal" class="qty-value" style="width: 44px; font-size: 1rem;">1</span>
            <button class="qty-btn" style="width: 38px; font-size: 1rem;" onclick="changeQuickViewQty(1)">+</button>
          </div>

          <button 
            class="btn btn-primary" 
            style="flex-grow: 1; height: 44px;" 
            onclick="addToCart(${prod.id}, quickViewActiveQty); closeQuickView();"
          >
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>

          <button 
            class="btn-card-action ${AppState.wishlist.includes(prod.id) ? 'active-wishlist' : ''}" 
            style="width: 44px; height: 44px; flex-shrink: 0;"
            onclick="toggleWishlist(${prod.id})"
            title="Wishlist"
          >
            <i class="${AppState.wishlist.includes(prod.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeQuickViewQty(delta) {
  quickViewActiveQty = Math.max(1, quickViewActiveQty + delta);
  const display = document.getElementById("quickViewQtyVal");
  if (display) display.textContent = quickViewActiveQty;
}

function closeQuickView() {
  document.getElementById("quickViewModal").classList.remove("active");
  document.body.style.overflow = "";
}

/* --------------------------------------------------------------------------
   10. Demo Checkout Simulation & Order Confirmation
   -------------------------------------------------------------------------- */
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty. Add items before checking out.", "warning");
    return;
  }

  closeCartDrawer();
  const { subtotal, discount, shipping, grandTotal } = calculateCartTotals();

  document.getElementById("checkoutSubtotal").textContent = formatCurrency(subtotal);
  document.getElementById("checkoutShipping").textContent = shipping === 0 ? "FREE" : formatCurrency(shipping);
  document.getElementById("checkoutDiscount").textContent = discount > 0 ? `-${formatCurrency(discount)}` : "₹0";
  document.getElementById("checkoutTotal").textContent = formatCurrency(grandTotal);

  document.getElementById("checkoutModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("active");
  document.body.style.overflow = "";
}

function selectPaymentMethod(elem, method) {
  document.querySelectorAll(".payment-option-card").forEach(c => c.classList.remove("selected"));
  elem.classList.add("selected");
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("checkoutName").value.trim();
  const email = document.getElementById("checkoutEmail").value.trim();
  const phone = document.getElementById("checkoutPhone").value.trim();
  const address = document.getElementById("checkoutAddress").value.trim();
  const city = document.getElementById("checkoutCity").value.trim();
  const pincode = document.getElementById("checkoutPincode").value.trim();

  if (!name || !email || !phone || !address || !city || !pincode) {
    showToast("Please fill in all shipping fields.", "warning");
    return;
  }

  // Generate simulated order confirmation
  const orderId = "SE-" + Math.floor(100000 + Math.random() * 900000);
  const { grandTotal } = calculateCartTotals();

  closeCheckoutModal();

  // Populate Order Success Modal
  document.getElementById("orderIdSpan").textContent = orderId;
  document.getElementById("orderTotalSpan").textContent = formatCurrency(grandTotal);
  document.getElementById("orderCustomerName").textContent = name;
  document.getElementById("orderSuccessModal").classList.add("active");

  // Empty cart
  AppState.cart = [];
  AppState.appliedCoupon = null;
  saveCartToStorage();
  updateCartBadge();
  renderProducts();

  showToast(`🎉 Order ${orderId} placed successfully!`, "success");
}

function closeOrderSuccessModal() {
  document.getElementById("orderSuccessModal").classList.remove("active");
  document.body.style.overflow = "";
}

/* --------------------------------------------------------------------------
   11. Newsletter Form Handler
   -------------------------------------------------------------------------- */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input) return;

  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    showToast("Please enter a valid email address.", "warning");
    return;
  }

  input.value = "";
  showToast("🎉 Thank you! Check your inbox for your 10% coupon code: <strong>WELCOME10</strong>", "success");
}

/* --------------------------------------------------------------------------
   12. Live Flash Deals Countdown Timer (24-Hour Loop)
   -------------------------------------------------------------------------- */
function startFlashCountdown() {
  const hoursElem = document.getElementById("timerHours");
  const minutesElem = document.getElementById("timerMinutes");
  const secondsElem = document.getElementById("timerSeconds");

  if (!hoursElem || !minutesElem || !secondsElem) return;

  // Set an end time that resets cleanly every 24 hours
  function updateTimer() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const diff = endOfDay - now;
    if (diff <= 0) {
      hoursElem.textContent = "00";
      minutesElem.textContent = "00";
      secondsElem.textContent = "00";
      return;
    }

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    hoursElem.textContent = String(hours).padStart(2, "0");
    minutesElem.textContent = String(minutes).padStart(2, "0");
    secondsElem.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   13. Filter, Sort & Search Handlers
   -------------------------------------------------------------------------- */
function filterByCategory(categoryName) {
  AppState.activeCategory = categoryName;

  // Update category card active styles
  document.querySelectorAll(".category-card").forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (cardCat && cardCat.toLowerCase() === categoryName.toLowerCase()) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  // Update catalog filter pill active styles
  document.querySelectorAll(".filter-pill").forEach(pill => {
    const pillCat = pill.getAttribute("data-category");
    if (pillCat && pillCat.toLowerCase() === categoryName.toLowerCase()) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  renderProducts();
  scrollToSection("shop");
}

function handleSearch(val) {
  AppState.searchQuery = val;
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) {
    clearBtn.style.display = val.length > 0 ? "block" : "none";
  }
  renderProducts();
}

function clearSearch() {
  const searchInput = document.getElementById("headerSearchInput");
  if (searchInput) searchInput.value = "";
  AppState.searchQuery = "";
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.style.display = "none";
  renderProducts();
}

function handleSort(val) {
  AppState.sortBy = val;
  renderProducts();
}

function handlePriceChange(val) {
  AppState.maxPrice = parseInt(val, 10);
  updatePriceFilterLabel();
  renderProducts();
}

function updatePriceFilterLabel() {
  const label = document.getElementById("priceValBadge");
  if (label) {
    label.textContent = formatCurrency(AppState.maxPrice);
  }
}

function handleRatingChange(val) {
  AppState.minRating = parseFloat(val);
  renderProducts();
}

function resetAllFilters() {
  AppState.activeCategory = "all";
  AppState.searchQuery = "";
  AppState.sortBy = "default";
  AppState.maxPrice = 20000;
  AppState.minRating = 0;

  const searchInput = document.getElementById("headerSearchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.style.display = "none";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "default";

  const ratingSelect = document.getElementById("ratingSelect");
  if (ratingSelect) ratingSelect.value = "0";

  const priceSlider = document.getElementById("priceSlider");
  if (priceSlider) priceSlider.value = 20000;

  updatePriceFilterLabel();

  // Reset category pills
  document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".filter-pill").forEach(p => {
    if (p.getAttribute("data-category") === "all") p.classList.add("active");
    else p.classList.remove("active");
  });

  renderProducts();
  showToast("All filters have been reset.", "info");
}

/* --------------------------------------------------------------------------
   14. Toast Notification Engine
   -------------------------------------------------------------------------- */
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;

  let iconMarkup = '<i class="fa-solid fa-bell"></i>';
  if (type === "success") iconMarkup = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "warning") iconMarkup = '<i class="fa-solid fa-triangle-exclamation"></i>';
  if (type === "danger") iconMarkup = '<i class="fa-solid fa-circle-xmark"></i>';

  toast.innerHTML = `
    <div class="toast-icon">${iconMarkup}</div>
    <div class="toast-msg">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   15. Navigation, Mobile Menu & Helpers
   -------------------------------------------------------------------------- */
function toggleMobileMenu() {
  const panel = document.getElementById("mobileNavPanel");
  const backdrop = document.getElementById("drawerBackdrop");
  if (!panel || !backdrop) return;

  const isOpen = panel.classList.contains("active");
  if (isOpen) {
    panel.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    panel.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function scrollToSection(sectionId) {
  const elem = document.getElementById(sectionId);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" });
  }
}

function setupEventListeners() {
  // Close drawers & modals when clicking backdrop
  const backdrop = document.getElementById("drawerBackdrop");
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      closeCartDrawer();
      closeWishlistDrawer();
      const mobilePanel = document.getElementById("mobileNavPanel");
      if (mobilePanel) mobilePanel.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Keyboard accessibility: ESC key closes open overlays
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeWishlistDrawer();
      closeQuickView();
      closeCheckoutModal();
      closeOrderSuccessModal();
      const mobilePanel = document.getElementById("mobileNavPanel");
      if (mobilePanel && mobilePanel.classList.contains("active")) {
        toggleMobileMenu();
      }
    }
  });
}
