'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Demos', href: '/demos' },
  { label: 'Features', href: '/features' },
  { label: 'Shop', href: '/shop' },
  { label: 'Elementor', href: '/elementor' },
  { label: 'Plugins', href: '/plugins' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f05a4f] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl italic leading-none">R</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tighter uppercase">Remarx</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-[#f05a4f] hover:bg-[#d94e44] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105">
              Buy Now
            </button>
            <ShoppingCart className="text-white w-5 h-5 cursor-pointer hover:text-[#f05a4f] transition-colors" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 py-6 space-y-4"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-white/80 hover:text-white text-lg font-medium uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-[#f05a4f] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest">
            Buy Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};
