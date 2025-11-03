import Hero from './Hero';
import { motion } from 'framer-motion';
import { Sparkles, Wind, Recycle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="relative bg-zinc-950 py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.05),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-6"
          >
            Why Terratone
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{
              icon: Sparkles, t: '40%+ Sound Absorption', d: 'Quiets mid‑high frequencies for calmer rooms.'
            },{
              icon: Wind, t: 'Purifies Air', d: 'Porous bio‑matrix captures VOCs and odors.'
            },{
              icon: Recycle, t: 'Upcycled Peels', d: 'Turns waste into performance materials.'
            },{
              icon: Shield, t: 'Safe & Durable', d: 'Fire-retardant, low‑VOC, built to last.'
            }].map((f) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
              >
                <div className="flex items-start gap-3">
                  <f.icon className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{f.t}</p>
                    <p className="text-sm text-zinc-300">{f.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/product" className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-5 py-2.5 text-sm font-semibold">Explore Product</Link>
            <Link to="/shop" className="rounded-md border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 px-5 py-2.5 text-sm font-semibold text-white">Shop Variants</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
