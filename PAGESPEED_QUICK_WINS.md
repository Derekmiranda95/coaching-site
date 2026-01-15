# 🚀 PAGESPEED QUICK WINS - IMPLEMENTATION GUIDE

**Implementation Time:** 30 minutes  
**Expected Improvement:** +30-40 PageSpeed points  
**Difficulty:** Easy  

---

## ✅ PHASE 1: IMMEDIATE OPTIMIZATIONS

### **1. ADD LAZY LOADING TO IMAGES**

Find all `<img>` tags and add `loading="lazy"` and dimensions:

#### **Before:**
```html
<img src="images/derek-photo.png" alt="Derek Miranda">
```

#### **After:**
```html
<img src="images/derek-photo.png" 
     alt="Derek Miranda" 
     width="400" 
     height="400"
     loading="lazy"
     decoding="async">
```

**Files to Update:**
- ✅ index.html (all images except hero)
- ✅ pricing.html
- ✅ online-programming.html
- ✅ faq.html

**Exception:** Hero/above-fold images should NOT have `loading="lazy"`

---

### **2. ADD DEFER TO JAVASCRIPT**

#### **Current:**
```html
<script src="js/main.js"></script>
<script src="js/pricing-carousel.js"></script>
```

#### **Optimized:**
```html
<script src="js/main.js" defer></script>
<script src="js/pricing-carousel.js" defer></script>
```

**Files to Update:**
- ✅ index.html
- ✅ pricing.html
- ✅ online-programming.html
- ✅ faq.html

---

### **3. PRELOAD CRITICAL RESOURCES**

Add to `<head>` of each page:

```html
<!-- Preload Hero Image -->
<link rel="preload" 
      as="image" 
      href="images/hero-weightlifting.jpg"
      fetchpriority="high">

<!-- Preconnect to External Domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdn.jsdelivr.net">
```

---

### **4. OPTIMIZE FONT LOADING**

#### **Current:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

#### **Optimized:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" 
      rel="stylesheet" 
      media="print" 
      onload="this.media='all'">
<noscript>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</noscript>
```

---

### **5. ADD FETCHPRIORITY TO HERO IMAGE**

For hero images in hero sections:

```html
<section style="background-image: url('images/hero-weightlifting.jpg')">
```

Should have a hidden high-priority preload:

```html
<head>
    <link rel="preload" 
          as="image" 
          href="images/hero-weightlifting.jpg"
          fetchpriority="high">
</head>
```

---

## 📋 STEP-BY-STEP IMPLEMENTATION

### **STEP 1: Update index.html**

1. Add preload links in `<head>`
2. Optimize font loading
3. Add `defer` to scripts
4. Add `loading="lazy"` to non-hero images
5. Add width/height to all images

### **STEP 2: Update pricing.html**

1. Same as index.html
2. Preload hero: `online-programming-hero-hq.jpg`
3. Lazy load all service images

### **STEP 3: Update online-programming.html**

1. Same as above
2. Preload: `online-programming-mobile-app.jpg`
3. Lazy load feature images

### **STEP 4: Update faq.html**

1. Same basic optimizations
2. No hero preload needed
3. Lazy load all images

---

## 🎯 EXPECTED RESULTS

### **Before:**
- Mobile Score: 50-60/100
- Desktop Score: 70-85/100
- LCP: 4-6 seconds
- FCP: 2.5-3.5 seconds

### **After Quick Wins:**
- Mobile Score: 75-85/100 (+25-35 points)
- Desktop Score: 90-95/100 (+15-20 points)
- LCP: 2.5-3.5 seconds (↓40% faster)
- FCP: 1.5-2.0 seconds (↓40% faster)

---

## ✅ TESTING CHECKLIST

After implementing:

1. ✅ Test on PageSpeed Insights
2. ✅ Verify all images load
3. ✅ Check JavaScript still works
4. ✅ Test on mobile device
5. ✅ Verify fonts display correctly

---

## 🚨 TROUBLESHOOTING

### **Issue: JavaScript doesn't work**
- Remove `defer` and add `async` instead
- Or keep scripts at bottom without defer

### **Issue: Fonts don't load**
- Remove `media="print"` trick
- Use standard loading with preconnect only

### **Issue: Images don't load**
- Check image paths are correct
- Verify file names match exactly
- Remove `loading="lazy"` from problematic images

---

## 💡 PRO TIPS

1. **Don't lazy-load above-fold images** (hero, logo, first section)
2. **Always add width/height** to prevent layout shift
3. **Preload only critical resources** (1-2 items max)
4. **Test on real mobile device** after deployment

---

**Ready to implement? Let me know and I'll help optimize specific pages!**
