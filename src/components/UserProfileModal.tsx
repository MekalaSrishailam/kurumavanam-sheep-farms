import React from 'react';
import {
  X,
  User as UserIcon,
  Phone,
  MapPin,
  Calendar,
  ShoppingBag,
  ShieldCheck,
  LogOut,
  Truck,
  PlusCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { User, Order } from '../types';
import { KurumaRamLogo } from './FarmVisuals';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User;
  orders: Order[];
  onLogout: () => void;
  openOrderTracking: () => void;
  openFarmerListing: () => void;
  switchToAdmin: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  orders,
  onLogout,
  openOrderTracking,
  openFarmerListing,
  switchToAdmin
}) => {
  if (!isOpen) return null;

  // Filter orders matching user phone or show all if admin/demo
  const userOrders = orders.filter((o) => {
    const cleanUserPhone = currentUser.phone.replace(/\D/g, '').slice(-10);
    const cleanOrderPhone = o.phone.replace(/\D/g, '').slice(-10);
    return cleanUserPhone === cleanOrderPhone || currentUser.role === 'admin';
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#FCFBF7] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="p-6 bg-[#1C3829] text-white flex items-center justify-between border-b border-emerald-950">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white">
                  {currentUser.name}
                </span>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                  currentUser.role === 'admin'
                    ? 'bg-amber-400 text-stone-950'
                    : 'bg-emerald-700 text-white'
                }`}>
                  {currentUser.role === 'admin' ? 'Farm Admin' : 'Customer'}
                </span>
              </div>
              <span className="text-xs text-stone-300 font-mono-num flex items-center gap-1.5 mt-0.5">
                <Phone className="w-3 h-3 text-amber-400" />
                +91 {currentUser.phone}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card Body */}
        <div className="p-6 space-y-6">
          {/* User Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-stone-100 p-4 rounded-2xl border border-stone-200/80 text-xs">
            <div>
              <span className="text-stone-500 font-bold uppercase tracking-wider block text-[10px]">
                Account Type
              </span>
              <span className="font-semibold text-stone-800 text-sm mt-0.5 block">
                {currentUser.customerType || (currentUser.role === 'admin' ? 'Farm Administrator' : 'Direct Consumer')}
              </span>
            </div>

            <div>
              <span className="text-stone-500 font-bold uppercase tracking-wider block text-[10px]">
                Location / Hub
              </span>
              <span className="font-semibold text-stone-800 text-sm mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                {currentUser.location || 'Telangana / AP'}
              </span>
            </div>

            <div>
              <span className="text-stone-500 font-bold uppercase tracking-wider block text-[10px]">
                Registered On
              </span>
              <span className="font-semibold text-stone-800 mt-0.5 block font-mono">
                {currentUser.createdAt || '2026 Season'}
              </span>
            </div>

            <div>
              <span className="text-stone-500 font-bold uppercase tracking-wider block text-[10px]">
                Health & Guarantee Status
              </span>
              <span className="font-semibold text-emerald-800 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Disease-Free Priority
              </span>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => {
                onClose();
                openOrderTracking();
              }}
              className="flex-1 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Truck className="w-4 h-4 text-emerald-700" />
              <span>Track Livestock Van</span>
            </button>

            <button
              onClick={() => {
                onClose();
                openFarmerListing();
              }}
              className="flex-1 py-2 px-3 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-amber-700" />
              <span>Sell Livestock (Pashushala)</span>
            </button>

            {currentUser.role === 'admin' && (
              <button
                onClick={() => {
                  onClose();
                  switchToAdmin();
                }}
                className="w-full py-2 px-3 bg-[#1C3829] hover:bg-emerald-950 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Open Full Admin Dashboard</span>
              </button>
            )}
          </div>

          {/* Orders Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#1C3829]" />
                <span>My Sheep & Farm Orders ({userOrders.length})</span>
              </h4>
              <button
                onClick={() => {
                  onClose();
                  openOrderTracking();
                }}
                className="text-xs text-emerald-800 font-bold hover:underline cursor-pointer"
              >
                Live Transit View →
              </button>
            </div>

            {userOrders.length === 0 ? (
              <div className="p-6 text-center bg-stone-50 rounded-2xl border border-stone-200">
                <div className="text-stone-400 text-sm mb-1">No orders placed under this mobile number yet.</div>
                <div className="text-xs text-stone-500">Browse our Deccani, Nellore rams, or fresh mutton delivery to book today!</div>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {userOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold font-mono text-stone-900">{ord.id}</span>
                        <span className="text-[10px] text-stone-500 font-mono">{ord.date}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {ord.fulfillmentStatus}
                        </span>
                      </div>
                      <div className="text-stone-600 mt-1 font-medium">
                        {ord.items.map((i) => i.title).join(', ')}
                      </div>
                    </div>

                    <div className="text-right sm:shrink-0">
                      <div className="font-extrabold text-stone-900 font-mono-num text-sm">
                        ₹{ord.totalAmount.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {ord.paymentStatus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Logout */}
        <div className="p-5 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            Kuruma Vanam Sheep Farms · Upparapally
          </div>

          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="px-4 py-2 bg-stone-200 hover:bg-red-50 text-stone-700 hover:text-red-700 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer border border-stone-300 hover:border-red-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
