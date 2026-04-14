'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const demos = [
  { id: 1, title: 'Demo 1', tag: 'Classic', img: 'https://picsum.photos/seed/demo1/800/600' },
  { id: 2, title: 'Demo 2', tag: 'Modern', img: 'https://picsum.photos/seed/demo2/800/600' },
  { id: 3, title: 'Demo 3', tag: 'Minimal', img: 'https://picsum.photos/seed/demo3/800/600' },
  { id: 4, title: 'Demo 4', tag: 'Bold', img: 'https://picsum.photos/seed/demo4/800/600' },
  { id: 5, title: 'Demo 5', tag: 'Dark', img: 'https://picsum.photos/seed/demo5/800/600' },
  { id: 6, title: 'Demo 6', tag: 'Light', img: 'https://picsum.photos/seed/demo6/800/600' },
  { id: 7, title: 'Demo 7', tag: 'Creative', img: 'https://picsum.photos/seed/demo7/800/600' },
  { id: 8, title: 'Demo 8', tag: 'Corporate', img: 'https://picsum.photos/seed/demo8/800/600' },
  { id: 9, title: 'Demo 9', tag: 'Elegant', img: 'https://picsum.photos/seed/demo9/800/600' },
  { id: 10, title: 'Demo 10', tag: 'Vibrant', img: 'https://picsum.photos/seed/demo10/800/600' },
  { id: 11, title: 'Demo 11', tag: 'Charity', img: 'https://picsum.photos/seed/demo11/800/600' },
  { id: 12, title: 'Demo 12', tag: 'NGO', img: 'https://picsum.photos/seed/demo12/800/600' },
];

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f05a4f22_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#f05a4f]/10 text-[#f05a4f] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-[#f05a4f]/20">
              All Demos
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              Choose Your<br />
              <span className="text-[#fcc43d] font-serif italic font-normal">Style</span>
            </h1>
            <p className="text-white/50 text-sm uppercase tracking-[0.2em] max-w-lg mx-auto">
              Import any demo with one click and customise it to match your brand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {demos.map((demo, i) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-white">
                  <Image
                    src={demo.img}
                    alt={demo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-black text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
                      Preview <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="absolute top-4 left-4 bg-[#fcc43d] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {demo.tag}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between px-1">
                  <h3 className="text-sm font-black uppercase tracking-[0.15em] text-gray-800">
                    {demo.title}
                  </h3>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">One-click import</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f05a4f] text-center">
        <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-6">Ready to Get Started?</h2>
        <p className="text-white/70 text-sm mb-10 uppercase tracking-widest">Purchase once. Use all demos forever.</p>
        <button className="bg-white text-[#f05a4f] px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
          Buy Now — $54
        </button>
      </section>

      <Footer />
    </main>
  );
}
