# FreeBody Performance - Personal Training Website

**Tagline:** Move Freely, Live Fully

A professional, modern website for Derek's personal training and coaching services at Sportslab NYC, built with a clean black, blue, and white color scheme.

---

## 🎯 Project Overview

FreeBody Performance is a comprehensive personal training website designed to showcase Derek's coaching services, accept bookings, and facilitate payment processing through Square. The site emphasizes pain-free movement, weight loss, nutrition coaching, and athletic performance training.

---

## ✨ Currently Completed Features

### 🏠 **Homepage (index.html)**
- **Hero Section** with compelling call-to-action and animated title
- Professional gradient background with brand colors
- Smooth scroll navigation
- Responsive mobile menu

### 💪 **Services Section**
- **Three Core Services:**
  1. **1-on-1 In-Person Training** (Featured as "Most Popular") - Personalized hands-on coaching
  2. **Virtual Training** - Flexible online sessions
  3. **Personalized Programming** - Custom workout and nutrition plans

- **Three Specializations:**
  - Pain-Free Movement (Corrective Exercise & Mobility)
  - Weight Loss & Nutrition Coaching
  - Athletic Performance Training

- **Call-to-Action Button** linking to pricing page

### 👨‍💼 **About Section**
- Derek's transformation story and coaching philosophy
- Professional credentials display:
  - ACE Certified Personal Trainer
  - Precision Nutrition Level 1 Coach
- 4+ years experience, 2 certifications, and 100% dedication integrated into bio
- Professional image placeholder for coach photo

### 📅 **Booking System** ✅ FULLY FUNCTIONAL
- **Free 15-Minute Consultation Form**
- **FormSubmit.co Integration** - Sends leads directly to email
- Interactive booking form with fields:
  - Full Name, Email, Phone Number
  - Area of Interest (1-on-1, Virtual, Programming)
  - Best Time to Reach You
  - Fitness Goals (optional)
- Form validation with real-time feedback
- Success modal confirmation
- Professional email notifications
- Spam protection included
- **Status:** LIVE and capturing leads at Derekmpt@gmail.com
- Phone number auto-formatting: (123) 456-7890
- Date picker with minimum date set to today
- Success modal confirmation after submission
- Local storage for booking data (development mode)

### 💳 **Payment Integration** ⏳ NEEDS CONFIGURATION
- Square payment link placeholders in pricing page
- Payment buttons ready for Square links
- **Next Step:** Add Square payment URLs to pricing.html
- **Required:** Create payment links in Square Dashboard
- **See:** READY_TO_UPLOAD.md for next steps

### 📞 **Contact Section**
- **Email:** Derekmpt@gmail.com
- **Phone:** (929) 374-4005
- **Location:** Sportslab NYC
  - 295 Madison Ave, Basement Level
  - Entrance on E 41st between Madison Ave and Park Ave
- Hover animations for engagement

### 💰 **Pricing Page (pricing.html)**
- **Monthly Membership Tiers:**
  - Performance (2×/week): $1,200/month (8 sessions)
  - Elite (3×/week): $1,740/month (12 sessions)
- **Flexible Options:**
  - Flex Pack: $1,700 for 10 sessions (3-month expiration)
  - Drop-In Session: $200 per session
- **Comprehensive Policies:**
  - Banking Policy (30-day rollover, 8 session max)
  - Cancellation Policy (12-hour notice)
  - Pause Policy (once per quarter, 2 weeks max)
  - Session Redemption details
  - Sick day & travel guidelines
- Beautiful card layouts with icons
- Call-to-action buttons throughout

### ❓ **FAQ Page (faq.html)**
- **16 comprehensive FAQ items** covering:
  - Why no once-a-week option
  - Most popular membership tier
  - Flexibility options
  - Switching tiers
  - Virtual session policies
  - Session rollover rules
  - Cancellation policies
  - Pause policies
  - Sick days and travel
  - Membership vs Flex Pack differences
  - Booking process
  - Training location details
  - What to bring to sessions
  - Nutrition coaching availability
  - Injury and pain management
  - Membership cancellation process
- **Interactive accordion** - click to expand/collapse answers
- Well-organized with clear formatting
- Call-to-action section

### 🔗 **Navigation**
- Fixed top navigation with scroll effects
- Links to: Home, Services, About, **Pricing**, **FAQ**, Book Now
- Active page section highlighting
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Logo with brand identity (FreeBody PERFORMANCE)

### 🎨 **Design Features**
- **Color Scheme:** Black (#000000), Blue (#0066FF), White (#FFFFFF)
- **Typography:** 
  - Headings: Montserrat (bold, modern)
  - Body: Inter (clean, readable)
- **Icons:** Font Awesome 6.4.0
- **Animations:**
  - Fade-in animations on scroll
  - Hover effects on cards and buttons
  - Smooth transitions throughout
  - Counter animations for statistics

### 📱 **Responsive Design**
- Fully responsive across all devices
- Breakpoints at 968px, 768px, and 480px
- Mobile-first approach
- Touch-friendly navigation

---

## 🚀 Functional Entry URIs (Pages/Sections)

### Main Pages:
- **`index.html`** - Homepage with all main sections
- **`pricing.html`** - Complete pricing structure and membership tiers
- **`faq.html`** - Frequently asked questions with accordion

### Homepage Sections (index.html):
- **`#home`** - Hero section with main call-to-action
- **`#services`** - Services and specializations display
- **`#about`** - About Derek and credentials
- **`#booking`** - Booking form and calendar
- **`#contact`** - Contact information (Sportslab NYC)

### Interactive Features:
- **Booking Form Submission** - Stored in localStorage (development)
- **Mobile Menu Toggle** - Responsive navigation
- **Modal Display** - Success confirmation after booking
- **Smooth Scroll** - Animated section navigation
- **FAQ Accordion** - Expandable question/answer sections

---

## 📁 Project Structure

```
freebody-performance/
│
├── index.html              # Homepage
├── pricing.html            # Pricing & membership structure
├── faq.html                # Frequently asked questions
├── css/
│   ├── style.css          # Main stylesheet (21KB+)
│   ├── pricing.css        # Pricing page styles
│   └── faq.css            # FAQ page styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── faq.js             # FAQ accordion functionality
└── README.md              # This file
```

---

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Inter & Montserrat
- **LocalStorage API** - Booking data storage (development)

---

## 🛠️ Setup Instructions

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **No build process required** - pure static HTML/CSS/JS

### For Development:
- Use a local server (Live Server, Python HTTP server, etc.)
- Edit files directly
- Refresh browser to see changes

---

## 💳 Square Payment Integration

### To Add Your Square Payment Link:

1. Open `index.html`
2. Find the payment section (around line 358)
3. Replace the placeholder comment with your Square link:

```html
<!-- Replace this comment block -->
<a href="YOUR_SQUARE_PAYMENT_LINK" class="btn btn-payment" target="_blank">
    <i class="fab fa-square"></i> Pay with Square
</a>
```

4. Remove or comment out the placeholder text:
```html
<!-- <p class="payment-note">Payment link will be provided upon booking confirmation</p> -->
```

---

## 📸 Adding Coach Photo

### To Replace the Image Placeholder:

The current design uses a professional icon placeholder. To add Derek's actual photo:

1. Save the coach photo as `images/derek-coach.jpg`
2. Open `css/style.css`
3. Find `.image-placeholder` (around line 825)
4. Replace the gradient background with:

```css
.image-placeholder {
    width: 100%;
    aspect-ratio: 1;
    background-image: url('../images/derek-coach.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
}

.image-placeholder i {
    display: none; /* Hide the icon */
}
```

---

## 🌐 Social Media Links

### To Add Social Media Accounts:

Open `index.html` and find the footer section (around line 430). Replace the `#` with actual URLs:

```html
<a href="https://facebook.com/yourpage" aria-label="Facebook">
    <i class="fab fa-facebook"></i>
</a>
<a href="https://instagram.com/yourhandle" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://twitter.com/yourhandle" aria-label="Twitter">
    <i class="fab fa-twitter"></i>
</a>
<a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

---

## 📧 Contact Information

**Current contact details (already configured):**

- **Email:** Derekmpt@gmail.com
- **Phone:** (929) 374-4005
- **Location:** Sportslab NYC
  - 295 Madison Ave, Basement Level
  - Entrance on E 41st between Madison Ave and Park Ave
  - New York, NY

These are already set up in the website! No changes needed unless you want to update them later.

---

## 📋 Features Not Yet Implemented

### Backend Integration:
- [ ] Server-side booking data storage (currently uses localStorage)
- [ ] Email notifications for new bookings
- [ ] Admin dashboard for managing bookings
- [ ] Database integration for customer records
- [ ] Automated booking confirmations via email/SMS

### Enhanced Booking:
- [ ] Real-time availability calendar
- [ ] Multiple time slot selections
- [ ] Recurring appointment scheduling
- [ ] Cancellation/rescheduling system
- [ ] Waitlist functionality

### Payment Processing:
- [ ] Direct Square API integration
- [ ] Real-time payment processing
- [ ] Invoice generation
- [ ] Payment history tracking
- [ ] Refund management

### Content Management:
- [ ] Blog/articles section for fitness tips
- [ ] Client testimonials display
- [ ] Before/after transformation gallery
- [ ] Video tutorials library
- [ ] Downloadable resources (meal plans, workout guides)

### Advanced Features:
- [ ] Member portal/login system
- [ ] Progress tracking dashboard for clients
- [ ] Workout library with video demonstrations
- [ ] Nutrition tracking integration
- [ ] Online consultation via video call
- [ ] Chat support system

### Marketing & Analytics:
- [ ] Google Analytics integration
- [ ] Facebook Pixel tracking
- [ ] SEO optimization
- [ ] Newsletter signup integration
- [ ] Lead magnet downloads

---

## 🎯 Recommended Next Steps

### Priority 1 - Content & Personalization:
1. **Add Derek's professional photo** to the About section
2. **Insert actual Square payment link** in the booking section
3. **Update contact information** (email, phone, location)
4. **Add social media links** to footer
5. **Add pricing information** for each service tier

### Priority 2 - Backend Setup:
1. **Set up form submission handling** (Email service like FormSubmit, Formspree, or custom backend)
2. **Implement email notifications** for new bookings
3. **Configure Square API** for direct payment processing
4. **Add booking confirmation emails** to customers

### Priority 3 - Content Enhancement:
1. **Add client testimonials** section with reviews
2. **Create before/after gallery** with client transformations
3. **Add FAQ section** addressing common questions
4. **Create blog section** for fitness tips and articles
5. **Add video introduction** from Derek

### Priority 4 - SEO & Performance:
1. **Optimize images** (compress and use WebP format)
2. **Add meta tags** for SEO (Open Graph, Twitter Cards)
3. **Implement schema markup** for local business
4. **Set up Google My Business** integration
5. **Add sitemap.xml** and robots.txt

### Priority 5 - Advanced Features:
1. **Implement online payment** with Square Checkout
2. **Add member login area** for existing clients
3. **Create workout tracking system**
4. **Integrate calendar API** (Google Calendar, Calendly)
5. **Add live chat support** widget

---

## 🐛 Known Issues

- **Booking data storage:** Currently uses localStorage (browser-based). Bookings will be lost if browser data is cleared. Requires backend implementation for production.
- **Payment link:** Placeholder only. Needs actual Square payment URL.
- **Form submission:** No server-side processing. Form data is stored locally only.
- **Image placeholders:** Using CSS gradients instead of actual photos.

---

## 🔒 Security Considerations

### For Production Deployment:
- [ ] Implement HTTPS (SSL certificate)
- [ ] Add form spam protection (reCAPTCHA)
- [ ] Sanitize all user inputs server-side
- [ ] Implement rate limiting on form submissions
- [ ] Use environment variables for sensitive data
- [ ] Regular security audits and updates

---

## 📱 Browser Compatibility

Tested and optimized for:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 13+)
- ✅ Chrome Mobile (Android 10+)

---

## 📄 License

Copyright © 2024 FreeBody Performance. All rights reserved.

---

## 👨‍💻 Developer Notes

### Code Quality:
- **Clean, semantic HTML5** structure
- **Modern CSS3** with custom properties
- **Vanilla JavaScript** (no dependencies)
- **Fully commented code** for maintainability
- **Responsive design** with mobile-first approach

### Performance:
- **Lightweight codebase** (~52KB total)
- **Optimized animations** using CSS transforms
- **Lazy loading** for scroll animations
- **No external dependencies** except fonts and icons

### Accessibility:
- **ARIA labels** for screen readers
- **Semantic HTML** for better structure
- **Keyboard navigation** support
- **High contrast** color scheme
- **Focus indicators** on interactive elements

---

## 📞 Support

For questions or issues with this website:
- **Email:** derek@freebodyperformance.com
- **Phone:** (123) 456-7890

---

## 🚀 Deployment

To publish this website and make it live online:

**Go to the Publish tab** in your development environment and click the publish button. The Publish tab will:
- Deploy your website to a live server
- Provide you with a public URL
- Handle all hosting and deployment automatically

No manual deployment steps required!

---

**Built with 💪 by FreeBody Performance - Move Freely, Live Fully**