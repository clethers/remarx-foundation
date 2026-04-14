'use client';

import { motion } from 'motion/react';
import {
  Heart,
  Layout,
  ShieldCheck,
  FileText,
  RefreshCw,
  CheckCircle2,
  Layers,
  MousePointer2,
  Zap,
  Globe,
  Smartphone,
  ShoppingCart,
  CreditCard,
  DollarSign
} from 'lucide-react';
import Image from 'next/image';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

// --- Page Sections ---

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image 
        src="https://picsum.photos/seed/charity-hero/1920/1080"
        alt="Hero Background"
        fill
        className="object-cover brightness-50"
        priority
        referrerPolicy="no-referrer"
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#fcc43d] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-6">
            New
          </span>
          <h1 className="text-white text-7xl md:text-9xl font-serif italic tracking-tighter mb-8 drop-shadow-2xl">
            Charity
          </h1>
          <p className="text-white/90 text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-12 leading-relaxed">
            Take advantage of this amazing exclusive offer<br />
            Don&apos;t miss this opportunity for your non profit
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 opacity-80">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width={80} height={20} className="invert brightness-0" referrerPolicy="no-referrer" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" width={60} height={20} className="invert brightness-0" referrerPolicy="no-referrer" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={50} height={20} className="invert brightness-0" referrerPolicy="no-referrer" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={40} height={20} className="invert brightness-0" referrerPolicy="no-referrer" />
          </div>

          <button className="bg-[#fcc43d] hover:bg-[#eeb42d] text-black px-10 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl">
            Buy Now at 54 $ *
          </button>
          <p className="text-white/60 text-[10px] mt-4 uppercase tracking-widest">
            * Final Price will be 59 $
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

const DemosGrid = () => {
  const demos = [
    { id: 1, title: 'Demo 1', img: 'https://picsum.photos/seed/demo1/800/600' },
    { id: 2, title: 'Demo 2', img: 'https://picsum.photos/seed/demo2/800/600' },
    { id: 3, title: 'Demo 3', img: 'https://picsum.photos/seed/demo3/800/600' },
    { id: 4, title: 'Demo 4', img: 'https://picsum.photos/seed/demo4/800/600' },
    { id: 5, title: 'Demo 5', img: 'https://picsum.photos/seed/demo5/800/600' },
    { id: 6, title: 'Demo 6', img: 'https://picsum.photos/seed/demo6/800/600' },
    { id: 7, title: 'Demo 7', img: 'https://picsum.photos/seed/demo7/800/600' },
    { id: 8, title: 'Demo 8', img: 'https://picsum.photos/seed/demo8/800/600' },
    { id: 9, title: 'Demo 9', img: 'https://picsum.photos/seed/demo9/800/600' },
  ];

  return (
    <section id="demos" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {demos.map((demo) => (
            <motion.div 
              key={demo.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-white">
                <Image 
                  src={demo.img} 
                  alt={demo.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <h3 className="mt-6 text-center text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">
                {demo.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    { title: 'Payment Gateways', desc: 'Your customers will be able to pay for the products with the most famous credit card in a safe & fast way.', icon: CreditCard, img: 'https://picsum.photos/seed/feat1/600/400' },
    { title: 'Order Management', desc: 'Check and manage products, edit, add and delete them. You can also change their status and decide the prices.', icon: ShieldCheck, img: 'https://picsum.photos/seed/feat2/600/400' },
    { title: 'Give Compatibility', icon: Heart, desc: 'Many elements are available and designed for a charity site which will have a greater identity & design.', img: 'https://picsum.photos/seed/feat3/600/400' },
    { title: 'Cost Estimate', icon: DollarSign, desc: 'Make your donors calculate their donation quickly & easily. Fully customizable & flexible.', img: 'https://picsum.photos/seed/feat4/600/400' },
    { title: 'Header & Footer Builder', icon: Layout, desc: 'The theme allows the creation of your custom Header and Footer in a simple & easy way through the page builder.', img: 'https://picsum.photos/seed/feat5/600/400' },
    { title: 'Custom Pages', icon: FileText, desc: 'Manage your donation pages in the best possible way thanks to many dedicated widgets & components.', img: 'https://picsum.photos/seed/feat6/600/400' },
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-md">
                <Image src={f.img} alt={f.title} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-[0.1em] mb-4">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-20 bg-[#00c2a8] hover:bg-[#00a892] text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all">
          All Features
        </button>
      </div>
    </section>
  );
};

const ShopSection = () => {
  return (
    <section id="shop" className="relative py-32 overflow-hidden bg-[#8b5a2b]">
      <Image 
        src="https://picsum.photos/seed/shop-bg/1920/1080"
        alt="Shop Background"
        fill
        className="object-cover opacity-30 mix-blend-overlay"
        referrerPolicy="no-referrer"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-white">
          <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Woo Commerce</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8">Create Your Shop</h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl leading-relaxed">
            Offer to your customers an extra service. Insert your products in an easy way, offer a charity gift service and start receiving money thanks to the integrate payment systems.
          </p>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block">Payment Options :</span>
            <div className="flex gap-4 opacity-70">
              <div className="bg-white p-2 rounded"><Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={40} height={15} referrerPolicy="no-referrer" /></div>
              <div className="bg-white p-2 rounded"><Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width={40} height={15} referrerPolicy="no-referrer" /></div>
              <div className="bg-white p-2 rounded"><Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={30} height={15} referrerPolicy="no-referrer" /></div>
              <div className="bg-white p-2 rounded"><Image src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" width={40} height={15} referrerPolicy="no-referrer" /></div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative z-10 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-2xl transform -rotate-3">
                <Image src="https://picsum.photos/seed/tshirt1/300/300" alt="Product" width={300} height={300} className="rounded-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-2xl transform rotate-2">
                <Image src="https://picsum.photos/seed/tshirt2/300/300" alt="Product" width={300} height={300} className="rounded-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-white p-4 rounded-xl shadow-2xl transform rotate-3">
                <Image src="https://picsum.photos/seed/tshirt3/300/300" alt="Product" width={300} height={300} className="rounded-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-2xl transform -rotate-2">
                <Image src="https://picsum.photos/seed/tshirt4/300/300" alt="Product" width={300} height={300} className="rounded-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisualBuilder = () => {
  const tools = [
    { name: 'Easy to Use', icon: Zap },
    { name: 'Visual Editor', icon: MousePointer2 },
    { name: 'Up-to Date', icon: RefreshCw },
    { name: 'Page Templates', icon: Smartphone },
    { name: 'Widgets', icon: Layers },
    { name: 'E-Commerce', icon: ShoppingCart },
  ];

  return (
    <section id="elementor" className="py-32 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">The Best Plugin</span>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-16">Visual Builder</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-20">
          {tools.map((tool, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#fcc43d] transition-colors">
                <tool.icon className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-gray-100">
          <Image src="https://picsum.photos/seed/builder/1200/800" alt="Builder Preview" width={1200} height={800} className="w-full" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

const SupportSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <Image 
        src="https://picsum.photos/seed/support-bg/1920/1080"
        alt="Support Background"
        fill
        className="object-cover opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: 'Support in 1 Day', icon: CheckCircle2, color: '#00c2a8' },
            { title: 'Well Documented', icon: FileText, color: '#fcc43d' },
            { title: 'Always Updated', icon: RefreshCw, color: '#f05a4f' },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-white text-xl font-black uppercase tracking-widest">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Don&apos;t worry we have a great support team ready to help you at any time in a very professional way.
                </p>
                <button 
                  className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all hover:scale-105"
                  style={{ backgroundColor: item.color }}
                >
                  Check It
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IncludedItems = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-5xl font-serif italic text-[#fcc43d] mb-4 block">10+</span>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Included Items</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-20">
          This theme is not just a theme but much more. It is a complete product to give a new identity to your business. Once you have purchased you can also request a business card, menus, photos and much more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:row-span-2 relative h-[600px] rounded-3xl overflow-hidden group">
            <Image src="https://picsum.photos/seed/inc1/600/1200" alt="Item" fill className="object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Free Photos !</span>
              <p className="text-sm opacity-80">We have selected a collection of photos that you can use FOR FREE.</p>
            </div>
          </div>
          
          <div className="bg-[#d4b445] rounded-3xl p-12 flex flex-col justify-center items-center text-white text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Business Card !</span>
            <p className="text-sm opacity-80">Ready design, easy to customize and source file included FOR FREE.</p>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <Image src="https://picsum.photos/seed/inc2/600/800" alt="Item" fill className="object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-left text-white">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Donation</h3>
              <p className="text-xs opacity-80 mb-4">Help the people now</p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">Kid Adoption</span>
                <span className="bg-[#00c2a8] px-2 py-1 rounded text-[10px] font-bold">90$</span>
              </div>
            </div>
          </div>

          <div className="relative h-[250px] rounded-3xl overflow-hidden">
             <Image src="https://picsum.photos/seed/inc3/600/400" alt="Item" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          <div className="bg-gray-900 rounded-3xl p-12 flex flex-col justify-center items-center text-white text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Causes List !</span>
            <p className="text-sm opacity-80">Change your causes list design with one click.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const DonationSection = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <Image 
        src="https://picsum.photos/seed/donate-bg/1920/1080"
        alt="Donation Background"
        fill
        className="object-cover opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-12 text-center">
              <h3 className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Cool Custom</h3>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-black">Donation Pages</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-12">
                Included in the theme you will find also fantastic custom pages thought for your business that you can import with one-click and manage them thanks to the Page builder included in the theme.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#fcc43d] hover:bg-[#eeb42d] text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all">
                  Donate Page
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all">
                  Donation Calc.
                </button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image src="https://picsum.photos/seed/donate-preview/800/600" alt="Preview" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
        <div className="flex-1 text-white space-y-8">
          <div className="space-y-4">
            <span className="text-[#fcc43d] text-xs font-bold uppercase tracking-[0.2em]">Our Angels</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Our Main Volunteers</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#fcc43d]">
                  <Image src={`https://picsum.photos/seed/vol${i}/100/100`} alt="Volunteer" width={100} height={100} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Volunteer {i}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Active Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DemosGrid />
      <FeaturesGrid />
      <ShopSection />
      <VisualBuilder />
      <SupportSection />
      <IncludedItems />
      <DonationSection />
      <Footer />
      
      {/* Floating Buy Button */}
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed bottom-10 right-10 z-50"
      >
        <button className="bg-[#fcc43d] text-black w-20 h-20 rounded-full shadow-2xl flex flex-col items-center justify-center group hover:scale-110 transition-transform">
          <span className="text-[8px] font-black uppercase tracking-widest">Buy</span>
          <span className="text-xl font-black">$54</span>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] px-2 py-1 rounded-full animate-pulse">
            SALE
          </div>
        </button>
      </motion.div>
    </main>
  );
}
