import React from 'react';
import { Truck, Sparkles, Dna, ArrowRight, ShieldCheck, Check, Building2, User, Users } from 'lucide-react';

interface ThreeLivestockCategoriesProps {
  onSelectCategory: (category: 'commercial' | 'festival' | 'breeding') => void;
  onInquireWholesale: () => void;
  onExploreBreeds: () => void;
  onExploreMutton: () => void;
}

export const ThreeLivestockCategories: React.FC<ThreeLivestockCategoriesProps> = ({
  onSelectCategory,
  onInquireWholesale,
  onExploreBreeds,
  onExploreMutton
}) => {
  return (
    <section id="livestock-categories" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
            OUR LIVESTOCK & AGRIBUSINESS DIVISIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C3829] tracking-tight text-balance">
            Engineered for Commercial Volume, Ceremonial Pride, and Genetic Superiority.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you operate a high-volume butcher network, require a showstopper ram for a family celebration, or seek foundation breeding stock for your farm, we deliver verified quality backed by veterinary guarantees.
          </p>
        </div>

        {/* The 3 Core Pillars / Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CATEGORY 1: Commercial Meat Supply (B2B & Wholesale) */}
          <div className="bg-[#FAF9F5] rounded-2xl border-2 border-stone-200/90 hover:border-emerald-800/60 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-700/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#1C3829] text-amber-300 flex items-center justify-center shadow-xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-300/60">
                  B2B Wholesale
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-stone-900 group-hover:text-emerald-900 transition-colors">
                  Commercial Meat Supply
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-1">
                  For Butcher Shops, Star Hotels, Caterers & Distributors
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Reliable, recurring live batch deliveries and chilled carcass supply. We guarantee uniform animal weight batches (38–55kg live), an industry-leading carcass dressing percentage of up to 54%, and GST-compliant invoices.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Bulk batch lots (20 to 200+ head per dispatch)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Weekly contract schedules with price-lock assurance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Specialized livestock van transit with live GPS tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Farm-to-kitchen cold chain vacuum chilled mutton cuts</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <button
                onClick={onInquireWholesale}
                className="w-full py-3 bg-[#1C3829] hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request B2B Wholesale Pricing</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              <button
                onClick={onExploreMutton}
                className="w-full py-2 text-center text-xs font-semibold text-emerald-900 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                View Fresh Mutton Cuts & Cuts Menu →
              </button>
            </div>
          </div>

          {/* CATEGORY 2: Festival, Ceremonial & Individual Sales (B2C) */}
          <div className="bg-[#FAF9F5] rounded-2xl border-2 border-amber-300/80 hover:border-amber-500 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                  Festival & Retail
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-stone-900 group-hover:text-amber-900 transition-colors">
                  Festival & Individual Sales
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-1">
                  For Households, Weddings, Celebrations & Eid
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Handpicked, premium showpiece rams meticulously cared for on sprouted grains and green fodder. Featuring magnificent horn symmetry, pristine coats, docile behavior, and verified physical integrity.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Heavyweight festival rams (50kg up to 80kg+ live weight)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Zero-blemish guarantee with full veterinary clearance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Reserve tag today with ₹1,000 advance escrow token</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Free farm boarding up to 7 days before event dispatch</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <button
                onClick={onExploreBreeds}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Browse Festival Rams</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectCategory('festival')}
                className="w-full py-2 text-center text-xs font-semibold text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
              >
                Reserve Tag with ₹1,000 Advance →
              </button>
            </div>
          </div>

          {/* CATEGORY 3: Breeding Stock & Certified Genetics */}
          <div className="bg-[#FAF9F5] rounded-2xl border-2 border-stone-200/90 hover:border-emerald-800/60 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-700/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-emerald-400 flex items-center justify-center shadow-xs">
                  <Dna className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-300/60">
                  Farmer Genetics
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-stone-900 group-hover:text-emerald-900 transition-colors">
                  Breeding Stock & Studs
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-1">
                  For Commercial Farmers, Startups & Breed Improvement
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Championship purebred genetics: Nellore Jodipi, Nellore Palla, indigenous Deccani, Mandya (Bannur), and Dorper crosses. High twinning propensity, disease resilience, and accelerated lamb growth traits.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Certified pedigree stud rams & foundation breeding ewes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Complete genealogical history & semen fertility checks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Free advisory: ICAR feed ration charts & barn setup design</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>30-day health guarantee & post-sale veterinary guidance</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <button
                onClick={onExploreBreeds}
                className="w-full py-3 bg-[#1C3829] hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>View Stud Rams & Breeding Pairs</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              <button
                onClick={onInquireWholesale}
                className="w-full py-2 text-center text-xs font-semibold text-emerald-900 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Schedule Genetics Consultation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
