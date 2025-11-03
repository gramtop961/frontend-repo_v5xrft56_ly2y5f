import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">Contact</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">Direct lines — no forms.</motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-medium text-white">Phone</p>
            <p className="text-sm text-zinc-300 mt-1">+91 98765 43210</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-medium text-white">Social</p>
            <p className="text-sm text-zinc-300 mt-1">Instagram / LinkedIn / X: @terratone</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-medium text-white">Address</p>
            <p className="text-sm text-zinc-300 mt-1">Bengaluru, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
