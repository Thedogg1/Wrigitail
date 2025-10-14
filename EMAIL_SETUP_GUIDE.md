# 📧 EMAIL SETUP GUIDE - Financial Insights Intake Form

## Overview
The Financial Insights Intake form (`/financial-insights-intake`) captures detailed client information and formats it for AI processing. The form submission needs to be emailed to `terry@wrigitail.com`.

## Current Status
✅ **Form Created:** Multi-step questionnaire with 6 steps  
✅ **API Endpoint:** `/api/financial-intake` processes submissions  
✅ **Data Formatting:** Converts form data to ChatGPT-friendly JSON payload  
⚠️ **Email Delivery:** Currently logs to console (needs production email service)

---

## 🚀 PRODUCTION EMAIL SETUP OPTIONS

### **Option 1: Resend (Recommended - Easiest)**
```bash
# Install Resend
npm install resend

# Add to .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Update `app/api/financial-intake/route.ts`:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'intake@wrigitail.com',
  to: 'terry@wrigitail.com',
  subject: emailSubject,
  text: emailBody,
  reply_to: formData.email
});
```

**Setup Steps:**
1. Sign up at https://resend.com
2. Verify your domain (wrigitail.com)
3. Get API key from dashboard
4. Add to environment variables
5. Update code as shown above

**Pricing:** Free up to 3,000 emails/month, then $20/month

---

### **Option 2: SendGrid**
```bash
# Install SendGrid
npm install @sendgrid/mail

# Add to .env.local
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

**Update `app/api/financial-intake/route.ts`:**
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  from: 'intake@wrigitail.com',
  to: 'terry@wrigitail.com',
  subject: emailSubject,
  text: emailBody,
  replyTo: formData.email
});
```

**Setup Steps:**
1. Sign up at https://sendgrid.com
2. Verify domain
3. Create API key (Settings → API Keys)
4. Add to environment variables
5. Update code

**Pricing:** Free up to 100 emails/day, then $19.95/month

---

### **Option 3: AWS SES**
```bash
# Install AWS SDK
npm install @aws-sdk/client-ses

# Add to .env.local
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=xxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxx
```

**Update `app/api/financial-intake/route.ts`:**
```typescript
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: process.env.AWS_REGION });

const command = new SendEmailCommand({
  Source: 'intake@wrigitail.com',
  Destination: { ToAddresses: ['terry@wrigitail.com'] },
  Message: {
    Subject: { Data: emailSubject },
    Body: { Text: { Data: emailBody } }
  },
  ReplyToAddresses: [formData.email]
});

await client.send(command);
```

**Setup Steps:**
1. Sign in to AWS Console
2. Go to SES (Simple Email Service)
3. Verify domain and email addresses
4. Create IAM user with SES permissions
5. Get access key and secret
6. Add to environment variables

**Pricing:** $0.10 per 1,000 emails (very cheap for high volume)

---

### **Option 4: Nodemailer (SMTP)**
```bash
# Install Nodemailer
npm install nodemailer

# Add to .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Update `app/api/financial-intake/route.ts`:**
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

await transporter.sendMail({
  from: '"Financial Insights" <intake@wrigitail.com>',
  to: 'terry@wrigitail.com',
  subject: emailSubject,
  text: emailBody,
  replyTo: formData.email
});
```

**Setup Steps:**
1. Use existing email provider (Gmail, Outlook, etc.)
2. Generate app-specific password
3. Add credentials to environment variables
4. Update code

**Pricing:** Free (uses existing email account)

---

## 📝 EMAIL TEMPLATE

The email will automatically include:

### Subject Line
```
New Financial Insights Intake: [Client Name] - [Industry]
```

### Email Body
```
NEW FINANCIAL INSIGHTS INTAKE SUBMISSION
========================================

Client: David Kim
Industry: PropTech
Business Value: $120,000,000
Net Worth: $28,500,000
Exit Timeline: 12-18 months

Contact Information:
- Email: client@company.com
- Phone: +1 (555) 123-4567

----------------------------------------
FORMATTED PAYLOAD FOR AI PROCESSING
(Copy the JSON below to use with Financial Insights AI)
----------------------------------------

{
  "client_profile": {
    "name": "David Kim",
    "age": 42,
    "net_worth": 28500000,
    "primary_business": {
      "industry": "PropTech",
      "entity_type": "C-Corp",
      ...
    },
    ...
  },
  "rag_query": {
    "Tier1Root": [...],
    "Tier2Sector": [...]
  },
  ...
}

----------------------------------------
END OF PAYLOAD
----------------------------------------

Next Steps:
1. Review the client's information
2. Copy the JSON payload above
3. Paste into Financial Insights AI system at http://localhost:3000/reports
4. Generate personalized report
5. Follow up with David Kim at client@company.com
```

---

## 🔧 RECOMMENDED SETUP (Resend)

**Step-by-step instructions:**

1. **Install Resend package:**
   ```bash
   cd C:\inetpub\wwwroot\Projects\wrigital
   npm install resend
   ```

2. **Create `.env.local` file:**
   ```bash
   # In the wrigital root directory
   echo RESEND_API_KEY=your_api_key_here > .env.local
   ```

3. **Sign up for Resend:**
   - Go to https://resend.com
   - Create account
   - Verify your domain (wrigitail.com)
   - Copy your API key

4. **Update the API route:**
   Replace the commented section in `app/api/financial-intake/route.ts` with:
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'Financial Insights <intake@wrigitail.com>',
     to: ['terry@wrigitail.com'],
     subject: emailSubject,
     text: emailBody,
     reply_to: formData.email
   });
   ```

5. **Test the form:**
   - Start dev server: `npm run dev`
   - Navigate to: `http://localhost:3000/financial-insights-intake`
   - Fill out form and submit
   - Check terry@wrigitail.com for email

---

## 🧪 TESTING IN DEVELOPMENT

**Current behavior (no email service configured):**
- Form submissions are logged to the console
- You can see the formatted JSON payload in the terminal
- No actual email is sent

**To test email delivery:**
1. Set up one of the email services above
2. Use a test email address first
3. Verify formatting is correct
4. Switch to production email (terry@wrigitail.com)

---

## 🔒 SECURITY CONSIDERATIONS

1. **Environment Variables:**
   - Never commit `.env.local` to Git
   - Add to `.gitignore` if not already there
   - Use different API keys for dev/production

2. **Rate Limiting:**
   - Consider adding rate limiting to prevent spam
   - Most email services have built-in rate limits

3. **Email Validation:**
   - Form includes basic email validation
   - Consider additional validation on server

4. **Data Privacy:**
   - Email contains sensitive financial information
   - Ensure email provider uses encryption (TLS)
   - Consider encrypted email for extra security

---

## 📊 USAGE INSTRUCTIONS

### **For Landing Page:**
The form is accessible at:
```
https://wrigitail.com/financial-insights-intake
```

### **For LinkedIn Outreach:**
```
Hi [Name],

I saw your profile and thought you might be interested in our 
complimentary Financial Insights AI report for [Industry] founders.

Get your personalized exit strategy analysis here:
https://wrigitail.com/financial-insights-intake

The report includes:
✅ Exit valuation scenarios
✅ QSBS tax optimization
✅ Concentration risk analysis
✅ Wealth preservation strategies

Takes 5 minutes to complete, receive report within 1-2 business days.

Best,
Terry
```

---

## 🎯 NEXT STEPS

1. ✅ Form created and working
2. ⚠️ Choose email service (recommend Resend)
3. ⚠️ Set up email delivery
4. ⚠️ Test with personal email
5. ⚠️ Configure production email
6. ⚠️ Add to Wrigital website navigation (if desired)
7. ⚠️ Create LinkedIn outreach campaign

---

**Questions?**
Contact: terry@wrigitail.com

**Form Location:** `/financial-insights-intake`  
**API Endpoint:** `/api/financial-intake`  
**Documentation:** This file
