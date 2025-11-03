import { motion } from 'framer-motion';
import { Leaf, Sparkles, Shield, Recycle, Wind, Ruler, IndianRupee, Truck, CheckCircle2, Factory, Droplets, Zap } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-16 sm:py-20 bg-zinc-950">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(5,150,105,0.06),transparent_40%)]" />
    <div className="relative mx-auto max-w-7xl px-4">
      <div className="mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-3xl text-sm sm:text-base text-zinc-300">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      {/* Intro + Highlights */}
      <Section
        id="product"
        title="Terratone: Eco‑friendly Acoustic Panels"
        subtitle="Made from upcycled fruit & vegetable peels. Designed to calm spaces, clean air, and elevate modern interiors."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="h-28 rounded-md bg-zinc-900/60 ring-1 ring-inset ring-zinc-800" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Sparkles, title: '40%+ Sound Absorption', desc: 'Engineered acoustic core dampens mid‑high frequencies.' },
                { icon: Wind, title: 'Air Purifying', desc: 'Bio-based matrix traps VOCs for cleaner indoor air.' },
                { icon: Recycle, title: 'Upcycled Materials', desc: 'Crafted from discarded peels—less waste, more value.' },
                { icon: Shield, title: 'Safe & Durable', desc: 'Fire-retardant, low-VOC finish, long service life.' },
              ].map((f) => (
                <li key={f.title} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                  <div className="flex items-start gap-3">
                    <f.icon className="h-5 w-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{f.title}</p>
                      <p className="text-sm text-zinc-300">{f.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#checkout" className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-5 py-2.5 text-sm font-semibold transition-colors">Buy Now</a>
              <a href="#how" className="rounded-md border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors">How it works</a>
            </div>
          </motion.div>
        </div>

        {/* Specs */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      </Section>

      {/* How It Works */}
      <Section
        id="how"
        title="How It Works"
        subtitle="Bio-composite acoustics: sustainable science behind the silence."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            icon: Recycle, h: 'Upcycling', p: 'Sorted peels are cleaned, dehydrated, and micronized into a stable powder.'
          },{
            icon: Factory, h: 'Bio-Matrix', p: 'Powder is bound with plant resins into a porous lattice that traps sound.'
          },{
            icon: Droplets, h: 'Air Purification', p: 'Active surface captures VOCs and odors, improving indoor air quality.'
          }].map((s) => (
            <div key={s.h} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="flex items-start gap-3">
                <s.icon className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{s.h}</p>
                  <p className="text-sm text-zinc-300">{s.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 text-sm text-zinc-300">
          Independent lab tests show 40%+ absorption in mid-frequency bands (NRC‑equivalent), with low VOC emissions and Class B flame performance.
        </div>
      </Section>

      {/* Shop */}
      <Section id="shop" title="Shop" subtitle="Select a finish. One size, multiple moods.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Charcoal Matte', badge: 'Best Seller' },
            { name: 'Forest Texture', badge: 'New' },
            { name: 'Slate Groove', badge: 'Studio' },
            { name: 'Pebble Weave', badge: 'Office' },
          ].map((v) => (
            <div key={v.name} className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-emerald-600/40 transition-colors">
              <div className="relative aspect-square w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800 mb-4 overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-500/30">{v.badge}</div>
              </div>
              <p className="font-medium text-white">{v.name}</p>
              <p className="text-sm text-zinc-400">600×600×25mm • ₹600–₹750</p>
              <a href="#checkout" className="mt-3 inline-block rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-3 py-2 text-xs font-semibold">Buy</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Sustainability */}
      <Section id="impact" title="Sustainability & Impact" subtitle="Certifications, circularity, and community benefit.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            icon: CheckCircle2, h: 'Certifications', p: 'Low-VOC, Fire-retardant (Class B), RoHS compliant.'
          },{
            icon: Recycle, h: 'Circular Economy', p: 'Diverts organic waste from landfills; components are recyclable.'
          },{
            icon: Leaf, h: 'Community', p: 'Sourcing supports local waste collectors and micro-units.'
          }].map((s) => (
            <div key={s.h} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="flex items-start gap-3">
                <s.icon className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{s.h}</p>
                  <p className="text-sm text-zinc-300">{s.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="Answers to common questions.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{
            q: 'How do I install?', a: 'Use adhesive or mounting clips on clean, dry walls. Layout guide included.'
          },{
            q: 'Is it safe?', a: 'Yes. Low-VOC finish, fire-retardant, and tested for indoor use.'
          },{
            q: 'Shipping time?', a: 'Typically 5–7 business days across India.'
          },{
            q: 'Returns?', a: '7-day returns in original packaging. Defects replaced at no cost.'
          }].map((f) => (
            <div key={f.q} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
              <p className="font-medium text-white">{f.q}</p>
              <p className="mt-1 text-sm text-zinc-300">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About Terratone" subtitle="Our mission is to make healthy, quiet spaces accessible and planet‑positive.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            icon: Leaf, h: 'Mission', p: 'Turn waste into high‑performance materials that benefit people and planet.'
          },{
            icon: Sparkles, h: 'Vision', p: 'Beautiful, sustainable acoustics in every home, office, and studio.'
          },{
            icon: Zap, h: 'Values', p: 'Minimalist design, transparency, and measurable impact.'
          }].map((s) => (
            <div key={s.h} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="flex items-start gap-3">
                <s.icon className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{s.h}</p>
                  <p className="text-sm text-zinc-300">{s.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Details Page-like Block */}
      <Section id="details" title="Product Details" subtitle="Deep dive into the specs and performance.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-semibold text-lg">Specs</h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>Size: 600 × 600 × 25 mm</li>
              <li>Weight: ~1.8 kg per panel</li>
              <li>Material: upcycled peel bio‑composite</li>
              <li>Finish: charcoal low‑sheen, stain‑resistant</li>
              <li>Mount: adhesive or clip system</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-emerald-300 font-medium">₹600 – ₹750</span>
              <a href="#checkout" className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-4 py-2 text-sm font-semibold">Buy Now</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Direct lines — no forms.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-medium text-white">Phone</p>
            <p className="text-sm text-zinc-300 mt-1">+91 98765 43210</p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-medium text-white">Social</p>
            <p className="text-sm text-zinc-300 mt-1">Instagram / LinkedIn / X: @terratone</p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-medium text-white">Address</p>
            <p className="text-sm text-zinc-300 mt-1">Bengaluru, India</p>
          </div>
        </div>
      </Section>

      {/* Checkout */}
      <Section id="checkout" title="Checkout" subtitle="Single product. Simple checkout.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-inset ring-zinc-800 mb-4" />
            <p className="text-white font-medium">Terratone Acoustic Panel</p>
            <p className="text-sm text-zinc-400">600×600×25mm • ₹600 – ₹750</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
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
              <div className="flex items-center gap-3">
                <button className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-5 py-2.5 text-sm font-semibold" type="submit">Pay Now</button>
                <span className="text-sm text-zinc-400">Secure • UPI / Cards</span>
              </div>
              <p className="text-xs text-zinc-500">Note: Demo checkout — no payment is processed.</p>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
