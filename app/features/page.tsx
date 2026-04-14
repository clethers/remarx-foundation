'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  CreditCard, ShieldCheck, Heart, DollarSign, Layout, FileText,
  Zap, Globe, RefreshCw, Layers, Smartphone, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const features = [
  {
    title: 'Payment Gateways',
    desc: 'Accept payments from every major provider — Stripe, PayPal, Visa, Mastercard — safely and instantly.',
    icon: CreditCard,
    color: '#f05a4f',
    img: 'https://picsum.photos/seed/feat1/700/450',
  },
  {
    title: 'Order Management',
    desc: 'Manage products, edit prices, update statuses and track orders from a clean, intuitive dashboard.',
    icon: ShieldCheck,
    color: '#00c2a8',
    img: 'https://picsum.photos/seed/feat2/700/450',
  },
  {
    title: 'Give Compatibility',
    desc: 'Designed specifically for charity & non-profit sites with dedicated donation widgets and flows.',
    icon: Heart,
    color: '#f05a4f',
    img: 'https://picsum.photos/seed/feat3/700/450',
  },
  {
    title: 'Cost Estimator',
    desc: 'Let donors calculate their contribution quickly with a flexible, fully customisable donation calculator.',
    icon: DollarSign,
    color: '#fcc43d',
    img: 'https://picsum.photos/seed/feat4/700/450',
  },
  {
    title: 'Header & Footer Builder',
    desc: 'Build fully custom headers and footers visually — no code required, infinite layouts possible.',
    icon: Layout,
    color: '#00c2a8',
    img: 'https://picsum.photos/seed/feat5/700/450',
  },
  {
    title: 'Custom Pages',
    desc: 'One-click import for donation pages, cause listings, volunteer boards, and event pages.',
    icon: FileText,
    color: '#f05a4f',
    img: 'https://picsum.photos/seed/feat6/700/450',
  },
  {
    title: 'Lightning Performance',
    desc: 'Optimised for Core Web Vitals. Fast load times keep donors on your page and increase conversions.',
    icon: Zap,
    color: '#fcc43d',
    img: 'https://picsum.photos/seed/feat7/700/450',
  },
  {
    title: 'Multilingual Ready',
    desc: 'WPML compatible out of the box. Reach donors in every language around the world.',
    icon: Globe,
    color: '#00c2a8',
    img: 'https://picsum.photos/seed/feat8/700/450',
  },
  {
    title: 'Regular Updates',
    desc: 'Frequent updates keep your site secure, compatible, and ahead of the curve — always included.',
    icon: RefreshCw,
    color: '#f05a4f',
    img: 'https://picsum.photos/seed/feat9/700/450',
  },
];

const highlights = [
  'WooCommerce Integration',
  'Elementor Page Builder',
  'GDPR Compliant',
  'RTL Support',
  'Mobile Optimised',
  'SEO Ready',
  'Child Theme Included',
  'Lifetime Updates',
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00c2a822_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#00c2a8]/10 text-[#00c2a8] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-[#00c2a8]/20">
              Everything Included
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              Powerful<br />
              <span className="text-[#fcc43d] font-serif italic font-normal">Features</span>
            </h1>
            <p className="text-white/50 text-sm uppercase tracking-[0.2em] max-w-lg mx-auto">
              Every tool you need to run a world-class charity website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlight pills */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {highlights.map((h) => (
            <span key={h} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-3 h-3 text-[#00c2a8]" /> {h}
            </span>
          ))}
        </div>
      </section>

      {/* Feature blocks */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
            >
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                <Image src={f.img} alt={f.title} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 space-y-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: f.color + '20' }}
                >
                  <f.icon className="w-8 h-8" style={{ color: f.color }} />
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter">{f.title}</h2>
                <p className="text-gray-500 text-base leading-relaxed max-w-md">{f.desc}</p>
                <button
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors"
                  style={{ color: f.color }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#00c2a8] text-center">
        <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-6">All Features, One Price</h2>
        <p className="text-white/70 text-sm mb-10 uppercase tracking-widest">No subscriptions. No hidden fees.</p>
        <button className="bg-white text-[#00c2a8] px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
          Buy Now — $54
        </button>
      </section>

      <Footer />
    </main>
  );
}
