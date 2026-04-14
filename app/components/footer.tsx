import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f05a4f] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-xl italic leading-none">R</span>
          </div>
          <span className="text-black font-bold text-xl tracking-tighter uppercase">Remarx</span>
        </Link>

        <div className="flex gap-8">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors">
              {social}
            </a>
          ))}
        </div>

        <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
          © 2026 Remarx Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
