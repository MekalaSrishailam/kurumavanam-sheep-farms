import React from 'react';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  CheckCircle2,
  MapPin,
  Scale,
  Truck,
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';
import { FARM_CONTACT } from '../data/mockData';

interface HeroProps {
  onExploreBreeds: () => void;
  onInquirePricing: () => void;
  customCoverUrl?: string;
}

const DEFAULT_HERO_COVER = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80';

export const Hero: React.FC<HeroProps> = ({ onExploreBreeds, onInquirePricing, customCoverUrl }) => {
  const [coverUrl, setCoverUrl] = React.useState<string>(() => {
    if (customCoverUrl !== undefined) return customCoverUrl;
    return typeof window !== 'undefined' ? localStorage.getItem('kv_custom_cover_image') || DEFAULT_HERO_COVER : DEFAULT_HERO_COVER;
  });

  React.useEffect(() => {
    if (customCoverUrl !== undefined) {
      setCoverUrl(customCoverUrl);
      return;
    }
    const updateCover = () => {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('kv_custom_cover_image') : null;
      setCoverUrl(stored || DEFAULT_HERO_COVER);
    };
    window.addEventListener('storage', updateCover);
    window.addEventListener('kv_custom_cover_updated', updateCover);
    return () => {
      window.removeEventListener('storage', updateCover);
      window.removeEventListener('kv_custom_cover_updated', updateCover);
    };
  }, [customCoverUrl]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#14291E] via-[#0F2218] to-[#0A1610] text-stone-100 min-h-[640px] lg:min-h-[720px] flex items-center border-b-4 border-amber-500/80">
      {/* High-Quality Architectural & Pastoral Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Real Cover Image if Uploaded by Admin */}
        {coverUrl ? (
          <>
            <img
              src={coverUrl}
              alt="Kuruma Vanam Farm Cover"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-105 animate-in fade-in duration-700 opacity-60"
            />
            {/* Atmospheric Multi-layer Dark Gradient Scrims for Perfect Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/95 via-[#0C1A12]/85 to-[#0C1A12]/60 lg:w-4/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-transparent to-[#14291E]/70" />
            <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Real Upparapally Farm Cover</span>
            </div>
          </>
        ) : (
          <>
            {/* Soft Warm Sunset & Terracotta Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[#C25E34]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl" />

            {/* Pastoral Horizon Art with Rolling Hills */}
            <svg
              className="absolute bottom-0 left-0 w-full h-80 opacity-25 object-cover"
              viewBox="0 0 1440 320"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,208C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                fill="#064E3B"
              />
              <path
                d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,250.7C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                fill="#047857"
                opacity="0.8"
              />
            </svg>

            {/* Ambient Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/95 via-[#0C1A12]/85 to-transparent lg:w-3/4" />
          </>
        )}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Hero Copy - 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust & Location Header Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-amber-400/40 text-xs sm:text-sm font-semibold text-amber-300 shadow-sm backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-amber-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-bold">100% Disease-Free Flock</span>
              </span>
              <span className="text-amber-500/70">·</span>
              <span className="text-stone-300">Premier Agricultural Supplier</span>
              <span className="text-amber-500/70">·</span>
              <span className="text-emerald-300">Warangal, Telangana</span>
            </div>

            {/* STRICT TELUGU HEADLINES (No other English headlines as requested) */}
            <div className="space-y-3">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2] font-telugu text-balance drop-shadow-md">
                కురుమల వారసత్వం... గొర్రెల సంపద
              </h1>

              {/* Sub-headline */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-300 tracking-wide font-telugu drop-shadow-sm flex items-center gap-2">
                <span className="inline-block w-6 sm:w-8 h-1 bg-[#C25E34] rounded-full" />
                <span>కురుమల వైభవం – గొర్రెల వనం</span>
              </div>
            </div>

            {/* Authoritative, Persuasive, and Welcoming English Body Text */}
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Welcome to <strong className="text-white font-extrabold">Kuruma Vanam Sheep Farms</strong>, the region's premier livestock agribusiness and breeding center located at <span className="text-amber-300 font-semibold">{FARM_CONTACT.address}</span>. We supply certified 100% disease-free purebred stock—including <strong className="text-white">Deccani, Nellore Jodipi, Nellore Pota, Madras Red, and Bellary</strong>—to commercial meat buyers, wholesale distributors, religious festival buyers, and progressive breeders.
            </p>

            {/* Flexible Purchasing & Transportation Policy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-emerald-500/30 backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
                  <Scale className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-white">Flexible Purchasing</div>
                  <div className="text-stone-300">Buy by Live Weight (₹/kg) or Per Head</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-emerald-500/30 backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-white">Pickup & Delivery</div>
                  <div className="text-stone-300">Farm Pickup Welcome · Direct Van Transit</div>
                </div>
              </div>
            </div>

            {/* STANDARDIZED PRIMARY CALL TO ACTION BUTTON WITH CONTRASTING ACCENT */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA: Contrasting Bright Gold / Deep Orange Accent */}
              <a
                href={`tel:${FARM_CONTACT.phone}`}
                className="px-7 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base rounded-2xl transition-all duration-200 shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                title="Call or WhatsApp our farm desk"
              >
                <Phone className="w-5 h-5 fill-stone-950" />
                <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
              </a>

              {/* Secondary CTA: WhatsApp Chat */}
              <a
                href={`https://wa.me/91${FARM_CONTACT.phone}?text=${encodeURIComponent(
                  "Hello Kuruma Vanam Sheep Farms (కురుమల వైభవం – గొర్రెల వనం, Upparapally), I would like to inquire about today's live sheep prices, delivery options, or schedule a farm visit."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-2xl border border-emerald-500/40 transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Live Chat</span>
              </a>
            </div>

            {/* Quick Explore Breeds & Request Quote Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-300">
              <button
                onClick={onExploreBreeds}
                className="hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors underline"
              >
                <span>Browse Our 5 Sheep Breeds</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-stone-500">|</span>
              <button
                onClick={onInquirePricing}
                className="hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors underline"
              >
                <span>Request a Quote or Book a Visit</span>
                <Calendar className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Large High-Quality Showcase Graphic Card - 5 Columns */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E3B2C] via-[#162D22] to-[#0D1C14] border-2 border-amber-400/40 shadow-2xl p-6 sm:p-7 text-white space-y-6 group">
              {/* Top Banner inside card with Telugu & Brand wordmark */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <KurumaRamLogo className="w-10 h-10 drop-shadow-sm" />
                  <div>
                    <div className="font-extrabold text-sm text-white tracking-tight">
                      KURUMA VANAM SHEEP FARMS
                    </div>
                    <div className="text-[11px] font-bold text-amber-300 font-telugu">
                      కురుమల వైభవం – గొర్రెల వనం
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] uppercase font-bold text-stone-400 block">Live Weight Rate</span>
                  <span className="text-base font-black text-amber-300 font-mono-num">₹440–520/kg</span>
                </div>
              </div>

              {/* Realistic Pasture Scene or Real Cover Photography */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E4331] to-[#0A170F] p-4 flex flex-col justify-between border border-emerald-500/20">
                {coverUrl ? (
                  <>
                    <img
                      src={coverUrl}
                      alt="Real Farm Pasture Camera"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50 pointer-events-none" />
                  </>
                ) : (
                  <>
                    {/* Sun & Background Hills */}
                    <div className="absolute top-3 right-6 w-14 h-14 rounded-full bg-amber-400/30 blur-md pointer-events-none" />
                    <div className="absolute top-5 right-8 w-10 h-10 rounded-full bg-amber-300/80 pointer-events-none" />

                    {/* Flock Silhouette at Grazing Pasture */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 240" fill="none">
                      {/* Rolling green pastures */}
                      <path d="M0 130 Q100 100 220 120 T400 110 L400 240 L0 240 Z" fill="#044E3B" opacity="0.6" />
                      <path d="M0 160 Q140 130 280 150 T400 140 L400 240 L0 240 Z" fill="#065F46" opacity="0.8" />
                      <path d="M0 190 Q160 170 300 185 T400 175 L400 240 L0 240 Z" fill="#022C22" />

                      {/* Standing Alpha Ram Silhouette */}
                      <ellipse cx="280" cy="185" rx="35" ry="24" fill="#F8FAFC" />
                      <ellipse cx="320" cy="162" rx="14" ry="10" fill="#F8FAFC" />
                      <path d="M315 155 C310 140, 296 142, 292 150 C290 158, 298 162, 305 160 Z" fill="#D97706" />
                      <rect x="258" y="195" width="6" height="28" rx="2" fill="#0F172A" />
                      <rect x="272" y="195" width="6" height="28" rx="2" fill="#0F172A" />
                      <rect x="296" y="195" width="7" height="30" rx="2" fill="#F8FAFC" />
                      <rect x="308" y="195" width="7" height="30" rx="2" fill="#F8FAFC" />

                      {/* Second Grazing Ewe */}
                      <ellipse cx="120" cy="195" rx="26" ry="18" fill="#1C1917" />
                      <ellipse cx="96" cy="198" rx="9" ry="7" fill="#1C1917" />
                      <rect x="105" y="205" width="5" height="22" rx="2" fill="#1C1917" />
                      <rect x="116" y="205" width="5" height="22" rx="2" fill="#1C1917" />
                      <rect x="132" y="205" width="5" height="22" rx="2" fill="#1C1917" />
                    </svg>
                  </>
                )}

                {/* Live Tag Marker */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 text-amber-300 text-[10px] font-mono font-bold border border-amber-400/30">
                    Live Paddock Camera · Sector A
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-300 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open Pasture Grazing
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="relative z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white font-telugu">కురుమల వారసత్వం</div>
                    <div className="text-[11px] text-emerald-400 font-semibold">100% Disease-Free · Serologically Certified</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              {/* 5 Breeds Quick Roster */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-300">
                  Breeds Available For Immediate Supply:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-stone-200 font-medium">
                    Deccani
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-stone-200 font-medium">
                    Nellore Jodipi
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-stone-200 font-medium">
                    Nellore Pota
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-stone-200 font-medium">
                    Madras Red
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-stone-200 font-medium">
                    Bellary
                  </span>
                </div>
              </div>

              {/* Farm Address Highlight inside Card */}
              <div className="pt-2 border-t border-white/10 flex items-start gap-2 text-[11px] text-stone-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Upparapally village, Wardhannapet-Khammam highway road, Warangal - 506310
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
