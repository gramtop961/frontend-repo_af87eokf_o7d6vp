import React, { useState } from 'react';
import { Mail, Phone, Copy } from 'lucide-react';

export default function ContactActions() {
  const [copied, setCopied] = useState(false);
  const email = 'alex.johnson@example.com';
  const phone = '+15551234567';
  const vat = 'US-12-3456789';

  const handleCopyVAT = async () => {
    try {
      await navigator.clipboard.writeText(vat);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      <a
        href={`mailto:${email}`}
        className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors"
      >
        <Mail size={18} className="opacity-80 group-hover:opacity-100" />
        <span>Email</span>
      </a>
      <a
        href={`tel:${phone}`}
        className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors"
      >
        <Phone size={18} className="opacity-80 group-hover:opacity-100" />
        <span>Call</span>
      </a>
      <button
        onClick={handleCopyVAT}
        className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors"
        type="button"
      >
        <Copy size={18} className="opacity-80 group-hover:opacity-100" />
        <span>{copied ? 'VAT Copied' : 'Copy VAT'}</span>
      </button>
    </div>
  );
}
