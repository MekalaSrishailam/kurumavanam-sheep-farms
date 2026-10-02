import React from 'react';
import { X, User, Phone, MapPin, Package, LogOut, ShieldCheck, Truck, Clock, Printer } from 'lucide-react';
import { User as UserType, Order } from '../types';
import { KurumaRamLogo } from './FarmVisuals';

interface CustomerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserType | null;
  orders: Order[];
  onLogout: () => void;
  openOrderTracking: () => void;
}

export const CustomerProfileModal: React.FC<CustomerProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  orders,
  onLogout,
  openOrderTracking
}) => {
  if (!isOpen || !user) return null;

  // Filter orders for this customer by phone
  const cleanPhone = user.phone.replace(/\D/g, '');
  const userOrders = orders.filter(
    (o) => o.phone.replace(/\D/g, '').includes(cleanPhone) || o.customerName.toLowerCase().includes(user.name.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1C3829] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-base">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-base font-extrabold">{user.name}</h2>
              <p className="text-xs text-emerald-300 font-mono-num">{user.phone} · {user.customerType || 'Customer'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-xs max-h-[75vh] overflow-y-auto">
          {/* User Information Summary Card */}
          <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200 font-semibold text-stone-700">
              <span>Account Details</span>
              <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Verified Account
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-stone-600">
              <div>
                <span className="text-stone-400 block text-[10px]">REGISTERED PHONE</span>
                <strong className="text-stone-900 font-mono-num">{user.phone}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">CATEGORY</span>
                <strong className="text-stone-900">{user.customerType || 'Customer'}</strong>
              </div>
              <div className="col-span-2">
                <span className="text-stone-400 block text-[10px]">LOCATION</span>
                <strong className="text-stone-900">{user.location || 'Warangal, Telangana'}</strong>
              </div>
            </div>
          </div>

          {/* Customer Orders & Bookings */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Package className="w-4 h-4 text-emerald-800" />
                <span>My Bookings & Livestock Orders ({userOrders.length})</span>
              </h3>
              <button
                onClick={() => {
                  onClose();
                  openOrderTracking();
                }}
                className="text-emerald-800 hover:underline font-semibold text-[11px]"
              >
                Track Live Van →
              </button>
            </div>

            {userOrders.length === 0 ? (
              <div className="p-6 text-center bg-stone-50 rounded-xl border border-dashed border-stone-300 text-stone-500">
                No orders placed yet. Browse our Deccani, Nellore, Madras Red & Bellary breeds to reserve your first sheep.
              </div>
            ) : (
              <div className="space-y-3">
                {userOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-xl border border-stone-200 bg-white space-y-2.5 shadow-xs"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <div>
                        <span className="font-mono-num font-bold text-stone-900">{ord.id}</span>
                        <div className="text-[10px] text-emerald-700 font-mono-num">{ord.trackingNumber}</div>
                      </div>
                      <span className="font-bold text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                        {ord.fulfillmentStatus}
                      </span>
                    </div>

                    <div className="space-y-1 text-stone-700">
                      {ord.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>{it.quantity}x {it.title}</span>
                          <span className="font-mono-num font-semibold">
                            ₹{(it.price * it.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between font-mono-num text-[11px]">
                      <div>
                        Paid: <strong className="text-emerald-800">₹{ord.tokenPaid}</strong>
                        {ord.balanceDue > 0 && (
                          <span className="text-amber-800 ml-2">
                            (Due on Delivery: ₹{ord.balanceDue})
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => window.print()}
                        className="text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Receipt</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="px-4 py-2 border border-red-200 text-red-700 hover:bg-red-50 rounded-xl font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
