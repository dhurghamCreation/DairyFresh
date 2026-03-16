import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">By using the DairyFresh website, you agree to the following terms and conditions. Please read them carefully.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Website</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 18 years old or have parental consent to use this site.</li>
        <li>Do not misuse our services or attempt to harm the website.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content on this site is the property of DairyFresh and may not be used without permission.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">DairyFresh is not liable for any damages arising from the use of this website.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions about these terms, please contact us at support@dairyfresh.com.</p>
    </div>
  );
}
