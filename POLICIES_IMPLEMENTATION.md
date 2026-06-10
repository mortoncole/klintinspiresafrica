# Privacy Policy & Terms of Service Implementation Guide

## Overview

I've created comprehensive **Privacy Policy** and **Terms of Service** documents for Klint Inspires Africa Foundation's website, tailored specifically to your nonprofit's operations.

## What Was Created

### 1. **Privacy Policy** (`src/pages/PrivacyPolicy.jsx`)
A 17-section privacy policy covering:
- How you collect personal data (contact forms, volunteer sign-ups, donations)
- Data usage and processing purposes
- GDPR compliance and legal basis for processing
- Data sharing practices (limited to Formspree and legal requirements)
- Security measures and encryption
- User rights (access, correction, erasure, portability)
- Cookie and analytics policies
- Data retention schedules
- CCPA compliance for California residents
- International data transfer safeguards

### 2. **Terms of Service** (`src/pages/TermsOfService.jsx`)
A 16-section terms document covering:
- Use license and permitted/prohibited activities
- Form submission terms (contact, volunteer, donation)
- Limitation of liability and disclaimers
- Indemnification
- Intellectual property protection
- Third-party links and services
- Volunteer conduct and risk assumptions
- Termination rights
- Governing law (Ghana-based)
- Dispute resolution

### 3. **Updated Navigation**
- Added routes in `App.jsx`:
  - `/privacy` → Privacy Policy page
  - `/terms` → Terms of Service page
- Added "Legal" section in Footer with links to both policies

## Key Features

### ✅ **Tailored to Your Website**
- Addresses your specific data collection: names, emails, phone numbers, volunteer skills, availability
- Covers your three main forms: Contact, Volunteer Sign-Up, Donations
- Mentions Formspree integration (form processor)
- Acknowledges mobile money & bank transfer donations
- References TikTok embeds and third-party integrations

### ✅ **Compliance Coverage**
- **GDPR** (EU privacy regulation)
- **CCPA** (California privacy rights)
- **Ghana law** (governing law jurisdiction)
- Industry best practices for nonprofits

### ✅ **Nonprofit-Friendly**
- Addresses donation tax considerations
- Covers volunteer liability and risk assumption
- Appropriate language for charitable organizations
- Non-refund policy for donations

### ✅ **Professional Design**
- Styled with your Tailwind CSS theme (brand-navy, brand-orange)
- Fully responsive (mobile-friendly)
- Proper heading hierarchy and readability
- Structured sections for easy navigation

## How to Use

### Viewing the Policies

1. **Development**: Start your dev server
   ```bash
   npm run dev
   ```
   Then visit:
   - `http://localhost:5173/privacy` (Privacy Policy)
   - `http://localhost:5173/terms` (Terms of Service)

2. **Production**: Once built and deployed, policies are available at:
   - `https://klintinspiresafrica.org/privacy`
   - `https://klintinspiresafrica.org/terms`

### Footer Links

The Footer automatically includes links to both policies in the "Legal" section.

## Customization

If you need to update specific sections, edit the JSX files:

- **Contact email**: Update `klintinspiresafrica@gmail.com` throughout
- **Donation amounts**: Modify the impact section in DonateSection.jsx
- **Retention periods**: Update retention schedules in Privacy Policy (Section 8)
- **Company name/location**: Replace "Klint Inspires Africa" and "Ghana" as needed

### Important Fields to Review

1. **Formspree Integration**: The policies mention Formspree. If you change form processors, update both documents.
2. **Donation Processing**: Ensure donation section reflects your actual payment methods (currently MTN Mobile Money & GCB Bank).
3. **Volunteer Liability**: Section 10 (Assumption of Risk) assumes volunteers accept inherent risks. Ensure this aligns with your insurance.

## Legal Disclaimers

⚠️ **Important**: While these policies are comprehensive and tailored to your nonprofit:

1. **Consult a lawyer** for your jurisdiction before deploying to production
2. **Tax implications**: The donation section contains general information; donors should consult tax professionals
3. **Insurance**: Ensure your volunteer liability insurance aligns with Section 10 (Assumption of Risk)
4. **Updates**: Policies should be reviewed annually and updated as your programs evolve

## Deployment Checklist

Before going live:

- [ ] Review with your legal counsel (or a nonprofit attorney if possible)
- [ ] Update `klintinspiresafrica@gmail.com` if it changes
- [ ] Verify Formspree endpoints are still correct (currently `mojbjvjq` & `mgoqovyv`)
- [ ] Add privacy notice to donation page (recommended)
- [ ] Add consent checkbox to forms: "I agree to the Terms of Service and Privacy Policy"
- [ ] Set last-updated date in policies (currently auto-generated)
- [ ] Test `/privacy` and `/terms` routes work correctly

## Testing

The policies have been built and tested successfully:
```
✓ 83 modules transformed
✓ Built in 2.16s
```

No syntax or build errors. Routes are properly configured.

## Next Steps

1. **Review the content** at `/privacy` and `/terms`
2. **Customize fields** specific to your organization
3. **Have legal review** before deployment
4. **Add consent checkboxes** to forms if required by your jurisdiction
5. **Deploy and announce** the policies are available

## Questions?

For specific questions about sections, contact your legal advisor. Both documents include contact information and encourage users to reach out with privacy or terms concerns.
