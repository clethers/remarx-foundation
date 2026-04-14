'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Zap, MousePointer2, RefreshCw, Smartphone, Layers, ShoppingCart, CheckCircle2, ArrowRight, Code2, Palette, Monitor } from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const tools = [
  { name: 'Easy to Use', icon: Zap, desc: 'Drag, drop, done. No coding knowledge needed.' },
  { name: 'Visual Editor', icon: MousePointer2, desc: 'See every change in real-time as you build.' },
  { name: 'Always Updated', icon: RefreshCw, desc: 'Stays compatible with every new Elementor release.' },
  { name: 'Page Templates', icon: Smartphone, desc: '40+ ready-made templates to jumpstart any page.' },
  { name: 'Custom Widgets', icon: Layers, desc: 'Donation forms, cause lists, volunteer cards and more.' },
  { name: 'E-Commerce', icon: ShoppingCart, desc: 'WooCommerce blocks fully integrated in the editor.' },
  { name: 'Responsive Design', icon: Monitor, desc: 'Preview and edit tablet and mobile layouts independently.' },
  { name: 'Theme Builder', icon: Palette, desc: 'Build headers, footers and archive pages visually.' },
  { name: 'Custom CSS', icon: Code2, desc: 'Advanced users can inject custom CSS per widget.' },
];

const widgets = [
  { name: 'Donation Form', tag: 'Exclusive' },
  { name: 'Cause Progress Bar', tag: 'Exclusive' },
  { name: 'Volunteer Card', tag: 'Exclusive' },
  { name: 'Event Counter', tag: 'Exclusive' },
  { name: 'Stats Ticker', tag: 'Exclusive' },
  { name: 'Testimonial Slider', tag: 'Pro' },
  { name: 'Team Grid', tag: 'Pro' },
  { name: 'Blog Carousel', tag: 'Pro' },
  { name: 'Gallery Mosaic', tag: 'Free' },
  { name: 'Icon Box', tag: 'Free' },
  { name: 'Call to Action', tag: 'Free' },
  { name: 'Video Popup', tag: 'Free' },
];

export default function ElementorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#fcc43d18_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#fcc43d]/10 text-[#fcc43d] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-[#fcc43d]/20">
              Elementor Integration
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              Build Without<br />
              <span className="text-[#fcc43d] font-serif italic font-normal">Limits</span>
            </h1>
            <p className="text-white/50 text-sm uppercase tracking-[0.2em] max-w-lg mx-auto">
              Fully compatible with Elementor Free & Pro — the world's most popular page builder
            </p>
            <div className="flex justify-center gap-4 mt-10">
              <button className="bg-[#fcc43d] hover:bg-[#eeb42d] text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105">
                See Widgets
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all border border-white/20">
                Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Builder preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-100"
          >
            <Image
              src="https://picsum.photos/seed/builder/1400/900"
              alt="Elementor Builder"
              width={1400}
              height={900}
              className="w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="text-white text-xs font-black uppercase tracking-widest block mb-1 opacity-70">Live Editor</span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Visual Builder Interface</h3>
              </div>
              <button className="bg-[#fcc43d] text-black text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2">
                Try Demo <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">What You Get</h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Everything built and ready to use</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-[#fcc43d]/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#fcc43d] group-hover:border-[#fcc43d] transition-colors shadow-sm">
                  <t.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight mb-2">{t.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Widgets list */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl font-black uppercase tracking-tighter mb-4">Custom Widgets</h2>
            <p className="text-white/40 text-sm uppercase tracking-widest">Built specifically for charity & non-profit sites</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {widgets.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00c2a8]" />
                  <span className="text-white text-xs font-bold uppercase tracking-widest">{w.name}</span>
                </div>
                <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                  w.tag === 'Exclusive' ? 'bg-[#f05a4f]/20 text-[#f05a4f]' :
                  w.tag === 'Pro' ? 'bg-[#fcc43d]/20 text-[#fcc43d]' :
                  'bg-white/10 text-white/40'
                }`}>
                  {w.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
