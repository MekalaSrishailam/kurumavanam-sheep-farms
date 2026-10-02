import React from 'react';
import { KurumaRamLogo } from './FarmVisuals';
import { Phone, Mail, MapPin, ShieldCheck, Clock, ArrowRight, MessageSquare, Scale, Truck } from 'lucide-react';
import { FARM_CONTACT } from '../data/mockData';

interface FooterProps {
  onNavClick: (tab: string) => void;
  openFarmerListing: () => void;
  openOrderTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  openFarmerListing,
  openOrderTracking
}) => {
  return (
    <footer className="bg-[#102217] text-stone-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* CLOSING CALL TO ACTION BANNER */}
        <div className="bg-[#162E20] border border-emerald-800/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              TODAY'S LIVE LIVESTOCK RATES
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Call {FARM_CONTACT.phone} to Check Today’s Live Prices or Book a Farm Visit
            </h3>
            <p className="text-xs text-stone-300 max-w-xl">
              Get immediate quotes by live weight (₹/kg) or per head for Deccani, Nellore Jodipi, Nellore Pota, Madras Red, and Bellary sheep. Farm pickup welcome, or arrange direct delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${FARM_CONTACT.phone}?text=${encodeURIComponent(
                "Hello Kuruma Vanam Sheep Farms (Upparapally), I would like to check today's live sheep prices and arrange transport."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <KurumaRamLogo className="w-12 h-12 shrink-0 drop-shadow-md" />
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  KURUMA VANAM
                </span>
                <p className="text-xs text-amber-400 font-semibold tracking-wide">
                  SHEEP FARMS & AGRIBUSINESS
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Commercial agribusiness and livestock farm supplying premium, 100% disease-free sheep. Offering flexible purchasing by live weight (₹/kg) or per head, with welcome farm pickup and direct delivery across Telangana, Andhra Pradesh, and South India.
            </p>

            <div className="text-xs text-emerald-300/90 space-y-1 pt-1 font-mono-num">
              <div>Government Registered Agribusiness Farm</div>
              <div>Certified PPR & ET Vaccinated Biosecure Flock</div>
            </div>
          </div>

          {/* Our 5 Breeds */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Our 5 Breeds
            </div>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onNavClick('breeds')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Deccani Sheep (Indigenous)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('breeds')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Nellore Jodipi (Championship Stud)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('breeds')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Nellore Pota (Heavy Ram)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('breeds')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Madras Red (High Meat Yield)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('breeds')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Bellary Sheep (Dual Purpose)
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Trust & Services
            </div>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onNavClick('proof')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  100% Disease-Free Health Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('proof')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Vaccination & Deworming Schedules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('faqs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Frequently Asked Questions (FAQs)
                </button>
              </li>
              <li>
                <button
                  onClick={openOrderTracking}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-emerald-400 font-semibold flex items-center gap-1"
                >
                  <span>Track Livestock Van Dispatch</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openFarmerListing}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400 font-semibold"
                >
                  Farmer Marketplace Listing
                </button>
              </li>
            </ul>
          </div>

          {/* Farm Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Farm Location & Phone
            </div>
            <div className="text-xs text-stone-300 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{FARM_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${FARM_CONTACT.phone}`} className="font-mono-num font-bold text-amber-300 hover:underline">
                  {FARM_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-mono-num text-[11px] text-stone-400">
                  Mon – Sat: 6:30 AM – 7:00 PM<br />Sun: 7:00 AM – 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} KURUMA VANAM SHEEP FARMS. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Flexible Purchasing (Weight / Head)</span>
            <span>·</span>
            <span>Farm Pickup Welcome</span>
            <span>·</span>
            <span>Doorstep Delivery Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
