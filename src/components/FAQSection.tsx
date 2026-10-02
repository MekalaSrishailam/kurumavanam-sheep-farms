import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Scale, Truck, Calendar, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { FARM_CONTACT } from '../data/mockData';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pricing Rules',
    question: 'How does purchasing by live weight (₹/kg) vs. per head work?',
    answer:
      'We offer both purchasing methods to give you total flexibility and price transparency. If you choose to purchase by live weight, your selected sheep is weighed right in front of you on our certified digital weighbridge on the day of sale, and the price is calculated based on exact live kilogram weight (e.g., 50 kg × ₹450/kg = ₹22,500). If you prefer per head purchasing, a fixed price is assigned to each individual animal based on breed grade, horn conformation, and breeding readiness. This is particularly popular for festival rams (such as Nellore Pota) and championship stud rams.'
  },
  {
    id: 'faq-2',
    category: 'Transportation & Logistics',
    question: 'How are delivery charges calculated, and is farm pickup allowed?',
    answer:
      'Farm pickup is 100% welcome and free at our farm in Upparapally village, Warangal. If you need transportation delivered directly to your doorstep, restaurant, or butcher shop, we coordinate specialized livestock transport vans equipped with soft straw bedding, natural cross-ventilation, and hydration points. Delivery charges are calculated transparently based on one-way distance (km) from our farm and vehicle capacity (small pickup for 1-5 animals, or commercial trucks for 20-100 head batches). Call or WhatsApp 8978275273 for an immediate transport quote.'
  },
  {
    id: 'faq-3',
    category: 'Farm Visits',
    question: 'How do I schedule an in-person farm visit to inspect the sheep?',
    answer:
      'We encourage all buyers to visit our farm to inspect our Deccani, Nellore Jodipi, Nellore Pota, Madras Red, and Bellary flocks in person. We are open Monday through Saturday (06:30 AM to 07:00 PM) and Sundays (07:00 AM to 05:00 PM). To ensure our livestock superintendent is available to assist with weighbridge measurements and dentition checks, simply call or WhatsApp 8978275273 at least 2 hours before your visit. We are conveniently situated on the Wardhannapet-Khammam highway in Upparapally village, Warangal.'
  },
  {
    id: 'faq-4',
    category: 'Health & Vaccination',
    question: 'What health guarantees and veterinary documentation do you provide?',
    answer:
      'Every sheep sold leaves our farm with a 100% disease-free health certificate signed by our attending veterinarian. This includes stamped vaccination records for PPR (Peste des Petits Ruminants), Enterotoxaemia (ET), and Sheep Pox, as well as our 45-day broad-spectrum rotational deworming schedule. Animals undergo mandatory pre-loading physical checks for body temperature, hoof soundness, and mucosal pinkness (FAMACHA score 1).'
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faqs" className="py-20 bg-[#FBFBFA] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-emerald-800" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C3829] tracking-tight text-balance">
            Everything You Need to Know Before Buying
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Clear, straightforward answers about our live weight pricing, direct delivery options, farm visits, and health records.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Callout */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-bold text-stone-900 text-sm">Have a specific bulk order or custom question?</div>
            <div className="text-xs text-amber-900 mt-0.5">
              Speak directly with our farm team to check today's live weighbridge prices or arrange transport.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              <span>Call / WhatsApp: {FARM_CONTACT.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${FARM_CONTACT.phone}?text=${encodeURIComponent(
                'Hello Kuruma Vanam, I have a question regarding pricing, health records, and livestock delivery.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-4 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-600/40"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
