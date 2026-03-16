import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how DairyFresh collects, uses, and protects your information when you use our website.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information you provide (name, email, address, etc.)</li>
        <li>Order and payment information</li>
        <li>Usage data (pages visited, actions taken, etc.)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process orders and provide services</li>
        <li>To improve our website and services</li>
        <li>To communicate with you about your orders or offers</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at support@dairyfresh.com.</p>
    </div>
  );
}
