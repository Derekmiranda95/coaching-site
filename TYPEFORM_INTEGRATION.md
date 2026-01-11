# 🎯 Typeform Embed Options for FreeBody Performance

## Option 1: Full Width Embed (Recommended)

Replace the entire booking section form with this:

```html
<!-- Booking Section -->
<section id="booking" class="booking">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get Started with a Free Consultation</h2>
            <p class="section-subtitle">Schedule your complimentary 15-minute consultation call to discuss your goals and find the perfect training plan</p>
        </div>
        
        <div class="booking-content">
            <!-- Typeform Embed -->
            <div data-tf-widget="YOUR_TYPEFORM_ID" data-tf-opacity="100" data-tf-iframe-props="title=FreeBody Performance Consultation" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:500px;"></div>
            <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
    </div>
</section>
```

---

## Option 2: Popup/Modal (Click to Open)

Replace the form with a button that opens Typeform in a popup:

```html
<!-- Booking Section -->
<section id="booking" class="booking">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get Started with a Free Consultation</h2>
            <p class="section-subtitle">Schedule your complimentary 15-minute consultation call to discuss your goals and find the perfect training plan</p>
        </div>
        
        <div class="booking-content" style="text-align: center; padding: 60px 0;">
            <!-- Typeform Popup Button -->
            <button data-tf-popup="YOUR_TYPEFORM_ID" data-tf-opacity="100" data-tf-size="70" data-tf-iframe-props="title=FreeBody Performance Consultation" data-tf-transitive-search-params data-tf-medium="snippet" class="btn btn-primary btn-lg" style="font-size: 1.2rem; padding: 20px 40px;">
                <i class="fas fa-calendar-check"></i> Book Your Free Consultation
            </button>
            <script src="//embed.typeform.com/next/embed.js"></script>
            
            <div style="margin-top: 40px;">
                <p style="color: #666; font-size: 1rem;">
                    <i class="fas fa-gift" style="color: #0066FF;"></i> 
                    <strong>Complimentary 15-minute consultation</strong><br>
                    No commitment required • We'll contact you within 24 hours
                </p>
            </div>
        </div>
    </div>
</section>
```

---

## Option 3: Slide-in (Side Panel)

Button that opens Typeform in a side panel:

```html
<!-- Booking Section -->
<section id="booking" class="booking">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get Started with a Free Consultation</h2>
            <p class="section-subtitle">Schedule your complimentary 15-minute consultation call to discuss your goals and find the perfect training plan</p>
        </div>
        
        <div class="booking-content" style="text-align: center; padding: 60px 0;">
            <!-- Typeform Slider Button -->
            <button data-tf-slider="YOUR_TYPEFORM_ID" data-tf-position="right" data-tf-opacity="100" data-tf-iframe-props="title=FreeBody Performance Consultation" data-tf-transitive-search-params data-tf-medium="snippet" class="btn btn-primary btn-lg">
                <i class="fas fa-phone"></i> Request Free Consultation
            </button>
            <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
    </div>
</section>
```

---

## Option 4: Full Page Redirect

Simple button that goes to Typeform on its own page:

```html
<!-- Booking Section -->
<section id="booking" class="booking">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get Started with a Free Consultation</h2>
            <p class="section-subtitle">Schedule your complimentary 15-minute consultation call to discuss your goals and find the perfect training plan</p>
        </div>
        
        <div class="booking-content" style="text-align: center; padding: 60px 0;">
            <a href="YOUR_TYPEFORM_URL" target="_blank" class="btn btn-primary btn-lg" style="font-size: 1.2rem; padding: 20px 40px;">
                <i class="fas fa-calendar-check"></i> Book Your Free Consultation
            </a>
        </div>
    </div>
</section>
```

---

## 🎨 My Recommendation: Option 1 (Embedded)

**Why:**
- ✅ User stays on your site
- ✅ Seamless experience
- ✅ Professional look
- ✅ No redirect needed

---

## 📋 Setup Steps:

### 1. Create Typeform
- Go to typeform.com
- Create form with the questions listed above
- Customize design (use #0066FF blue)

### 2. Get Embed Code
- Click "Share" in Typeform
- Choose "Embed"
- Copy the code snippet
- Note your Typeform ID (looks like: `abc123xyz`)

### 3. Update index.html
- Replace the booking form section with chosen option above
- Replace `YOUR_TYPEFORM_ID` with your actual ID
- Upload to GitHub

### 4. Set Up Notifications
- In Typeform, go to Connect tab
- Add email notification to Derekmpt@gmail.com
- Optional: Add Google Sheets integration

---

## ✅ What You Get with Typeform:

1. **Beautiful form** that matches your brand
2. **Email notifications** (built-in, no Zapier)
3. **Google Sheets integration** (optional, built-in)
4. **Mobile optimized** automatically
5. **Analytics dashboard** to track conversions
6. **Easy to edit** questions anytime
7. **Conditional logic** (show/hide questions based on answers)
8. **File uploads** (if you want clients to send photos)
9. **Payment integration** (if you want to collect deposits)

---

## 💰 Typeform Pricing:

**Free Plan:**
- ✅ 10 questions
- ✅ 100 responses/month
- ✅ Basic integrations
- ✅ Email notifications
- Perfect for starting!

**Basic Plan ($25/month):**
- Unlimited questions
- 100 responses/month
- All integrations
- Logic jumps
- Remove Typeform branding

**Plus Plan ($50/month):**
- 1,000 responses/month
- Priority support
- Advanced features

---

## 🆚 Typeform vs Current Setup:

**Keep Current Setup If:**
- You want 100% control over design
- You prefer open-source/custom code
- You already invested time in Zapier

**Switch to Typeform If:**
- You want easier setup (10 min vs 1 hour)
- You want better mobile experience
- You want built-in analytics
- You want to easily change questions
- You don't want to manage Zapier

---

## 🚀 Quick Start:

1. Sign up at typeform.com (free)
2. Create form (5 minutes)
3. Get embed code
4. Replace booking section in index.html
5. Upload to GitHub
6. Done! ✅

**Want me to help you set it up?** Just let me know!
