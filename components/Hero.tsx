import React, { useState, useRef } from 'react';
import { Sparkles, ArrowDown, Shield, Leaf, Volume2, VolumeX } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 bg-slate-50 dark:bg-black transition-colors duration-500">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-200/30 dark:bg-gold-500/5 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/3 transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-300/20 dark:bg-transparent rounded-full blur-[120px] opacity-30 translate-y-1/3 -translate-x-1/4 transition-colors duration-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-full border border-brand-blue-200 dark:border-gold-500/30 mb-8 animate-pulse-slow shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500 dark:bg-gold-400"></span>
              <span className="text-xs font-semibold text-brand-blue-900 dark:text-gold-100 tracking-widest uppercase">براءة اختراع ألمانية - صناعة أردنية</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white leading-[1.2] mb-6 drop-shadow-sm transition-colors duration-300">
              ELIXIR SKIN <br />
              <span className="bg-gradient-to-b from-brand-blue-400 to-brand-blue-700 dark:from-gold-200 dark:to-gold-500 bg-clip-text text-transparent">The Golden Mask</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-sm transition-colors duration-300">
              ابتكار ألماني فريد يجمع 39 معدناً نقياً. تم اختباره سريرياً على أكثر من 6000 حالة ليمنحك بشرة خالية من الحبوب، التصبغات، والشوائب.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="relative overflow-hidden group bg-brand-blue-600 dark:bg-gold-500 text-white dark:text-black px-10 py-4 text-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 rounded-full">
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                 <span className="relative z-10">اطلبي المنتج الأصلي</span>
              </button>
              <button className="bg-transparent text-slate-800 dark:text-white px-8 py-4 text-lg font-medium border border-brand-blue-300 dark:border-gold-500/50 hover:bg-brand-blue-50 dark:hover:bg-gold-500/10 transition-all flex items-center justify-center gap-3 rounded-full hover:border-brand-blue-500 dark:hover:border-gold-400">
                <Sparkles size={20} className="text-brand-blue-500 dark:text-gold-400" />
                قصة المنتج
              </button>
            </div>
          </div>

          {/* Product Visual */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Main Product Video Container - Frame */}
            <div className="relative w-[280px] h-[500px] md:w-[320px] md:h-[570px] z-20 animate-float rounded-[3rem] overflow-hidden border-4 border-brand-blue-100 dark:border-gold-500 shadow-[0_20px_50px_rgba(37,99,235,0.2)] dark:shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-black group transition-all duration-500">
               <video 
                ref={videoRef}
                src="https://l.top4top.io/m_3623asgrr1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-95"
              />
              {/* Inner Glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none rounded-[3rem]"></div>
              
              {/* Audio Toggle Button */}
              <button 
                onClick={toggleMute}
                className="absolute bottom-6 left-6 z-30 bg-white/30 dark:bg-black/60 backdrop-blur-md text-white dark:text-gold-400 p-3 rounded-full border border-white/50 dark:border-gold-500/50 hover:bg-white/50 dark:hover:bg-gold-500 hover:text-brand-blue-900 dark:hover:text-black transition-all duration-300"
                aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Floating Detail Cards - Rounded */}
            <div className="absolute top-20 -left-4 md:-left-12 glass-card-light dark:glass-card-dark p-4 pr-6 rounded-full shadow-xl z-30 hidden md:flex items-center gap-4 border border-brand-blue-200 dark:border-gold-500/30 transition-colors duration-300">
              <div className="bg-brand-blue-100 dark:bg-gold-500/20 p-3 rounded-full text-brand-blue-600 dark:text-gold-400">
                <Shield size={20} />
              </div>
              <div className="text-right pl-4">
                <p className="font-serif font-bold text-slate-800 dark:text-white text-xl leading-none">+6000</p>
                <p className="text-xs text-slate-500 dark:text-gray-200 font-medium mt-1">حالة ناجحة</p>
              </div>
            </div>

            <div className="absolute bottom-32 -right-4 md:-right-12 glass-card-light dark:glass-card-dark p-4 pr-6 rounded-full shadow-xl z-30 hidden md:flex items-center gap-4 border border-brand-blue-200 dark:border-gold-500/30 transition-colors duration-300">
               <div className="bg-brand-blue-100 dark:bg-gold-500/20 p-3 rounded-full text-brand-blue-600 dark:text-gold-400">
                  <Leaf size={20} />
                </div>
                <div className="text-right pl-4">
                  <p className="font-serif font-bold text-slate-800 dark:text-white text-xl leading-none">39</p>
                  <p className="text-xs text-slate-500 dark:text-gray-200 font-medium mt-1">معدن نقي</p>
                </div>
            </div>
            
            {/* Background Texture Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-blue-200 dark:border-gold-500/10 rounded-full -z-10 transition-colors duration-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-brand-blue-200 dark:border-gold-500/20 rounded-full -z-10 transition-colors duration-500"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-blue-400 dark:text-gold-600 transition-colors duration-300">
            <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;