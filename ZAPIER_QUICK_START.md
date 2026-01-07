# 🚀 Zapier Quick Start - 30-Minute Setup

## 📋 **Quick Setup Steps**

### **1. Create Zap (5 min)**
```
1. Go to zapier.com/app/zaps
2. Click "+ Create Zap"
3. Name: "FreeBody Performance - Lead Capture"
```

### **2. Add Webhook Trigger (2 min)**
```
1. Search: "Webhooks by Zapier"
2. Event: "Catch Hook"
3. Copy webhook URL (save it!)
4. Skip test for now
```

### **3. Add Gmail Action (5 min)**
```
1. Search: "Gmail"
2. Event: "Send Email"
3. Connect Gmail (Derekmpt@gmail.com)
4. To: Derekmpt@gmail.com
5. Subject: 🎯 New Consultation Request - FreeBody Performance
6. Body: Use HTML template from ZAPIER_SETUP_GUIDE.md
7. Test action
```

### **4. Add Google Sheets Action (5 min)**
```
1. Create sheet: "FreeBody Performance Leads"
2. Add headers: Date | Time | Name | Email | Phone | Interest | Availability | Goals | Status
3. In Zapier, search: "Google Sheets"
4. Event: "Create Spreadsheet Row"
5. Connect Google account
6. Map all fields
7. Test action
```

### **5. Update Website (5 min)**
```
1. Open js/main.js (line 96)
2. Replace 'YOUR_ZAPIER_WEBHOOK_URL_HERE' with your webhook URL
3. Upload index.html to GitHub
4. Upload js/main.js to GitHub
5. Wait 2 min for deployment
```

### **6. Test Live (3 min)**
```
1. Go to www.freebodyperformance.com
2. Fill out booking form
3. Submit
4. Check email ✉️
5. Check Google Sheet 📊
```

---

## 🔑 **Key Information**

**Your Webhook URL:**
```
[PASTE YOUR ZAPIER WEBHOOK URL HERE]
```

**Email Recipient:** Derekmpt@gmail.com

**Google Sheet:** FreeBody Performance Leads

**Website:** www.freebodyperformance.com

---

## ✅ **What You Get**

✅ **Professional HTML emails** with lead details
✅ **Automatic Google Sheets tracking** 
✅ **Lead organization** with status tracking
✅ **Instant notifications** on every submission
✅ **100 free leads/month** (Zapier free plan)

---

## 🎯 **Webhook URL Location**

After creating your Zap, you'll get a URL like:
```
https://hooks.zapier.com/hooks/catch/123456/abcdef/
```

**Add this to js/main.js line 96:**
```javascript
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/123456/abcdef/';
```

---

## 📧 **Email Template (Copy This)**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">🎯 New Consultation Request</h1>
    <p style="color: #E6F0FF; margin: 10px 0 0 0;">FreeBody Performance</p>
  </div>
  
  <div style="background: #F8F9FA; padding: 30px; border-radius: 0 0 10px 10px;">
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #0066FF; margin-top: 0; font-size: 18px;">📋 Lead Information</h2>
      <p><strong>Name:</strong> {{name}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Phone:</strong> {{phone}}</p>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #0066FF; margin-top: 0; font-size: 18px;">🎯 Details</h2>
      <p><strong>Interest:</strong> {{Area_of_Interest}}</p>
      <p><strong>Best Time:</strong> {{Best_Time_to_Reach}}</p>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px;">
      <h2 style="color: #0066FF; margin-top: 0; font-size: 18px;">💪 Goals</h2>
      <p>{{Fitness_Goals}}</p>
    </div>
  </div>
</div>
```

---

## 📊 **Google Sheets Headers**

Row 1 (make bold, add blue background):
```
Date | Time | Name | Email | Phone | Interest | Availability | Goals | Status
```

Status dropdown values:
```
New, Contacted, Scheduled, Converted, Lost
```

---

## 🐛 **Quick Troubleshooting**

**Form doesn't submit?**
→ Check webhook URL in js/main.js (line 96)

**No email received?**
→ Check spam folder, verify Gmail action in Zapier

**Sheet not updating?**
→ Verify sheet name matches "FreeBody Performance Leads"

**Success modal not showing?**
→ Clear browser cache, check JavaScript console

---

## 🎯 **After Setup**

Your workflow:
1. Lead submits form → 
2. You get email → 
3. Sheet updates automatically → 
4. You call/email lead → 
5. Update status in sheet → 
6. Close the sale! 💰

---

## 📞 **Next Steps**

After Zapier is working:
- [ ] Add Square Payment Links (15 min)
- [ ] Set up Square Appointments (10 min)
- [ ] Add social media links (5 min)
- [ ] Final testing (15 min)
- [ ] Launch! 🚀

---

**Need the full detailed guide?** 
→ See ZAPIER_SETUP_GUIDE.md

**Questions?**
→ Review ZAPIER_SETUP_GUIDE.md troubleshooting section

Good luck! 💪
