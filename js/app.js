/**
 * NATIVE FLOWER COMPANY — APPLICATION LOGIC
 * High-performance, zero-dependency vanilla JS engine for GitHub Pages
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    cart: [],
    currentCategory: 'all',
    searchQuery: '',
    selectedProduct: null,
    selectedTier: 'standard', // 'standard' | 'deluxe' | 'premium'
    deliveryZip: null,
  };

  // Local storage cart key
  const CART_STORAGE_KEY = 'nfc_botanical_cart_v1';

  // Salt Lake Valley ZIP Codes for same-day delivery
  const SLC_SAME_DAY_ZIPS = new Set([
    '84101', '84102', '84103', '84104', '84105', '84106', '84107', '84108',
    '84109', '84111', '84112', '84113', '84115', '84116', '84117', '84118',
    '84119', '84120', '84121', '84123', '84124', '84044', '84047', '84070',
    '84084', '84088', '84092', '84093', '84094', '84095'
  ]);

  // DOM Elements cache
  const elements = {
    productsGrid: document.getElementById('productsGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    catalogSearch: document.getElementById('catalogSearch'),
    cartDrawerOverlay: document.getElementById('cartDrawerOverlay'),
    cartOpenBtns: document.querySelectorAll('.js-open-cart'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartTax: document.getElementById('cartTax'),
    cartTotal: document.getElementById('cartTotal'),
    cartCountBadges: document.querySelectorAll('.js-cart-count'),
    shippingProgress: document.getElementById('shippingProgress'),
    shippingRemainingText: document.getElementById('shippingRemainingText'),
    btnCheckout: document.getElementById('btnCheckout'),
    
    // Quick View Modal
    quickViewModal: document.getElementById('quickViewModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalMainImg: document.getElementById('modalMainImg'),
    modalThumbsRow: document.getElementById('modalThumbsRow'),
    modalBadge: document.getElementById('modalBadge'),
    modalTitle: document.getElementById('modalTitle'),
    modalPriceVal: document.getElementById('modalPriceVal'),
    modalDesc: document.getElementById('modalDesc'),
    modalStemsList: document.getElementById('modalStemsList'),
    modalAddCartBtn: document.getElementById('modalAddCartBtn'),
    modalCardMessage: document.getElementById('modalCardMessage'),
    tierButtons: document.querySelectorAll('.tier-option-btn'),
    
    // Delivery ZIP checker
    zipInput: document.getElementById('zipInput'),
    zipCheckBtn: document.getElementById('zipCheckBtn'),
    zipStatusMsg: document.getElementById('zipStatusMsg'),
    
    // FAQ Accordion
    faqItems: document.querySelectorAll('.faq-item'),
    
    // Mobile navigation
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    mobileNavDrawer: document.getElementById('mobileNavDrawer'),
    mobileNavClose: document.getElementById('mobileNavClose'),
    
    // Toast Container
    toastContainer: document.getElementById('toastContainer'),
    
    // Header
    siteHeader: document.querySelector('.site-header'),

    // Newsletter & Wedding Form
    newsletterForm: document.getElementById('newsletterForm'),
    weddingForm: document.getElementById('weddingForm'),
    weddingModal: document.getElementById('weddingModal'),
    openWeddingBtns: document.querySelectorAll('.js-open-wedding-modal'),
    closeWeddingBtn: document.getElementById('closeWeddingBtn'),
    
    // Checkout Success Modal
    orderSuccessModal: document.getElementById('orderSuccessModal'),
    orderSuccessReceipt: document.getElementById('orderSuccessReceipt'),
    closeSuccessBtn: document.getElementById('closeSuccessBtn')
  };

  // --- INITIALIZATION ---
  function init() {
    loadCartFromStorage();
    renderProducts();
    setupEventListeners();
    setupStickyHeader();
    updateCartUI();
  }

  // --- STORAGE ---
  function loadCartFromStorage() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      state.cart = [];
    }
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }

  // --- PRODUCTS RENDERING ---
  function renderProducts() {
    if (!elements.productsGrid) return;

    let filtered = PRODUCTS_DATA.filter(prod => {
      // Category match
      const matchesCategory = (state.currentCategory === 'all') || prod.category.includes(state.currentCategory);
      
      // Search match
      const query = state.searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatch = prod.title.toLowerCase().includes(query);
      const stemsMatch = prod.stems.some(s => s.toLowerCase().includes(query));
      const descMatch = prod.description.toLowerCase().includes(query);

      return matchesCategory && (titleMatch || stemsMatch || descMatch);
    });

    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">No floral arrangements found</p>
          <p style="color: var(--color-text-muted); font-size: 0.95rem;">Try adjusting your search terms or filter selection.</p>
        </div>
      `;
      return;
    }

    elements.productsGrid.innerHTML = filtered.map(product => {
      const primaryImg = product.images[0] || 'assets/images/hero-banner.jpg';
      const secondaryImg = product.images[1] || primaryImg;
      const stemsShort = product.stems.slice(0, 3).join(' • ');

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-media">
            <img class="product-img img-primary" src="${primaryImg}" alt="${product.title}" loading="lazy" />
            <img class="product-img img-secondary" src="${secondaryImg}" alt="${product.title} alternative view" loading="lazy" />
            
            ${product.badge ? `<span class="product-badge-pill ${product.badge === '10% Donated' ? 'accent' : ''}">${product.badge}</span>` : ''}
            
            <button class="product-quick-view-btn js-quick-view" data-id="${product.id}" type="button">
              Quick View
            </button>
          </div>

          <div class="product-body">
            <div class="product-meta-row">
              <span class="product-stems-preview">${product.categoryLabel}</span>
              <div class="product-stars">
                <span>★</span>
                <span class="rating-num">${product.rating} (${product.reviewsCount})</span>
              </div>
            </div>

            <h3 class="product-title">${product.title}</h3>

            <div class="product-price-row">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              <span class="price-tier-hint">Standard • Upgrades available</span>
            </div>

            <div class="product-actions-row">
              <button class="btn btn-outline btn-add-to-cart js-direct-add" data-id="${product.id}" type="button">
                + Add to Cart
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- QUICK VIEW MODAL ---
  function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    state.selectedProduct = product;
    state.selectedTier = 'standard';

    // Populate modal info
    elements.modalBadge.textContent = product.badge || product.categoryLabel;
    elements.modalTitle.textContent = product.title;
    elements.modalDesc.textContent = product.description;
    
    // Render stems tag cloud
    elements.modalStemsList.innerHTML = product.stems.map(stem => `
      <span style="display: inline-block; background: var(--color-bg-sage); color: var(--color-primary); font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: var(--radius-full); margin: 0 0.25rem 0.25rem 0;">
        ${stem}
      </span>
    `).join('');

    // Images
    elements.modalMainImg.src = product.images[0];
    elements.modalThumbsRow.innerHTML = product.images.map((img, idx) => `
      <img class="modal-thumb ${idx === 0 ? 'active' : ''}" src="${img}" alt="Thumbnail ${idx + 1}" data-src="${img}" />
    `).join('');

    // Reset card message input
    if (elements.modalCardMessage) {
      elements.modalCardMessage.value = '';
    }

    // Tier buttons update
    updateModalTierPricing();

    // Show modal
    elements.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalTierPricing() {
    if (!state.selectedProduct) return;

    let price = state.selectedProduct.price;
    if (state.selectedTier === 'deluxe') {
      price = state.selectedProduct.deluxePrice;
    } else if (state.selectedTier === 'premium') {
      price = state.selectedProduct.premiumPrice;
    }

    elements.modalPriceVal.textContent = `$${price.toFixed(2)}`;

    // Update active class on tier buttons
    elements.tierButtons.forEach(btn => {
      const tier = btn.dataset.tier;
      if (tier === state.selectedTier) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      // Update inner price badge
      const costSpan = btn.querySelector('.tier-cost');
      if (costSpan) {
        if (tier === 'standard') costSpan.textContent = `$${state.selectedProduct.price.toFixed(0)}`;
        if (tier === 'deluxe') costSpan.textContent = `$${state.selectedProduct.deluxePrice.toFixed(0)}`;
        if (tier === 'premium') costSpan.textContent = `$${state.selectedProduct.premiumPrice.toFixed(0)}`;
      }
    });
  }

  function closeQuickView() {
    elements.quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
    state.selectedProduct = null;
  }

  // --- CART OPERATIONS ---
  function addToCart(productId, tier = 'standard', cardMessage = '') {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    let price = product.price;
    let tierLabel = 'Standard Arrangement';
    if (tier === 'deluxe') {
      price = product.deluxePrice;
      tierLabel = 'Deluxe (25% More Blooms)';
    } else if (tier === 'premium') {
      price = product.premiumPrice;
      tierLabel = 'Premium Masterpiece Urn';
    }

    const cartItemId = `${productId}-${tier}`;
    const existingIndex = state.cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += 1;
      if (cardMessage && !state.cart[existingIndex].cardMessage) {
        state.cart[existingIndex].cardMessage = cardMessage;
      }
    } else {
      state.cart.push({
        cartItemId,
        id: product.id,
        title: product.title,
        tier,
        tierLabel,
        price,
        image: product.images[0],
        quantity: 1,
        cardMessage: cardMessage || ''
      });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`Added "${product.title}" (${tier}) to your cart 💐`);
    openCartDrawer();
  }

  function updateItemQuantity(cartItemId, delta) {
    const index = state.cart.findIndex(item => item.cartItemId === cartItemId);
    if (index === -1) return;

    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }

    saveCartToStorage();
    updateCartUI();
  }

  function removeItemFromCart(cartItemId) {
    state.cart = state.cart.filter(item => item.cartItemId !== cartItemId);
    saveCartToStorage();
    updateCartUI();
    showToast('Item removed from cart');
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.0775; // Utah Sales Tax
    const total = subtotal + tax;

    // Update count badges
    elements.cartCountBadges.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });

    // Update totals
    if (elements.cartSubtotal) elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (elements.cartTax) elements.cartTax.textContent = `$${tax.toFixed(2)}`;
    if (elements.cartTotal) elements.cartTotal.textContent = `$${total.toFixed(2)}`;

    // Update Free Delivery Progress Meter ($100 threshold)
    const threshold = 100.0;
    const progressPercent = Math.min(100, (subtotal / threshold) * 100);
    if (elements.shippingProgress) elements.shippingProgress.style.width = `${progressPercent}%`;

    if (elements.shippingRemainingText) {
      if (subtotal >= threshold) {
        elements.shippingRemainingText.innerHTML = '🎉 <strong>Congratulations!</strong> You qualify for FREE Salt Lake City delivery!';
      } else {
        const remaining = threshold - subtotal;
        elements.shippingRemainingText.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more for FREE Salt Lake delivery!`;
      }
    }

    // Render Items List
    if (!elements.cartItemsContainer) return;

    if (state.cart.length === 0) {
      elements.cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🌿</div>
          <h4 class="cart-empty-title">Your Cart is Empty</h4>
          <p class="cart-empty-desc">Discover our fresh, sustainable floral arrangements sourced directly from American grower fields.</p>
          <button class="btn btn-primary btn-sm js-close-cart" type="button">Start Shopping</button>
        </div>
      `;
      if (elements.btnCheckout) elements.btnCheckout.disabled = true;
      return;
    }

    if (elements.btnCheckout) elements.btnCheckout.disabled = false;

    elements.cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item-row" data-cart-id="${item.cartItemId}">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.title}" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-tier">${item.tierLabel}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          ${item.cardMessage ? `<div style="font-size: 0.72rem; font-style: italic; color: var(--color-text-muted); margin-top: 0.2rem;">Card: "${item.cardMessage.substring(0, 35)}..."</div>` : ''}
          
          <div class="cart-qty-row">
            <div class="qty-stepper">
              <button class="qty-btn js-qty-minus" data-cart-id="${item.cartItemId}" type="button" aria-label="Decrease quantity">−</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn js-qty-plus" data-cart-id="${item.cartItemId}" type="button" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove-btn js-cart-remove" data-cart-id="${item.cartItemId}" type="button">
              Remove
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function openCartDrawer() {
    elements.cartDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    elements.cartDrawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- ZIP CODE DELIVERY CHECKER ---
  function checkDeliveryZip() {
    const rawVal = elements.zipInput.value.trim();
    if (!rawVal) {
      elements.zipStatusMsg.className = 'zip-status-msg error';
      elements.zipStatusMsg.innerHTML = '⚠️ Please enter a 5-digit US ZIP code.';
      return;
    }

    const zip5 = rawVal.substring(0, 5);

    if (SLC_SAME_DAY_ZIPS.has(zip5)) {
      elements.zipStatusMsg.className = 'zip-status-msg success';
      elements.zipStatusMsg.innerHTML = `
        <strong>✓ Same-Day Local Delivery Available for ${zip5}!</strong><br>
        Order by 1:00 PM MT for courier delivery directly to doors across Salt Lake City.
      `;
      state.deliveryZip = zip5;
      showToast(`ZIP ${zip5} verified for Same-Day Delivery! 🚚`);
    } else {
      elements.zipStatusMsg.className = 'zip-status-msg success';
      elements.zipStatusMsg.innerHTML = `
        <strong>✓ Priority Delivery Available for ${zip5}!</strong><br>
        We ship stem-hydration packs nationwide via FedEx Priority Morning Delivery (1-2 business days).
      `;
      state.deliveryZip = zip5;
    }
  }

  // --- TOAST ENGINE ---
  function showToast(message) {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>💐</span> <span>${message}</span>`;
    elements.toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Remove after 3.2s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // --- STICKY HEADER ---
  function setupStickyHeader() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        elements.siteHeader.classList.add('scrolled');
      } else {
        elements.siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Category Filters
    elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentCategory = btn.dataset.category;
        renderProducts();
      });
    });

    // Catalog Search
    if (elements.catalogSearch) {
      elements.catalogSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderProducts();
      });
    }

    // Delegate grid events: Quick View & Direct Add
    if (elements.productsGrid) {
      elements.productsGrid.addEventListener('click', (e) => {
        const quickBtn = e.target.closest('.js-quick-view');
        if (quickBtn) {
          openQuickView(quickBtn.dataset.id);
          return;
        }

        const addBtn = e.target.closest('.js-direct-add');
        if (addBtn) {
          addToCart(addBtn.dataset.id, 'standard');
          return;
        }
      });
    }

    // Modal Events
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeQuickView);
    }

    if (elements.quickViewModal) {
      elements.quickViewModal.addEventListener('click', (e) => {
        if (e.target === elements.quickViewModal) {
          closeQuickView();
        }
      });
    }

    // Thumbnail switching in modal
    if (elements.modalThumbsRow) {
      elements.modalThumbsRow.addEventListener('click', (e) => {
        const thumb = e.target.closest('.modal-thumb');
        if (thumb) {
          elements.modalMainImg.src = thumb.dataset.src;
          elements.modalThumbsRow.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        }
      });
    }

    // Tier selection buttons in modal
    elements.tierButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedTier = btn.dataset.tier;
        updateModalTierPricing();
      });
    });

    // Modal Add To Cart button
    if (elements.modalAddCartBtn) {
      elements.modalAddCartBtn.addEventListener('click', () => {
        if (!state.selectedProduct) return;
        const msg = elements.modalCardMessage ? elements.modalCardMessage.value.trim() : '';
        addToCart(state.selectedProduct.id, state.selectedTier, msg);
        closeQuickView();
      });
    }

    // Cart Drawer Open/Close
    elements.cartOpenBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    if (elements.cartCloseBtn) {
      elements.cartCloseBtn.addEventListener('click', closeCartDrawer);
    }

    if (elements.cartDrawerOverlay) {
      elements.cartDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === elements.cartDrawerOverlay) {
          closeCartDrawer();
        }
      });
    }

    // Delegate Cart item actions (plus, minus, remove)
    if (elements.cartItemsContainer) {
      elements.cartItemsContainer.addEventListener('click', (e) => {
        const plusBtn = e.target.closest('.js-qty-plus');
        if (plusBtn) {
          updateItemQuantity(plusBtn.dataset.cartId, 1);
          return;
        }

        const minusBtn = e.target.closest('.js-qty-minus');
        if (minusBtn) {
          updateItemQuantity(minusBtn.dataset.cartId, -1);
          return;
        }

        const removeBtn = e.target.closest('.js-cart-remove');
        if (removeBtn) {
          removeItemFromCart(removeBtn.dataset.cartId);
          return;
        }

        const closeEmptyBtn = e.target.closest('.js-close-cart');
        if (closeEmptyBtn) {
          closeCartDrawer();
          const target = document.getElementById('shopCatalog');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      });
    }

    // ZIP Code checker trigger
    if (elements.zipCheckBtn) {
      elements.zipCheckBtn.addEventListener('click', checkDeliveryZip);
    }
    if (elements.zipInput) {
      elements.zipInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkDeliveryZip();
      });
    }

    // FAQ Accordion Toggle
    elements.faqItems.forEach(item => {
      const qBtn = item.querySelector('.faq-question');
      if (qBtn) {
        qBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Close all other items
          elements.faqItems.forEach(other => other.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });

    // Mobile Navigation Drawer Toggle
    if (elements.mobileNavToggle) {
      elements.mobileNavToggle.addEventListener('click', () => {
        elements.mobileNavDrawer.classList.toggle('open');
      });
    }
    if (elements.mobileNavClose) {
      elements.mobileNavClose.addEventListener('click', () => {
        elements.mobileNavDrawer.classList.remove('open');
      });
    }

    // Newsletter Form
    if (elements.newsletterForm) {
      elements.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = elements.newsletterForm.querySelector('input[type="email"]');
        if (input && input.value) {
          showToast(`Welcome to Bloom Society! Use code BLOOM10 for 10% off ✨`);
          input.value = '';
        }
      });
    }

    // Wedding Consultation Modal
    elements.openWeddingBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (elements.weddingModal) {
          elements.weddingModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (elements.closeWeddingBtn) {
      elements.closeWeddingBtn.addEventListener('click', () => {
        elements.weddingModal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    if (elements.weddingForm) {
      elements.weddingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        elements.weddingModal.classList.remove('open');
        document.body.style.overflow = '';
        showToast('Consultation request received! Steph will contact you within 24 hours 💐');
        elements.weddingForm.reset();
      });
    }

    // Checkout Simulator
    if (elements.btnCheckout) {
      elements.btnCheckout.addEventListener('click', () => {
        if (state.cart.length === 0) return;

        // Generate receipt
        const orderNumber = Math.floor(100000 + Math.random() * 900000);
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.0775;
        const total = subtotal + tax;

        if (elements.orderSuccessReceipt) {
          elements.orderSuccessReceipt.innerHTML = `
            <div style="background: var(--color-bg-subtle); padding: 1.5rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; text-align: left;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: 700;">
                <span>Order #${orderNumber}</span>
                <span>Date: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1rem;">
                Estimated Hand-Delivery: Tomorrow between 1:00 PM – 5:00 PM MT
              </p>
              <div style="border-top: 1px solid var(--color-border); padding-top: 0.75rem;">
                ${state.cart.map(i => `
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    <span>${i.quantity}x ${i.title} (${i.tier})</span>
                    <span>$${(i.price * i.quantity).toFixed(2)}</span>
                  </div>
                `).join('')}
              </div>
              <div style="border-top: 1px solid var(--color-border); padding-top: 0.75rem; margin-top: 0.5rem; font-weight: 700; display: flex; justify-content: space-between;">
                <span>Total Paid:</span>
                <span style="color: var(--color-primary);">$${total.toFixed(2)}</span>
              </div>
            </div>
          `;
        }

        // Clear cart
        state.cart = [];
        saveCartToStorage();
        updateCartUI();
        closeCartDrawer();

        // Show success modal
        if (elements.orderSuccessModal) {
          elements.orderSuccessModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    }

    if (elements.closeSuccessBtn) {
      elements.closeSuccessBtn.addEventListener('click', () => {
        elements.orderSuccessModal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
