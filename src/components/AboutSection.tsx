import React from 'react';
import { Leaf, ShieldCheck, Sun, Heart, Award, CheckCircle2, Sprout, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onBookVisit: () => void;
  onExploreBreeds: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookVisit, onExploreBreeds }) => {
  return (
    <section id="about-us" className="py-20 bg-[#F4F6F0] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
            <Sprout className="w-4 h-4 text-emerald-800" />
            <span>PIONEERING SUSTAINABLE LIVESTOCK AGRIBUSINESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C3829] tracking-tight leading-tight text-balance">
            Rooted in Tradition. Engineered for Commercial Agribusiness Excellence.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Kuruma Vanam Sheep Farms merges centuries of indigenous pastoral wisdom with modern veterinary science. Located along the fertile Shamshabad–Chevella rural belt, our commercial farm serves commercial meat distributors, high-end butcheries, breeding farmers, and individual households across South India.
          </p>
        </div>

        {/* 3 Core Pillars: Ethical Rearing, Structured Nutrition, Sustainable Grazing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Ethical Rearing */}
          <div className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                Ethical & Humane Rearing
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Every animal is raised with dignity in ventilated, elevated-slat pens with deep straw bedding and continuous access to fresh borehole mineral water. We enforce a zero-hormone, zero-prophylactic-antibiotic standard, resulting in stress-free animals with superior muscle tone and natural vitality.
              </p>
            </div>

            <ul className="text-xs text-stone-700 space-y-2 pt-4 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Elevated airy paddocks & natural shade trees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Biometric ear-tagging with digital health histories</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero chemical growth promoters or steroids</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Structured Nutrition */}
          <div className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Leaf className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                Structured Scientific Nutrition
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Formulated following ICAR (Indian Council of Agricultural Research) ruminant guidelines. Our sheep feed on farm-grown Super Napier (CO-5) green fodder delivering 16–18% crude protein, sun-cured Lucerne Alfalfa hay, fermented sweet sorghum silage, and custom chelated mineral lick blocks.
              </p>
            </div>

            <ul className="text-xs text-stone-700 space-y-2 pt-4 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily high-protein green fodder harvest</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Micro-nutrient balanced lick blocks for horn & bone density</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Consistent 180g–220g Average Daily Weight Gain (ADG)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Sustainable Pasture Grazing */}
          <div className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sun className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                Sustainable Rotational Grazing
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our 250-acre agro-pastoral footprint practices rotational paddock grazing. Sheep fertilize natural legume grasses with rich organic manure, regenerating soil biodiversity and producing meat with optimal Omega-3 profiles, tender marbling, and delicate, non-gamey flavor.
              </p>
            </div>

            <ul className="text-xs text-stone-700 space-y-2 pt-4 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-paddock rotational pasture rest cycles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% circular manure recycling for fodder cultivation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clean groundwater conservation and drip irrigation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Agribusiness Trust & Biosecurity Banner */}
        <div className="bg-[#1C3829] text-white rounded-2xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 tracking-wider uppercase bg-black/30 px-3 py-1 rounded-full border border-amber-400/30">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Strict Biosecurity & Disease-Free Certification</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-balance">
                Zero Tolerance for Disease. Complete Quarantine Protocol.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                Every animal that enters or leaves Kuruma Vanam passes a mandatory 21-day quarantine observation, complete serological profiling, and booster administration for PPR, Enterotoxaemia (ET), Sheep Pox, and Anthrax. Our full-time veterinary team inspects each herd before loading.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-emerald-800/80 text-center">
                <div>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono-num">250+</div>
                  <div className="text-[11px] text-stone-300">Acres Pasture</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono-num">100%</div>
                  <div className="text-[11px] text-stone-300">Vaccinated Herd</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono-num">54%</div>
                  <div className="text-[11px] text-stone-300">Avg Dressing Yield</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono-num">12,000+</div>
                  <div className="text-[11px] text-stone-300">Clients Served</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onBookVisit}
                className="w-full py-3.5 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Guided Farm Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreBreeds}
                className="w-full py-3.5 px-5 bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-xl border border-emerald-700/60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Our Livestock Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
