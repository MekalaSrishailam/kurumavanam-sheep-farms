import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Scale,
  Truck,
  Leaf,
  Dna,
  HeartPulse,
  Calendar,
  CreditCard,
  PlusCircle,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Layers,
  Calculator,
  Lock,
  Tag,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  Check,
  Camera
} from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';
import { FARM_CONTACT } from '../data/mockData';
import { User, Order, SheepBreed } from '../types';

interface MainPlatformDashboardProps {
  onNavigate: (tab: string) => void;
  openCart: () => void;
  openFarmerListing: () => void;
  openOrderTracking: () => void;
  openAuthModal: (mode?: 'customer-login' | 'customer-register' | 'admin-login') => void;
  openProfileModal: () => void;
  currentUser: User | null;
  isAdminMode: boolean;
  setIsAdminMode: (admin: boolean) => void;
  breedsCount: number;
  ordersCount: number;
}

type FeatureCategory = 'all' | 'livestock' | 'mutton' | 'fodder' | 'management' | 'ecommerce';

export const MainPlatformDashboard: React.FC<MainPlatformDashboardProps> = ({
  onNavigate,
  openCart,
  openFarmerListing,
  openOrderTracking,
  openAuthModal,
  openProfileModal,
  currentUser,
  isAdminMode,
  setIsAdminMode,
  breedsCount,
  ordersCount
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FeatureCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      id: 'sheep-marketplace',
      category: 'livestock',
      title: 'Indigenous Sheep Breeds & Live Ear-Tag Marketplace',
      tagline: 'Deccani, Nellore Jodipi, Nellore Pota, Madras Red, Bellary',
      description:
        'Browse certified purebred rams and ewes with verified ear tags, teeth count (milk teeth, 2-teeth, 4-teeth), live weights from 38kg to 72kg, and bloodline certificates. Complete photo profiles and daily feed requirements.',
      actionText: 'Explore Sheep Breeds',
      onClick: () => onNavigate('marketplace'),
      icon: Scale,
      highlightBadge: '5 Pure Breeds'
    },
    {
      id: 'flexible-pricing',
      category: 'livestock',
      title: 'Flexible Purchasing: Live Weight vs. Per Head',
      tagline: 'Calibrated Digital Weighbridge & Transparent Rates',
      description:
        'Explicit purchasing options tailored for both wholesale meat buyers and individual buyers. Purchase by live weight (₹440 - ₹520 / kg) or lock in transparent per-head rates with zero hidden commission.',
      actionText: 'Check Live Pricing',
      onClick: () => onNavigate('breeds'),
      icon: Tag,
      highlightBadge: '100% Pricing Clarity'
    },
    {
      id: 'transport-logistics',
      category: 'livestock',
      title: 'Livestock Transportation & Farm Pickup',
      tagline: 'Farm Pickup Welcome · Doorstep Delivery Direct to Buyer',
      description:
        'Buyers are warmly welcome to visit our farm in Upparapally for on-site inspection and pickup. Direct delivery is also available in specialized livestock transport vehicles with transit welfare checks (standard delivery charges apply).',
      actionText: 'Track Livestock Van',
      onClick: openOrderTracking,
      icon: Truck,
      highlightBadge: 'Doorstep Transit'
    },
    {
      id: 'fresh-mutton',
      category: 'mutton',
      title: 'Farm-Fresh Pasture Mutton Delivery',
      tagline: '100% Chemical-Free · Hygienic Cuts · Cold Chain',
      description:
        'Farm-to-fork mutton sourced directly from grass-fed Deccani and Nellore sheep. Premium curry cuts, tender biryani cuts, and marrow bones vacuum-sealed and delivered in temperature-controlled boxes.',
      actionText: 'Order Fresh Mutton',
      onClick: () => onNavigate('mutton'),
      icon: ShoppingBag,
      highlightBadge: 'Cold-Chain Delivery'
    },
    {
      id: 'fodder-grass',
      category: 'fodder',
      title: 'High-Protein Sheep Grass Fodder Bundles',
      tagline: 'Super Napier (CO-4/CO-5), Alfalfa Lucerne & Maize',
      description:
        'Nutrient-dense green fodder harvested daily at our Warangal farm. Freshly bundled Super Napier grass (16-18% crude protein), sun-cured alfalfa hay bales, and ready-to-plant root slips for fellow sheep farmers.',
      actionText: 'Browse Fodder Bundles',
      onClick: () => onNavigate('fodder'),
      icon: Leaf,
      highlightBadge: '18% Crude Protein'
    },
    {
      id: 'feed-calculator',
      category: 'fodder',
      title: 'Interactive Daily Feed Ration Calculator',
      tagline: 'Formulated for Optimum Daily Weight Gain (150-200g/day)',
      description:
        'Precision nutrition tool for commercial sheep farmers. Input flock headcount and average sheep body weight to instantly calculate required green fodder, dry roughage, and concentrate feed rations.',
      actionText: 'Launch Feed Calculator',
      onClick: () => onNavigate('fodder'),
      icon: Calculator,
      highlightBadge: 'Free Farmer Tool'
    },
    {
      id: 'health-supplements',
      category: 'fodder',
      title: 'Sheep Health Supplements & Growth Tonics',
      tagline: 'Chelated Mineral Mixtures, Calcium & Liver Tonics',
      description:
        'Veterinary-grade growth enhancers, multi-mineral mixtures, and rumen digestion tonics formulated specifically for sheep immunity, wool luster, and accelerated muscular growth.',
      actionText: 'View Supplements',
      onClick: () => onNavigate('fodder'),
      icon: HeartPulse,
      highlightBadge: 'Vet Approved'
    },
    {
      id: 'real-photo-manager',
      category: 'management',
      title: 'Real Livestock Photo Manager & Media Studio',
      tagline: 'Upload Real Photos from Device / Camera to Live Flock Inventory',
      description:
        'Upload authentic high-resolution paddock photographs of rams, ewes, and lambs taken directly at Upparapally farm. Supports direct camera snap, phone upload, image URLs, or curated purebreed presets with real-time buyer card previews.',
      actionText: 'Open Photo Studio',
      onClick: () => {
        setIsAdminMode(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      icon: Camera,
      highlightBadge: 'Real Photo Studio'
    },
    {
      id: 'mutton-management',
      category: 'management',
      title: '100% Pasture-Grazed Fresh Mutton Management & Butchery',
      tagline: 'Edit Cuts, Update Live Prices, Stock Availability & Upload Real Meat Cut Photos',
      description:
        'Full administrative options for 100% pasture-grazed fresh mutton: Edit product cuts, change price per kg, adjust minimum orders, toggle stock status, upload real meat photos from device or presets, and delete cuts.',
      actionText: 'Manage Mutton Catalog',
      onClick: () => {
        setIsAdminMode(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      icon: ShoppingBag,
      highlightBadge: 'Mutton Admin Hub'
    },
    {
      id: 'breeding-gestation',
      category: 'management',
      title: 'Breeding Logs & 147-Day Gestation Tracker',
      tagline: 'Controlled Pedigree Lineages & Lambing Predictions',
      description:
        'Comprehensive flock breeding management. Track ram/ewe mating pairs, automated 147-day pregnancy countdown, expected lambing dates, and progeny survival logs.',
      actionText: 'Open Breeding Logs',
      onClick: () => {
        setIsAdminMode(true);
      },
      icon: Dna,
      highlightBadge: 'Gestation Tracker'
    },
    {
      id: 'health-ledger',
      category: 'management',
      title: 'Flock Health & Vaccination Audit Ledger',
      tagline: 'PPR, Enterotoxemia (ET) Booster & Deworming History',
      description:
        'Full medical audit trail for every animal. Certified immunization records against PPR, ET, Sheep Pox, CCPP, alongside cyclical dewormer schedules (Albendazole, Closantel, Ivermectin).',
      actionText: 'Audit Health Records',
      onClick: () => {
        setIsAdminMode(true);
      },
      icon: ShieldCheck,
      highlightBadge: '100% Disease-Free'
    },
    {
      id: 'vet-scheduling',
      category: 'management',
      title: 'On-Farm Veterinary Appointment Scheduling',
      tagline: 'Chief Vet Officer Dr. R. Srinivas (MVSc) on Call',
      description:
        'Book on-site veterinary visits for flock inspections, mass vaccination camps, artificial insemination, and emergency healthcare for local sheep farming communities.',
      actionText: 'Schedule Vet Visit',
      onClick: () => {
        setIsAdminMode(true);
      },
      icon: Calendar,
      highlightBadge: 'MVSc Doctors'
    },
    {
      id: 'pashushala-trading',
      category: 'ecommerce',
      title: 'Pashushala-Style Farmer Listing & Direct Trading',
      tagline: 'Empowering Shepherds to Sell Direct with Zero Middlemen',
      description:
        'Are you a local sheep farmer or pastoralist? List your rams, ewes, and flocks on our platform. Get verified by Kuruma Vanam veterinary staff and connect directly with bulk buyers.',
      actionText: 'List Livestock to Sell',
      onClick: openFarmerListing,
      icon: PlusCircle,
      highlightBadge: 'Zero Commission'
    },
    {
      id: 'secure-checkout',
      category: 'ecommerce',
      title: 'Secure Multi-Channel Payment Gateway & ₹1,000 Advance Token',
      tagline: 'UPI QR, Cards, Net Banking & Token Animal Booking',
      description:
        'Reserve your preferred prize ram or ewe immediately with a refundable ₹1,000 advance token. Complete payment via UPI (PhonePe, Google Pay), Cards, or pay balance upon farm pickup.',
      actionText: 'Open Shopping Cart',
      onClick: openCart,
      icon: CreditCard,
      highlightBadge: '₹1,000 Token Advance'
    },
    {
      id: 'customer-admin-auth',
      category: 'ecommerce',
      title: 'Customer & Admin Account Access with Phone & Password',
      tagline: 'Dedicated Panels for Buyers & Farm Administrators',
      description:
        'Separate secure access for customers and farm staff. Customers track their orders, tokens, and bookings. Administrators manage flock inventory, medical records, and logistics dispatch.',
      actionText: currentUser ? 'View My Account' : 'Log In or Create Account',
      onClick: currentUser ? openProfileModal : () => openAuthModal('customer-login'),
      icon: Lock,
      highlightBadge: 'Role-Based Access'
    },
    {
      id: 'direct-phone-whatsapp',
      category: 'livestock',
      title: 'Direct Telephonic & WhatsApp Desk: 8978275273',
      tagline: 'Instant Quotes, Video Calls & Farm Visit Appointments',
      description:
        'Speak directly with farm manager Mekala Srishailam. Request today’s live weight quotes, arrange specialized vehicle transport, or book a guided visit to our Upparapally farm.',
      actionText: 'Call 8978275273',
      onClick: () => {
        window.location.href = `tel:${FARM_CONTACT.phone}`;
      },
      icon: Phone,
      highlightBadge: 'Fast Response'
    }
  ];

  // Filter features
  const filteredFeatures = features.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F8F9F5] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Hero & Operations Banner */}
        <div className="bg-gradient-to-br from-[#1C3829] via-[#162e21] to-[#0e1d15] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-950 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <KurumaRamLogo className="w-96 h-96" />
          </div>

          <div className="relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Farm & Platform Ecosystem</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="text-2xl sm:text-4xl font-black text-amber-300 font-telugu tracking-tight drop-shadow-sm mb-1">
                  కురుమల వారసత్వం... గొర్రెల సంపద
                </div>
                <div className="text-base sm:text-xl font-bold text-amber-200/90 font-telugu mb-2">
                  కురుమల వైభవం – గొర్రెల వనం
                </div>
                <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white">
                  KURUMA VANAM SHEEP FARMS · WARANGAL
                </h1>
                <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed">
                  The premier agribusiness hub at Upparapally, Warangal. Breeding elite Nellore and Deccani sheep, producing farm-fresh pasture mutton, growing Super Napier green fodder, and providing veterinary flock management.
                </p>
              </div>

              {/* Quick User / Admin Session Badge */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center gap-3 shrink-0">
                {currentUser ? (
                  <div className="text-center sm:text-left">
                    <div className="text-xs text-stone-300">Signed in as:</div>
                    <div className="text-sm font-bold text-amber-300 flex items-center gap-1.5 justify-center sm:justify-start">
                      <span>{currentUser.name}</span>
                      <span className="text-[10px] bg-emerald-800 text-white px-2 py-0.5 rounded-full uppercase">
                        {currentUser.role}
                      </span>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={openProfileModal}
                        className="text-xs bg-white text-stone-900 px-3 py-1 rounded-lg font-bold hover:bg-amber-300 transition-colors cursor-pointer"
                      >
                        My Profile & Orders
                      </button>
                      <button
                        onClick={() => setIsAdminMode(!isAdminMode)}
                        className="text-xs bg-amber-400 text-stone-950 px-3 py-1 rounded-lg font-bold hover:bg-amber-300 transition-colors cursor-pointer"
                      >
                        {isAdminMode ? 'Exit Admin Mode' : 'Admin Panel'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center sm:text-left">
                    <div className="text-xs text-stone-300 mb-1">Customer & Admin Access:</div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => openAuthModal('customer-login')}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
                      >
                        <Lock className="w-3 h-3" />
                        <span>Customer Login</span>
                      </button>
                      <button
                        onClick={() => openAuthModal('admin-login')}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-all border border-emerald-600 shadow-xs cursor-pointer flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3 h-3 text-amber-300" />
                        <span>Admin Access</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Farm Vital Live Ticker Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center sm:text-left">
              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Flock Size</div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono-num mt-0.5">480+</div>
                <div className="text-[10px] text-stone-400">Purebred Stock</div>
              </div>

              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Live Rates Today</div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono-num mt-0.5">₹440–520</div>
                <div className="text-[10px] text-stone-400">per kg live weight</div>
              </div>

              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Flock Health</div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono-num mt-0.5">100%</div>
                <div className="text-[10px] text-stone-400">PPR & ET Vaccinated</div>
              </div>

              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Super Napier</div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono-num mt-0.5">45 MT</div>
                <div className="text-[10px] text-stone-400">per acre annual yield</div>
              </div>

              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Chief Vet</div>
                <div className="text-sm font-bold text-white mt-1">Dr. Srinivas</div>
                <div className="text-[10px] text-stone-400">MVSc (Livestock)</div>
              </div>

              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Direct Hotline</div>
                <a
                  href={`tel:${FARM_CONTACT.phone}`}
                  className="text-base sm:text-lg font-bold text-amber-300 font-mono-num block hover:underline mt-0.5"
                >
                  8978275273
                </a>
                <div className="text-[10px] text-stone-400">Call / WhatsApp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Platform Features' },
              { id: 'livestock', label: '🐑 Sheep & Breeds' },
              { id: 'mutton', label: '🥩 Fresh Mutton' },
              { id: 'fodder', label: '🌿 Fodder & Nutrition' },
              { id: 'management', label: '📊 Breeding & Vet Hub' },
              { id: 'ecommerce', label: '🛒 Orders & Pashushala' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#1C3829] text-white shadow-xs'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any farm feature..."
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Comprehensive Feature Grid - Mentioning ALL Features */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#1C3829] flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              <span>Complete Farm Features & Services Directory ({filteredFeatures.length})</span>
            </h2>
            <span className="text-xs text-stone-500">Click any card to launch or explore</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFeatures.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-emerald-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header with Icon and Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 group-hover:bg-[#1C3829] group-hover:text-amber-300 transition-colors shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80">
                        {feat.highlightBadge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#1C3829] transition-colors leading-snug">
                      {feat.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-800 mt-1 mb-2.5">
                      {feat.tagline}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  {/* Card Action Button */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={feat.onClick}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C3829] group-hover:text-emerald-700 transition-colors cursor-pointer"
                    >
                      <span>{feat.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] text-stone-400 uppercase font-mono tracking-wider">
                      {feat.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Farm Infrastructure & Location Details Bar */}
        <div className="bg-[#FAF8F2] rounded-3xl p-6 sm:p-8 border border-stone-300/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-extrabold text-sm">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Farm Location & Highway Access</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {FARM_CONTACT.address}
            </p>
            <div className="text-[11px] text-stone-500">
              Direct access for livestock loading vehicles, mini-trucks, and personal farm visitors.
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-extrabold text-sm">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>Farm Visiting & Operating Hours</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-mono">
              {FARM_CONTACT.hours}
            </p>
            <div className="text-[11px] text-stone-500">
              Open 7 days a week. Prior appointment recommended for batch livestock weigh-ins.
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-extrabold text-sm">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Direct Telephonic & WhatsApp Line</span>
            </div>
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="text-base font-extrabold text-emerald-900 font-mono-num hover:underline block"
            >
              +91 {FARM_CONTACT.phone}
            </a>
            <div className="text-[11px] text-stone-500">
              Farm Inquiries, Wholesale Meat Supply, Festival Rams & Transport Coordination.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
