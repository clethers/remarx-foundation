'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, Star, ExternalLink, Zap, Shield, Globe, ShoppingCart, FileText, Heart } from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const plugins = [
  {
    name: 'WooCommerce',
    category: 'E-Commerce',
    desc: 'The world\'s most popular e-commerce plugin. Sell products, manage orders and accept payments effortlessly.',
    icon: ShoppingCart,
    color: '#96588a',
    included: true,
    rating: 5,
    img: 'https://picsum.photos/seed/woo/400/300',
  },
  {
    name: 'Elementor',
    category: 'Page Builder',
    desc: 'Drag & drop builder with live preview. Build stunning pages without touching a line of code.',
    icon: Zap,
    color: '#e2072b',
    included: true,
    rating: 5,
    img: 'https://picsum.photos/seed/elementor/400/300',
  },
  {
    name: 'GiveWP',
    category: 'Donations',
    desc: 'The leading donation plugin for WordPress. Collect one-time and recurring donations with ease.',
    icon: Heart,
    color: '#f05a4f',
    included: true,
    rating: 5,
    img: 'https://picsum.photos/seed/givewp/400/300',
  },
  {
    name: 'WPML',
    category: 'Multilingual',
    desc: 'Make your site multilingual and reach donors around the world in their native language.',
    icon: Globe,
    color: '#0085ba',
    included: false,
    rating: 4,
    img: 'https://picsum.photos/seed/wpml/400/300',
  },
  {
    name: 'Yoast SEO',
    category: 'SEO',
    desc: 'Optimise your charity site for search engines and drive organic traffic to your causes.',
    icon: FileText,
    color: '#a4286a',
    included: false,
    rating: 5,
    img: 'https://picsum.photos/seed/yoast/400/300',
  },
  {
    name: 'Wordfence',
    category: 'Security',
    desc: 'Enterprise-grade security for your site. Firewall, malware scanner and login protection included.',
    icon: Shield,
    color: '#00b9eb',
    included: false,
    rating: 5,
    img: 'https://picsum.photos/seed/wordfence/400/300',
  },
];

const extras = [
  'Contact Form 7', 'Revolution Slider', 'WPBakery', 'MailChimp for WP',
  'Events Calendar', 'BuddyPress', 'bbPress', 'Polylang',
  'WP Rocket', 'Smush Image Compression', 'Advanced Custom Fields', 'Gravity Forms',
];

export default function PluginsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#f05a4f18_0%,_transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#f05a4f]/10 text-[#f05a4f] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-[#f05a4f]/20">
              Compatible Plugins
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              Plugins &<br />
              <span className="text-[#fcc43d] font-serif italic font-normal">Integrations</span>
            </h1>
            <p className="text-white/50 text-sm uppercase tracking-[0.2em] max-w-xl mx-auto">
              Remarx works seamlessly with the most powerful WordPress plugins on the market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f05a4f] py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-8 text-center text-white">
          {[['12+', 'Bundled Plugins'], ['50+', 'Compatible Plugins'], ['100%', 'Conflict-Free']].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl font-black">{val}</div>
              <div className="text-white/70 text-[10px] uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main plugins */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Key Plugins</h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Tested and certified compatible</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plugins.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: p.color }}
                    >
                      <p.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-black uppercase tracking-tight">{p.name}</h3>
                      <span className="text-white/60 text-[9px] uppercase tracking-widest">{p.category}</span>
                    </div>
                  </div>
                  {p.included && (
                    <span className="absolute top-4 right-4 bg-[#00c2a8] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Included
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-3 h-3 ${j < p.rating ? 'text-[#fcc43d] fill-[#fcc43d]' : 'text-gray-200 fill-gray-200'}`} />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                    Learn More <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility list */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Also Compatible With</h2>
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-16">Full compatibility list — no conflicts guaranteed</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {extras.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 hover:bg-[#fcc43d]/10 transition-colors group"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00c2a8] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-center">
        <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-6">All Plugins. One Theme.</h2>
        <p className="text-white/40 text-sm uppercase tracking-widest mb-10">Everything pre-configured and ready to go</p>
        <button className="bg-[#f05a4f] text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
          Buy Now — $54
        </button>
      </section>

      <Footer />
    </main>
  );
}
