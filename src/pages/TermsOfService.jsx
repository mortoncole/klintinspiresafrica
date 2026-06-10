import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Klint Inspires Africa</title>
        <meta name="description" content="Terms of Service for Klint Inspires Africa Foundation - Legal terms governing use of our website and services." />
      </Helmet>

      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-sm sm:prose lg:prose-lg prose-headings:text-brand-navy prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Terms of Service</h1>
            <p className="text-gray-500 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legal agreement between you ("User," "you," or "your") and Klint Inspires Africa Foundation ("Foundation," "we," "us," or "our"). By accessing and using the website klintinspiresafrica.org (the "Website"), including all content, features, and services offered on the Website, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree with any part of these Terms, you must not use the Website. We reserve the right to modify these Terms at any time. Your continued use of the Website following changes constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2. Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use the Website and its content for personal, non-commercial purposes, subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You will not modify or copy the materials (including but not limited to HTML, CSS, JavaScript, images, text, and designs)</li>
              <li>You will not use the materials for any commercial purpose or for any public display</li>
              <li>You will not attempt to decompile or reverse engineer any software contained on the Website</li>
              <li>You will not remove any copyright, trademark, or other proprietary notices</li>
              <li>You will not transfer the materials to another person or "mirror" them on any other server</li>
              <li>You will not use the Website in any way that violates applicable laws or regulations</li>
            </ul>
            <p>
              This license terminates if you violate these restrictions, and we may terminate your access to the Website at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3. User Responsibilities and Conduct</h2>
            <p>
              You agree that you will not use the Website to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit any harmful, defamatory, obscene, hateful, or abusive content</li>
              <li>Engage in harassment, bullying, or threatening behavior</li>
              <li>Transmit malware, viruses, or any code of destructive nature</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Spam or send unsolicited messages</li>
              <li>Engage in phishing, fraud, or any deceptive practices</li>
              <li>Collect or track personal information of others without consent</li>
              <li>Interfere with or disrupt the normal operation of the Website</li>
              <li>Use automated tools (bots, scrapers, etc.) without prior written permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">4. Forms and User-Submitted Content</h2>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">4.1 Contact and Inquiry Forms</h3>
            <p>
              By submitting information through our contact form, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All information provided is accurate and truthful</li>
              <li>You own or have the right to submit the information</li>
              <li>The information does not violate third-party rights</li>
              <li>You consent to our use of the information as described in our Privacy Policy</li>
            </ul>
            <p>
              We will use your contact information to respond to your inquiry and may contact you via email or phone. We are not responsible for any consequences of inaccurate information provided in forms.
            </p>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">4.2 Volunteer Sign-Up</h3>
            <p>
              By signing up as a volunteer, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Comply with all instructions and guidelines provided by the Foundation</li>
              <li>Maintain professional and respectful conduct during volunteer activities</li>
              <li>Respect the confidentiality of sensitive information encountered</li>
              <li>Not engage in any activities that violate the Foundation's mission or values</li>
              <li>Hold the Foundation harmless for any injuries or incidents arising from volunteer work (to the extent permitted by law)</li>
            </ul>
            <p>
              The Foundation reserves the right to decline or terminate volunteer participation for any reason, including violation of these Terms or our policies. Volunteer positions are provided on a voluntary, unpaid basis.
            </p>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">4.3 Donation Terms</h3>
            <p>
              By making a donation, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are making a voluntary gift to the Foundation</li>
              <li>All donations are non-refundable unless otherwise stated</li>
              <li>You have the legal capacity and authority to make the donation</li>
              <li>Funds are used at the Foundation's sole discretion to further our mission</li>
              <li>You consent to the Foundation using your name and donation information for recognition purposes (unless you request otherwise)</li>
              <li>You are responsible for any applicable taxes related to your donation</li>
              <li>Receipt of your donation does not constitute legal, tax, or financial advice</li>
            </ul>
            <p>
              <strong>Tax Deductibility:</strong> Consult with a tax professional regarding the deductibility of your donation. The Foundation will provide a donation receipt; however, we are not responsible for determining tax implications of your contribution.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">5. Limitation of Liability and Disclaimers</h2>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">5.1 "As-Is" Disclaimer</h3>
            <p>
              The Website and all content, materials, services, and functions offered on the Website are provided on an "as-is" and "as-available" basis. The Foundation makes no warranties, express or implied, regarding the Website or its content, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Accuracy, completeness, or reliability of any information</li>
              <li>Uninterrupted availability or performance of the Website</li>
              <li>Freedom from errors, bugs, or viruses</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">5.2 Limitation of Damages</h3>
            <p>
              To the maximum extent permitted by law, in no event shall the Foundation, its officers, directors, employees, agents, or affiliates be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Lost profits, revenue, or data</li>
              <li>Business interruption or loss of business opportunity</li>
              <li>Damages arising from your use of or inability to use the Website</li>
              <li>Any unauthorized access, use, or alteration of your transmissions or data</li>
            </ul>
            <p>
              This applies even if the Foundation has been advised of the possibility of such damages. Some jurisdictions do not allow the exclusion of certain damages, so this limitation may not apply to you.
            </p>

            <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">5.3 Total Liability Cap</h3>
            <p>
              Notwithstanding anything to the contrary, the Foundation's total liability to you for any claims arising out of or relating to the Website shall not exceed the amount you have paid to the Foundation in the past 12 months, or GH₵ 100 (or your local currency equivalent), whichever is greater.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">6. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless the Foundation, its officers, directors, employees, agents, successors, and assigns from and against any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorney's fees) arising from or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your use of the Website or violation of these Terms</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Your violation of third-party rights</li>
              <li>Any content you submit or transmit through the Website</li>
              <li>Your volunteer activities or conduct</li>
            </ul>
            <p>
              We will notify you of any such claim and cooperate with you in defending it. You will assume full responsibility and liability for any such claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">7. Intellectual Property Rights</h2>
            <p>
              All content on the Website, including text, graphics, logos, images, videos, audio, design, layout, and software, is the property of the Foundation or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws. Unauthorized use or reproduction is strictly prohibited.
            </p>
            <p>
              You may not reproduce, distribute, modify, translate, adapt, or create derivative works of any content without prior written consent from the Foundation. Limited excerpts may be used for non-commercial purposes with proper attribution and a link to the original source.
            </p>
            <p>
              "Klint Inspires Africa," the Foundation logo, and other distinctive marks are trademarks of the Foundation. Unauthorized use of these trademarks is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">8. Third-Party Links and Services</h2>
            <p>
              The Website may contain links to third-party websites and services, including TikTok and other platforms. The Foundation is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The availability or accuracy of third-party content</li>
              <li>Third-party terms of service, privacy policies, or practices</li>
              <li>Any damages or losses arising from your use of third-party services</li>
              <li>Any information or content provided by third parties</li>
            </ul>
            <p>
              Your use of third-party services is governed by their respective terms and policies. We recommend reviewing them before using external platforms. Links to third-party sites do not constitute endorsement or recommendation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">9. Termination of Access</h2>
            <p>
              The Foundation reserves the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Suspend or terminate your access to the Website at any time, with or without cause</li>
              <li>Remove any content or submissions deemed inappropriate or in violation of these Terms</li>
              <li>Disable any volunteer account for conduct violations</li>
              <li>Discontinue or modify the Website or any service without notice</li>
            </ul>
            <p>
              Upon termination, your right to use the Website immediately ceases. Termination does not relieve you of any obligations or liabilities you have incurred.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">10. Assumption of Risk</h2>
            <p>
              Your use of the Website and participation in volunteer activities are at your own risk. The Foundation is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Any physical injuries, property damage, or emotional harm</li>
              <li>Exposure to illnesses or communicable diseases</li>
              <li>Accidents or incidents occurring during volunteer work</li>
              <li>Any consequences of following advice or information provided on the Website</li>
            </ul>
            <p>
              Volunteers assume all risks and are encouraged to obtain personal accident insurance and adhere to all safety guidelines provided by the Foundation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">11. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Ghana for the resolution of any disputes arising from these Terms or your use of the Website.
            </p>
            <p>
              If you are located outside Ghana and a local court determines that these governing law provisions are unenforceable, these Terms shall be governed by the laws of your local jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">12. Dispute Resolution and Arbitration</h2>
            <p>
              In the event of a dispute arising from these Terms or your use of the Website, you agree to first attempt to resolve the matter through good-faith negotiation with the Foundation. If negotiation is unsuccessful, either party may initiate formal proceedings in accordance with Section 11.
            </p>
            <p>
              For disputes involving donations or volunteer matters, we encourage parties to attempt mediation before pursuing legal action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be severed, and the remaining provisions shall continue in full force and effect to the maximum extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other policies or guidelines published on the Website, constitute the entire agreement between you and the Foundation regarding your use of the Website and supersede all prior negotiations, understandings, and agreements. No modification of these Terms is valid unless made in writing and signed by both parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">15. Contact for Questions</h2>
            <p>
              If you have questions about these Terms of Service or need to report a violation, please contact us:
            </p>
            <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-6 my-6">
              <p className="font-semibold text-brand-navy mb-2">Klint Inspires Africa Foundation</p>
              <p><strong>Email:</strong> <a href="mailto:klintinspiresafrica@gmail.com">klintinspiresafrica@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://klintinspiresafrica.org">https://klintinspiresafrica.org</a></p>
              <p className="text-sm text-gray-600 mt-4">We will respond to your inquiry within 30 business days.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">16. Additional Policies</h2>
            <p>
              These Terms work in conjunction with our <a href="/privacy">Privacy Policy</a>, which governs how we collect and use your personal information. Please review both documents carefully. In case of conflict between these Terms and the Privacy Policy, the Privacy Policy applies to matters relating to personal data handling.
            </p>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              These Terms of Service are provided for informational purposes. For legal concerns or clarification, please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
