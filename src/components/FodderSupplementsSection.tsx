import React, { useState } from 'react';
import { FodderProduct, SupplementProduct } from '../types';
import { Sprout, Calculator, ShieldCheck, Check, ShoppingBag, Leaf, Sparkles, Scale, BookOpen } from 'lucide-react';

interface FodderSupplementsSectionProps {
  fodderList: FodderProduct[];
  supplementsList: SupplementProduct[];
  onAddFodder: (fodder: FodderProduct, quantity: number) => void;
  onAddSupplement: (sup: SupplementProduct, quantity: number) => void;
}

export const FodderSupplementsSection: React.FC<FodderSupplementsSectionProps> = ({
  fodderList,
  supplementsList,
  onAddFodder,
  onAddSupplement
}) => {
  // Feed Calculator State
  const [flockSize, setFlockSize] = useState<number>(30);
  const [sheepType, setSheepType] = useState<'growing' | 'ram' | 'pregnant' | 'lactating'>('ram');
  const [rearingType, setRearingType] = useState<'stall' | 'semi'>('stall');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Nutrition formulas based on ICAR Sheep Nutrition Standards
  const getDailyNeeds = () => {
    let greenKgPerHead = 4.5;
    let dryKgPerHead = 0.6;
    let concentrateGramPerHead = 350;
    let mineralGramPerHead = 20;

    if (sheepType === 'growing') {
      greenKgPerHead = 3.0;
      dryKgPerHead = 0.4;
      concentrateGramPerHead = 400;
      mineralGramPerHead = 15;
    } else if (sheepType === 'pregnant') {
      greenKgPerHead = 5.0;
      dryKgPerHead = 0.8;
      concentrateGramPerHead = 450;
      mineralGramPerHead = 25;
    } else if (sheepType === 'lactating') {
      greenKgPerHead = 5.5;
      dryKgPerHead = 1.0;
      concentrateGramPerHead = 500;
      mineralGramPerHead = 30;
    }

    if (rearingType === 'semi') {
      greenKgPerHead *= 0.6;
      dryKgPerHead *= 0.5;
      concentrateGramPerHead *= 0.7;
    }

    const totalGreenDaily = Math.round(greenKgPerHead * flockSize);
    const totalDryDaily = Math.round(dryKgPerHead * flockSize);
    const totalConcentrateDailyKg = Math.round((concentrateGramPerHead * flockSize) / 1000);
    const totalMineralMonthlyKg = Math.round((mineralGramPerHead * flockSize * 30) / 1000);

    return {
      totalGreenDaily,
      totalDryDaily,
      totalConcentrateDailyKg,
      totalMineralMonthlyKg
    };
  };

  const calculated = getDailyNeeds();

  const handleQuickAddFodder = (product: FodderProduct) => {
    onAddFodder(product, 1);
    setAddedNotice(product.id);
    setTimeout(() => setAddedNotice(null), 2000);
  };

  const handleQuickAddSup = (sup: SupplementProduct) => {
    onAddSupplement(sup, 1);
    setAddedNotice(sup.id);
    setTimeout(() => setAddedNotice(null), 2000);
  };

  return (
    <section id="fodder-supplements" className="py-16 bg-[#F4F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Grass, Fodder & Livestock Nutrition
            </div>
            <h2 className="text-3xl font-extrabold text-[#1C3829] tracking-tight mt-1 text-balance">
              High-Protein Fodder Grass & Growth Supplements
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-2xl">
              Scientifically cultivated green fodder with 16-20% crude protein for maximum mutton yield and rapid lamb weight gains.
            </p>
          </div>
        </div>

        {/* Interactive Farmer Daily Feed Calculator */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 lg:p-8">
          <div className="flex items-center gap-3 pb-6 border-b border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Farmer Scientific Ration Calculator (ICAR Standards)
              </h3>
              <p className="text-xs text-stone-500">
                Calculate your flock's exact daily Super Napier, dry roughage, and mineral mixture requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Flock Size (Number of Sheep): <span className="text-emerald-700 font-mono-num">{flockSize} Animals</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={flockSize}
                  onChange={(e) => setFlockSize(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>5 Sheep</span>
                  <span>100 Sheep</span>
                  <span>300 Sheep</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Animal Stage & Category:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSheepType('ram')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                      sheepType === 'ram'
                        ? 'bg-emerald-800 text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Adult Breeding Rams
                  </button>
                  <button
                    onClick={() => setSheepType('growing')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                      sheepType === 'growing'
                        ? 'bg-emerald-800 text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Growing Lambs (3-9M)
                  </button>
                  <button
                    onClick={() => setSheepType('pregnant')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                      sheepType === 'pregnant'
                        ? 'bg-emerald-800 text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Pregnant Ewes
                  </button>
                  <button
                    onClick={() => setSheepType('lactating')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                      sheepType === 'lactating'
                        ? 'bg-emerald-800 text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Lactating Ewes with Lambs
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Rearing Style:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRearingType('stall')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                      rearingType === 'stall'
                        ? 'bg-[#1C3829] text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    100% Stall-Fed (Intensive)
                  </button>
                  <button
                    onClick={() => setRearingType('semi')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer ${
                      rearingType === 'semi'
                        ? 'bg-[#1C3829] text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Semi-Intensive (Grazing + Feed)
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Results Box */}
            <div className="lg:col-span-6 bg-[#1C3829] text-white rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold pb-3 border-b border-emerald-900">
                  <span>DAILY RATION REQUIREMENT</span>
                  <span>{flockSize} HEAD HERD</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#12251B] p-3.5 rounded-xl border border-emerald-800/40">
                    <div className="text-[11px] text-stone-300">Fresh Green Fodder (Napier)</div>
                    <div className="text-2xl font-extrabold text-amber-400 font-mono-num mt-0.5">
                      {calculated.totalGreenDaily} kg <span className="text-xs text-stone-400 font-normal">/ day</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">High protein rumen bulk</div>
                  </div>

                  <div className="bg-[#12251B] p-3.5 rounded-xl border border-emerald-800/40">
                    <div className="text-[11px] text-stone-300">Dry Roughage (Lucerne/Hay)</div>
                    <div className="text-2xl font-extrabold text-white font-mono-num mt-0.5">
                      {calculated.totalDryDaily} kg <span className="text-xs text-stone-400 font-normal">/ day</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">Prevents diarrhea & bloat</div>
                  </div>

                  <div className="bg-[#12251B] p-3.5 rounded-xl border border-emerald-800/40">
                    <div className="text-[11px] text-stone-300">Energy Concentrate</div>
                    <div className="text-xl font-bold text-white font-mono-num mt-0.5">
                      {calculated.totalConcentrateDailyKg} kg <span className="text-xs text-stone-400 font-normal">/ day</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">Maize, groundnut cake, bran</div>
                  </div>

                  <div className="bg-[#12251B] p-3.5 rounded-xl border border-emerald-800/40">
                    <div className="text-[11px] text-stone-300">Mineral Mixture / Salt</div>
                    <div className="text-xl font-bold text-amber-300 font-mono-num mt-0.5">
                      {calculated.totalMineralMonthlyKg} kg <span className="text-xs text-stone-400 font-normal">/ month</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">Lick blocks & trace minerals</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-900/80 text-xs text-stone-300 flex items-center justify-between">
                <span>Estimated Monthly Fodder Cost: <strong className="text-white font-mono-num">₹{(calculated.totalGreenDaily * 30 * 2.8).toLocaleString('en-IN')}</strong></span>
                <span className="text-emerald-400 font-medium">Yield: +180g ADG/Day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fodder Grass Products Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-emerald-800" />
            <h3 className="text-xl font-bold text-stone-900">
              Fresh Green Grass & Planting Material
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fodderList.map((fodder) => {
              const isAdded = addedNotice === fodder.id;
              return (
                <div
                  key={fodder.id}
                  className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5"
                >
                  <div>
                    {/* Header Graphic */}
                    <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 p-4 text-white flex flex-col justify-between relative overflow-hidden">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono-num font-semibold text-emerald-300 bg-black/40 px-2 py-0.5 rounded">
                          {fodder.unitMeasure}
                        </span>
                        <span className="text-[10px] bg-amber-900/70 text-amber-300 px-2 py-0.5 rounded font-medium">
                          100% Organic
                        </span>
                      </div>

                      <div className="flex justify-center my-auto opacity-75">
                        <svg viewBox="0 0 100 60" className="w-20 h-12">
                          <path d="M20 55 C25 35, 30 20, 40 10 C35 25, 38 40, 42 55" fill="#10B981" />
                          <path d="M38 55 C45 30, 52 15, 65 5 C58 22, 60 40, 62 55" fill="#34D399" />
                          <path d="M58 55 C65 35, 75 22, 85 15 C78 30, 80 45, 80 55" fill="#059669" />
                        </svg>
                      </div>

                      <div className="text-[11px] text-emerald-200 font-mono-num truncate">
                        {fodder.proteinContent}
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <h4 className="font-bold text-stone-900 text-base leading-snug">
                        {fodder.name}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-2">
                        {fodder.description}
                      </p>
                      <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                        <strong>Dose:</strong> {fodder.recommendedDose}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-stone-500">Price</div>
                      <div className="text-lg font-bold text-[#1C3829] font-mono-num">
                        ₹{fodder.unitPrice}
                      </div>
                    </div>
                    <button
                      onClick={() => handleQuickAddFodder(fodder)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#1C3829] hover:bg-emerald-900 text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                          <span>Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Health Supplements Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-700" />
            <h3 className="text-xl font-bold text-stone-900">
              Sheep Growth Tonics & Mineral Supplements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplementsList.map((sup) => {
              const isAdded = addedNotice === sup.id;
              return (
                <div
                  key={sup.id}
                  className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5"
                >
                  <div>
                    <div className="h-28 rounded-xl bg-gradient-to-br from-amber-950 via-stone-900 to-emerald-950 p-3.5 text-white flex flex-col justify-between">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono-num font-semibold text-amber-300 bg-black/40 px-2 py-0.5 rounded">
                          {sup.netWeight}
                        </span>
                        <span className="text-[10px] bg-amber-800/80 text-white px-2 py-0.5 rounded font-medium">
                          {sup.category}
                        </span>
                      </div>

                      <div className="text-center text-xs font-semibold text-stone-200">
                        Weight Booster Formulated
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <h4 className="font-bold text-stone-900 text-base leading-snug">
                        {sup.name}
                      </h4>
                      <ul className="text-xs text-stone-600 space-y-1">
                        {sup.benefits.slice(0, 2).map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-100">
                        <strong>Usage:</strong> {sup.dosage}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-stone-500">Price</div>
                      <div className="text-lg font-bold text-[#1C3829] font-mono-num">
                        ₹{sup.price}
                      </div>
                    </div>
                    <button
                      onClick={() => handleQuickAddSup(sup)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-amber-600 hover:bg-amber-500 text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
