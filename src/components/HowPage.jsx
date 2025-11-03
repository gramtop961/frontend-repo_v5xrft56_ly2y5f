import { motion } from 'framer-motion';
import { Recycle, Factory, Droplets } from 'lucide-react';

export default function HowPage() {
  const steps = [
    { icon: Recycle, h: 'Upcycling', p: 'Peels are cleaned, dehydrated, and micronized into a stable powder.' },
    { icon: Factory, h: 'Bio‑Matrix', p: 'Powder binds with plant resins into a porous acoustic lattice.' },
    { icon: Droplets, h: 'Air Purification', p: 'Active surface captures VOCs and odors for cleaner air.' },
  ];

  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">How It Works</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">Sustainable science that turns waste into quiet, breathable comfort.</motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <motion.div key={s.h} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="flex items-start gap-3">
                <s.icon className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{s.h}</p>
                  <p className="text-sm text-zinc-300">{s.p}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
