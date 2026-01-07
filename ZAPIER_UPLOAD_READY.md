# 🎯 ZAPIER VERSION - Files Ready to Upload

## ✅ **Setup Complete - Ready for Deployment**

Your website is now configured to use **Zapier** for lead capture instead of FormSubmit. This gives you more power and flexibility.

---

## 📝 **Files to Upload to GitHub**

### **File 1: index.html**
**Location:** `https://github.com/Derekmiranda95/coaching-site/blob/main/index.html`

**What changed:**
- Removed FormSubmit action and hidden fields
- Form now submits via JavaScript to Zapier webhook
- Cleaner, more professional setup

**Status:** ✅ Ready to upload (19,745 bytes)

---

### **File 2: js/main.js**
**Location:** `https://github.com/Derekmiranda95/coaching-site/blob/main/js/main.js`

**What changed:**
- Lines 90-148: Complete rewrite of form handling
- Added Zapier webhook integration
- Added loading state during submission
- Better error handling
- Professional user experience

**⚠️ IMPORTANT:** You MUST add your Zapier webhook URL on line 96

**Status:** ⚠️ Needs your webhook URL before upload

---

## 🔧 **Critical Step: Add Your Webhook URL**

After you create your Zap in Zapier, you'll get a webhook URL like:
```
https://hooks.zapier.com/hooks/catch/123456/abcdef/
```

**In js/main.js line 96, replace:**
```javascript
const ZAPIER_WEBHOOK_URL = 'YOUR_ZAPIER_WEBHOOK_URL_HERE';
```

**With your actual URL:**
```javascript
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/123456/abcdef/';
```

---

## 📋 **Complete Implementation Checklist**

### **Phase 1: Zapier Setup (15-20 minutes)**
- [ ] Go to zapier.com and create account
- [ ] Create new Zap: "FreeBody Performance - Lead Capture"
- [ ] Add trigger: Webhooks by Zapier → Catch Hook
- [ ] **COPY THE WEBHOOK URL** (you'll need this!)
- [ ] Add action: Gmail → Send Email (to Derekmpt@gmail.com)
- [ ] Add action: Google Sheets → Create Spreadsheet Row
- [ ] Test both actions
- [ ] Turn on your Zap

**Detailed instructions:** See `ZAPIER_SETUP_GUIDE.md`

---

### **Phase 2: Update Website (5 minutes)**
- [ ] Edit js/main.js line 96 with your webhook URL
- [ ] Upload index.html to GitHub
- [ ] Upload js/main.js to GitHub
- [ ] Wait 2 minutes for Cloudflare deployment

---

### **Phase 3: Test Everything (5 minutes)**
- [ ] Visit www.freebodyperformance.com
- [ ] Submit test form
- [ ] Verify email received (Derekmpt@gmail.com)
- [ ] Check Google Sheet updated
- [ ] Verify success modal displays
- [ ] Test on mobile device

---

## 🎯 **What You Need from Zapier**

### **Step 1: Create the Zap**
Follow the guide in `ZAPIER_SETUP_GUIDE.md` or `ZAPIER_QUICK_START.md`

### **Step 2: Get Your Webhook URL**
When you set up "Webhooks by Zapier" trigger, you'll see:
```
Your webhook URL is ready to receive data:
https://hooks.zapier.com/hooks/catch/XXXXXX/XXXXXX/
```

### **Step 3: Copy That URL**
You'll paste it into js/main.js

---

## 📧 **What Happens When Someone Submits**

### **User Experience:**
1. Fill out form
2. Click "Request Free Consultation"
3. Button shows "Submitting..." with spinner
4. Form data sent to Zapier
5. Success modal appears
6. Form resets

### **Your Experience:**
1. **Instant email** to Derekmpt@gmail.com with:
   - Professional HTML formatting
   - All lead details
   - Action items checklist
   - Timestamp
2. **Google Sheet automatically updated** with:
   - New row added
   - All form data
   - Ready for status tracking
3. **You respond** within 1 hour
4. **Update status** in Google Sheet
5. **Close the sale!** 💰

---

## 📊 **Google Sheets Setup**

Before connecting Zapier to Sheets, create this spreadsheet:

**Name:** "FreeBody Performance Leads"

**Headers (Row 1):**
| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Date | Time | Name | Email | Phone | Interest | Availability | Goals | Status |

**Formatting:**
- Make Row 1 bold
- Add blue background to headers
- Freeze Row 1 (View → Freeze → 1 row)
- Add data validation to Status column: New, Contacted, Scheduled, Converted, Lost

---

## 🔄 **Workflow Comparison**

### **Old Way (FormSubmit):**
- ✅ Simple setup
- ✅ Free
- ❌ Only sends email
- ❌ No tracking
- ❌ No automation

### **New Way (Zapier):**
- ✅ Professional emails (HTML formatted)
- ✅ Automatic Google Sheets tracking
- ✅ Lead organization and status management
- ✅ Can add SMS notifications
- ✅ Can add auto-response emails
- ✅ Can connect to CRM
- ✅ Better analytics
- ⚠️ Free plan: 100 leads/month (plenty for starting)

---

## 💰 **Zapier Pricing**

**Free Plan** (Recommended to start):
- ✅ 100 tasks/month (100 form submissions)
- ✅ Multi-step Zaps (email + sheets)
- ✅ All basic apps
- ✅ Perfect for new business

**Starter Plan** ($19.99/month):
- If you get 100+ leads/month (great problem to have!)

---

## 🚀 **Upload Instructions**

### **Method: GitHub Web Interface**

**Step 1: Update index.html**
1. Go to: https://github.com/Derekmiranda95/coaching-site/blob/main/index.html
2. Click pencil icon (Edit)
3. Select all (Ctrl+A), delete
4. Paste the complete index.html from this chat
5. Commit: "Update booking form for Zapier integration"

**Step 2: Update js/main.js**
1. **FIRST:** Get your Zapier webhook URL
2. Go to: https://github.com/Derekmiranda95/coaching-site/blob/main/js/main.js
3. Click pencil icon (Edit)
4. Select all (Ctrl+A), delete
5. Paste the complete js/main.js from this chat
6. **FIND LINE 96** and add your webhook URL
7. Commit: "Add Zapier webhook integration"

---

## ✅ **Pre-Launch Checklist**

- [ ] Zapier Zap created and turned ON
- [ ] Gmail action configured
- [ ] Google Sheets action configured
- [ ] Test run successful in Zapier
- [ ] Webhook URL copied
- [ ] Webhook URL added to js/main.js line 96
- [ ] index.html uploaded to GitHub
- [ ] js/main.js uploaded to GitHub
- [ ] Cloudflare deployment complete (wait 2 min)
- [ ] Test form submission on live site
- [ ] Email received successfully
- [ ] Google Sheet updated successfully
- [ ] Success modal working
- [ ] Mobile test complete

---

## 🎉 **You're Ready!**

Once you:
1. ✅ Create your Zap in Zapier
2. ✅ Get your webhook URL
3. ✅ Add it to js/main.js line 96
4. ✅ Upload both files

**Your lead capture system will be LIVE!**

---

## 📚 **Documentation Files**

| File | Purpose |
|------|---------|
| **ZAPIER_QUICK_START.md** | 30-minute quick setup guide |
| **ZAPIER_SETUP_GUIDE.md** | Detailed step-by-step instructions |
| **index.html** | Updated homepage (ready to upload) |
| **js/main.js** | Updated JavaScript (needs webhook URL) |

---

## 🆘 **Need Help?**

**Setup Questions:**
→ See ZAPIER_SETUP_GUIDE.md

**Quick Reference:**
→ See ZAPIER_QUICK_START.md

**Troubleshooting:**
→ See ZAPIER_SETUP_GUIDE.md troubleshooting section

---

## 🎯 **Next Priority: Square Integration**

After Zapier is working:
1. ✅ Lead Capture (Zapier) ← YOU'LL BE HERE AFTER SETUP
2. ⏳ Square Payment Links (15 min)
3. ⏳ Square Appointments (10 min)
4. ⏳ Social Media Links (5 min)
5. ⏳ Final Testing (15 min)
6. 🚀 LAUNCH!

---

**Ready to start? Follow ZAPIER_QUICK_START.md for fastest setup!** 🚀
