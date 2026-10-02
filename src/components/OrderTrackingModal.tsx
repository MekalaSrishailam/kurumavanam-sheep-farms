import React, { useState } from 'react';
import { Order } from '../types';
import { X, Search, Truck, CheckCircle2, ShieldCheck, MapPin, PhoneCall, Clock, AlertCircle } from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  isOpen,
  onClose,
  orders
}) => {
  if (!isOpen) return null;

  const [searchTrackingId, setSearchTrackingId] = useState(
    orders.length > 0 ? orders[0].trackingNumber : 'KV-TRK-8821'
  );

  const activeOrder = orders.find(
    (o) =>
      o.trackingNumber.toLowerCase() === searchTrackingId.trim().toLowerCase() ||
      o.id.toLowerCase() === searchTrackingId.trim().toLowerCase()
  ) || orders[0];

  const steps = [
    { title: 'Order Confirmed', desc: 'Advance token verified & livestock tag allocated' },
    { title: 'Veterinary Inspection', desc: 'Blood test, temperature & quarantine cleared' },
    { title: 'Livestock Van In Transit', desc: 'Dispatched with straw bedding & hydration supply' },
    { title: 'Out for Delivery / Unloading', desc: 'Livestock officer arriving at your farm' },
    { title: 'Delivered', desc: 'Handover complete & health passport signed' }
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'Order Confirmed':
        return 0;
      case 'Veterinary Health Check Passed':
        return 1;
      case 'Livestock Van In Transit':
        return 2;
      case 'Out for Delivery':
        return 3;
      case 'Delivered':
        return 4;
      default:
        return 2;
    }
  };

  const currentStep = activeOrder ? getStepIndex(activeOrder.fulfillmentStatus) : 2;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="bg-[#1C3829] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KurumaRamLogo className="w-8 h-8" />
            <div>
              <h2 className="text-lg font-bold">Livestock & Mutton Dispatch Tracker</h2>
              <p className="text-xs text-emerald-300">Live GPS Van Status & Veterinary Checkpoints</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Tracking Search Input */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTrackingId}
                onChange={(e) => setSearchTrackingId(e.target.value)}
                placeholder="Enter Tracking ID (e.g. KV-TRK-8821 or ORD-8821)"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 font-mono-num"
              />
            </div>
          </div>

          {activeOrder ? (
            <div className="space-y-6">
              {/* Order High-level Overview */}
              <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <div className="text-stone-500 font-medium">Tracking Reference:</div>
                  <div className="font-extrabold text-[#1C3829] font-mono-num text-base">
                    {activeOrder.trackingNumber}
                  </div>
                  <div className="text-[11px] text-stone-600 mt-0.5">
                    Customer: <strong className="text-stone-900">{activeOrder.customerName}</strong> ·{' '}
                    {activeOrder.city}
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-stone-500 font-medium">Status:</div>
                  <span className="inline-block font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs mt-0.5">
                    {activeOrder.fulfillmentStatus}
                  </span>
                </div>
              </div>

              {/* Interactive Timeline */}
              <div className="space-y-4 px-2">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Live Dispatch Milestone Progress:
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                  {steps.map((st, i) => {
                    const isDone = i <= currentStep;
                    const isCurrent = i === currentStep;

                    return (
                      <div key={i} className="relative">
                        <div
                          className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            isDone
                              ? 'bg-emerald-700 text-white ring-4 ring-emerald-50'
                              : 'bg-stone-200 text-stone-500'
                          }`}
                        >
                          {isDone ? '✓' : i + 1}
                        </div>
                        <div className="text-xs">
                          <div
                            className={`font-bold ${
                              isCurrent ? 'text-emerald-900 text-sm' : isDone ? 'text-stone-900' : 'text-stone-400'
                            }`}
                          >
                            {st.title} {isCurrent && '(Current Stage)'}
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">{st.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Transit Van & Driver Details */}
              <div className="bg-[#1C3829] text-white p-4 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="font-bold">Kuruma Specialized Livestock Van #TS-07-EA-4412</div>
                    <div className="text-emerald-300 text-[11px]">
                      Driver: Ramesh Kumar · Attending Livestock Paravet on board
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919848011234"
                  className="px-3 py-1.5 bg-amber-500 text-stone-950 font-bold rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Call Dispatch</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-stone-500 text-xs">
              No order found matching this tracking code.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
