import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Klint Inspires Africa</title>
        <meta name="description" content="Privacy Policy for Klint Inspires Africa Foundation - How we collect, use, and protect your personal data." />
      </Helmet>

      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-sm sm:prose lg:prose-lg prose-headings:text-brand-navy prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Privacy Policy</h1>
            <p className="text-gray-500 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">1. Introduction</h2>
            <p>
              Klint Inspires Africa Foundation ("we," "us," "our," or "Foundation") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website klintinspiresafrica.com (the "Website") and interact with us through forms, donations, volunteer sign-ups, and other means.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Website. Your continued use of the Website constitutes your acceptance of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">2.1 Information You Provide Directly</h3>
            <p>We collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Contact Forms:</strong> Full name, email address, subject, and message when you contact us</li>
              <li><strong>Volunteer Sign-Up:</strong> Full name, phone number, email address, location, skills/interests, availability, and additional information about your motivation to volunteer</li>
              <li><strong>Donations:</strong> When you donate via mobile money or bank transfer, you may provide information such as transaction details. We do not directly collect or store payment card information—transactions are processed through external payment providers</li>
              <li><strong>Email Communications:</strong> If you subscribe to updates or newsletters, we collect your email address</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <p>When you visit our Website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Browser type, IP address, and device information</li>
              <li>Pages visited, time spent on pages, and referral source</li>
              <li>Cookies and similar tracking technologies (see Section 6 below)</li>
              <li>Analytics data through Google Analytics to understand user behavior and improve our Website</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">2.3 Third-Party Information</h3>
            <p>
              We use Formspree (https://formspree.io) to process contact and volunteer forms. Formspree may collect additional information as described in their privacy policy. We are not responsible for Formspree's privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process and acknowledge donations</li>
              <li>To manage and coordinate volunteer opportunities</li>
              <li>To send you updates, newsletters, and announcements (with your consent)</li>
              <li>To improve our Website, services, and user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To prevent fraud and ensure security</li>
              <li>To analyze trends and generate insights about our programs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">4. Legal Basis for Processing (GDPR Compliance)</h2>
            <p>If you are located in the European Union or another jurisdiction with privacy regulations similar to GDPR, we process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Consent:</strong> When you voluntarily submit forms or sign up for communications</li>
              <li><strong>Legitimate Interest:</strong> To operate our Website, improve our services, and manage our nonprofit activities</li>
              <li><strong>Contract Performance:</strong> To fulfill volunteer agreements or donation acknowledgments</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">5. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With Formspree to process your forms securely</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Protection of Rights:</strong> To protect our legal rights, privacy, or safety</li>
              <li><strong>Authorized Partners:</strong> With partner organizations (with your consent) only for program purposes</li>
              <li><strong>Volunteer Coordination:</strong> Limited contact information may be shared internally with our team to coordinate volunteer activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p>Our Website uses cookies and similar technologies to enhance your experience:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Necessary for the Website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to track user behavior and improve our Website. You can opt out via Google's opt-out browser add-on</li>
              <li><strong>Performance Cookies:</strong> To measure Website performance and user experience</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings. However, disabling cookies may affect Website functionality. By using our Website, you consent to our use of cookies unless you disable them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our Website uses:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Secure form processing through Formspree</li>
              <li>Limited access to personal data by authorized personnel only</li>
              <li>Regular security updates and monitoring</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">8. Retention of Your Information</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy, or as required by law. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Contact form submissions are retained for up to 1 year</li>
              <li>Volunteer information is retained for active volunteer management and up to 2 years after disengagement</li>
              <li>Donation records are retained in accordance with nonprofit accounting standards (typically 7 years)</li>
              <li>Email subscribers' information is retained until unsubscribe</li>
            </ul>
            <p>
              You can request deletion of your information at any time (see Your Rights section).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">9. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Right to Object:</strong> Object to certain processing of your information</li>
              <li><strong>Right to Restrict Processing:</strong> Request that we limit processing of your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your information in a portable format</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href="mailto:klintinspiresafrica@gmail.com">klintinspiresafrica@gmail.com</a>. We will respond to your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">10. Unsubscribe and Communications Preferences</h2>
            <p>
              If you wish to stop receiving newsletters, updates, or promotional communications, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Click the "Unsubscribe" link in any email communication</li>
              <li>Contact us at <a href="mailto:klintinspiresafrica@gmail.com">klintinspiresafrica@gmail.com</a></li>
              <li>Update your preferences on your account (if applicable)</li>
            </ul>
            <p>
              Please note: We may still send you service-related communications, such as donation confirmations or volunteer updates, even if you unsubscribe from marketing communications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">11. Third-Party Links and Services</h2>
            <p>
              Our Website may contain links to third-party websites and services, including TikTok embeds. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information. Our content security policy restricts external content loading to trusted sources only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">12. International Data Transfers</h2>
            <p>
              Our Website is hosted and operated in Ghana. If you access our Website from outside Ghana, your information may be transferred to, stored in, and processed in Ghana and other countries where we operate. By using our Website, you consent to such transfers. We implement appropriate safeguards (such as Standard Contractual Clauses) to protect your information during international transfers where applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">13. Children's Privacy</h2>
            <p>
              Our Website is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will promptly delete it. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">14. California Privacy Rights (CCPA)</h2>
            <p>
              If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether personal information is sold or disclosed</li>
              <li>Right to opt out of the sale or sharing of personal information</li>
              <li>Right to delete personal information collected</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:klintinspiresafrica@gmail.com">klintinspiresafrica@gmail.com</a>. We will verify your identity and respond within 45 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">15. Do Not Track</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature. Currently, there is no industry standard for recognizing DNT signals. Our Website does not currently respond to DNT browser signals, but we provide other privacy choices as described in this Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">16. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, wish to exercise your rights, or want to report a privacy concern, please contact us:
            </p>
            <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-6 my-6">
              <p className="font-semibold text-brand-navy mb-2">Klint Inspires Africa Foundation</p>
              <p><strong>Email:</strong> <a href="mailto:klintinspiresafrica@gmail.com">klintinspiresafrica@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://klintinspiresafrica.org">https://klintinspiresafrica.com</a></p>
              <p className="text-sm text-gray-600 mt-4">We will respond to your inquiry within 30 business days.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">17. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last updated" date at the top of this Policy and, where required, by obtaining your consent. Your continued use of the Website following notice of changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              This Privacy Policy is provided for informational purposes and should be reviewed regularly for updates. For any legal concerns, please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
