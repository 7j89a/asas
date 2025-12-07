import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-16 border-t border-white/10 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-serif font-bold tracking-widest mb-6">
              ELIXIR <span className="text-brand-blue-400 dark:text-gold-500">SKIN</span>
            </div>
            <p className="text-slate-300 max-w-sm leading-relaxed font-light text-lg">
              نحن لا نقدم مجرد منتج للعناية بالبشرة، بل نقدم وعداً بالصفاء والفخامة. إلكسير سكين.. استثمري في جمالك الأبدي.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">اكتشفي المزيد</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#ingredients" className="hover:text-brand-blue-400 dark:hover:text-gold-400 transition-colors">قصتنا</a></li>
              <li><a href="#ingredients" className="hover:text-brand-blue-400 dark:hover:text-gold-400 transition-colors">مكونات المنتج</a></li>
              <li><a href="#benefits" className="hover:text-brand-blue-400 dark:hover:text-gold-400 transition-colors">طريقة الاستخدام</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">تواصلي معنا</h4>
            <a href="mailto:elixirskin@gmail.com" className="flex items-center gap-2 text-slate-300 mb-2 hover:text-brand-blue-400 dark:hover:text-gold-400 transition-colors">
              <Mail size={16} />
              <span>elixirskin@gmail.com</span>
            </a>
            <div className="flex gap-4 mt-6">
              {/* Social Icons */}
              <a 
                href="https://www.instagram.com/elixir_skin_golden?igsh=aW5jejFuNWF2MjZj&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-blue-400 dark:hover:border-gold-500 hover:text-brand-blue-400 dark:hover:text-gold-500 hover:bg-white/10 transition-all cursor-pointer rounded-full group"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/jasmineboutique07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-blue-400 dark:hover:border-gold-500 hover:text-brand-blue-400 dark:hover:text-gold-500 hover:bg-white/10 transition-all cursor-pointer rounded-full group"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} ELIXIR SKIN. جميع الحقوق محفوظة للفخامة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;