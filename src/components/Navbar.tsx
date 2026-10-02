import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  PlusCircle,
  ShieldCheck,
  Truck,
  Menu,
  X,
  ArrowRight,
  UserCheck,
  Phone,
  User as UserIcon,
  Layers,
  Lock,
  KeyRound
} from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';
import { FARM_CONTACT } from '../data/mockData';
import { User } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openFarmerListing: () => void;
  openOrderTracking: () => void;
  openSideMenu: () => void;
  isAdminMode: boolean;
  setIsAdminMode: (admin: boolean) => void;
  currentUser: User | null;
  openAuthModal: (mode?: 'customer-login' | 'customer-register' | 'admin-login') => void;
  openProfileModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openFarmerListing,
  openOrderTracking,
  openSideMenu,
  isAdminMode,
  setIsAdminMode,
  currentUser,
  openAuthModal,
  openProfileModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleAdminClick = () => {
    if (currentUser?.role === 'admin') {
      setIsAdminMode(!isAdminMode);
    } else {
      openAuthModal('admin-login');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF7]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-[#1C3829] text-amber-200 text-xs px-4 py-1.5 flex items-center justify-between font-medium">
        <div className="flex items-center gap-2 mx-auto text-center truncate">
          <span className="hidden sm:inline">🌾 Kuruma Vanam Sheep Farms · Warangal</span>
          <span className="text-stone-400 hidden sm:inline">·</span>
          <span>100% Disease-Free Flock</span>
          <span className="text-stone-400">·</span>
          <a href={`tel:${FARM_CONTACT.phone}`} className="text-amber-300 font-bold hover:underline">
            Call or WhatsApp: {FARM_CONTACT.phone}
          </a>
          <span className="text-stone-400 hidden md:inline">·</span>
          <span className="text-emerald-300 hidden md:inline">Farm Pickup Welcome & Direct Delivery Available</span>
        </div>
        <button
          onClick={handleAdminClick}
          className="text-[11px] underline hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
        >
          {isAdminMode ? 'Exit Admin Mode' : 'Admin Hub Access'}
        </button>
      </div>

      {/* Main Navbar: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Zone 1: Single element brand wordmark with horned ram logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('marketplace')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <KurumaRamLogo className="w-11 h-11 shrink-0 drop-shadow-sm group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1C3829] leading-tight group-hover:text-emerald-900 transition-colors">
                KURUMA VANAM
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-800/80">
                Sheep Farms & Livestock Hub
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-stone-700">
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`transition-colors hover:text-emerald-800 pb-0.5 relative cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'dashboard' ? 'text-[#1C3829] font-bold border-b-2 border-[#1C3829]' : ''
            }`}
          >
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => handleNavClick('categories')}
            className={`transition-colors hover:text-emerald-800 pb-0.5 relative cursor-pointer ${
              activeTab === 'categories' ? 'text-[#1C3829] font-bold border-b-2 border-[#1C3829]' : ''
            }`}
          >
            Our Livestock
          </button>
          <button
            onClick={() => handleNavClick('marketplace')}
            className={`transition-colors hover:text-emerald-800 pb-0.5 relative cursor-pointer ${
              activeTab === 'marketplace' ? 'text-[#1C3829] font-bold border-b-2 border-[#1C3829]' : ''
            }`}
          >
            Sheep Breeds
          </button>
          <button
            onClick={() => handleNavClick('mutton')}
            className={`transition-colors hover:text-emerald-800 pb-0.5 relative cursor-pointer ${
              activeTab === 'mutton' ? 'text-[#1C3829] font-bold border-b-2 border-[#1C3829]' : ''
            }`}
          >
            Fresh Mutton
          </button>
          <button
            onClick={() => handleNavClick('fodder')}
            className={`transition-colors hover:text-emerald-800 pb-0.5 relative cursor-pointer ${
              activeTab === 'fodder' ? 'text-[#1C3829] font-bold border-b-2 border-[#1C3829]' : ''
            }`}
          >
            Fodder & Feed
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors hover:text-emerald-800 pb-0.5 relative cursor-pointer ${
              activeTab === 'contact' ? 'text-[#1C3829] font-bold border-b-2 border-[#1C3829]' : ''
            }`}
          >
            Contact & Visits
          </button>
          <button
            onClick={openOrderTracking}
            className="flex items-center gap-1.5 transition-colors hover:text-emerald-800 cursor-pointer text-xs font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200"
          >
            <Truck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Track Van</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Navigation Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Quick Call Phone CTA */}
          <a
            href={`tel:${FARM_CONTACT.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs cursor-pointer font-mono-num"
          >
            <Phone className="w-3.5 h-3.5 fill-stone-950" />
            <span>{FARM_CONTACT.phone}</span>
          </a>

          {/* User Account Login / Profile button */}
          {currentUser ? (
            <button
              onClick={openProfileModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300/80 text-xs font-bold transition-all cursor-pointer"
              title="View your profile and orders"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[10px] font-bold flex items-center justify-center">
                {currentUser.name.charAt(0)}
              </div>
              <span className="hidden md:inline max-w-[100px] truncate">{currentUser.name}</span>
            </button>
          ) : (
            <button
              onClick={() => openAuthModal('customer-login')}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              <UserIcon className="w-3.5 h-3.5 text-emerald-800" />
              <span>Login</span>
            </button>
          )}

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            className="relative p-2.5 rounded-xl border border-stone-300/80 hover:bg-stone-100 transition-colors text-stone-800 cursor-pointer"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#1C3829]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-700 text-white font-mono-num font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Side Menu Drawer Button in Header */}
          <button
            onClick={openSideMenu}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-[#1C3829] hover:bg-emerald-900 text-white transition-all cursor-pointer shadow-xs border border-emerald-900"
            aria-label="Open Side Navigation Menu"
            title="Open Complete Side Menu"
          >
            <Menu className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Admin toggle chip */}
          <button
            onClick={handleAdminClick}
            className={`hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border transition-colors cursor-pointer ${
              isAdminMode
                ? 'bg-emerald-900 text-white border-emerald-950 font-bold'
                : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAdminMode ? 'Admin Active' : 'Admin'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-stone-200 text-stone-700 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FDFCF7] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-800">
            <button
              onClick={() => handleNavClick('dashboard')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 font-bold text-emerald-900 flex items-center justify-between"
            >
              <span>Main Platform Dashboard (All Features)</span>
              <Layers className="w-4 h-4 text-amber-600" />
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100"
            >
              Our Livestock (Meat, Festival & Breeding)
            </button>
            <button
              onClick={() => handleNavClick('marketplace')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100"
            >
              Sheep Breeds Catalog & Live Weights
            </button>
            <button
              onClick={() => handleNavClick('mutton')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100"
            >
              Fresh Mutton Delivery
            </button>
            <button
              onClick={() => handleNavClick('fodder')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100"
            >
              Super Napier Fodder & Feed Calculator
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100"
            >
              Contact Us & Book Farm Visit
            </button>
            <button
              onClick={() => {
                openOrderTracking();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 flex items-center justify-between text-emerald-800 font-semibold"
            >
              <span>Track Livestock Dispatch Van</span>
              <Truck className="w-4 h-4 text-emerald-700" />
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            {currentUser ? (
              <button
                onClick={() => {
                  openProfileModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-stone-200 text-stone-900"
              >
                Logged in as {currentUser.name} ({currentUser.role})
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    openAuthModal('customer-login');
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-center text-xs font-bold rounded-xl bg-[#1C3829] text-white"
                >
                  Customer Login
                </button>
                <button
                  onClick={() => {
                    openAuthModal('customer-register');
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-center text-xs font-bold rounded-xl bg-amber-500 text-stone-950"
                >
                  Create Account
                </button>
              </div>
            )}

            <button
              onClick={() => {
                openFarmerListing();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-semibold rounded-xl bg-amber-100 text-amber-900 border border-amber-300"
            >
              Sell Your Sheep (Farmer Listing)
            </button>
            <button
              onClick={() => {
                handleAdminClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 text-center text-xs font-medium rounded-xl border border-stone-300 text-stone-700"
            >
              {isAdminMode ? 'Exit Admin Mode' : 'Admin Hub (Phone & Password)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
