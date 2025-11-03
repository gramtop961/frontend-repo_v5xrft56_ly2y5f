import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const variants = [
    { name: 'Charcoal Matte', badge: 'Best Seller' },
    { name: 'Forest Texture', badge: 'New' },
    { name: 'Slate Groove', badge: 'Studio' },
    { name: 'Pebble Weave', badge: 'Office' },
  ];

  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">Shop</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">One size, multiple finishes. Pick your vibe.</motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {variants.map((v) => (
            <motion.div key={v.name} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-emerald-600/40 transition-colors">
              <div className="relative aspect-square w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800 mb-4 overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-500/30">{v.badge}</div>
              </div>
              <p className="font-medium text-white">{v.name}</p>
              <p className="text-sm text-zinc-400">600×600×25mm • ₹600–₹750</p>
              <Link to="/checkout" className="mt-3 inline-block rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-3 py-2 text-xs font-semibold">Buy</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
