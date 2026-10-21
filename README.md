# 🛍️ ShopEase - Modern Static E-Commerce Website

ShopEase is a complete, modern, responsive static e-commerce web platform designed for showcasing products with a clean, high-conversion UI/UX. It features real-time search, multi-category filtering, dynamic sorting, interactive cart and wishlist drawers, coupon management, a live flash sale countdown timer, product quick-view modals, and a simulated demo checkout experience.

Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (no frameworks, no external build steps, no backend, and no paid API keys required).

---

## 🌟 Key Features

### 1. Modern & Responsive UI/UX
- **Design Tokens**: Carefully selected color palette with modern indigo accent (`#4f46e5`), subtle shadows, rounded borders (`14px`–`20px`), and smooth micro-interactions.
- **Mobile First & Multi-Device**: Optimized responsive layout for mobile (1-2 columns), tablets (2-3 columns), and desktops (4 columns) without horizontal overflow.
- **Typography**: Powered by Google Fonts (**Plus Jakarta Sans**).
- **Graceful Image Fallbacks**: Embedded SVG fallback prevents broken images if external image links fail.

### 2. Header & Navigation
- Sticky header with backdrop blur.
- Instant search bar with clear button (`✕`).
- Interactive Wishlist counter button.
- Cart drawer trigger with real-time item count badge and badge animation.
- Mobile slide-out navigation menu for smaller viewports.

### 3. Hero & Promotional Elements
- Engaging banner: *"Discover Your Next Favorite Product"*.
- Key metrics badge: *14.2K+ Shoppers, 4.9/5 Ratings, 100% Genuine Guarantee*.
- Smooth scroll call-to-action buttons (*"Shop Now"*, *"Explore Categories"*).
- Floating feature badges highlighting product highlights.

### 4. Categories & Catalog Filtering
- **6 Popular Categories**: Electronics, Fashion, Shoes, Watches, Home & Living, Accessories.
- **Filter Pills**: One-click filtering by category with visual active states.
- **Sort Dropdown**: Sort by Featured, Price (Low to High), Price (High to Low), Customer Rating, Discount Percentage, or Alphabetical (A-Z).
- **Price Range Slider**: Filter by maximum price (from ₹1,000 up to ₹20,000) with dynamic badge updates.
- **Customer Rating Filter**: Filter by 4.0+, 4.6+, or 4.8+ stars.
- **Live Search**: Instant keyword search matching product names, categories, and descriptions.
- **Reset Filters**: One-click button to reset all filters.

### 5. Shopping Functionality & State Management
- **Add to Cart**: Add items with custom quantities directly from catalog or Quick View modal.
- **Slide-out Cart Drawer**:
  - Item listing with thumbnail, unit price, quantity increment/decrement (`+` / `-`), and individual item removal.
  - **Free Shipping Progress Meter**: Dynamic bar showing remaining amount needed for free delivery (threshold: ₹999).
  - Subtotal, coupon discount, delivery fee, and grand total calculations.
  - **Promo Codes**: Working discount engine supporting:
    - `FLASH15` (15% OFF)
    - `SHOPENEW` (15% OFF)
    - `WELCOME10` (10% OFF)
  - Clear cart button.
- **Slide-out Wishlist Drawer**:
  - Save items with the heart icon.
  - 1-click *"Move to Cart"* transfer.
- **Local Storage Persistence**: Cart and wishlist items automatically persist across page reloads.

### 6. Interactive Modals & Extras
- **Quick View Modal**: Inspect product specifications, detailed description, star reviews, and add to cart with custom quantity.
- **Demo Checkout Flow**:
  - Simulated customer shipping details form (Name, Email, Phone, Address, City, Pincode).
  - Simulated payment options: UPI / QR Code, Credit/Debit Card (Demo), Cash on Delivery.
  - Generates realistic order confirmation receipt with a unique Order ID (e.g. `SE-824192`).
- **Live 24-Hour Flash Sale Countdown Timer**: Synchronized timer counting down hours, minutes, and seconds.
- **Customer Reviews & Testimonials**: Verified buyer cards with 5-star ratings.
- **Newsletter Subscription**: Email format validation with demo success coupon feedback.
- **Toast Notifications**: Floating feedback alerts for every shopping interaction.

---

## 📁 Project Structure

```
project/
├── index.html       # Semantic HTML5 structure and accessible markup
├── style.css        # Vanilla CSS3 styling, design system tokens, responsive queries
├── script.js        # Product catalog dataset, state management, and DOM handlers
└── README.md        # Documentation, setup guide, and deployment instructions
```

---

## 🚀 How to Run Locally

Because this project is a purely static website, you do not need any backend setup or npm dependencies.

### Option A: Direct Browser Opening (Easiest)
1. Navigate to the project folder on your computer.
2. Double-click [index.html](file:///c:/Users/ADMIN/Desktop/project/index.html) to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option B: Using Python's Built-in Server
If you have Python installed:
```bash
# In the project directory:
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option C: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and choose **"Open with Live Server"**.

### Option D: Using Node.js (npx serve)
```bash
npx serve .
```

---

## 🌐 Step-by-Step Deployment Guide

You can deploy ShopEase online in under 2 minutes for free:

### 1. Deploying to GitHub Pages
1. Create a free account on [GitHub](https://github.com) if you haven't already.
2. Create a new repository named `shopease`.
3. Push or upload `index.html`, `style.css`, and `script.js` to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ShopEase static e-commerce store"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/shopease.git
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages** (under the "Code and automation" section).
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. After about 60 seconds, your site will be live at:
   `https://<YOUR-USERNAME>.github.io/shopease/`

### 2. Deploying to Vercel
1. Visit [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New..."** > **"Project"**.
3. Import your `shopease` GitHub repository.
4. Leave all build settings as default (Framework Preset: *Other*, Root Directory: `./`).
5. Click **"Deploy"**.
6. Your website will be instantly live with a free SSL certificate (e.g., `https://shopease-xyz.vercel.app`).

### 3. Deploying to Netlify (Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `project` folder directly into the browser window.
3. Your website is instantly deployed with a shareable live URL!

---

## 🧪 Demo Credentials & Test Data

- **Currency**: Indian Rupees (`₹` INR)
- **Sample Coupons**:
  - `FLASH15` - 15% discount
  - `SHOPENEW` - 15% discount
  - `WELCOME10` - 10% discount
- **Pre-filled Checkout**: The demo checkout modal comes pre-populated with realistic shipping address and phone values for rapid testing.

---

## 📜 License & Educational Notice
Developed for academic, demonstration, and developer portfolio purposes. No real payment gateways or external databases are connected.
