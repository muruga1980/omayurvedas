# Om Ayurveda — Website README

> **Om Ayurveda** is an authentic Ayurvedic wellness center based in Rishikesh, India. This repository contains the static HTML/CSS/JS source for the public-facing website.

---

## 📁 Project Structure

```
omayurveda/
├── index.html              # Homepage
├── about.html              # About Us
├── ayurveda.html           # Ayurveda Approach
├── services.html           # Our Services
├── retreat.html            # Panchakarma Retreat
├── classes.html            # Online Ayurveda Classes
├── gallery.html            # Gallery
├── products.html           # Ayurvedic Products
├── products-all.html       # All Products
├── cart.html               # Shopping Cart
├── payment.html            # Payment Page
├── contact.html            # Contact Us
├── 404.html                # 404 Error Page
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # Main JavaScript
│   └── img/                # Images, icons, favicons
└── README.md               # This file
```

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **SEO Friendly Structure** | Unique `<title>`, `<meta description>`, `<meta keywords>`, Open Graph, Twitter Cards, canonical URLs, and JSON-LD Schema.org markup on every page |
| **Modern Favicons** | Multi-format favicon set (`favicon-96x96.png`, `favicon.svg`, `apple-touch-icon.png`, `favicon.ico`) |
| **Fast Loading Performance** | Preconnect to Google Fonts, CDN-hosted libraries (jQuery, AOS), optimized CSS |
| **Touch-Optimized Interactions** | `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation`, minimum 44×44px tap targets |
| **Reduced Motion Support** | Full `prefers-reduced-motion` CSS + JS detection; AOS animations disabled for accessibility |
| **Responsive Breakpoints** | Aligned to Mobile (320–480px), Tablet (481–768px), Laptop (769–1024px), Desktop (1025px+) |
| **AOS Scroll Animations** | Scroll-triggered reveal animations with reduced-motion fallback |
| **Sticky Navigation** | Shadow effect on scroll, mobile hamburger menu with submenu support |
| **Shopping Cart** | Add-to-cart functionality with quantity controls, order summary, and checkout flow |
| **Gallery Lightbox** | Image gallery with lightbox navigation |
| **Back-to-Top Button** | Smooth scroll back to top |

---

## 🔧 Responsive Breakpoints

| Breakpoint | Range | Target Devices |
|------------|-------|----------------|
| **Mobile** | `320px – 480px` | Phones in portrait |
| **Tablet** | `481px – 768px` | Tablets in portrait, large phones |
| **Laptop** | `769px – 1024px` | Tablets in landscape, small laptops |
| **Desktop** | `1025px+` | Standard laptops and desktops |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#2d5a3d` | Brand green, buttons, headings |
| Secondary | `#c9a96e` | Gold accents, highlights, decorative elements |
| Accent | `#8b6914` | Dark gold, hover states |
| Dark | `#1a1a1a` | Footer, dark sections |
| Light | `#faf8f3` | Page background, light sections |
| Cream | `#f9f6f0` | Card backgrounds |
| Text | `#333333` | Body text |
| Text Light | `#666666` | Secondary text |
| Text Muted | `#999999` | Captions, hints |
| Font Heading | `Playfair Display` / `Cormorant Garamond` | Headings, decorative text |
| Font Body | `Jost` | Body text, UI elements |
| Icons | `Material Icons Round` | UI icons |

---

## 🚀 SEO & Meta Tags

Every page includes:

- **Unique `<title>`** — page-specific, keyword-rich
- **Unique `<meta name="description">`** — 150–160 characters
- **`<meta name="keywords">`** — relevant Ayurveda keywords
- **`<link rel="canonical">`** — prevents duplicate content issues
- **Open Graph tags** — `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`
- **Twitter Card tags** — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:url`
- **JSON-LD Schema.org** — `LocalBusiness` structured data on homepage

---

## ♿ Accessibility

- **Reduced Motion**: CSS `prefers-reduced-motion` media query disables all animations; JS detects and disables AOS
- **Tap Targets**: Minimum 44×44px on all interactive elements for mobile
- **Touch Feedback**: No default tap highlight color; custom hover states
- **Semantic HTML**: Proper heading hierarchy, landmark elements, ARIA labels where needed
- **Focus States**: Visible focus indicators on interactive elements

---

## 📦 Dependencies

All loaded via CDN (no npm install needed):

| Library | Purpose | CDN |
|---------|---------|-----|
| jQuery 3.7.1 | DOM manipulation, animations | `code.jquery.com` |
| AOS 2.3.1 | Scroll animations | `unpkg.com/aos` |
| Google Fonts | Typography | `fonts.googleapis.com` |
| Material Icons Round | Icon font | `fonts.googleapis.com/icon` |

---

## 🛠️ Development Notes

- **No build step** — pure static HTML/CSS/JS. Open any `.html` file in a browser.
- **CSS is single-file** (`assets/css/style.css`) for simplicity.
- **JavaScript is single-file** (`assets/js/script.js`) using jQuery.
- **Images** are stored in `assets/img/` — optimize before deployment.
- **Favicons** are in `assets/img/` — ensure all formats are present.

---

## 📝 Pages & SEO Keywords

| Page | Primary Keywords |
|------|-----------------|
| `index.html` | Ayurveda Rishikesh, Panchakarma, Nadi Pariksha, Ayurvedic wellness, herbal remedies, Ayurvedic clinic |
| `about.html` | About Om Ayurveda, Ayurveda history Rishikesh, Acharya Pankaj Sharma, Dr. Rajesh Kumar, Panchakarma center |
| `ayurveda.html` | Ayurveda science, doshas, prakriti, Vata Pitta Kapha, Ayurvedic principles, traditional medicine |
| `services.html` | Ayurvedic services, Panchakarma treatment, Nadi Pariksha, Shirodhara, Abhyanga massage, herbal therapy |
| `retreat.html` | Panchakarma Rishikesh, Ayurvedic detox, Vamana, Virechana, Basti, Nasya, Raktamokshana, Ayurvedic cleanse |
| `classes.html` | Ayurvedic courses Rishikesh, Panchakarma training, Ayurveda certification, herbal medicine course |
| `gallery.html` | Ayurveda gallery, Panchakarma photos, Rishikesh wellness center, Ayurvedic retreat images |
| `products.html` | Ayurvedic shop, herbal products, Ayurvedic oils, natural supplements, organic tea, Ayurvedic skincare |
| `products-all.html` | Ayurvedic products, herbal range, natural supplements, Ayurvedic oils, organic products |
| `cart.html` | Shopping cart, Ayurveda checkout, herbal products cart, wellness shop |
| `payment.html` | Ayurveda payment, book Panchakarma online, Ayurvedic service booking, secure payment |
| `contact.html` | Contact Om Ayurveda, book Ayurveda consultation, Rishikesh Ayurveda center, Panchakarma booking |
| `404.html` | 404, page not found, Om Ayurveda |

---

## 📞 Contact

**Om Ayurveda**  
Kailash Gate, Muni Ki Reti  
Rishikesh, Uttarakhand 249201, India  

- Phone: +91 79042 18828 / +91 94052 25604
- Website: [https://omayurveda.co.in](https://omayurveda.co.in)
- Facebook: [@omayurvedahealth](https://www.facebook.com/omayurvedahealth)
- YouTube: [@omayurvedahealth](https://www.youtube.com/@omayurvedahealth)
- Instagram: [@omayurvedahealth](https://www.instagram.com/omayurvedahealth)

---

*Last updated: July 2025*
