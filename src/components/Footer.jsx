import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-emerald-400">
          <Leaf className="h-5 w-5" />
          <span className="font-medium">Terratone</span>
        </Link>
        <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Terratone. Built with sustainable intent.</p>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <Link to="/impact" className="hover:text-emerald-300">Sustainability</Link>
          <Link to="/faq" className="hover:text-emerald-300">FAQ</Link>
          <Link to="/contact" className="hover:text-emerald-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
