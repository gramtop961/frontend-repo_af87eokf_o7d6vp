import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 pb-8 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} Alex Johnson. All rights reserved.
      </p>
    </footer>
  );
}
