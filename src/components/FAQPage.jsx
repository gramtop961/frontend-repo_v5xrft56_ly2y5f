import { motion } from 'framer-motion';

export default function FAQPage() {
  const faqs = [
    { q: 'How do I install?', a: 'Use adhesive or mounting clips on clean, dry walls. Layout guide included.' },
    { q: 'Is it safe?', a: 'Yes. Low-VOC finish, fire-retardant, and tested for indoor use.' },
    { q: 'Shipping time?', a: 'Typically 5–7 business days across India.' },
    { q: 'Returns?', a: '7-day returns in original packaging. Defects replaced at no cost.' },
  ];

  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">FAQ</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">Answers to common questions.</motion.p>

        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <motion.details key={f.q} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
              <summary className="cursor-pointer list-none select-none text-white font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-emerald-300 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-zinc-300">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
