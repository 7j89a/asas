import React from 'react';
import { Droplets, ShieldCheck, Zap, Leaf, Clock, Sun, Sparkles, UserCheck } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "إزالة التصبغات والكلف",
    description: "يعالج التصبغات العميقة، آثار حروق الشمس، والكلف، ليوحد لون البشرة ويمنحها صفاءً ملحوظاً.",
    icon: <Sun className="text-brand-blue-500 dark:text-gold-400" size={28} />
  },
  {
    title: "مقاومة الحبوب والرؤوس السوداء",
    description: "تركيبة الـ 39 معدناً تعمل على تنظيف المسام بعمق وإزالة الرؤوس السوداء ومنع ظهور حب الشباب.",
    icon: <ShieldCheck className="text-brand-blue-500 dark:text-gold-400" size={28} />
  },
  {
    title: "آمن للمناطق الحساسة",
    description: "خالٍ من المواد الكيميائية القاسية، مما يجعله مثالياً لتفتيح البشرة والمناطق الحساسة بلطف وأمان.",
    icon: <Leaf className="text-brand-blue-500 dark:text-gold-400" size={28} />
  },
  {
    title: "شد ونضارة فورية",
    description: "يحفز الدورة الدموية ويعزز مرونة الجلد، مما يمنحك مظهراً مشدوداً وأكثر شباباً من الاستخدامات الأولى.",
    icon: <Zap className="text-brand-blue-500 dark:text-gold-400" size={28} />
  }
];

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white dark:bg-brand-black relative border-t border-brand-blue-100 dark:border-neutral-900 overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_40%)] transition-all duration-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="text-brand-blue-600 dark:text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block transition-colors">نتائج مثبتة سريرياً</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-8 transition-colors">
            لماذا يختار النخبة <br/><span className="bg-gradient-to-r from-brand-blue-500 to-brand-blue-800 dark:from-gold-300 dark:to-gold-600 bg-clip-text text-transparent">ELIXIR SKIN</span>؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-blue-500 dark:via-gold-500 to-transparent mx-auto mb-8 rounded-full transition-all"></div>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto font-light text-xl leading-relaxed transition-colors">
            تركيبة ألمانية حاصلة على براءة اختراع، ومرخصة من مؤسسة الغذاء والدواء الأردنية. تم تجربتها على أكثر من 6000 حالة حول العالم.
          </p>
        </div>

        {/* The Usage Ritual - Updated according to text */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 right-0 left-0 h-0.5 bg-gradient-to-l from-transparent via-brand-blue-200 dark:via-gold-500/30 to-transparent z-0 transition-colors"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white dark:bg-black border-2 border-brand-blue-100 dark:border-gold-500/30 rounded-full flex items-center justify-center mb-6 shadow-xl dark:shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:border-brand-blue-500 dark:group-hover:border-gold-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] dark:group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
              <Clock className="text-slate-400 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 transition-colors">1. التطبيق والانتظار</h3>
            <p className="text-slate-600 dark:text-neutral-400 px-4 transition-colors">ضعي طبقة متناسقة على بشرة نظيفة واتركيها لمدة <span className="font-bold text-brand-blue-600 dark:text-gold-400">30 دقيقة</span> حتى تجف تماماً.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="w-24 h-24 bg-white dark:bg-black border-2 border-brand-blue-100 dark:border-gold-500/30 rounded-full flex items-center justify-center mb-6 shadow-xl dark:shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:border-brand-blue-500 dark:group-hover:border-gold-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] dark:group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
              <UserCheck className="text-slate-400 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 transition-colors">2. الفرك اللطيف</h3>
            <p className="text-slate-600 dark:text-neutral-400 px-4 transition-colors">افركي الماسك بلطف بحركات دائرية لإزالة الطبقة السطحية وتنشيط الدورة الدموية.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="w-24 h-24 bg-white dark:bg-black border-2 border-brand-blue-100 dark:border-gold-500/30 rounded-full flex items-center justify-center mb-6 shadow-xl dark:shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:border-brand-blue-500 dark:group-hover:border-gold-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] dark:group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
              <Droplets className="text-slate-400 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 transition-colors">3. الامتصاص والغسل</h3>
            <p className="text-slate-600 dark:text-neutral-400 px-4 transition-colors">اتركي البقايا لمدة <span className="font-bold text-brand-blue-600 dark:text-gold-400">15 دقيقة</span> إضافية، ثم اغسلي بالماء ورطبي بشرتك.</p>
          </div>
        </div>

        {/* Grid Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative p-8 bg-brand-blue-50/50 dark:bg-brand-card/20 backdrop-blur-sm hover:bg-white dark:hover:bg-brand-gray/50 border border-brand-blue-100 dark:border-white/5 hover:border-brand-blue-500/30 dark:hover:border-gold-500/30 transition-all duration-500 cursor-default rounded-[2rem] shadow-sm hover:shadow-md">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-blue-500/10 dark:from-gold-500/10 to-transparent rounded-tr-[2rem] transition-colors"></div>
              
              <div className="w-14 h-14 bg-white dark:bg-black rounded-full border border-brand-blue-100 dark:border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-blue-500 dark:group-hover:border-gold-500 transition-all duration-300 shadow-lg">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 font-serif group-hover:text-brand-blue-600 dark:group-hover:text-gold-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 dark:text-neutral-400 leading-relaxed text-sm font-light">{feature.description}</p>
              
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-1 bg-brand-blue-500 dark:bg-gold-500 rounded-full transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;