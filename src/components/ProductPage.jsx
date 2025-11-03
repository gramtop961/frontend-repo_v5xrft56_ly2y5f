import { motion } from 'framer-motion';
import { Ruler, IndianRupee, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(5,150,105,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">Terratone Acoustic Panel</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">Upcycled, air‑purifying acoustic panels for modern, quiet spaces.</motion.p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800" />
          </motion.div>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="flex flex-col justify-center">
            <h3 className="text-white font-semibold text-lg">Specs</h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>Size: 600 × 600 × 25 mm</li>
              <li>Weight: ~1.8 kg per panel</li>
              <li>Material: upcycled peel bio‑composite</li>
              <li>Finish: charcoal low‑sheen, stain‑resistant</li>
              <li>Mount: adhesive or clip system</li>
            </ul>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 flex items-center gap-3">
                <Ruler className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-zinc-400">Dimensions</p>
                  <p className="font-medium text-white">600 × 600 × 25 mm</p>
                </div>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 flex items-center gap-3">
                <IndianRupee className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-zinc-400">Price</p>
                  <p className="font-medium text-white">₹600 – ₹750</p>
                </div>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 flex items-center gap-3">
                <Truck className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-zinc-400">Shipping</p>
                  <p className="font-medium text-white">Pan‑India, 5–7 days</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-emerald-300 font-medium">₹600 – ₹750</span>
              <Link to="/checkout" className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-4 py-2 text-sm font-semibold">Buy Now</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
