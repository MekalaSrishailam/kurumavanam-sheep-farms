import React, { useState } from 'react';
import { Review } from '../types';
import { Star, ShieldCheck, Check, MessageSquarePlus, Sparkles } from 'lucide-react';

interface CustomerReviewsProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  reviews,
  onAddReview
}) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [sheepPurchased, setSheepPurchased] = useState('Nellore Stud Ram');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: name,
      role: role || 'Verified Livestock Farmer',
      farmLocation: location || 'Telangana / Andhra',
      rating,
      date: 'Just Now',
      comment,
      verifiedBuyer: true,
      sheepPurchased
    };

    onAddReview(newRev);
    setShowForm(false);
    setName('');
    setComment('');
  };

  return (
    <section id="reviews" className="py-16 bg-[#FDFCF9] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Community Trust & Verified Testimonials
            </div>
            <h2 className="text-3xl font-extrabold text-[#1C3829] tracking-tight mt-1 text-balance">
              Trusted by 12,000+ Shepherds & Meat Connoisseurs
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-2xl">
              Authentic feedback from commercial livestock breeders, mutton restaurateurs, and pasture fodder farmers across South India.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer w-fit"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{showForm ? 'Cancel Review' : 'Write a Review'}</span>
          </button>
        </div>

        {/* Add Review Form Dropdown */}
        {showForm && (
          <div className="bg-white p-6 rounded-2xl border border-stone-300 shadow-sm space-y-4 animate-in fade-in duration-200">
            <h3 className="font-bold text-stone-900 text-base">Share Your Experience with Kuruma Vanam</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-stone-700">Your Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. S. Rajasekhar Reddy"
                    className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700">Role / Occupation</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Livestock Breeder (200 Head)"
                    className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700">Farm Location (City / District)</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Kurnool, AP"
                    className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700">Sheep Breed or Product Purchased</label>
                  <input
                    type="text"
                    value={sheepPurchased}
                    onChange={(e) => setSheepPurchased(e.target.value)}
                    placeholder="e.g. Nellore Jodipi Stud Ram"
                    className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700">Star Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full mt-1 p-2.5 border rounded-lg border-stone-300 bg-white"
                  >
                    <option value={5}>5 Stars - Outstanding Quality</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Satisfactory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-stone-700">Your Detailed Feedback</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell other farmers about progeny growth, meat freshness, or livestock transit..."
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  rows={3}
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-800 text-white font-bold rounded-xl hover:bg-emerald-700 cursor-pointer"
                >
                  Submit Verified Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Buyer</span>
                  </div>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-stone-900">{rev.author}</div>
                  <div className="text-stone-500 text-[11px]">{rev.role} · {rev.farmLocation}</div>
                </div>
                {rev.sheepPurchased && (
                  <span className="text-[11px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                    {rev.sheepPurchased}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
