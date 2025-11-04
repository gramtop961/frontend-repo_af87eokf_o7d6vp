import React from 'react';
import { User, Mail, Phone, MapPin, FileText } from 'lucide-react';

export default function InfoCard() {
  const details = [
    { label: 'Name', value: 'Alex Johnson', icon: User },
    { label: 'Email', value: 'alex.johnson@example.com', icon: Mail, href: 'mailto:alex.johnson@example.com' },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
    { label: 'Address', value: '123 Market St, Suite 200, San Francisco, CA', icon: MapPin },
    { label: 'VAT Number', value: 'US-12-3456789', icon: FileText },
  ];

  return (
    <section className="mx-auto max-w-3xl w-full">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-xl">
        <h2 className="text-lg font-medium text-white/90 mb-4">Business Details</h2>
        <div className="divide-y divide-white/10">
          {details.map(({ label, value, icon: Icon, href }) => (
            <div key={label} className="flex items-start gap-4 py-4">
              <div className="mt-0.5 rounded-lg bg-white/10 p-2 text-white">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-300/70">{label}</p>
                {href ? (
                  <a href={href} className="block text-base md:text-lg text-white hover:text-cyan-300 transition-colors truncate">
                    {value}
                  </a>
                ) : (
                  <p className="text-base md:text-lg text-white/90 truncate">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
