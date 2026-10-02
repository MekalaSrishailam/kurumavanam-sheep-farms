import React, { useState } from 'react';
import { SheepBreed } from '../types';
import { SheepVisualCard } from './FarmVisuals';
import {
  Search,
  Filter,
  ShieldCheck,
  Check,
  Info,
  Scale,
  Tag,
  Calendar,
  MapPin,
  Truck,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { FARM_CONTACT } from '../data/mockData';

interface SheepMarketplaceProps {
  breeds: SheepBreed[];
  onAddToCart: (breed: SheepBreed, isToken: boolean) => void;
  onOpenDetails: (breed: SheepBreed) => void;
}

const BREED_FILTERS = [
  'All Breeds',
  'Deccani',
  'Nellore Jodipi',
  'Nellore Pota',
  'Madras Red',
  'Bellary'
];

export const SheepMarketplace: React.FC<SheepMarketplaceProps> = ({
  breeds,
  onAddToCart,
  onOpenDetails
}) => {
  const [selectedBreedFilter, setSelectedBreedFilter] = useState<string>('All Breeds');
  const [searchQuery, setSearchQuery] = useState('');
  const [pricingMode, setPricingMode] = useState<'per-head' | 'per-kg'>('per-head');
  const [sortBy, setSortBy] = useState<'weight-desc' | 'price-asc' | 'price-desc'>('weight-desc');

  const filteredBreeds = breeds
    .filter((b) => {
      const matchesFilter =
        selectedBreedFilter === 'All Breeds' ||
        b.breedName.toLowerCase().includes(selectedBreedFilter.toLowerCase());
      const matchesSearch =
        b.breedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tagId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'weight-desc') return b.weightKg - a.weightKg;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <section id="our-breeds" className="py-20 bg-[#F8F9F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-emerald-700" />
              <span>REGIONAL PUREBREED LIVESTOCK CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C3829] tracking-tight font-serif text-balance">
              Our 5 Distinct Sheep Breeds & Live Ear-Tag Inventory
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Raised with scientific veterinary supervision at <strong className="text-stone-900 font-bold">Upparapally village, Wardhannapet-Khammam highway road, Warangal - 506310</strong>. We supply certified pure genetics across five premier regional breeds: <strong className="text-stone-900 font-bold">Deccani</strong>, <strong className="text-stone-900 font-bold">Nellore Jodipi</strong>, <strong className="text-stone-900 font-bold">Nellore Pota</strong>, <strong className="text-stone-900 font-bold">Madras Red</strong>, and <strong className="text-stone-900 font-bold">Bellary</strong>.
            </p>
          </div>

          {/* Quick Search & Sort */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search breed, ear tag (e.g. KV-DEC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-xs"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2.5 px-3 text-xs rounded-xl border border-stone-300 bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer shadow-xs font-medium"
            >
              <option value="weight-desc">Heaviest Live Weight</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* EXPLICIT PRICING RULES & TRANSPORTATION POLICY BANNER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pricing Rules */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-amber-500/30 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0 shadow-xs border border-amber-300">
              <Scale className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="font-extrabold text-sm text-[#1C3829] uppercase tracking-wide">
                Flexible Purchasing Rules: Weight vs. Per Head
              </div>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                We believe in 100% transparent transactions. Buyers can choose to <strong className="text-stone-900 font-bold">purchase by live weight (₹/kg) on our certified digital weighbridge</strong> or lock in a <strong className="text-stone-900 font-bold">fixed per-head price</strong>. You only pay for verified muscle and frame.
              </p>
            </div>
          </div>

          {/* Transportation Rules */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-emerald-600/30 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-xs border border-emerald-300">
              <Truck className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="font-extrabold text-sm text-[#1C3829] uppercase tracking-wide">
                Farm Pickup Welcome & Direct Doorstep Delivery
              </div>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                <strong className="text-stone-900 font-bold">Farm pickup is warmly welcome</strong> at our Upparapally pastures (Wardhannapet-Khammam highway). Direct delivery is also available across Telangana and Andhra Pradesh in sanitized livestock vans (standard delivery charges apply based on transit km).
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Mode Toggle & Breed Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Breed Segmented Control */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {BREED_FILTERS.map((bf) => (
              <button
                key={bf}
                onClick={() => setSelectedBreedFilter(bf)}
                className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  selectedBreedFilter === bf
                    ? 'bg-[#1C3829] text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {bf}
              </button>
            ))}
          </div>

          {/* Pricing Mode Switcher */}
          <div className="flex items-center gap-2 bg-stone-200/80 p-1 rounded-xl self-start sm:self-auto">
            <span className="text-[11px] font-bold text-stone-700 px-2">Display Rate:</span>
            <button
              onClick={() => setPricingMode('per-head')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                pricingMode === 'per-head'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Per Head Price
            </button>
            <button
              onClick={() => setPricingMode('per-kg')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                pricingMode === 'per-kg'
                  ? 'bg-[#1C3829] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              By Live Weight (₹/kg)
            </button>
          </div>
        </div>

        {/* 5 Breeds Catalog Grid - Spacious & High Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBreeds.map((sheep) => {
            const isAvailable = sheep.stockStatus === 'Available' || sheep.stockStatus === 'Only 1 Left';
            const isOnlyOne = sheep.stockStatus === 'Only 1 Left';

            return (
              <div
                key={sheep.id}
                className="bg-white rounded-3xl border-2 border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Large High-Quality Breed Showcase Image / Visual Placeholder */}
                  <div className="relative">
                    <SheepVisualCard
                      breedName={sheep.breedName}
                      category={sheep.category}
                      colorPattern={sheep.colorPattern}
                      weightKg={sheep.weightKg}
                      teethCount={sheep.teethCount}
                      tagId={sheep.tagId}
                      imageUrl={sheep.imageUrl}
                      className="h-64 sm:h-72"
                    />

                    {/* Stock Status Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`text-xs font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider ${
                          isOnlyOne
                            ? 'bg-amber-500 text-stone-950 animate-pulse'
                            : 'bg-emerald-700 text-white'
                        }`}
                      >
                        {sheep.stockStatus}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[11px] text-stone-200 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Upparapally Farm Paddock</span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-amber-800 uppercase tracking-wider">
                          {sheep.badge || sheep.category}
                        </span>
                        <span className="text-stone-500 font-mono font-bold">
                          Ear Tag #{sheep.tagId}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:text-[#1C3829] transition-colors mt-1 font-serif">
                        {sheep.breedName}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {sheep.description}
                    </p>

                    {/* Conformation Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 text-center">
                      <div>
                        <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Live Weight</div>
                        <div className="text-sm sm:text-base font-black text-stone-900 font-mono-num mt-0.5">
                          {sheep.weightKg} kg
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Dentition</div>
                        <div className="text-xs font-bold text-stone-800 mt-1">
                          {sheep.teethCount}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Health Status</div>
                        <div className="text-xs font-extrabold text-emerald-800 mt-1 flex items-center justify-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>PPR / ET OK</span>
                        </div>
                      </div>
                    </div>

                    {/* Transparent Pricing Breakdown */}
                    <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-mono-num">
                        <span className="text-stone-600 font-semibold">Live Weight Rate:</span>
                        <strong className="text-emerald-900 font-extrabold text-sm">
                          ₹{sheep.pricePerKg} / kg
                        </strong>
                      </div>
                      <div className="flex items-center justify-between font-mono-num">
                        <span className="text-stone-600 font-semibold">Total Price Per Head:</span>
                        <strong className="text-amber-950 font-black text-base">
                          ₹{sheep.pricePerHead.toLocaleString('en-IN')}
                        </strong>
                      </div>
                      <div className="text-[10px] text-stone-500 pt-1 border-t border-amber-200/80 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-700" />
                        <span>Exact digital weighbridge verification before invoice generation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions with Standout Contrasting Buttons */}
                <div className="p-6 pt-0 space-y-3">
                  {/* Primary Standout CTA Button */}
                  <a
                    href={`tel:${FARM_CONTACT.phone}`}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-stone-950" />
                    <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
                  </a>

                  {/* Secondary Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onAddToCart(sheep, true)}
                      className="py-2.5 px-2 text-xs font-extrabold rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 transition-colors text-center cursor-pointer border border-emerald-300"
                    >
                      Reserve Token ₹1,000
                    </button>
                    <button
                      onClick={() => onOpenDetails(sheep)}
                      className="py-2.5 px-2 text-xs font-bold rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors text-center cursor-pointer border border-stone-300"
                    >
                      View Health Passport
                    </button>
                  </div>

                  <div className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Farm pickup welcome · Direct van delivery (charges apply)</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
