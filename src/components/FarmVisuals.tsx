import React from 'react';

/**
 * Authentic Kuruma Vanam Horned Ram Logo & Pastoral Visuals
 * Designed to represent the Kuruma pastoralist community heritage and Nellore/Deccani rams.
 */
export const KurumaRamLogo: React.FC<{
  className?: string;
  size?: number;
  customLogoUrl?: string;
  forceSvg?: boolean;
}> = ({ className = 'w-10 h-10', size = 40, customLogoUrl, forceSvg = false }) => {
  const [logoUrl, setLogoUrl] = React.useState<string>(() => {
    if (forceSvg) return '';
    if (customLogoUrl !== undefined) return customLogoUrl;
    return typeof window !== 'undefined' ? localStorage.getItem('kv_custom_logo') || '' : '';
  });

  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (forceSvg) {
      setLogoUrl('');
      return;
    }
    if (customLogoUrl !== undefined) {
      setLogoUrl(customLogoUrl);
      setHasError(false);
      return;
    }
    const updateLogo = () => {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('kv_custom_logo') || '' : '';
      setLogoUrl(stored);
      setHasError(false);
    };
    window.addEventListener('storage', updateLogo);
    window.addEventListener('kv_custom_logo_updated', updateLogo);
    return () => {
      window.removeEventListener('storage', updateLogo);
      window.removeEventListener('kv_custom_logo_updated', updateLogo);
    };
  }, [customLogoUrl, forceSvg]);

  if (logoUrl && !hasError && !forceSvg) {
    return (
      <div
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-amber-500/80 shadow-xs bg-[#1C3829] shrink-0 ${className}`}
        style={size ? { width: size, height: size } : undefined}
      >
        <img
          src={logoUrl}
          alt="Kuruma Vanam Sheep Farms Logo"
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      aria-label="Kuruma Vanam Horned Sheep Ram Logo"
    >
    <circle cx="50" cy="50" r="48" fill="#1C3829" stroke="#E5A93C" strokeWidth="2.5" />
    <path
      d="M50 8 A42 42 0 0 1 92 50"
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeDasharray="3 3"
      opacity="0.6"
    />
    
    {/* Left Curved Ram Horn */}
    <path
      d="M36 40 C32 26, 16 24, 14 36 C12 46, 24 54, 34 50 C26 49, 21 44, 23 37 C25 30, 33 32, 36 40 Z"
      fill="#D97706"
      stroke="#78350F"
      strokeWidth="1.5"
    />
    {/* Horn Ridges Left */}
    <path d="M22 33 C25 35, 29 36, 33 40" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />
    <path d="M19 40 C22 43, 26 45, 30 47" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />

    {/* Right Curved Ram Horn */}
    <path
      d="M64 40 C68 26, 84 24, 86 36 C88 46, 76 54, 66 50 C74 49, 79 44, 77 37 C75 30, 67 32, 64 40 Z"
      fill="#D97706"
      stroke="#78350F"
      strokeWidth="1.5"
    />
    {/* Horn Ridges Right */}
    <path d="M78 33 C75 35, 71 36, 67 40" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />
    <path d="M81 40 C78 43, 74 45, 70 47" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />

    {/* Ram Head Structure */}
    <path
      d="M35 42 C35 32, 65 32, 65 42 C67 55, 60 72, 50 78 C40 72, 33 55, 35 42 Z"
      fill="#FBF8F1"
      stroke="#1C3829"
      strokeWidth="2"
    />

    {/* Forehead Marking */}
    <path
      d="M50 36 L53 45 L50 50 L47 45 Z"
      fill="#C25E34"
      opacity="0.9"
    />

    {/* Ram Muzzle & Nose */}
    <ellipse cx="50" cy="69" rx="8" ry="5.5" fill="#3D2619" />
    <circle cx="47" cy="69" r="1.2" fill="#1C1917" />
    <circle cx="53" cy="69" r="1.2" fill="#1C1917" />
    <path d="M50 69 L50 73 M47 73 C48 74, 52 74, 53 73" stroke="#1C1917" strokeWidth="1" strokeLinecap="round" />

    {/* Keen Ram Eyes */}
    <ellipse cx="42" cy="48" rx="3.5" ry="2.2" fill="#1C1917" />
    <ellipse cx="58" cy="48" rx="3.5" ry="2.2" fill="#1C1917" />
    <circle cx="43" cy="47.5" r="0.8" fill="#F59E0B" />
    <circle cx="57" cy="47.5" r="0.8" fill="#F59E0B" />

    {/* Ears Drooping slightly sideways */}
    <path
      d="M34 44 C26 44, 24 50, 31 54 C33 52, 34 48, 34 44 Z"
      fill="#F5EFE6"
      stroke="#1C3829"
      strokeWidth="1.2"
    />
    <path
      d="M66 44 C74 44, 76 50, 69 54 C67 52, 66 48, 66 44 Z"
      fill="#F5EFE6"
      stroke="#1C3829"
      strokeWidth="1.2"
    />

    {/* Green Pasture Grass Blades at bottom */}
    <path d="M38 88 L40 79 L43 88" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    <path d="M48 89 L50 76 L52 89" stroke="#E5A93C" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M57 88 L60 80 L62 88" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
  </svg>
  );
};

/**
 * Large, High-Quality Breed Showcase Visual Component
 * Provides authentic, high-contrast visual representations for each of the 5 breeds
 */
export const SheepVisualCard: React.FC<{
  breedName: string;
  category: string;
  colorPattern: string;
  weightKg: number;
  teethCount: string;
  tagId: string;
  imageUrl?: string;
  className?: string;
}> = ({ breedName, category, colorPattern, weightKg, teethCount, tagId, imageUrl, className = 'h-64 sm:h-72' }) => {
  const [imgError, setImgError] = React.useState(false);
  const showRealImage = Boolean(imageUrl && imageUrl.trim().length > 0 && !imgError);
  const breedLower = breedName.toLowerCase();
  
  // Breed styling parameters
  let coatColor = '#FDFCF7';
  let fleeceTexture = 'smooth';
  let hornType = 'spiral';
  let badgeText = 'Championship Lineage';
  let bgGradient = 'from-[#1E3A2B] via-[#162A20] to-[#0D1812]';
  let accentTag = '#E5A93C';
  let traitLabel = 'Dual-Purpose Stud';

  if (breedLower.includes('deccani')) {
    coatColor = '#292524';
    badgeText = 'Indigenous Drought-Hardy';
    bgGradient = 'from-[#2D2825] via-[#1F1C1B] to-[#121A15]';
    accentTag = '#D97706';
    traitLabel = 'Lean Pasture Mutton';
  } else if (breedLower.includes('jodipi')) {
    coatColor = '#F8FAFC';
    badgeText = 'Alpha Stud Ram Genetics';
    bgGradient = 'from-[#193527] via-[#12261C] to-[#0A1610]';
    accentTag = '#F59E0B';
    traitLabel = 'Rapid Weight Gain';
  } else if (breedLower.includes('pota')) {
    coatColor = '#FFFFFF';
    badgeText = '72kg Heavyweight Champion';
    bgGradient = 'from-[#382618] via-[#241A12] to-[#111C15]';
    accentTag = '#EA580C';
    traitLabel = 'Stall-Fed Stallion Frame';
  } else if (breedLower.includes('madras red')) {
    coatColor = '#9A3412';
    badgeText = 'High Dressing Percentage';
    bgGradient = 'from-[#3B1E17] via-[#2A1510] to-[#141C16]';
    accentTag = '#C25E34';
    traitLabel = 'Premium Red Meat';
  } else if (breedLower.includes('bellary')) {
    coatColor = '#44403C';
    badgeText = 'Dual Meat & Rug-Wool';
    bgGradient = 'from-[#292D2A] via-[#1B211E] to-[#0F1A14]';
    accentTag = '#D97706';
    traitLabel = 'Hardy Grazing Flock';
  }

  return (
    <div className={`relative overflow-hidden w-full ${className} bg-gradient-to-b ${bgGradient} flex flex-col justify-between p-5 text-white group rounded-t-2xl sm:rounded-t-3xl border-b-2 border-amber-500/50 shadow-inner`}>
      {/* If real image is uploaded, render with high-contrast scrim */}
      {showRealImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt={`${breedName} (#${tagId})`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Protective contrast scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply pointer-events-none" />
        </div>
      ) : (
        /* Background Pastoral Art Fallback */
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Soft Golden Hour Glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-950/80 to-transparent" />

          {/* Scenic Farm Pasture Backdrop Vectors */}
          <svg className="w-full h-full object-cover opacity-25" viewBox="0 0 500 300" fill="none" preserveAspectRatio="none">
            <circle cx="420" cy="60" r="45" fill="#FBBF24" opacity="0.4" />
            <path d="M0 180 Q120 130 260 170 T500 150 L500 300 L0 300 Z" fill="#044E3B" opacity="0.5" />
            <path d="M0 210 Q160 160 320 200 T500 185 L500 300 L0 300 Z" fill="#065F46" opacity="0.7" />
            <line x1="0" y1="260" x2="500" y2="260" stroke="#78350F" strokeWidth="2.5" opacity="0.6" />
            <line x1="0" y1="275" x2="500" y2="275" stroke="#78350F" strokeWidth="2.5" opacity="0.6" />
            <line x1="60" y1="245" x2="60" y2="295" stroke="#78350F" strokeWidth="4" opacity="0.7" />
            <line x1="180" y1="245" x2="180" y2="295" stroke="#78350F" strokeWidth="4" opacity="0.7" />
            <line x1="300" y1="245" x2="300" y2="295" stroke="#78350F" strokeWidth="4" opacity="0.7" />
            <line x1="420" y1="245" x2="420" y2="295" stroke="#78350F" strokeWidth="4" opacity="0.7" />
          </svg>

          {/* Central Realistic Sheep Silhouette with Distinctive Traits */}
          <div className="absolute right-4 sm:right-8 bottom-3 w-40 sm:w-56 h-36 sm:h-48 flex items-end justify-center pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out">
            <svg viewBox="0 0 200 160" fill="none" className="w-full h-full drop-shadow-2xl">
              <ellipse cx="100" cy="148" rx="75" ry="8" fill="#05120B" opacity="0.8" />
              <rect x="52" y="98" width="10" height="48" rx="4" fill="#1C1917" opacity="0.85" />
              <rect x="74" y="98" width="10" height="48" rx="4" fill="#1C1917" opacity="0.85" />
              <ellipse cx="95" cy="85" rx="55" ry="36" fill={coatColor} stroke="#0A1610" strokeWidth="2.5" />
              <ellipse cx="95" cy="92" rx="48" ry="24" fill="#000000" opacity="0.15" />
              {breedLower.includes('jodipi') && (
                <>
                  <ellipse cx="56" cy="130" rx="3.5" ry="6" fill="#0F172A" />
                  <ellipse cx="134" cy="130" rx="3.5" ry="6" fill="#0F172A" />
                </>
              )}
              <rect x="116" y="96" width="11" height="50" rx="4.5" fill={coatColor} stroke="#0A1610" strokeWidth="2" />
              <rect x="136" y="96" width="11" height="50" rx="4.5" fill={coatColor} stroke="#0A1610" strokeWidth="2" />
              <rect x="52" y="140" width="10" height="6" rx="2" fill="#0F172A" />
              <rect x="74" y="140" width="10" height="6" rx="2" fill="#0F172A" />
              <rect x="116" y="140" width="11" height="6" rx="2" fill="#0F172A" />
              <rect x="136" y="140" width="11" height="6" rx="2" fill="#0F172A" />
              <path
                d="M135 88 C145 78, 152 64, 155 48 C145 46, 132 58, 124 70 Z"
                fill={coatColor}
                stroke="#0A1610"
                strokeWidth="2"
              />
              <ellipse cx="162" cy="46" rx="20" ry="14" fill={coatColor} stroke="#0A1610" strokeWidth="2" />
              <ellipse cx="178" cy="50" rx="8" ry="7" fill="#1C1917" />
              {breedLower.includes('jodipi') ? (
                <circle cx="158" cy="42" r="5" fill="#0F172A" />
              ) : null}
              <circle cx="158" cy="42" r="2.5" fill="#F59E0B" stroke="#000" strokeWidth="1" />
              <path d="M148 44 C140 48, 138 56, 144 60 C146 56, 148 50, 148 44 Z" fill={coatColor} stroke="#0A1610" strokeWidth="1.5" />
              <path
                d="M152 38 C145 20, 126 18, 122 30 C120 40, 130 46, 140 44 C132 42, 128 36, 131 30 C134 24, 146 26, 152 38 Z"
                fill="#D97706"
                stroke="#78350F"
                strokeWidth="1.5"
              />
              <line x1="130" y1="28" x2="135" y2="34" stroke="#78350F" strokeWidth="1.5" />
              <line x1="126" y1="34" x2="132" y2="39" stroke="#78350F" strokeWidth="1.5" />
              <rect x="141" y="52" width="7" height="9" rx="1.5" fill="#EAB308" stroke="#713F12" strokeWidth="0.8" />
              <circle cx="144.5" cy="55" r="1" fill="#713F12" />
            </svg>
          </div>
        </div>
      )}


      {/* Top Details Strip */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="font-mono-num font-black text-xs px-2.5 py-1 rounded-lg bg-black/60 text-amber-300 border border-amber-400/40 tracking-wider">
              #{tagId}
            </span>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-600/80 text-white tracking-widest">
              Verified Stock
            </span>
          </div>
          <div className="text-[11px] font-bold text-amber-200/90 drop-shadow-xs">
            {badgeText}
          </div>
        </div>

        {/* Live Weight Highlight Badge */}
        <div className="text-right bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
          <span className="text-[9px] uppercase tracking-wider text-stone-300 block font-semibold">
            Certified Weight
          </span>
          <span className="text-lg sm:text-xl font-black text-amber-300 font-mono-num leading-tight">
            {weightKg} <span className="text-xs text-white">kg</span>
          </span>
        </div>
      </div>

      {/* Bottom Breed Hallmarks & Badges */}
      <div className="relative z-10 space-y-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block">
            {category}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-md">
            {breedName}
          </h3>
        </div>

        {/* Characteristic Badges Grid */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="px-2 py-0.5 rounded-md bg-white/15 text-stone-200 backdrop-blur-xs border border-white/10 font-medium">
            {teethCount}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/15 text-stone-200 backdrop-blur-xs border border-white/10 font-medium">
            {colorPattern.split(',')[0]}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/30 font-bold">
            {traitLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
