# 🔧 PRICING & FAQ PAGES NOT WORKING - TROUBLESHOOTING

**Date**: February 10, 2026  
**Issue**: Pricing and FAQ pages work in preview but not after publishing  
**Status**: DIAGNOSING

---

## 🔍 POSSIBLE CAUSES

### **1. JavaScript Loading Issues** (Most Likely)
**Problem:** JS files (main.js, pricing-carousel.js, faq.js) may not be loading on published site

**Symptoms:**
- Preview works (local files)
- Published site broken (remote files)
- Interactive elements don't work

**Solution:** Check browser console for errors

---

### **2. File Path Issues**
**Problem:** Relative paths might not work on published domain

**Check:**
- Are JS files in `/js/` folder?
- Are CSS files in `/css/` folder?
- Are images in `/images/` folder?

---

### **3. Service Worker Caching**
**Problem:** Old cached version being served

**Solution:** Clear cache or update service worker version

---

### **4. MIME Type Issues**
**Problem:** Server not serving JavaScript with correct MIME type

**Symptoms:**
- "MIME type mismatch" errors in console
- Scripts blocked by browser

---

### **5. Missing Files on Deploy**
**Problem:** Not all files uploaded to server

**Check:** Verify these files exist on published site:
```
/js/main.js
/js/pricing-carousel.js
/js/faq.js
/css/style.css
/css/pricing.css
/css/pricing-carousel.css
/css/faq.css
```

---

## 🛠️ DIAGNOSTIC STEPS

### **Step 1: Check Browser Console**

1. Visit published pricing page
2. Open Developer Tools (F12)
3. Go to Console tab
4. Look for errors

**Common Errors:**
```
❌ Failed to load resource: js/main.js (404)
❌ Uncaught SyntaxError: Unexpected token
❌ MIME type mismatch
❌ Service Worker registration failed
```

### **Step 2: Check Network Tab**

1. Open Developer Tools (F12)
2. Go to Network tab
3. Refresh page
4. Look for failed requests (red)

**Check if these load:**
- js/main.js
- js/pricing-carousel.js
- css/pricing.css
- css/pricing-carousel.css

### **Step 3: Verify File Paths**

Visit directly in browser:
```
https://yourdomain.com/js/main.js
https://yourdomain.com/js/pricing-carousel.js
https://yourdomain.com/css/pricing.css
```

If you get 404 errors, files weren't uploaded.

---

## 🚀 IMMEDIATE FIXES

### **Fix #1: Clear Service Worker Cache**

Add to top of pricing.html and faq.html:

```html
<script>
// Unregister service worker for testing
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
        }
    });
}
// Clear cache
caches.keys().then(function(names) {
    for (let name of names) caches.delete(name);
});
</script>
```

### **Fix #2: Remove Service Worker Temporarily**

Comment out or remove service worker registration from index.html:

```html
<!-- TEMPORARILY DISABLED FOR TESTING
<script>
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
    });
}
</script>
-->
```

### **Fix #3: Add Explicit File Paths**

Change relative paths to absolute:

```html
<!-- BEFORE -->
<script src="js/main.js" defer></script>

<!-- AFTER -->
<script src="/js/main.js" defer></script>
```

---

## 📋 QUICK CHECKLIST

Run through this checklist:

### **Files Exist Locally:**
- [x] pricing.html (32,393 bytes)
- [x] faq.html (24,745 bytes)
- [x] js/main.js (15,938 bytes)
- [x] js/pricing-carousel.js (5,215 bytes)
- [x] js/faq.js (1,798 bytes)
- [x] css/pricing.css
- [x] css/pricing-carousel.css
- [x] css/faq.css

### **Check on Published Site:**
- [ ] Can you access pricing.html?
- [ ] Can you access faq.html?
- [ ] Do you see console errors?
- [ ] Are JS files loading?
- [ ] Are CSS files loading?

---

## 🔧 RECOMMENDED ACTIONS

### **ACTION 1: Check What's Actually Broken**

**Question 1:** What exactly isn't working?
- [ ] Pages don't load at all (blank/404)
- [ ] Pages load but look broken (no styling)
- [ ] Pages load but interactive features don't work
- [ ] Something else?

**Question 2:** What do you see in browser console?
- [ ] No errors
- [ ] JavaScript errors
- [ ] 404 file not found errors
- [ ] CORS errors

### **ACTION 2: Verify Publish Process**

**Did the Publish tab:**
- [ ] Show successful deployment?
- [ ] Include all files?
- [ ] Show any errors or warnings?
- [ ] Take longer than usual?

### **ACTION 3: Test Direct File Access**

Try accessing these URLs directly (replace yourdomain.com):
```
https://freebodyperformance.com/pricing.html
https://freebodyperformance.com/faq.html
https://freebodyperformance.com/js/main.js
https://freebodyperformance.com/js/pricing-carousel.js
```

**If 404:** Files weren't uploaded
**If loads:** Files are there, issue is elsewhere

---

## 💡 MOST LIKELY ISSUE: Service Worker

The service worker we added might be caching old versions of the files.

### **Quick Test:**

1. Open published site in **Incognito/Private window**
2. If it works there → Service worker caching issue
3. If still broken → Different issue

### **Solution:**

**Option A: Clear Cache Manually**
- Visit site
- Open DevTools (F12)
- Application tab → Clear Storage → Clear site data

**Option B: Update Service Worker Version**
- Change CACHE_NAME in sw.js to 'freebody-v2'
- Republish

**Option C: Disable Service Worker Temporarily**
- Remove sw.js registration
- Republish
- Test pages
- Re-enable later

---

## 🎯 NEXT STEPS

**Please provide:**

1. **Browser Console Screenshot**
   - Visit pricing.html on published site
   - Open console (F12)
   - Take screenshot of any errors

2. **Network Tab Screenshot**
   - Open Network tab
   - Refresh page
   - Show failed requests (red items)

3. **Describe What You See**
   - Do pages load at all?
   - Is styling missing?
   - Are interactive elements broken?
   - Blank page?

**With this info, I can provide exact fix!**

---

## 🚨 TEMPORARY WORKAROUND

While we diagnose, you can temporarily fix this:

### **Option 1: Disable Service Worker**

I can remove the service worker code from all pages, which should make them work immediately.

### **Option 2: Force Cache Refresh**

I can add cache-busting parameters to all file loads:
```html
<script src="js/main.js?v=2" defer></script>
```

### **Option 3: Remove Optimization**

Roll back recent optimizations that might be causing issues.

---

**Which would you like me to do first?** 🤔

Let me know what errors you're seeing and I'll provide the exact fix! 💪
