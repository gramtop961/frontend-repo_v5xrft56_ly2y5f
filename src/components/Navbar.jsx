import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'How It Works', href: '#how' },
    { label: 'Shop', href: '#shop' },
    { label: 'Sustainability', href: '#impact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/70 border-b border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-emerald-400">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Terratone</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#checkout"
              className="rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-zinc-900 px-4 py-2 text-sm font-semibold transition-colors"
            >
              Buy Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-900/95">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#checkout"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-zinc-900 px-4 py-2 text-sm font-semibold"
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
