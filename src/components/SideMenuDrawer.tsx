import React from 'react';
import {
  X,
  Phone,
  MessageSquare,
  ShieldCheck,
  Scale,
  Truck,
  PlusCircle,
  HelpCircle,
  MapPin,
  Clock,
  Sparkles,
  ShoppingBag,
  UserCheck,
  ChevronRight,
  Leaf,
  Dna,
  Lock,
  User as UserIcon,
  Layers,
  HeartPulse,
  Tag,
  KeyRound,
  Camera
} from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';
import { FARM_CONTACT } from '../data/mockData';
import { User } from '../types';

interface SideMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
  openCart: () => void;
  openFarmerListing: () => void;
  openOrderTracking: () => void;
  isAdminMode: boolean;
  setIsAdminMode: (admin: boolean) => void;
  currentUser: User | null;
  openAuthModal: (mode?: 'customer-login' | 'customer-register' | 'admin-login') => void;
  openProfileModal: () => void;
}

export const SideMenuDrawer: React.FC<SideMenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  openCart,
  openFarmerListing,
  openOrderTracking,
  isAdminMode,
  setIsAdminMode,
  currentUser,
  openAuthModal,
  openProfileModal
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (tab: string) => {
    onNavigate(tab);
    onClose();
  };

  const handleAdminClick = () => {
    onClose();
    if (currentUser?.role === 'admin') {
      setIsAdminMode(!isAdminMode);
    } else {
      openAuthModal('admin-login');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-in Drawer from Right Side */}
      <aside
        className="absolute inset-y-0 right-0 max-w-sm w-full bg-[#FCFBF7] shadow-2xl border-l border-stone-200 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 z-10"
        aria-label="Website Side Navigation Menu"
      >
        {/* Drawer Content */}
        <div>
          {/* Header */}
          <div className="p-5 bg-[#1C3829] text-white flex items-center justify-between border-b border-emerald-950">
            <div className="flex items-center gap-3">
              <KurumaRamLogo className="w-10 h-10" />
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  KURUMA VANAM
                </span>
                <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold block">
                  Website Side Navigation
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close side menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Account / Login Strip */}
          <div className="p-3.5 bg-[#14261C] border-b border-emerald-900/60 text-white flex items-center justify-between gap-3">
            {currentUser ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      {currentUser.name}
                    </div>
                    <div className="text-[10px] text-amber-300 capitalize">
                      {currentUser.role === 'admin' ? 'Farm Administrator' : 'Customer Account'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    openProfileModal();
                  }}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  My Profile
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="text-xs text-stone-300 flex items-center gap-1.5">
                  <UserIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Customer or Admin?</span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => {
                      onClose();
                      openAuthModal('customer-login');
                    }}
                    className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      openAuthModal('customer-register');
                    }}
                    className="px-2.5 py-1 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer border border-emerald-600"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Call Action Strip */}
          <div className="p-3.5 bg-amber-500/10 border-b border-amber-200/80 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] text-amber-900 font-bold uppercase tracking-wider">
                Live Pricing & Orders
              </div>
              <a
                href={`tel:${FARM_CONTACT.phone}`}
                className="text-sm font-extrabold text-stone-900 font-mono-num hover:underline"
              >
                {FARM_CONTACT.phone}
              </a>
            </div>

            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <Phone className="w-3 h-3 fill-stone-950" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Categorized Navigation Menu Links */}
          <div className="p-4 space-y-5 text-xs">
            {/* Primary Main Dashboard Link */}
            <button
              onClick={() => handleLinkClick('dashboard')}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#1C3829] text-white font-extrabold text-left shadow-sm hover:from-emerald-950 hover:to-emerald-900 transition-all cursor-pointer border border-emerald-800"
            >
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-300" />
                <span>Main Platform Dashboard</span>
              </span>
              <span className="text-[10px] bg-amber-400 text-stone-950 px-2 py-0.5 rounded-full font-bold">
                All Features
              </span>
            </button>

            {/* Group 1: Livestock Breeds & Catalog */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3">
                Livestock Marketplace
              </div>
              <button
                onClick={() => handleLinkClick('marketplace')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-800" />
                  <span>Sheep Breeds Catalog</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              <button
                onClick={() => handleLinkClick('breeds')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-amber-600" />
                  <span>Live Weight vs. Head Pricing</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              <div className="pl-6 space-y-1 text-stone-600">
                <button
                  onClick={() => handleLinkClick('marketplace')}
                  className="w-full text-left py-1 hover:text-emerald-800 transition-colors"
                >
                  · Deccani Sheep (Drought Hardy)
                </button>
                <button
                  onClick={() => handleLinkClick('marketplace')}
                  className="w-full text-left py-1 hover:text-emerald-800 transition-colors"
                >
                  · Nellore Jodipi (Prized Breeding Ram)
                </button>
                <button
                  onClick={() => handleLinkClick('marketplace')}
                  className="w-full text-left py-1 hover:text-emerald-800 transition-colors"
                >
                  · Nellore Pota (72kg Heavyweight)
                </button>
                <button
                  onClick={() => handleLinkClick('marketplace')}
                  className="w-full text-left py-1 hover:text-emerald-800 transition-colors"
                >
                  · Madras Red (Meat Quality)
                </button>
                <button
                  onClick={() => handleLinkClick('marketplace')}
                  className="w-full text-left py-1 hover:text-emerald-800 transition-colors"
                >
                  · Bellary Sheep (Dual Purpose)
                </button>
              </div>
            </div>

            {/* Group 2: Services & Purchasing */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3">
                Farm Products & Nutrition
              </div>
              <button
                onClick={() => handleLinkClick('mutton')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-red-700" />
                  <span>Fresh Mutton Cold-Chain Delivery</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleLinkClick('fodder')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>Super Napier Grass & Feed Calculator</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Group 3: Trust, Guarantees & FAQs */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3">
                Trust & Verification
              </div>
              <button
                onClick={() => handleLinkClick('proof')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>100% Disease-Free Health Guarantee</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleLinkClick('faqs')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-stone-500" />
                  <span>Frequently Asked Questions</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 font-semibold text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Contact Farm & Book Visit</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Group 4: Operations & Special Actions */}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <button
                onClick={() => {
                  openOrderTracking();
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-bold border border-emerald-200 text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-700" />
                  <span>Track Livestock Van Transit</span>
                </span>
                <ChevronRight className="w-4 h-4 text-emerald-700" />
              </button>

              <button
                onClick={() => {
                  openFarmerListing();
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-50 text-amber-950 font-bold border border-amber-200 text-left transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-amber-700" />
                  <span>Sell Your Sheep (Farmer Hub)</span>
                </span>
                <ChevronRight className="w-4 h-4 text-amber-700" />
              </button>

              <button
                onClick={handleAdminClick}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left font-bold transition-colors cursor-pointer border ${
                  isAdminMode
                    ? 'bg-emerald-900 text-white border-emerald-950'
                    : 'bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-amber-400" />
                  <span>
                    {isAdminMode
                      ? 'Exit Admin Management'
                      : currentUser?.role === 'admin'
                      ? 'Admin Dashboard'
                      : 'Admin Portal (Phone & Password)'}
                  </span>
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setIsAdminMode(true);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-500/15 text-stone-950 font-bold border border-amber-300/80 text-left transition-colors cursor-pointer hover:bg-amber-500/25"
              >
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-amber-800" />
                  <span>Real Photo Studio & Gallery</span>
                </span>
                <span className="text-[10px] bg-amber-500 text-stone-950 font-black px-2 py-0.5 rounded-full">
                  Photos
                </span>
              </button>

              <button
                onClick={() => {
                  setIsAdminMode(true);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-red-50 text-red-950 font-bold border border-red-200 text-left transition-colors cursor-pointer hover:bg-red-100"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-red-700" />
                  <span>100% Pasture Mutton Hub</span>
                </span>
                <span className="text-[10px] bg-red-800 text-white font-bold px-2 py-0.5 rounded-full">
                  Edit & Cuts
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Drawer Footer with Address & Hours */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 text-[11px] text-stone-600 space-y-1.5">
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{FARM_CONTACT.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="font-mono-num">Open Daily: 06:30 AM – 07:00 PM</span>
          </div>
        </div>
      </aside>
    </div>
  );
};
