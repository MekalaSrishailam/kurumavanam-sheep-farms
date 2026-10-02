import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  ArrowRight,
  MessageSquare,
  Scale,
  Truck,
  Sparkles,
  Calculator,
  User,
  Building2,
  Tag
} from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';
import { FARM_CONTACT } from '../data/mockData';

interface ContactLeadSectionProps {
  onSuccessNotice?: (msg: string) => void;
}

export const ContactLeadSection: React.FC<ContactLeadSectionProps> = ({ onSuccessNotice }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [breedOfInterest, setBreedOfInterest] = useState('Deccani Sheep');
  const [purchaseType, setPurchaseType] = useState<'By Weight' | 'Per Head'>('By Weight');
  const [headCount, setHeadCount] = useState('10 - 25 Animals (Wholesale)');
  const [visitOrDeliveryDate, setVisitOrDeliveryDate] = useState('2026-10-06');
  const [inquiryGoal, setInquiryGoal] = useState<'Request Price Quote' | 'Book Farm Visit' | 'Arrange Direct Delivery'>('Request Price Quote');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const data = {
      fullName,
      phone,
      breedOfInterest,
      purchaseType,
      headCount,
      visitOrDeliveryDate,
      inquiryGoal,
      notes
    };
    setSubmittedData(data);
    setIsSubmitted(true);

    if (onSuccessNotice) {
      onSuccessNotice(`Thank you ${fullName}! We have received your request for ${breedOfInterest} (${purchaseType}). Our farm team will contact you at ${phone}.`);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setNotes('');
  };

  return (
    <section id="contact-us" className="py-20 bg-[#FBFBF9] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading with Authoritative, Welcoming Copy */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-900 border border-amber-400/40 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>DIRECT LEAD CAPTURE & FARM VISIT DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C3829] tracking-tight leading-tight font-serif text-balance">
            Request a Quote or Book a Farm Visit.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            We are the region’s premier agricultural sheep supplier located at <strong className="text-stone-900 font-bold">Upparapally village, Wardhannapet-Khammam highway road, Warangal - 506310</strong>. Whether you need 50 commercial meat sheep or foundation breeding rams, fill out our quote form or connect directly with our farm desk below.
          </p>
        </div>

        {/* STANDARDIZED PRIMARY CALL TO ACTION BANNER */}
        <div className="bg-gradient-to-r from-[#1C3829] via-[#162D21] to-[#0F2017] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-900 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immediate Live Quote Line</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Check Today's Live Rates & Schedule Your Paddock Tour
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Call farm manager Mekala Srishailam directly at <strong className="text-amber-300 font-extrabold">{FARM_CONTACT.phone}</strong> for digital weighbridge rates, customized transport van bookings, or wholesale batch reservations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0 w-full sm:w-auto">
            {/* Standardized Primary Button with Contrasting Accent */}
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 fill-stone-950" />
              <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${FARM_CONTACT.phone}?text=${encodeURIComponent(
                "Hello Kuruma Vanam Sheep Farms (Upparapally, Warangal), I would like to check today's live prices, book a farm visit, or arrange livestock transport."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-2xl border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 2-Column Grid: Functional Quote Form & Farm Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Functional 'Request a Quote or Book a Visit' Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-stone-200/90 p-7 sm:p-9 shadow-sm">
            <div className="pb-5 mb-6 border-b border-stone-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-black text-[#1C3829]">
                  Request a Quote or Book a Visit
                </h3>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Instant Response
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Specify your preferred breed and purchasing method (by weight or per head) to receive an official farm quote.
              </p>
            </div>

            {isSubmitted && submittedData ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-stone-900">
                    Quote Request & Visit Booked!
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{submittedData.fullName}</strong>. Our livestock team at Upparapally has received your inquiry for <strong className="text-emerald-900">{submittedData.breedOfInterest}</strong> purchased <strong className="text-emerald-900">{submittedData.purchaseType}</strong>.
                  </p>
                </div>

                {/* Quote Summary Slip */}
                <div className="max-w-md mx-auto p-4 bg-[#F8F9F5] rounded-2xl border border-stone-200 text-left text-xs space-y-2">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-semibold">Registered Phone:</span>
                    <span className="font-mono-num font-bold text-stone-900">+91 {submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-semibold">Selected Breed:</span>
                    <span className="font-bold text-stone-900">{submittedData.breedOfInterest}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-semibold">Pricing Rule:</span>
                    <span className="font-bold text-amber-800">{submittedData.purchaseType}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-semibold">Batch Volume:</span>
                    <span className="font-bold text-stone-900">{submittedData.headCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 font-semibold">Preferred Date:</span>
                    <span className="font-mono text-stone-900">{submittedData.visitOrDeliveryDate}</span>
                  </div>
                </div>

                {/* Instant Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/91${FARM_CONTACT.phone}?text=${encodeURIComponent(
                      `Hello Kuruma Vanam Sheep Farms, I just submitted a quote request for ${submittedData.breedOfInterest} (${submittedData.purchaseType}, ${submittedData.headCount}). My name is ${submittedData.fullName}, phone: ${submittedData.phone}. Please send me today's prices.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send to Farm WhatsApp Desk</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl transition-colors cursor-pointer border border-stone-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Full Name */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Reddy / K. Srinivas"
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all"
                    />
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                {/* Field 2: Phone Number */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                    Phone Number (10 Digits) <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500 text-xs font-bold font-mono">
                      +91
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(-10))}
                      placeholder="9876543210"
                      maxLength={10}
                      className="w-full pl-12 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-mono-num text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all"
                    />
                    <Phone className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                {/* Fields 3 & 4: Breed of Interest & Purchase Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 3: Breed of Interest (Dropdown) */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                      Breed of Interest <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={breedOfInterest}
                      onChange={(e) => setBreedOfInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Deccani Sheep">Deccani Sheep (Indigenous Drought-Hardy)</option>
                      <option value="Nellore Jodipi">Nellore Jodipi (Prized Breeding Stud Ram)</option>
                      <option value="Nellore Pota">Nellore Pota (72kg Heavyweight Festival Ram)</option>
                      <option value="Madras Red">Madras Red (High Dressing Percentage Meat)</option>
                      <option value="Bellary">Bellary Sheep (Dual Purpose Meat & Wool)</option>
                      <option value="Mixed Commercial Batch">Mixed Commercial Flock (Wholesale Batch)</option>
                    </select>
                  </div>

                  {/* Field 4: Purchase Type (Dropdown: 'By Weight' or 'Per Head') */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                      Purchase Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={purchaseType}
                      onChange={(e) => setPurchaseType(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="By Weight">By Weight (Digital Weighbridge ₹/kg)</option>
                      <option value="Per Head">Per Head (Fixed Rate Per Animal)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Specific Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                      Volume / Headcount
                    </label>
                    <select
                      value={headCount}
                      onChange={(e) => setHeadCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="1 - 2 Animals (Breeding Stud / Festival)">1 - 2 Animals (Stud / Festival)</option>
                      <option value="3 - 10 Animals (Small Farm Starter)">3 - 10 Animals (Farm Starter)</option>
                      <option value="10 - 25 Animals (Wholesale)">10 - 25 Animals (Commercial)</option>
                      <option value="25 - 50+ Animals (Distributor Batch)">25 - 50+ Animals (Bulk Wholesale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                      Preferred Date / Slot
                    </label>
                    <input
                      type="date"
                      value={visitOrDeliveryDate}
                      onChange={(e) => setVisitOrDeliveryDate(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message / Special Instructions */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-1.5">
                    Additional Requirements / Paddock Tour Notes
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention if you require farm pickup or specialized direct delivery in livestock transport van..."
                    className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all"
                  />
                </div>

                {/* Form Submit Button with Standout Contrasting Accent */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-amber-950/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4 fill-stone-950" />
                  <span>Submit Quote Request or Book Farm Visit</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    No obligation. Direct live weighbridge pricing guaranteed.
                  </span>
                  <span>Upparapally, Warangal</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Farm Address, Hours & Direct Contact Desk */}
          <div className="lg:col-span-5 space-y-6">
            {/* Farm Office Card */}
            <div className="bg-white rounded-3xl border-2 border-stone-200/90 p-7 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
                <KurumaRamLogo className="w-11 h-11" />
                <div>
                  <h4 className="font-black text-lg text-[#1C3829] tracking-tight">
                    KURUMA VANAM SHEEP FARMS
                  </h4>
                  <div className="text-xs text-amber-800 font-bold uppercase tracking-wider">
                    Premier Regional Supplier
                  </div>
                </div>
              </div>

              {/* Exact Farm Address Emphasized */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Farm Location & Highway Access
                  </span>
                  <p className="text-sm font-bold text-stone-900 leading-snug mt-0.5">
                    {FARM_CONTACT.address}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Located right on Wardhannapet-Khammam highway road for effortless vehicle loading and livestock trailers.
                  </p>
                </div>
              </div>

              {/* Operating & Paddock Visiting Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200 mt-0.5">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Visiting & Weighbridge Hours
                  </span>
                  <p className="text-xs font-semibold text-stone-800 leading-relaxed mt-0.5 font-mono">
                    {FARM_CONTACT.hours}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Open 7 days a week for flock inspections, tag verifications, and batch pickups.
                  </p>
                </div>
              </div>

              {/* Direct Telephone Line */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                  <Phone className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Direct Farm Hotline & WhatsApp
                  </span>
                  <a
                    href={`tel:${FARM_CONTACT.phone}`}
                    className="text-base font-extrabold text-stone-900 font-mono-num hover:underline hover:text-emerald-800 transition-colors block mt-0.5"
                  >
                    +91 {FARM_CONTACT.phone}
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Managed by Farm Chief Mekala Srishailam.
                  </p>
                </div>
              </div>

              {/* Standardized Primary Button */}
              <div className="pt-2">
                <a
                  href={`tel:${FARM_CONTACT.phone}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-stone-950" />
                  <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Transport & Pickup Guidance Callout */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 text-xs text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Truck className="w-4 h-4 text-amber-700" />
                <span>Transportation & Delivery Terms</span>
              </div>
              <p className="leading-relaxed text-stone-700">
                Buyers are warmly welcome to arrange direct farm pickup with personal transport. For deliveries across Telangana and Andhra Pradesh, we dispatch sanitized livestock vans with transit animal welfare checks. Standard delivery charges apply based on transit distance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
