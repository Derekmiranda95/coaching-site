# 🔥 Zapier Lead Capture Setup - Complete Guide

## 🎯 Why Zapier?

**Advantages over FormSubmit:**
- ✅ Send leads to **multiple destinations** (email, Google Sheets, CRM)
- ✅ **Track and organize** all leads in one place
- ✅ **Automated workflows** (follow-up emails, SMS, etc.)
- ✅ **Better analytics** with Google Sheets tracking
- ✅ **Professional appearance** with custom email formatting

---

## 📋 **Complete Setup Checklist**

### **Phase 1: Create Zapier Workflow (15 minutes)**
- [ ] Sign up for Zapier account (free plan works)
- [ ] Create new Zap named "FreeBody Performance - Lead Capture"
- [ ] Set up Webhook trigger
- [ ] Copy webhook URL
- [ ] Configure Gmail action
- [ ] Set up Google Sheets action
- [ ] Test the Zap
- [ ] Turn Zap on

### **Phase 2: Prepare Google Sheets (5 minutes)**
- [ ] Create spreadsheet "FreeBody Performance Leads"
- [ ] Add column headers
- [ ] Format columns for easy reading
- [ ] Create status dropdown (New, Contacted, Scheduled, Converted, Lost)

### **Phase 3: Update Website (5 minutes)**
- [ ] Update index.html (remove FormSubmit config)
- [ ] Update js/main.js (add Zapier webhook)
- [ ] Add your Zapier webhook URL
- [ ] Test locally if possible
- [ ] Upload to GitHub
- [ ] Wait for deployment

### **Phase 4: Testing (5 minutes)**
- [ ] Submit test form on live site
- [ ] Verify email received
- [ ] Check Google Sheet updated
- [ ] Verify all data captured correctly
- [ ] Test mobile submission

---

## 🔧 **STEP-BY-STEP: Zapier Configuration**

### **STEP 1: Create Zapier Account**

1. Go to: https://zapier.com
2. Sign up (free plan is sufficient)
3. Verify your email

---

### **STEP 2: Create Your Zap**

1. Click **"Create Zap"** button
2. Name: `FreeBody Performance - Lead Capture`
3. Click to set up trigger

---

### **STEP 3: Configure Webhook Trigger**

**Trigger Setup:**
1. Search for: **"Webhooks by Zapier"**
2. Choose Event: **"Catch Hook"**
3. Click **Continue**
4. You'll see a webhook URL like:
   ```
   https://hooks.zapier.com/hooks/catch/123456/abcdef/
   ```
5. **IMPORTANT:** Copy this URL - you'll need it for your website
6. Click **Continue**
7. Click **Skip Test** (we'll test after setup)

---

### **STEP 4: Configure Gmail Action**

**Action #1: Send Email**

1. Click **"+ Add Action"**
2. Search for: **"Gmail"**
3. Choose Event: **"Send Email"**
4. Click **Continue**
5. Connect your Gmail account (Derekmpt@gmail.com)
6. Click **Continue**

**Email Configuration:**

**To:** `Derekmpt@gmail.com`

**From Name:** `FreeBody Performance Website`

**Subject:** 
```
🎯 New Consultation Request - FreeBody Performance
```

**Body Type:** `HTML`

**Body:** (Copy this exactly)
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">🎯 New Consultation Request</h1>
    <p style="color: #E6F0FF; margin: 10px 0 0 0;">FreeBody Performance</p>
  </div>
  
  <div style="background: #F8F9FA; padding: 30px; border-radius: 0 0 10px 10px;">
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #0066FF; margin-top: 0; font-size: 18px; border-bottom: 2px solid #E6F0FF; padding-bottom: 10px;">📋 Lead Information</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #666; width: 40%;"><strong>👤 Name:</strong></td>
          <td style="padding: 8px 0; color: #333;">{{name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;"><strong>📧 Email:</strong></td>
          <td style="padding: 8px 0; color: #333;">{{email}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;"><strong>📱 Phone:</strong></td>
          <td style="padding: 8px 0; color: #333;">{{phone}}</td>
        </tr>
      </table>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #0066FF; margin-top: 0; font-size: 18px; border-bottom: 2px solid #E6F0FF; padding-bottom: 10px;">🎯 Interest & Availability</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #666; width: 40%;"><strong>Area of Interest:</strong></td>
          <td style="padding: 8px 0; color: #333;">{{Area_of_Interest}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;"><strong>Best Time to Reach:</strong></td>
          <td style="padding: 8px 0; color: #333;">{{Best_Time_to_Reach}}</td>
        </tr>
      </table>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #0066FF; margin-top: 0; font-size: 18px; border-bottom: 2px solid #E6F0FF; padding-bottom: 10px;">💪 Fitness Goals</h2>
      <p style="color: #333; margin: 0; line-height: 1.6;">{{Fitness_Goals}}</p>
    </div>
    
    <div style="background: #E6F0FF; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 0; color: #0066FF; font-size: 14px;"><strong>⏰ Received:</strong> {{timestamp}}</p>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0066FF;">
      <h3 style="color: #0066FF; margin-top: 0; font-size: 16px;">🚀 Next Steps:</h3>
      <ol style="color: #333; line-height: 1.8; padding-left: 20px;">
        <li>Call or email within 1 hour during business hours</li>
        <li>Schedule their free 15-minute consultation</li>
        <li>Update Google Sheet with "Contacted" status</li>
        <li>Follow up within 24 hours if no response</li>
      </ol>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #DDD;">
      <p style="color: #666; margin: 0; font-size: 12px;">FreeBody Performance | www.freebodyperformance.com</p>
      <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">295 Madison Ave, NYC | (929) 374-4005</p>
    </div>
  </div>
</div>
```

7. Click **Continue**
8. Click **Test & Continue**

---

### **STEP 5: Configure Google Sheets Action**

**Action #2: Add to Spreadsheet**

**First, create your Google Sheet:**

1. Go to: https://sheets.google.com
2. Click **"+ Blank"** to create new spreadsheet
3. Name it: **"FreeBody Performance Leads"**
4. In Row 1, add these headers:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| **Date** | **Time** | **Name** | **Email** | **Phone** | **Interest** | **Availability** | **Goals** | **Status** |

5. Format:
   - Make Row 1 **bold**
   - Add background color (light blue)
   - Freeze Row 1 (View → Freeze → 1 row)
   - Center-align headers
   - Add borders

6. In Column I (Status), add data validation:
   - Select column I
   - Data → Data validation
   - Criteria: List from range
   - Items: `New, Contacted, Scheduled, Converted, Lost`
   - Save

**Now back in Zapier:**

1. Click **"+ Add Action"**
2. Search for: **"Google Sheets"**
3. Choose Event: **"Create Spreadsheet Row"**
4. Click **Continue**
5. Connect your Google account
6. Click **Continue**

**Configure Mapping:**

- **Drive:** My Google Drive
- **Spreadsheet:** FreeBody Performance Leads
- **Worksheet:** Sheet1

**Map Fields:**

| Google Sheets Column | Zapier Field | Formula/Value |
|---------------------|--------------|---------------|
| Date | `submission_date` | Auto-populated |
| Time | `submission_time` | Auto-populated |
| Name | `name` | From form |
| Email | `email` | From form |
| Phone | `phone` | From form |
| Interest | `Area_of_Interest` | From form |
| Availability | `Best_Time_to_Reach` | From form |
| Goals | `Fitness_Goals` | From form |
| Status | (leave blank) | "New" (default) |

7. Click **Continue**
8. Click **Test & Continue**

---

### **STEP 6: Turn On Your Zap**

1. Click **"Publish"** or **"Turn on Zap"**
2. Your Zap is now live! ✅

---

## 💻 **STEP 7: Update Your Website**

### **Update js/main.js:**

Find line 96 that says:
```javascript
const ZAPIER_WEBHOOK_URL = 'YOUR_ZAPIER_WEBHOOK_URL_HERE';
```

Replace `YOUR_ZAPIER_WEBHOOK_URL_HERE` with your actual Zapier webhook URL from Step 3.

Example:
```javascript
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/123456/abcdef/';
```

### **Upload Files:**

1. Upload updated `index.html` to GitHub
2. Upload updated `js/main.js` to GitHub (with your webhook URL)
3. Wait 2 minutes for Cloudflare deployment

---

## 🧪 **STEP 8: Test Everything**

### **Test Checklist:**

1. **Submit Test Form:**
   - Go to: https://www.freebodyperformance.com
   - Scroll to booking section
   - Fill out form with test data
   - Click submit

2. **Verify Email:**
   - Check Derekmpt@gmail.com
   - Should receive formatted email within seconds
   - Verify all fields are populated correctly

3. **Verify Google Sheets:**
   - Open your Google Sheet
   - New row should appear automatically
   - All data should be correctly formatted

4. **Test Success Modal:**
   - After submission, success modal should appear
   - Form should be cleared
   - User experience should be smooth

---

## 📊 **Google Sheets Dashboard Setup**

### **Add Tracking Columns:**

Add these additional columns for better tracking:

| Column | Purpose | Formula/Notes |
|--------|---------|---------------|
| **J - Days Since Lead** | Track response time | `=TODAY()-A2` |
| **K - Follow-up Date** | Schedule follow-ups | Manual entry |
| **L - Conversion Value** | Track revenue | Manual entry |
| **M - Notes** | Internal notes | Manual entry |

### **Create Summary Dashboard:**

Add a separate sheet called "Dashboard" with:

```
LEAD STATISTICS:

Total Leads: =COUNTA(Sheet1!A:A)-1
New Leads: =COUNTIF(Sheet1!I:I,"New")
Contacted: =COUNTIF(Sheet1!I:I,"Contacted")
Scheduled: =COUNTIF(Sheet1!I:I,"Scheduled")
Converted: =COUNTIF(Sheet1!I:I,"Converted")
Conversion Rate: =Converted/Total Leads

LEADS BY INTEREST:
In-Person Training: =COUNTIF(Sheet1!F:F,"1-on-1 In-Person Training")
Virtual Training: =COUNTIF(Sheet1!F:F,"Virtual Training")
Personalized Programming: =COUNTIF(Sheet1!F:F,"Personalized Programming")

BEST TIMES TO REACH:
Morning: =COUNTIF(Sheet1!G:G,"Morning (6 AM - 12 PM)")
Afternoon: =COUNTIF(Sheet1!G:G,"Afternoon (12 PM - 5 PM)")
Evening: =COUNTIF(Sheet1!G:G,"Evening (5 PM - 8 PM)")
```

---

## 🚀 **Advanced Zapier Features (Optional)**

### **Add SMS Notification:**

1. Add another action: **"SMS by Zapier"**
2. Send yourself a text when high-value leads come in
3. Filter: Only if "Interest" = "1-on-1 In-Person Training"

### **Add Auto-Response Email:**

1. Add another action: **"Gmail - Send Email"**
2. Send to: `{{email}}` (the lead's email)
3. Subject: "Thanks for your interest in FreeBody Performance!"
4. Body: Friendly confirmation message

### **Add to CRM:**

If you use a CRM (HubSpot, Salesforce, etc.):
1. Add another action
2. Choose your CRM
3. Create new contact with form data

---

## 💰 **Zapier Pricing**

**Free Plan:**
- ✅ 100 tasks/month (100 lead submissions)
- ✅ Single-step Zaps
- ✅ Perfect for starting out

**Starter Plan ($19.99/month):**
- ✅ 750 tasks/month
- ✅ Multi-step Zaps (email + sheets + CRM)
- ✅ Premium apps

**Recommendation:** Start with free plan, upgrade if you get 100+ leads/month

---

## 📧 **Sample Email You'll Receive**

Professional, formatted HTML email with:
- 🎯 Blue header with your branding
- 📋 Clean lead information table
- 🎯 Interest & availability section
- 💪 Fitness goals
- ⏰ Timestamp
- 🚀 Action items checklist
- Professional footer

Much better than plain text emails!

---

## ✅ **Troubleshooting**

### **Form not submitting:**
- Check JavaScript console for errors
- Verify webhook URL is correct
- Test webhook URL directly

### **Not receiving emails:**
- Check Gmail spam folder
- Verify Gmail action is configured
- Test the Zap manually in Zapier

### **Google Sheets not updating:**
- Verify sheet name matches exactly
- Check column mappings
- Test action in Zapier dashboard

### **Success modal not showing:**
- Clear browser cache
- Check that `successModal` exists in HTML
- Verify JavaScript has no errors

---

## 🎯 **Final Checklist**

Before going live:

- [ ] Zapier Zap is turned on
- [ ] Webhook URL is in js/main.js
- [ ] Files uploaded to GitHub
- [ ] Test submission successful
- [ ] Email received and formatted correctly
- [ ] Google Sheet updated properly
- [ ] Success modal displays correctly
- [ ] Mobile testing completed

---

## 📞 **Support Resources**

**Zapier Help:**
- Help Center: https://help.zapier.com
- Community: https://community.zapier.com
- Status: https://status.zapier.com

**Your Setup:**
- Webhook URL: (saved in js/main.js)
- Zap Name: FreeBody Performance - Lead Capture
- Google Sheet: FreeBody Performance Leads

---

## 🎉 **You're All Set!**

Your lead capture system is now:
- ✅ Capturing leads via website form
- ✅ Sending formatted emails
- ✅ Tracking in Google Sheets
- ✅ Ready to scale

**Next Steps:**
1. Set up Square Payment Links
2. Configure Square Appointments
3. Add social media links
4. Final testing before launch

Good luck! 🚀💪
