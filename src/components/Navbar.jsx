import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Product', to: '/product' },
    { label: 'How It Works', to: '/how' },
    { label: 'Shop', to: '/shop' },
    { label: 'Sustainability', to: '/impact' },
    { label: 'FAQ', to: '/faq' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const linkClass = ({ isActive }) => `text-sm ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'} transition-colors`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/70 border-b border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-emerald-400">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Terratone</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/checkout"
              className="rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-zinc-900 px-4 py-2 text-sm font-semibold transition-colors"
            >
              Buy Now
            </Link>
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
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block rounded-md px-3 py-2 ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-zinc-900 px-4 py-2 text-sm font-semibold"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
