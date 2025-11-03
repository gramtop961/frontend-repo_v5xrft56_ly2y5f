import { motion } from 'framer-motion';

export default function CheckoutPage() {
  return (
    <section className="relative bg-zinc-950 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_5%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(16,185,129,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-semibold text-white">Checkout</motion.h1>
        <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-2 max-w-2xl text-zinc-300">Single product. Simple checkout.</motion.p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800 mb-4" />
            <p className="text-white font-medium">Terratone Acoustic Panel</p>
            <p className="text-sm text-zinc-400">600×600×25mm • ₹600 – ₹750</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="text-sm text-zinc-300">Variant</label>
                <select className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600">
                  <option>Charcoal Matte</option>
                  <option>Forest Texture</option>
                  <option>Slate Groove</option>
                  <option>Pebble Weave</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Quantity</label>
                <input type="number" min="1" defaultValue="4" className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input placeholder="Full Name" className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600" />
                <input placeholder="Phone" className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600" />
                <input placeholder="Address" className="sm:col-span-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600" />
                <input placeholder="City" className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600" />
                <input placeholder="Pincode" className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-5 py-2.5 text-sm font-semibold" type="submit">Pay Now</button>
                <span className="text-sm text-zinc-400">Secure • UPI / Cards</span>
              </div>
              <p className="text-xs text-zinc-500">Note: Demo checkout — no payment is processed.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
