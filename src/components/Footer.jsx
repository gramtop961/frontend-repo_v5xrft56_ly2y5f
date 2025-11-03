import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <Leaf className="h-5 w-5" />
          <span className="font-medium">Terratone</span>
        </div>
        <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Terratone. Built with sustainable intent.</p>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <a href="#impact" className="hover:text-emerald-300">Sustainability</a>
          <a href="#faq" className="hover:text-emerald-300">FAQ</a>
          <a href="#contact" className="hover:text-emerald-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
