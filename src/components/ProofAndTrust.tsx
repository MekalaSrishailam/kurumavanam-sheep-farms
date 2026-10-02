import React from 'react';
import {
  ShieldCheck,
  HeartPulse,
  Dna,
  Leaf,
  CheckCircle2,
  Award,
  Calendar,
  FileText,
  Phone,
  MessageSquare,
  MapPin,
  Sparkles,
  Check,
  Stethoscope,
  Activity,
  Syringe,
  Pill,
  Scale
} from 'lucide-react';
import { FARM_CONTACT } from '../data/mockData';

export const ProofAndTrust: React.FC = () => {
  return (
    <section id="proof-and-trust" className="py-20 bg-[#FBFBF9] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>PROOF & TRUST · UNCOMPROMISED HEALTH STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C3829] tracking-tight leading-tight font-serif text-balance">
            100% Disease-Free Flock Guarantee & Scientific Veterinary Protocols.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            As the region's premier livestock supplier located at <strong className="text-stone-900 font-bold">Upparapally village, Wardhannapet-Khammam highway road, Warangal - 506310</strong>, we establish trust through absolute biological transparency. Every animal is backed by accredited veterinary audits, complete immunization records, and ethical open-pasture rearing.
          </p>
        </div>

        {/* 4-Column Clean Icon Grid: Proof & Trust Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-700 transition-all flex flex-col justify-between space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-stone-900">Zero Disease Tolerance</h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Biosecure farm perimeter with dedicated quarantine sheds for 21-day acclimation before flock integration.
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Certified Quarantine
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-700 transition-all flex flex-col justify-between space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
              <Syringe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-stone-900">PPR & ET Immunization</h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Full-flock coverage with annual government-certified PPR vaccines and biannual Enterotoxaemia (ET) dual shots.
              </p>
            </div>
            <span className="text-[11px] font-bold text-amber-800 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Scheduled Boosters
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-700 transition-all flex flex-col justify-between space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
              <Pill className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-stone-900">45-Day Rotational Deworming</h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Systematic drenching using Albendazole, Closantel, and Ivermectin to prevent parasitic resistance and anemia.
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> High Body Scores
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-700 transition-all flex flex-col justify-between space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-stone-900">MVSc Doctor Oversight</h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Supervised by Chief Livestock Vet Dr. R. Srinivas (MVSc). Every sheep departs with an official health certificate.
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Health Passport Issued
            </span>
          </div>
        </div>

        {/* 2 Primary Detailed Cards: Clean Bullet Points Format */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Strict Veterinary Protocols */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-900/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Veterinary Care Protocol
                </span>
                <span className="text-xs font-mono font-bold text-stone-500">Upparapally Stud Unit</span>
              </div>

              <h3 className="text-2xl font-black text-[#1C3829] tracking-tight">
                Our Non-Negotiable Health & Disease-Free Guarantee
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed">
                Before any sheep is listed for sale or loaded for dispatch, it undergoes clinical evaluation. We maintain strict records on body weight trajectory, teeth count, and mucosal pinkness.
              </p>

              {/* Clean, Easy-to-read Bullet Points */}
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">100% PPR Certified: </strong>
                    All animals vaccinated with government-approved Peste des Petits Ruminants live tissue culture vaccine.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Dual Enterotoxaemia (ET) Coverage: </strong>
                    Pre-monsoon and post-monsoon boosters eradicate pulpy kidney illness under intensive nutrition.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Sheep Pox & CCPP Preventative Shield: </strong>
                    Zero exposure history with strict vector repellent drenching throughout the year.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Official Health Passport: </strong>
                    Each animal's RFID / ear-tag # is stamped with verified vaccination batch dates and doctor signature.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F9F5] border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span className="font-semibold text-stone-800">Need veterinary certificates for transport across state lines?</span>
              <span className="text-emerald-800 font-bold">Provided with every batch</span>
            </div>
          </div>

          {/* Card 2: Ethical Rearing & Structured Nutrition */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-900/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Rearing & Genetics Standard
                </span>
                <span className="text-xs font-mono font-bold text-stone-500">Warangal Agro-Pastoral Belt</span>
              </div>

              <h3 className="text-2xl font-black text-[#1C3829] tracking-tight">
                Natural Pasture Grazing & High-Protein Nutrition
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed">
                Superior meat texture and robust ram vitality cannot be manufactured in crowded stalls. Our flock thrives in natural semi-arid scrublands complemented by scientifically balanced green fodder.
              </p>

              {/* Clean, Easy-to-read Bullet Points */}
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Spacious Open-Air Grazing: </strong>
                    Flocks graze freely across pesticide-free native grasslands, developing dense bone density and lean muscle.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Super Napier & Alfalfa Lucerne Diet: </strong>
                    Chaffed daily at our farm, providing 16–18% crude protein for steady 150g–200g daily weight gains.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Strong Genetic Stud Lines: </strong>
                    Foundation breeding rams selected for broad ribcages, high dressing percentages (&gt;52%), and docile temperaments.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">Zero Hormones or Harmful Promoters: </strong>
                    100% natural feed supplemented only with chelated mineral mixtures, salt licks, and borehole mineral water.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 text-xs text-amber-950 flex items-center justify-between">
              <span className="font-semibold">Digital Weighbridge on site at Upparapally</span>
              <span className="font-bold font-mono">100% Transparent Weight</span>
            </div>
          </div>
        </div>

        {/* STANDARDIZED PRIMARY CTA BANNER WITH CONTRASTING ACCENTS */}
        <div className="bg-gradient-to-r from-[#1C3829] via-[#162D21] to-[#0F2017] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-900 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full border border-amber-400/30">
              Direct Farmer & Buyer Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Have Questions About Health Records or Today’s Pricing?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Call our farm desk at Upparapally now to inspect medical files, check digital weighbridge rates, or book a guided visit with our livestock managers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            {/* Standardized Primary Button */}
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 fill-stone-950" />
              <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${FARM_CONTACT.phone}?text=${encodeURIComponent(
                "Hello Kuruma Vanam Sheep Farms, I would like to review your vaccination certificates and inquire about live sheep rates."
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
      </div>
    </section>
  );
};
