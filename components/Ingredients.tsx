import React from 'react';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="py-24 bg-slate-100 dark:bg-black overflow-hidden relative transition-colors duration-500">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue-200 dark:via-gold-900 to-transparent transition-colors"></div>
      
      {/* Background Texture */}
      <div className="absolute right-0 top-1/4 w-[30vw] h-[30vw] bg-brand-blue-200/20 dark:bg-gold-600/5 rounded-full blur-[100px] transition-colors"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            39 معدن نقي <span className="text-brand-blue-600 dark:text-gold-500">في</span> قناع واحد
          </h2>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto text-lg transition-colors">
            تقنية Mineral Fusion Complex™ الحاصلة على براءة اختراع. تركيبة طبيعية 100% تجمع بين دقة العلم الألماني وخيرات الطبيعة.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-20">
          
          {/* Visual Side (Story) */}
          <div className="w-full lg:w-5/12 relative group min-h-[500px]">
             {/* Story Card */}
            <div className="absolute inset-0 bg-white/50 dark:bg-brand-card/30 backdrop-blur-sm rounded-[3rem] border border-brand-blue-100 dark:border-gold-500/20 p-8 flex flex-col justify-center transition-all duration-300">
               <div className="mb-6 flex items-center gap-3">
                 <div className="p-3 bg-brand-blue-100 dark:bg-gold-500/20 rounded-full text-brand-blue-600 dark:text-gold-400">
                   <Award size={32} />
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">قصة المنتج</h3>
               </div>
               <p className="text-slate-600 dark:text-neutral-300 leading-relaxed mb-6">
                 انطلقت حكاية هذا الماسك الفريد على يد دكتور جراحة عيون وتجميل عمل لسنوات في ألمانيا. طوّر تركيبة مبتكرة تجمع بين العلم والخبرة، وبعد تجارب سريرية شملت أكثر من 6000 حالة، حصل المنتج على براءة اختراع ألمانية تقديرًا لفعاليته.
               </p>
               <p className="text-slate-600 dark:text-neutral-300 leading-relaxed">
                 عاد الطبيب إلى موطنه الأردن، واستكمل رحلته بالحصول على ترخيص رسمي من مؤسسة الغذاء والدواء الأردنية، ليقدم لكم منتجاً عالمياً بأيدٍ عربية.
               </p>
               
               <div className="mt-8 flex gap-4">
                 <div className="px-4 py-2 bg-brand-blue-50 dark:bg-black rounded-lg border border-brand-blue-200 dark:border-gold-500/30 text-xs font-bold text-brand-blue-700 dark:text-gold-400">
                   تصنيع أردني
                 </div>
                 <div className="px-4 py-2 bg-brand-blue-50 dark:bg-black rounded-lg border border-brand-blue-200 dark:border-gold-500/30 text-xs font-bold text-brand-blue-700 dark:text-gold-400">
                   براءة اختراع ألمانية
                 </div>
               </div>
            </div>
          </div>

          {/* Content Side - Ingredients List */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6">
            
            {/* Ingredient 1 */}
            <div className="relative p-6 bg-white dark:bg-brand-card/40 rounded-3xl border border-brand-blue-100 dark:border-white/5 hover:bg-brand-blue-50 dark:hover:bg-brand-gray/60 hover:border-brand-blue-300 dark:hover:border-gold-500/30 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 dark:from-gold-600 dark:to-gold-800 text-white flex items-center justify-center text-sm font-bold rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  ZnO
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-serif group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors">أكسيد الزنك والتيتانيوم</h4>
                  <p className="text-slate-600 dark:text-neutral-300 font-light text-base leading-relaxed mb-0 transition-colors">
                    يعملان كحاجز وقائي للبشرة، يساعدان في تهدئة الالتهابات، الحماية من الشمس، وتفتيح لون البشرة بشكل طبيعي.
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredient 2 */}
            <div className="relative p-6 bg-white dark:bg-brand-card/40 rounded-3xl border border-brand-blue-100 dark:border-white/5 hover:bg-brand-blue-50 dark:hover:bg-brand-gray/60 hover:border-brand-blue-300 dark:hover:border-gold-500/30 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex items-start gap-6">
                 <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 dark:from-gold-600 dark:to-gold-800 text-white flex items-center justify-center text-sm font-bold rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  SiO₂
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-serif group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors">ثاني أكسيد السيليكون والألومنيوم</h4>
                  <p className="text-slate-600 dark:text-neutral-300 font-light text-base leading-relaxed mb-0 transition-colors">
                    يقومان بتقشير لطيف لإزالة الخلايا الميتة، تحفيز إنتاج الكولاجين، ومنح البشرة ملمساً ناعماً ومشدوداً.
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredient 3 */}
            <div className="relative p-6 bg-white dark:bg-brand-card/40 rounded-3xl border border-brand-blue-100 dark:border-white/5 hover:bg-brand-blue-50 dark:hover:bg-brand-gray/60 hover:border-brand-blue-300 dark:hover:border-gold-500/30 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex items-start gap-6">
                 <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 dark:from-gold-600 dark:to-gold-800 text-white flex items-center justify-center text-sm font-bold rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  Mg+Ca
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-serif group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors">أكاسيد المغنيسيوم والكالسيوم والحديد</h4>
                  <p className="text-slate-600 dark:text-neutral-300 font-light text-base leading-relaxed mb-0 transition-colors">
                    مجموعة معادن أساسية لتغذية الخلايا، تحسين مرونة الجلد، وتوريد البشرة لتبدو أكثر صحة وحيوية.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 bg-white dark:bg-brand-card/40 border border-brand-blue-100 dark:border-gold-500/20 rounded-[2rem] p-8 md:p-12 shadow-lg transition-colors">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">موثوقية عالمية</h3>
              <p className="text-slate-500 dark:text-gray-400 transition-colors">خضع لأقسى اختبارات الجودة والسلامة.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 bg-brand-blue-50 dark:bg-black/50 px-4 py-3 rounded-full border border-green-500/30 text-slate-700 dark:text-gray-300 transition-colors">
                <CheckCircle2 size={18} className="text-green-500 dark:text-green-400" />
                <span className="font-bold">مرخص من مؤسسة الغذاء والدواء</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-blue-50 dark:bg-black/50 px-4 py-3 rounded-full border border-green-500/30 text-slate-700 dark:text-gray-300 transition-colors">
                <ShieldCheck size={18} className="text-green-500 dark:text-green-400" />
                <span className="font-bold">طبيعي 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-blue-50 dark:bg-black/50 px-4 py-3 rounded-full border border-green-500/30 text-slate-700 dark:text-gray-300 transition-colors">
                <CheckCircle2 size={18} className="text-green-500 dark:text-green-400" />
                <span className="font-bold">آمن للاستخدام اليومي</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ingredients;