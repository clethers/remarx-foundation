'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const products = [
  { id: 1, name: 'Charity T-Shirt', price: 29, original: 39, category: 'Apparel', rating: 5, reviews: 42, img: 'https://picsum.photos/seed/tshirt1/600/600', badge: 'Best Seller' },
  { id: 2, name: 'Hope Hoodie', price: 49, original: 65, category: 'Apparel', rating: 4, reviews: 28, img: 'https://picsum.photos/seed/tshirt2/600/600', badge: 'New' },
  { id: 3, name: 'Support Cap', price: 19, original: 25, category: 'Accessories', rating: 5, reviews: 61, img: 'https://picsum.photos/seed/tshirt3/600/600', badge: null },
  { id: 4, name: 'Awareness Tote', price: 15, original: 20, category: 'Accessories', rating: 4, reviews: 34, img: 'https://picsum.photos/seed/tshirt4/600/600', badge: 'Sale' },
  { id: 5, name: 'Foundation Mug', price: 12, original: 16, category: 'Home', rating: 5, reviews: 19, img: 'https://picsum.photos/seed/mug1/600/600', badge: null },
  { id: 6, name: 'Give Back Tee', price: 24, original: 32, category: 'Apparel', rating: 4, reviews: 55, img: 'https://picsum.photos/seed/shirt1/600/600', badge: 'Popular' },
  { id: 7, name: 'Kindness Pin Set', price: 9, original: 12, category: 'Accessories', rating: 5, reviews: 88, img: 'https://picsum.photos/seed/pin1/600/600', badge: 'Best Seller' },
  { id: 8, name: 'Unity Bracelet', price: 8, original: 10, category: 'Accessories', rating: 4, reviews: 47, img: 'https://picsum.photos/seed/band1/600/600', badge: null },
];

const categories = ['All', 'Apparel', 'Accessories', 'Home'];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#8b5a2b] overflow-hidden">
        <Image
          src="https://picsum.photos/seed/shop-bg/1920/1080"
          alt="Shop Background"
          fill
          className="object-cover opacity-25 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-white/20">
              WooCommerce Shop
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              Shop &<br />
              <span className="text-[#fcc43d] font-serif italic font-normal">Support</span>
            </h1>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] max-w-lg mx-auto">
              Every purchase directly funds our charitable causes worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment badges */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-6 opacity-60">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={50} height={16} referrerPolicy="no-referrer" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width={70} height={18} referrerPolicy="no-referrer" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={38} height={24} referrerPolicy="no-referrer" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" width={55} height={18} referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Filter bar */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Filter:</span>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all ${cat === 'All' ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-widest">{products.length} Products</span>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-[#f05a4f] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <button className="absolute bottom-3 right-3 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-[#fcc43d]">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{p.category}</span>
                  <h3 className="text-sm font-black uppercase tracking-tight mt-1 mb-2">{p.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-3 h-3 ${j < p.rating ? 'text-[#fcc43d] fill-[#fcc43d]' : 'text-gray-200 fill-gray-200'}`} />
                    ))}
                    <span className="text-[9px] text-gray-400 ml-1">({p.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black">${p.price}</span>
                      <span className="text-xs text-gray-400 line-through">${p.original}</span>
                    </div>
                    <button className="bg-gray-900 hover:bg-[#f05a4f] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-24 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#fcc43d11_0%,_transparent_70%)]" />
        <div className="relative z-10">
          <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">100% Goes to the Cause</h2>
          <p className="text-white/50 text-sm uppercase tracking-widest mb-10">All profits fund our global charitable programs</p>
          <button className="bg-[#fcc43d] text-black px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
            Shop All Products
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
