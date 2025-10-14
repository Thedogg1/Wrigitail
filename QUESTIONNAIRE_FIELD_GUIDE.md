# 📋 FINANCIAL INSIGHTS QUESTIONNAIRE - FIELD REQUIREMENTS

**Last Updated:** October 2025  
**Form Location:** `/financial-insights-intake`

---

## 🎯 FIELD REQUIREMENTS OVERVIEW

### **Required Fields (9) - System Cannot Work Without These:**
These fields are **absolutely necessary** for the Financial Insights AI system to generate a report.

| Field | Why Required | What It Does |
|-------|-------------|--------------|
| **Name** * | Client identification | Personalizes report and correspondence |
| **Email** * | Communication | Delivers report and follow-up |
| **Industry** * | Sector analysis | Determines sector-specific benchmarks and exit strategies |
| **Business Value** * | Valuation modeling | Generates exit scenarios and valuation benchmarks |
| **Ownership %** * | Financial calculations | Calculates your exit proceeds and tax liability |
| **Exit Timeline** * | Strategy prioritization | Prioritizes strategies and structures your roadmap |
| **Net Worth** * | Risk analysis | Calculates concentration risk and diversification strategies |
| **Annual Income** * | Tax planning | Determines tax optimization opportunities |
| **Tax Burden** * | Tax strategy | Identifies tax reduction strategies (QSBS, relocation, etc.) |
| **Primary Goal** * | Report focus | Guides the entire analysis and recommendations |

### **Optional Field (1) - Improves Experience:**
This field enhances the service but is not required for report generation.

| Field | Why Helpful | What It Improves |
|-------|------------|------------------|
| **Phone** | Easier communication | Allows for quick clarification calls and better scheduling |

---

## 📊 WHAT HAPPENS WITHOUT OPTIONAL FIELDS

### **If Client Skips Phone:**
- ✅ Report still generates perfectly
- ✅ All analysis is complete
- ⚠️ Communication is email-only
- ⚠️ Scheduling follow-ups takes longer

**Impact:** Minimal - report quality unchanged

---

## 🎯 VALIDATION RULES

### **System Validation:**
```typescript
Required fields:
- name: Must be non-empty string
- email: Must be valid email format
- industry: Must select from dropdown
- businessValue: Must be positive number
- ownershipPercentage: Must be 0-100
- exitTimeline: Must select from dropdown
- netWorth: Must be positive number
- annualIncome: Must be positive number
- annualTaxBurden: Must be positive number
- primaryGoal: Must be non-empty string (min 20 characters recommended)

Optional fields:
- phone: Any format accepted (validated as phone number)
```

---

## 💡 FIELD USAGE IN SYSTEM

### **How Each Required Field Is Used:**

**Industry** → 
- Loads sector-specific knowledge base (PropTech, FinTech, etc.)
- Retrieves relevant benchmarks and exit strategies
- Determines Tier2Sector RAG queries
- Example: "PropTech" → loads proptech_sector_frameworks

**Business Value + Ownership %** →
- Calculates your exit proceeds
- Models different exit scenarios
- Compares to sector transaction multiples
- Generates valuation sensitivity analysis

**Net Worth + Business Value** →
- Calculates concentration risk percentage
- Determines diversification urgency
- Structures post-exit allocation recommendations
- Example: $120M business / $28.5M net worth = 421% concentration risk

**Annual Income + Tax Burden** →
- Calculates effective tax rate
- Identifies tax optimization opportunities
- Models QSBS benefits
- Structures tax-efficient exit strategies

**Exit Timeline** →
- Prioritizes immediate vs. long-term strategies
- Determines QSBS holding period considerations
- Structures phased liquidity planning
- Sets milestone timelines in report

**Primary Goal** →
- Focuses the entire report on what matters to the client
- Guides framework selection
- Determines reporting section emphasis
- Personalizes recommendations

---

## 🎨 USER EXPERIENCE

### **Visual Indicators in Form:**

**Required Fields:**
```
Industry/Sector *
Required: Determines sector-specific benchmarks and exit strategies
[Dropdown field]
```

**Optional Fields:**
```
Phone Number
Optional: For follow-up scheduling
[Text input field]
```

### **Form Submission:**
- ❌ **Cannot submit** if any required field is empty
- ✅ **Can submit** with phone number blank
- ⚠️ **Browser validation** shows which required fields are missing

---

## 📧 PRE-CALL EMAIL TEMPLATE

```
Subject: Intake Form for Your Financial Strategy Consultation

Hi [Name],

Looking forward to our consultation on [date/time]!

To prepare for our call, please complete this quick intake form:
👉 https://wrigitail.com/financial-insights-intake

It takes 5 minutes and collects the essential information we need 
to generate your personalized financial strategy report.

IMPORTANT: 
✅ 9 required fields (marked with *) - system needs these to work
✅ 1 optional field (phone) - helpful but not required

We'll discuss all the details during our Zoom call - this form just 
gives us the baseline data to prepare.

Zoom Link: [link]

See you soon!
Terry
```

---

## 🔧 TECHNICAL IMPLEMENTATION

### **Form Validation:**
```typescript
// Required fields enforced by HTML5 + React
<input 
  type="email" 
  name="email" 
  required  // Browser enforces this
  className="..."
/>

// Optional fields
<input 
  type="tel" 
  name="phone"
  // No 'required' attribute
  className="..."
/>
```

### **Field Helper Text:**
```typescript
<label>
  Field Name *
  <span className="block text-xs font-normal text-gray-500 mt-1">
    Required: [Explanation of why this field is required]
  </span>
</label>
```

---

## ✅ COMPLETE FIELD LIST

### **Step 1: Contact & Business (7 fields)**
1. ✅ Name * - Required
2. ✅ Email * - Required
3. ⚪ Phone - Optional
4. ✅ Industry * - Required
5. ✅ Business Value * - Required
6. ✅ Ownership % * - Required
7. ✅ Exit Timeline * - Required

### **Step 2: Financial Snapshot (3 fields)**
8. ✅ Net Worth * - Required
9. ✅ Annual Income * - Required
10. ✅ Tax Burden * - Required

### **Step 3: Primary Goal (1 field)**
11. ✅ Primary Goal * - Required

**Total Required: 10 fields**  
**Total Optional: 1 field**

---

## 🎯 SUMMARY

**The questionnaire now clearly shows:**
- ✅ Which fields are **required for the system to function**
- ✅ **Why each field is required** (what it's used for)
- ✅ Which fields are **optional but helpful**
- ✅ **What each field improves** in the report

**This helps clients understand the value of each field and ensures they provide complete data for the best report quality.** 📊

---

**Document Version:** 1.0  
**Last Updated:** October 2025
