import React, { useState } from 'react';
import { FarmerListing } from '../types';
import { X, CheckCircle2, ShieldCheck, Plus, Sparkles, Scale, IndianRupee, MapPin } from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';

interface FarmerListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddListing: (listing: FarmerListing) => void;
}

export const FarmerListingModal: React.FC<FarmerListingModalProps> = ({
  isOpen,
  onClose,
  onAddListing
}) => {
  if (!isOpen) return null;

  const [farmerName, setFarmerName] = useState('');
  const [phone, setPhone] = useState('');
  const [villageLocation, setVillageLocation] = useState('');
  const [district, setDistrict] = useState('');
  const [breed, setBreed] = useState('Nellore Jodipi Rams');
  const [animalType, setAnimalType] = useState<any>('Ram');
  const [count, setCount] = useState(5);
  const [avgWeightKg, setAvgWeightKg] = useState(45);
  const [expectedPricePerHead, setExpectedPricePerHead] = useState(19000);
  const [vaccinationDone, setVaccinationDone] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!farmerName || !phone || !villageLocation) return;

    const listing: FarmerListing = {
      id: `fl-${Date.now()}`,
      farmerName,
      phone,
      villageLocation,
      district: district || 'Telangana / Andhra',
      breed,
      animalType,
      count: Number(count),
      avgWeightKg: Number(avgWeightKg),
      expectedPricePerHead: Number(expectedPricePerHead),
      vaccinationDone,
      remarks: remarks || 'Healthy, stall or pasture raised.',
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'Pending Verification'
    };

    onAddListing(listing);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="bg-[#1C3829] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KurumaRamLogo className="w-8 h-8" />
            <div>
              <h2 className="text-lg font-bold">Sell Your Sheep (Pashushala Model)</h2>
              <p className="text-xs text-emerald-300">
                Direct Farmer-to-Buyer Livestock Marketplace
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              Listing Submitted Successfully!
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Your animal batch has been submitted to the Kuruma Vanam livestock verification network. Our local livestock field officer will call <strong className="text-stone-900">{phone}</strong> within 4 hours to verify ear tags and upload live weighbridge photos.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-emerald-800 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Done & Return to Marketplace
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900 leading-relaxed">
              <strong className="font-semibold">Why Sell on Kuruma Vanam?</strong> Get 15-20% higher realization than local middlemen shandies, guaranteed advance token deposits, and zero commission on your first 3 livestock listings.
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-stone-700">Farmer / Shepherd Name</label>
                <input
                  type="text"
                  value={farmerName}
                  onChange={(e) => setFarmerName(e.target.value)}
                  placeholder="e.g. K. Venkat Yadav"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-stone-700">Phone (WhatsApp Number)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98480 00000"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-stone-700">Village / Mandal</label>
                <input
                  type="text"
                  value={villageLocation}
                  onChange={(e) => setVillageLocation(e.target.value)}
                  placeholder="e.g. Shabad Village"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-stone-700">District & State</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="e.g. Mahabubnagar / Ranga Reddy"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-stone-700">Breed</label>
                <select
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300 bg-white"
                >
                  <option value="Nellore Jodipi">Nellore Jodipi</option>
                  <option value="Nellore Palla">Nellore Palla</option>
                  <option value="Deccani Sheep">Deccani Sheep</option>
                  <option value="Mandya / Bannur">Mandya / Bannur</option>
                  <option value="Dorper Cross">Dorper Cross</option>
                  <option value="Festival Heavy Ram">Festival Heavy Ram</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-stone-700">Number of Head</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300 font-mono-num"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-stone-700">Avg Weight (kg)</label>
                <input
                  type="number"
                  min="15"
                  max="120"
                  value={avgWeightKg}
                  onChange={(e) => setAvgWeightKg(Number(e.target.value))}
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300 font-mono-num"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-stone-700">Expected Price Per Head (₹)</label>
                <input
                  type="number"
                  value={expectedPricePerHead}
                  onChange={(e) => setExpectedPricePerHead(Number(e.target.value))}
                  placeholder="e.g. 21000"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300 font-mono-num font-bold text-emerald-800"
                  required
                />
              </div>

              <div className="flex items-center pt-5">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-800">
                  <input
                    type="checkbox"
                    checked={vaccinationDone}
                    onChange={(e) => setVaccinationDone(e.target.checked)}
                    className="accent-emerald-700"
                  />
                  <span>Vaccinated (PPR/ET)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="font-bold text-stone-700">Remarks & Feeding Style</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Mention stall-fed or free grazing, teeth condition, availability date"
                className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                rows={2}
              />
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl cursor-pointer shadow-xs"
              >
                Submit Listing for Verification
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
