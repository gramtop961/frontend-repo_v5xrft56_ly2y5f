import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950 pointer-events-none" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur"
        >
          Eco-acoustic innovation • Made from upcycled peels
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
        >
          Terratone Panels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-300"
        >
          Dark. Minimal. Green. Acoustic panels that absorb 40%+ sound and purify air
          — crafted from fruit and vegetable peels.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            to="/product"
            className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/20 transition-colors"
          >
            Explore Product
          </Link>
          <Link
            to="/checkout"
            className="rounded-md border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 px-6 py-3 text-sm font-semibold text-white transition-colors"
          >
            Buy Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
