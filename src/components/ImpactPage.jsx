import { motion } from 'framer-motion';
import { CheckCircle2, Recycle, Leaf } from 'lucide-react';

export default function ImpactPage() {
  const items = [
    { icon: CheckCircle2, h: 'Certifications', p: 'Low-VOC, Fire-retardant (Class B), RoHS compliant.' },
    { icon: Recycle, h: 'Circular Economy', p: 'Diverts organic waste from landfills; components are recyclable.' },
    { icon: Leaf, h: 'Community', p: 'Sourcing supports local waste collectors and micro-units.' },
  ];

  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_5%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(16,185,129,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">Sustainability & Impact</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">Proof, purpose, and positive outcomes.</motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((s) => (
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
