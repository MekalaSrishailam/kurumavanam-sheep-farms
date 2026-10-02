import React, { useState, useEffect } from 'react';
import { MuttonProduct } from '../types';
import {
  ShoppingBag,
  Sparkles,
  Check,
  Clock,
  ShieldCheck,
  ThermometerSnowflake,
  Heart,
  Camera,
  Upload,
  Link as LinkIcon,
  RefreshCw,
  X,
  Image as ImageIcon
} from 'lucide-react';

export const REAL_MUTTON_COVER_PRESETS = [
  {
    name: 'Artisan Lamb Ribs & Cut Presentation',
    description: 'Fresh prime cuts on wooden butcher board with rosemary sprigs',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
    category: 'Artisan Butchery'
  },
  {
    name: 'Farm-Fresh Diced Mutton Cuts Table',
    description: 'Clean diced fresh mutton cuts prepared for curry & biryani',
    url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1600&q=80',
    category: 'Fresh Cuts'
  },
  {
    name: 'Lush Green Pasture Grazing Flock (Upparapally)',
    description: 'Free-range Kuruma sheep grazing naturally on expansive grasslands',
    url: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1600&q=80',
    category: 'Pasture Grazing'
  },
  {
    name: 'Cold-Chain Stainless Butchery Processing Unit',
    description: 'Hygienic stainless preparation table chilled at 2°C vacuum packing',
    url: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1600&q=80',
    category: 'Cold-Chain Facility'
  },
  {
    name: 'Sunrise Pastoral Flock on Open Fields',
    description: 'Natural morning sunshine grazing on organic pastures',
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=80',
    category: 'Flock Pasture'
  },
  {
    name: 'Prime Cut Steaks & Gourmet Chops Display',
    description: 'Farm-to-table gourmet cuts ready for kitchen cooking',
    url: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=80',
    category: 'Prime Cuts'
  }
];

const DEFAULT_MUTTON_COVER = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80';

interface FreshMuttonSectionProps {
  products: MuttonProduct[];
  onAddToCart: (product: MuttonProduct, quantityKg: number, slot: string) => void;
}

export const FreshMuttonSection: React.FC<FreshMuttonSectionProps> = ({
  products,
  onAddToCart
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning (7:00 AM - 10:00 AM)');
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  // Real Cover Image state for the 100% Pasture Mutton feature
  const [coverUrl, setCoverUrl] = useState<string>(() => {
    return typeof window !== 'undefined'
      ? localStorage.getItem('kv_custom_mutton_cover_image') || DEFAULT_MUTTON_COVER
      : DEFAULT_MUTTON_COVER;
  });
  const [showCoverModal, setShowCoverModal] = useState(false);
  const [tempCoverUrl, setTempCoverUrl] = useState('');
  const [coverInputMode, setCoverInputMode] = useState<'device' | 'url' | 'presets'>('device');
  const [coverUpdateNotice, setCoverUpdateNotice] = useState('');

  useEffect(() => {
    const handleUpdate = () => {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('kv_custom_mutton_cover_image') : null;
      setCoverUrl(stored || DEFAULT_MUTTON_COVER);
    };
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('kv_custom_mutton_cover_updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('kv_custom_mutton_cover_updated', handleUpdate);
    };
  }, []);

  const handleSaveCover = (newUrl: string) => {
    if (typeof window !== 'undefined') {
      if (newUrl && newUrl.trim().length > 0) {
        localStorage.setItem('kv_custom_mutton_cover_image', newUrl.trim());
        setCoverUrl(newUrl.trim());
      } else {
        localStorage.removeItem('kv_custom_mutton_cover_image');
        setCoverUrl(DEFAULT_MUTTON_COVER);
      }
      window.dispatchEvent(new Event('kv_custom_mutton_cover_updated'));
    }
    setCoverUpdateNotice('✓ Real mutton cover image updated successfully!');
    setTimeout(() => {
      setCoverUpdateNotice('');
      setShowCoverModal(false);
    }, 1200);
  };

  const handleDeviceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setTempCoverUrl(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const getQty = (id: string, defaultKg: number) => quantities[id] || defaultKg;

  const handleQtyChange = (id: string, delta: number, minKg: number) => {
    const current = getQty(id, minKg);
    const updated = Math.max(minKg, Number((current + delta).toFixed(1)));
    setQuantities((prev) => ({ ...prev, [id]: updated }));
  };

  const handleAdd = (product: MuttonProduct) => {
    const qty = getQty(product.id, product.minOrderKg);
    onAddToCart(product, qty, selectedSlot);
    setAddedItemNotice(product.id);
    setTimeout(() => setAddedItemNotice(null), 2500);
  };

  return (
    <section id="fresh-mutton" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Farm-To-Table Cold Chain Delivery
            </div>
            <h2 className="text-3xl font-extrabold text-[#1C3829] tracking-tight mt-1 text-balance">
              100% Pasture-Grazed Fresh Mutton
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-2xl">
              Harvested only from ethically raised Kuruma pasture sheep. Zero artificial hormones, zero preservatives. Chilled to 2°C, vacuum sealed, and delivered directly to your doorstep.
            </p>
          </div>

          {/* Delivery Slot Selection */}
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-950">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>Preferred Delivery Slot:</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedSlot('Morning (7:00 AM - 10:00 AM)')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedSlot.includes('Morning')
                    ? 'bg-emerald-800 text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                Morning 7-10 AM
              </button>
              <button
                onClick={() => setSelectedSlot('Evening (4:00 PM - 7:00 PM)')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedSlot.includes('Evening')
                    ? 'bg-emerald-800 text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                Evening 4-7 PM
              </button>
            </div>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 text-xs text-stone-700">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <ThermometerSnowflake className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <div className="font-bold text-stone-900">Vacuum Chill Sealed</div>
              <div className="text-[11px] text-stone-500">Locks in natural juices</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <div className="font-bold text-stone-900">FSSAI Certified Hub</div>
              <div className="text-[11px] text-stone-500">Clean room processing</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <Heart className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <div className="font-bold text-stone-900">100% Grass Fed</div>
              <div className="text-[11px] text-stone-500">Rich in natural Omega-3</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <div className="font-bold text-stone-900">Halaal Certified</div>
              <div className="text-[11px] text-stone-500">Strict traditional ritual</div>
            </div>
          </div>
        </div>

        {/* 100% PASTURE-GRAZED FRESH MUTTON REAL COVER BANNER (REQUESTED BY USER) */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-800 bg-stone-950 mb-8 group">
          <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden">
            <img
              src={coverUrl}
              alt="100% Pasture-Grazed Fresh Mutton Butchery Unit Cover"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Multi-layer atmospheric dark scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/50 to-transparent" />
          </div>

          {/* Foreground Information & Customization Button */}
          <div className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-black tracking-wider uppercase backdrop-blur-xs border border-red-400/40 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Upparapally Pasture Butchery Unit</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-emerald-400 text-xs font-bold border border-emerald-500/40 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>2°C Chilled Vacuum Transit</span>
                </div>

                {/* Instant Cover Image Customizer button */}
                <button
                  type="button"
                  onClick={() => {
                    setTempCoverUrl(coverUrl);
                    setShowCoverModal(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 hover:bg-stone-900 text-amber-300 hover:text-white text-xs font-bold border border-amber-400/50 backdrop-blur-xs transition-colors cursor-pointer shadow-xs"
                  title="Upload real cover photo or select presets for this mutton feature"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Change Cover Image</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-amber-400 text-xs font-extrabold tracking-widest uppercase mb-1">
                Ethical Non-Stunned Halaal · Zero Preservatives · Cut Fresh On Harvest Day
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md max-w-2xl">
                100% Pasture-Grazed Fresh Mutton
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mt-1.5 line-clamp-2 sm:line-clamp-none">
                Pasture-raised Kuruma sheep grazing naturally on wild Telangana grasslands and subabul leaves. Cut cleanly in our certified clean-room butchery and delivered chilled in food-grade vacuum containers.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-3 pt-3 border-t border-white/15 text-xs text-stone-200">
                <div className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Never Frozen</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Portioned in 1kg / 500g</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct Farm Gate Price</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mutton Cuts Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {products.map((product) => {
            const currentQty = getQty(product.id, product.minOrderKg);
            const itemPrice = Math.round(product.pricePerKg * currentQty);
            const isJustAdded = addedItemNotice === product.id;

            return (
              <div
                key={product.id}
                className="bg-[#FCFCFA] rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 group"
              >
                <div>
                  {/* Decorative Cut Header with Real Photo or Clean Graphic */}
                  <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 flex flex-col justify-between p-4 text-white">
                    {/* Real Image Background if Available */}
                    {product.imageUrl && product.imageUrl.trim().length > 0 ? (
                      <>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60 pointer-events-none" />
                      </>
                    ) : (
                      /* Styled Butcher Board SVG Art Fallback */
                      <div className="flex items-center justify-center my-auto opacity-85 group-hover:scale-105 transition-transform duration-300">
                        <svg viewBox="0 0 160 100" className="w-32 h-20 drop-shadow-lg">
                          {/* Rustic Wood Platter */}
                          <rect x="15" y="65" width="130" height="15" rx="5" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
                          {/* Mutton Cut Pieces Silhouette */}
                          <ellipse cx="60" cy="50" rx="28" ry="18" fill="#991B1B" stroke="#7F1D1D" strokeWidth="1.5" />
                          <ellipse cx="60" cy="48" rx="8" ry="6" fill="#FEE2E2" />
                          <ellipse cx="105" cy="52" rx="22" ry="16" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" />
                          <ellipse cx="105" cy="50" rx="7" ry="5" fill="#FEE2E2" />
                          {/* Rosemary herbs */}
                          <path d="M40 70 Q70 60 95 68" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M55 64 L50 58 M70 63 L75 57 M85 66 L90 60" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}

                    <div className="relative z-10 flex items-center justify-between text-xs">
                      <span className="font-mono-num font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-amber-500/40 backdrop-blur-xs">
                        {product.unit}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {product.imageUrl && (
                          <span className="text-[10px] bg-amber-500 text-stone-950 font-black px-2 py-0.5 rounded shadow-xs">
                            ✓ Real Photo
                          </span>
                        )}
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                          product.inStock !== false
                            ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40'
                            : 'bg-red-950/90 text-red-300 border-red-500/40'
                        }`}>
                          {product.inStock !== false ? 'Pasture Fed' : 'Sold Out'}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 text-[11px] text-stone-200 bg-black/60 -mx-4 -mb-4 p-2.5 px-4 backdrop-blur-xs flex items-center justify-between border-t border-white/10">
                      <span className="truncate font-medium">{product.cutType}</span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="pt-4 space-y-2.5">
                    <h3 className="font-bold text-stone-900 text-lg group-hover:text-emerald-900 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Nutrition & Best For */}
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/70 text-[11px] space-y-1">
                      <div className="text-stone-700">
                        <strong className="text-stone-900">Best for:</strong> {product.bestFor}
                      </div>
                      <div className="text-stone-500 font-mono-num flex items-center gap-2">
                        <span>{product.nutritionInfo.protein}</span>
                        <span>·</span>
                        <span>{product.nutritionInfo.fat}</span>
                        <span>·</span>
                        <span>{product.nutritionInfo.calories}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase Controls & Weight Selector */}
                <div className="pt-4 border-t border-stone-200 mt-4 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider">Price per kg</div>
                      <div className="text-lg font-bold text-[#1C3829] font-mono-num">
                        ₹{product.pricePerKg} <span className="text-xs font-normal text-stone-500">/ kg</span>
                      </div>
                    </div>

                    {/* Weight Stepper */}
                    <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg border border-stone-200">
                      <button
                        onClick={() => handleQtyChange(product.id, -0.5, product.minOrderKg)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-white text-stone-700 font-bold hover:bg-stone-200 transition-colors cursor-pointer text-sm shadow-xs"
                      >
                        -
                      </button>
                      <span className="font-mono-num font-bold text-xs text-stone-900 w-12 text-center">
                        {currentQty} kg
                      </span>
                      <button
                        onClick={() => handleQtyChange(product.id, 0.5, product.minOrderKg)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-white text-stone-700 font-bold hover:bg-stone-200 transition-colors cursor-pointer text-sm shadow-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => product.inStock !== false && handleAdd(product)}
                    disabled={product.inStock === false}
                    className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                      product.inStock === false
                        ? 'bg-stone-300 text-stone-600 cursor-not-allowed border border-stone-300'
                        : isJustAdded
                        ? 'bg-emerald-700 text-white shadow-xs cursor-pointer'
                        : 'bg-[#1C3829] hover:bg-emerald-900 text-white cursor-pointer'
                    }`}
                  >
                    {product.inStock === false ? (
                      <span>Sold Out for Today · Check Tomorrow</span>
                    ) : isJustAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Added {currentQty}kg to Basket!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-amber-300" />
                        <span>Add to Basket · ₹{itemPrice.toLocaleString('en-IN')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL: CUSTOMIZE REAL COVER IMAGE FOR 100% PASTURE MUTTON */}
      {showCoverModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-stone-200 max-h-[92vh] overflow-y-auto space-y-5 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-900 text-amber-300 flex items-center justify-center shadow-xs shrink-0 border border-red-700">
                  <Camera className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                    Upload Real Cover Image for 100% Pasture Mutton
                  </h3>
                  <p className="text-xs text-stone-500">
                    Set a real photo of our pasture-grazing flock or butchery unit for the Fresh Mutton feature cover banner.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowCoverModal(false)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input Mode Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setCoverInputMode('device')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  coverInputMode === 'device'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Upload className="w-3.5 h-3.5 text-red-700" />
                <span>Device / Camera</span>
              </button>

              <button
                type="button"
                onClick={() => setCoverInputMode('url')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  coverInputMode === 'url'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5 text-red-700" />
                <span>Paste Web URL</span>
              </button>

              <button
                type="button"
                onClick={() => setCoverInputMode('presets')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  coverInputMode === 'presets'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Real Meat Presets</span>
              </button>
            </div>

            {/* Mode 1: Device Upload / Camera */}
            {coverInputMode === 'device' && (
              <label className="block border-2 border-dashed border-red-500/50 hover:border-red-600 bg-red-50/20 rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-red-50/40 group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleDeviceUpload}
                  className="hidden"
                />
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-700 mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-stone-900">
                  Click to Browse or Take Live Butcher Photo
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Supports JPEG, PNG, WEBP from your phone camera or computer
                </div>
              </label>
            )}

            {/* Mode 2: Web URL Input */}
            {coverInputMode === 'url' && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700">
                  Paste Direct Web Image URL:
                </label>
                <input
                  type="url"
                  value={tempCoverUrl}
                  onChange={(e) => setTempCoverUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>
            )}

            {/* Mode 3: Curated Real Meat & Pasture Butchery Presets */}
            {coverInputMode === 'presets' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-stone-700">
                  Select an authentic real pasture grazing or cold-chain butchery photo:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                  {REAL_MUTTON_COVER_PRESETS.map((preset) => {
                    const isSelected = tempCoverUrl === preset.url;
                    return (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => setTempCoverUrl(preset.url)}
                        className={`p-2.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'border-red-600 bg-red-50/60 ring-2 ring-red-600/30'
                            : 'border-stone-200 hover:border-stone-400 bg-white'
                        }`}
                      >
                        <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                          <img
                            src={preset.url}
                            alt={preset.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] font-bold text-red-800 uppercase tracking-wider">
                            {preset.category}
                          </div>
                          <div className="text-xs font-bold text-stone-900 truncate">
                            {preset.name}
                          </div>
                          <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                            {preset.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Live Interactive Preview Box */}
            <div className="space-y-2 pt-2 border-t border-stone-200">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Real Banner Live Preview:</span>
                {tempCoverUrl && (
                  <button
                    type="button"
                    onClick={() => setTempCoverUrl('')}
                    className="text-stone-400 hover:text-red-600 text-[11px] font-semibold cursor-pointer"
                  >
                    Clear Preview
                  </button>
                )}
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-inner flex flex-col justify-between p-4 text-white">
                {tempCoverUrl ? (
                  <>
                    <img
                      src={tempCoverUrl}
                      alt="Mutton Cover Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/50 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-stone-900 to-stone-950 text-center p-4">
                    <ImageIcon className="w-10 h-10 text-stone-600 mb-1" />
                    <div className="text-xs font-bold text-stone-400">Default Pasture Butchery Art Active</div>
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-600/90 text-white font-mono border border-red-400/40 text-[10px] font-bold">
                    UPPARAPALLY BUTCHERY
                  </span>
                  <span className="text-[10px] bg-black/60 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    2°C VACUUM CHILLED
                  </span>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="text-xs font-extrabold text-amber-300 uppercase tracking-widest">
                    ETHICAL NON-STUNNED HALAAL · ZERO PRESERVATIVES
                  </div>
                  <div className="text-base sm:text-lg font-black text-white drop-shadow-md">
                    100% Pasture-Grazed Fresh Mutton
                  </div>
                </div>
              </div>
            </div>

            {/* Notification message */}
            {coverUpdateNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold rounded-xl animate-in fade-in flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{coverUpdateNotice}</span>
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => {
                  handleSaveCover('');
                }}
                className="px-3.5 py-2 text-xs font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowCoverModal(false)}
                  className="px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveCover(tempCoverUrl || coverUrl)}
                  className="px-5 py-2 text-xs font-bold text-white bg-red-800 hover:bg-red-700 rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Cover Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
