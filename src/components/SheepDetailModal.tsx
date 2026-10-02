import React, { useState } from 'react';
import { SheepBreed } from '../types';
import { X, ShieldCheck, CheckCircle2, Truck, Award, Calendar, Scale, MapPin, HeartPulse, FileText, Check } from 'lucide-react';
import { SheepVisualCard } from './FarmVisuals';

interface SheepDetailModalProps {
  sheep: SheepBreed | null;
  onClose: () => void;
  onAddToCart: (sheep: SheepBreed, isToken: boolean) => void;
}

export const SheepDetailModal: React.FC<SheepDetailModalProps> = ({
  sheep,
  onClose,
  onAddToCart
}) => {
  if (!sheep) return null;

  const [deliveryKm, setDeliveryKm] = useState(50);
  const estimatedTransportCost = Math.round(500 + deliveryKm * 14);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#1C3829] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-num font-bold text-amber-300 text-sm bg-black/30 px-2.5 py-1 rounded">
              TAG #{sheep.tagId}
            </span>
            <div>
              <h2 className="text-xl font-bold leading-tight">{sheep.breedName}</h2>
              <p className="text-xs text-stone-300">{sheep.category} · {sheep.origin}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-w-full max-h-[80vh] overflow-y-auto space-y-6">
          {/* Top Visual Showcase */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <SheepVisualCard
              breedName={sheep.breedName}
              category={sheep.category}
              colorPattern={sheep.colorPattern}
              weightKg={sheep.weightKg}
              teethCount={sheep.teethCount}
              tagId={sheep.tagId}
              imageUrl={sheep.imageUrl}
              className="h-64"
            />
          </div>

          {/* Quick Stat Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-[11px] text-stone-500">Live Body Weight</div>
              <div className="text-lg font-bold text-stone-900 font-mono-num mt-0.5">
                {sheep.weightKg} kg
              </div>
            </div>
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-[11px] text-stone-500">Age & Teeth</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">
                {sheep.ageMonths}M ({sheep.teethCount})
              </div>
            </div>
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-[11px] text-stone-500">Body Conformation</div>
              <div className="text-sm font-bold text-emerald-700 mt-0.5">
                {sheep.healthDetails.bodyScore}
              </div>
            </div>
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
              <div className="text-[11px] text-stone-500">Stock Status</div>
              <div className="text-sm font-bold text-emerald-700 mt-0.5">
                {sheep.stockStatus}
              </div>
            </div>
          </div>

          {/* Detailed Breed Profile & Description */}
          <div className="space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Breed Characteristics & Lineage</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-200">
              {sheep.description}
            </p>
          </div>

          {/* Official Health Passport */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-emerald-700" />
              <span>Official Veterinary Health Passport & Vaccination Registry</span>
            </h3>

            <div className="bg-emerald-50/60 border border-emerald-200/80 p-4 rounded-xl space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                <span className="text-emerald-900 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Government Quarantine Stamped
                </span>
                <span className="text-emerald-700 font-mono-num font-semibold">100% Disease Free</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
                <div>
                  <span className="font-semibold text-stone-900">Vaccines Administered:</span>
                  <ul className="mt-1 space-y-1">
                    {sheep.healthDetails.vaccines.map((v, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-stone-900">Deworming History:</span>
                    <p className="text-stone-600 mt-0.5">{sheep.healthDetails.dewormedDate}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900">Genealogy & Bloodline:</span>
                    <p className="text-stone-600 mt-0.5">{sheep.healthDetails.bloodline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Fodder Recommendation */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl text-xs space-y-1.5">
            <h4 className="font-bold text-amber-900">Farmer Nutrition & Feed Guideline for this Ram:</h4>
            <p className="text-amber-800">
              Requires <strong className="font-semibold">{sheep.dailyFeedRequirementKg} kg</strong> fresh Super Napier green fodder daily, paired with 400g dry lucerne hay and free-access chelated mineral lick block for peak muscle retention.
            </p>
          </div>

          {/* Livestock Transport Cost Estimator */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-700" />
                <span>Livestock Specialized Transport Estimator</span>
              </span>
              <span className="text-xs font-mono-num font-bold text-emerald-800">
                ~₹{estimatedTransportCost.toLocaleString('en-IN')} ({deliveryKm} km)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={deliveryKm}
                onChange={(e) => setDeliveryKm(Number(e.target.value))}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <span className="text-xs font-mono-num font-semibold text-stone-700 shrink-0 w-16 text-right">
                {deliveryKm} km
              </span>
            </div>
            <p className="text-[11px] text-stone-500">
              Includes straw bedding, fresh water supply, GPS live tracking link, and transit veterinary coverage.
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-stone-100 p-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-stone-500">Live Breed Price</div>
            <div className="text-2xl font-extrabold text-[#1C3829] font-mono-num">
              ₹{sheep.price.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onAddToCart(sheep, true);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Book with ₹1,000 Advance Token
            </button>
            <button
              onClick={() => {
                onAddToCart(sheep, false);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Buy Full
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
