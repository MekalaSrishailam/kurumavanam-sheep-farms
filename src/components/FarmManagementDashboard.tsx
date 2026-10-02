import React, { useState } from 'react';
import {
  SheepBreed,
  BreedingRecord,
  HealthRecord,
  VetAppointment,
  FarmerListing,
  Order,
  BreedCategory,
  MuttonProduct
} from '../types';
import {
  ShieldCheck,
  PlusCircle,
  Calendar,
  Activity,
  HeartPulse,
  Tag,
  Truck,
  CheckCircle2,
  Clock,
  UserCheck,
  AlertCircle,
  FileCheck,
  Scale,
  Sparkles,
  Check,
  Camera,
  Upload,
  Image as ImageIcon,
  Trash2,
  X,
  Eye,
  Maximize2,
  Link as LinkIcon,
  RefreshCw,
  Pencil,
  AlertTriangle,
  ShoppingBag,
  Download,
  FileUp,
  Globe
} from 'lucide-react';
import { SheepVisualCard, KurumaRamLogo } from './FarmVisuals';

// Curated authentic real mutton meat photography presets for fast testing & instant use
export const REAL_MUTTON_PRESETS = [
  {
    name: 'Farm-Fresh Curry Cut (With Bone)',
    url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1000&q=80',
    description: 'Fresh succulent diced meat cubes on butcher cutting board'
  },
  {
    name: 'Prime Boneless Mutton Cubes',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    description: 'Hand-trimmed 95% lean boneless cubes from tender young pasture rams'
  },
  {
    name: 'Hyderabadi Dum Biryani Special Cut',
    url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=80',
    description: 'Generous 50-60g pieces with marrow ribs and succulent fat layering'
  },
  {
    name: 'Pasture Lamb Rib Chops',
    url: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80',
    description: 'Evenly trimmed rib chops ideal for pan sear, grill and tandoor'
  },
  {
    name: 'Hand-Minced Mutton (Kheema)',
    url: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1000&q=80',
    description: 'Coarsely ground fresh pasture mutton for kebabs, fry and curries'
  }
];

// Curated authentic real livestock photography presets for fast testing & reference
export const REAL_LIVESTOCK_PRESETS = [
  {
    label: 'Nellore Jodipi White Ram',
    breedHint: 'Nellore Jodipi',
    url: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1000&q=80',
    description: 'Crisp white coat with curved horns and regal posture'
  },
  {
    label: 'Deccani Pasture Ram',
    breedHint: 'Deccani Sheep',
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80',
    description: 'Dark mottled horn ram grazing on open dry pasture'
  },
  {
    label: 'Nellore Pota Heavy Champion',
    breedHint: 'Nellore Pota',
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80',
    description: 'Broad-chested 70kg+ ram portrait with thick horn curl'
  },
  {
    label: 'Madras Red Rust Ram',
    breedHint: 'Madras Red',
    url: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=1000&q=80',
    description: 'Rich auburn rust-toned hair sheep in sunlight'
  },
  {
    label: 'Bellary Dual-Purpose Flock',
    breedHint: 'Bellary Sheep',
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80',
    description: 'Hardy grazing sheep on paddock terrain'
  }
];

// Curated brand logo presets for testing
export const REAL_LOGO_PRESETS = [
  {
    name: 'Majestic Horned Ram Crest',
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=400&q=80',
    description: 'Championship ram with heavy golden horns'
  },
  {
    name: 'Pure White Nellore Ram Stud',
    url: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=400&q=80',
    description: 'Crisp white fleece with curved horns'
  },
  {
    name: 'Pastoral Grazing Flock Emblem',
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80',
    description: 'Golden hour grassland pasture emblem'
  }
];

// Curated authentic real farm cover & pastoral landscape photography presets
export const REAL_COVER_PRESETS = [
  {
    name: 'Lush Green Pasture & Grazing Flock',
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80',
    description: 'Vibrant green Telangana grassland pasture with healthy grazing flock'
  },
  {
    name: 'Sunset Golden Hour Breeding Stud Paddock',
    url: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1600&q=80',
    description: 'Warm golden sunlight over championship rams and paddock fence'
  },
  {
    name: 'Upparapally Rural Livestock Farmstead',
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=80',
    description: 'Authentic Deccan pasture landscape with rustic barn background'
  },
  {
    name: 'Panoramic Sheep Paddock & Green Meadows',
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=80',
    description: 'Wide expansive pastoral fields with purebred horned stud stock'
  }
];

// Curated authentic real mutton cover & butchery presets (REQUESTED BY USER)
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

interface FarmManagementDashboardProps {
  breeds: SheepBreed[];
  setBreeds: React.Dispatch<React.SetStateAction<SheepBreed[]>>;
  muttonProducts: MuttonProduct[];
  setMuttonProducts: React.Dispatch<React.SetStateAction<MuttonProduct[]>>;
  breedingRecords: BreedingRecord[];
  setBreedingRecords: React.Dispatch<React.SetStateAction<BreedingRecord[]>>;
  healthRecords: HealthRecord[];
  setHealthRecords: React.Dispatch<React.SetStateAction<HealthRecord[]>>;
  vetAppointments: VetAppointment[];
  setVetAppointments: React.Dispatch<React.SetStateAction<VetAppointment[]>>;
  farmerListings: FarmerListing[];
  setFarmerListings: React.Dispatch<React.SetStateAction<FarmerListing[]>>;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  initialSubTab?: SubTab;
}

export type SubTab = 'inventory' | 'mutton' | 'breeding' | 'health' | 'vet' | 'orders' | 'media';

export const FarmManagementDashboard: React.FC<FarmManagementDashboardProps> = ({
  breeds,
  setBreeds,
  muttonProducts,
  setMuttonProducts,
  breedingRecords,
  setBreedingRecords,
  healthRecords,
  setHealthRecords,
  vetAppointments,
  setVetAppointments,
  farmerListings,
  setFarmerListings,
  orders,
  setOrders,
  initialSubTab = 'inventory'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>(initialSubTab);

  // CRUD Toast / Feedback
  const [crudMessage, setCrudMessage] = useState<string>('');

  // Modals for Adding
  const [showAddSheepModal, setShowAddSheepModal] = useState(false);
  const [showAddBreedingModal, setShowAddBreedingModal] = useState(false);
  const [showAddHealthModal, setShowAddHealthModal] = useState(false);
  const [showBookVetModal, setShowBookVetModal] = useState(false);

  // Fullscreen Photo Lightbox State
  const [previewPhotoUrl, setPreviewPhotoUrl] = useState<{ url: string; title: string } | null>(null);

  // EDIT ANIMAL MODAL STATE
  const [editingSheep, setEditingSheep] = useState<SheepBreed | null>(null);
  const [editTagId, setEditTagId] = useState('');
  const [editBreedName, setEditBreedName] = useState('');
  const [editCategory, setEditCategory] = useState<BreedCategory>('Meat Breed');
  const [editGender, setEditGender] = useState<'Ram' | 'Ewe' | 'Breeding Pair' | 'Lamb'>('Ram');
  const [editAgeMonths, setEditAgeMonths] = useState(16);
  const [editWeightKg, setEditWeightKg] = useState(50);
  const [editTeethCount, setEditTeethCount] = useState<'Milk Teeth' | '2-Teeth' | '4-Teeth' | 'Full Mouth'>('2-Teeth');
  const [editPrice, setEditPrice] = useState(25000);
  const [editPricePerKg, setEditPricePerKg] = useState(480);
  const [editStockStatus, setEditStockStatus] = useState<'Available' | 'Reserved' | 'Sold' | 'Only 1 Left'>('Available');
  const [editOrigin, setEditOrigin] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editBadge, setEditBadge] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editColorPattern, setEditColorPattern] = useState('');
  const [editImageUrl, setEditImageUrl] = useState('');
  const [editVaccinated, setEditVaccinated] = useState(true);
  const [editVaccines, setEditVaccines] = useState('PPR, ET, Sheep Pox');
  const [editDewormedDate, setEditDewormedDate] = useState('');
  const [editBloodline, setEditBloodline] = useState('');
  const [editBodyScore, setEditBodyScore] = useState('');

  // DELETE ANIMAL CONFIRMATION MODAL STATE
  const [deletingSheep, setDeletingSheep] = useState<SheepBreed | null>(null);

  // MUTTON PRODUCTS CRUD & PHOTO STATES
  const [editingMutton, setEditingMutton] = useState<MuttonProduct | null>(null);
  const [editMuttonName, setEditMuttonName] = useState('');
  const [editMuttonCutType, setEditMuttonCutType] = useState('');
  const [editMuttonUnit, setEditMuttonUnit] = useState('1 kg pack');
  const [editMuttonPricePerKg, setEditMuttonPricePerKg] = useState(890);
  const [editMuttonMinOrderKg, setEditMuttonMinOrderKg] = useState(1);
  const [editMuttonInStock, setEditMuttonInStock] = useState(true);
  const [editMuttonDescription, setEditMuttonDescription] = useState('');
  const [editMuttonBestFor, setEditMuttonBestFor] = useState('');
  const [editMuttonProtein, setEditMuttonProtein] = useState('');
  const [editMuttonFat, setEditMuttonFat] = useState('');
  const [editMuttonCalories, setEditMuttonCalories] = useState('');
  const [editMuttonImageUrl, setEditMuttonImageUrl] = useState('');
  const [editMuttonPhotoInputMode, setEditMuttonPhotoInputMode] = useState<'device' | 'url' | 'presets'>('device');

  // DELETE MUTTON CONFIRMATION MODAL STATE
  const [deletingMutton, setDeletingMutton] = useState<MuttonProduct | null>(null);

  // ADD NEW MUTTON CUT MODAL STATE
  const [showAddMuttonModal, setShowAddMuttonModal] = useState(false);
  const [newMuttonName, setNewMuttonName] = useState('');
  const [newMuttonCutType, setNewMuttonCutType] = useState('');
  const [newMuttonUnit, setNewMuttonUnit] = useState('1 kg pack');
  const [newMuttonPricePerKg, setNewMuttonPricePerKg] = useState(900);
  const [newMuttonMinOrderKg, setNewMuttonMinOrderKg] = useState(1);
  const [newMuttonDescription, setNewMuttonDescription] = useState('');
  const [newMuttonBestFor, setNewMuttonBestFor] = useState('');
  const [newMuttonProtein, setNewMuttonProtein] = useState('22.0g per 100g');
  const [newMuttonFat, setNewMuttonFat] = useState('6.5g per 100g');
  const [newMuttonCalories, setNewMuttonCalories] = useState('155 kcal');
  const [newMuttonImageUrl, setNewMuttonImageUrl] = useState('');
  const [newMuttonPhotoInputMode, setNewMuttonPhotoInputMode] = useState<'device' | 'url' | 'presets'>('device');

  // QUICK PHOTO MODAL FOR MUTTON
  const [editingMuttonForPhoto, setEditingMuttonForPhoto] = useState<MuttonProduct | null>(null);
  const [tempMuttonPhotoUrl, setTempMuttonPhotoUrl] = useState('');
  const [muttonPhotoUploadMsg, setMuttonPhotoUploadMsg] = useState('');
  const [muttonPhotoInputMode, setMuttonPhotoInputMode] = useState<'device' | 'url' | 'presets'>('device');

  // Open Edit Mutton Modal
  const handleOpenEditMutton = (m: MuttonProduct) => {
    setEditingMutton(m);
    setEditMuttonName(m.name);
    setEditMuttonCutType(m.cutType);
    setEditMuttonUnit(m.unit);
    setEditMuttonPricePerKg(m.pricePerKg);
    setEditMuttonMinOrderKg(m.minOrderKg);
    setEditMuttonInStock(m.inStock !== false);
    setEditMuttonDescription(m.description);
    setEditMuttonBestFor(m.bestFor);
    setEditMuttonProtein(m.nutritionInfo?.protein || '22.5g per 100g');
    setEditMuttonFat(m.nutritionInfo?.fat || '6.0g per 100g');
    setEditMuttonCalories(m.nutritionInfo?.calories || '155 kcal');
    setEditMuttonImageUrl(m.imageUrl || '');
    setEditMuttonPhotoInputMode('device');
  };

  // Save Edit Mutton
  const handleSaveEditMutton = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMutton) return;

    const updated: MuttonProduct = {
      ...editingMutton,
      name: editMuttonName,
      cutType: editMuttonCutType,
      unit: editMuttonUnit,
      pricePerKg: Number(editMuttonPricePerKg),
      minOrderKg: Number(editMuttonMinOrderKg),
      inStock: editMuttonInStock,
      description: editMuttonDescription,
      bestFor: editMuttonBestFor,
      imageUrl: editMuttonImageUrl,
      nutritionInfo: {
        protein: editMuttonProtein,
        fat: editMuttonFat,
        calories: editMuttonCalories
      }
    };

    setMuttonProducts((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
    setEditingMutton(null);
    setCrudMessage(`✓ Successfully updated "${updated.name}" cut details and pricing!`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Confirm Delete Mutton
  const handleConfirmDeleteMutton = () => {
    if (!deletingMutton) return;
    const name = deletingMutton.name;
    setMuttonProducts((prev) => prev.filter((item) => item.id !== deletingMutton.id));
    setDeletingMutton(null);
    setCrudMessage(`✓ Permanently deleted fresh mutton cut "${name}" from catalog.`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Toggle Mutton Stock Status
  const handleToggleMuttonStock = (id: string) => {
    setMuttonProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newStatus = item.inStock === false ? true : false;
          setCrudMessage(`✓ Set "${item.name}" to ${newStatus ? 'In Stock (Available)' : 'Sold Out'}`);
          setTimeout(() => setCrudMessage(''), 3000);
          return { ...item, inStock: newStatus };
        }
        return item;
      })
    );
  };

  // Quick Photo Save for Mutton
  const handleSaveQuickMuttonPhoto = (url: string) => {
    if (!editingMuttonForPhoto) return;
    setMuttonProducts((prev) =>
      prev.map((item) => (item.id === editingMuttonForPhoto.id ? { ...item, imageUrl: url } : item))
    );
    setMuttonPhotoUploadMsg('✓ Real photo saved successfully!');
    setTimeout(() => {
      setEditingMuttonForPhoto(null);
      setMuttonPhotoUploadMsg('');
      setCrudMessage(`✓ Updated photo for "${editingMuttonForPhoto.name}"`);
      setTimeout(() => setCrudMessage(''), 3500);
    }, 800);
  };

  // Add New Mutton Cut
  const handleAddMutton = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMuttonName.trim()) return;

    const newCut: MuttonProduct = {
      id: `mut-${Date.now()}`,
      name: newMuttonName.trim(),
      cutType: newMuttonCutType.trim() || 'Custom Pasture Butchery Cut',
      unit: newMuttonUnit.trim() || '1 kg pack',
      pricePerKg: Number(newMuttonPricePerKg) || 900,
      minOrderKg: Number(newMuttonMinOrderKg) || 1,
      inStock: true,
      description: newMuttonDescription.trim() || '100% pasture-grazed tender mutton cut. Hand-cut and vacuum chilled.',
      bestFor: newMuttonBestFor.trim() || 'Curry, Roast & Biryani',
      nutritionInfo: {
        protein: newMuttonProtein.trim() || '22.0g per 100g',
        fat: newMuttonFat.trim() || '6.5g per 100g',
        calories: newMuttonCalories.trim() || '155 kcal'
      },
      imageUrl: newMuttonImageUrl.trim()
    };

    setMuttonProducts((prev) => [newCut, ...prev]);
    setShowAddMuttonModal(false);
    setNewMuttonName('');
    setNewMuttonCutType('');
    setNewMuttonDescription('');
    setNewMuttonBestFor('');
    setNewMuttonImageUrl('');
    setCrudMessage(`✓ Successfully added new fresh mutton cut "${newCut.name}" to catalog!`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // REAL FARM BRAND LOGO STATE
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [currentLogoUrl, setCurrentLogoUrl] = useState<string>(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('kv_custom_logo') || '' : '';
  });
  const [tempLogoUrl, setTempLogoUrl] = useState<string>('');
  const [logoInputMode, setLogoInputMode] = useState<'device' | 'url' | 'presets'>('device');

  // REAL FARM COVER IMAGE STATE
  const [showCoverModal, setShowCoverModal] = useState(false);
  const [currentCoverUrl, setCurrentCoverUrl] = useState<string>(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('kv_custom_cover_image') || '' : '';
  });
  const [tempCoverUrl, setTempCoverUrl] = useState<string>('');
  const [coverInputMode, setCoverInputMode] = useState<'device' | 'url' | 'presets'>('device');

  // REAL 100% PASTURE MUTTON COVER BANNER STATE (REQUESTED BY USER)
  const [showMuttonCoverModal, setShowMuttonCoverModal] = useState(false);
  const [currentMuttonCoverUrl, setCurrentMuttonCoverUrl] = useState<string>(() => {
    return typeof window !== 'undefined'
      ? localStorage.getItem('kv_custom_mutton_cover_image') || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80'
      : 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80';
  });
  const [tempMuttonCoverUrl, setTempMuttonCoverUrl] = useState<string>('');
  const [muttonCoverInputMode, setMuttonCoverInputMode] = useState<'device' | 'url' | 'presets'>('device');
  const [muttonCoverMsg, setMuttonCoverMsg] = useState<string>('');

  // Netlify Deploy & Backup State
  const [showDeployModal, setShowDeployModal] = useState(false);
  const importFileInputRef = React.useRef<HTMLInputElement>(null);

  // Photo Upload Quick Modal State
  const [editingSheepForPhoto, setEditingSheepForPhoto] = useState<SheepBreed | null>(null);
  const [tempPhotoUrl, setTempPhotoUrl] = useState('');
  const [photoUploadMsg, setPhotoUploadMsg] = useState('');
  const [photoInputMode, setPhotoInputMode] = useState<'device' | 'url' | 'presets'>('device');

  // Media Tab Studio State
  const [studioSelectedBreedId, setStudioSelectedBreedId] = useState<string>(breeds[0]?.id || '');
  const [studioPhotoUrl, setStudioPhotoUrl] = useState<string>('');
  const [studioPhotoMode, setStudioPhotoMode] = useState<'device' | 'url' | 'presets'>('device');
  const [studioFeedbackMsg, setStudioFeedbackMsg] = useState<string>('');

  const currentStudioSheep = breeds.find((b) => b.id === studioSelectedBreedId) || breeds[0];

  // Sync studio photo url when sheep selection changes
  const handleSelectStudioSheep = (sheepId: string) => {
    setStudioSelectedBreedId(sheepId);
    const selected = breeds.find((b) => b.id === sheepId);
    setStudioPhotoUrl(selected?.imageUrl || '');
    setStudioFeedbackMsg('');
  };

  // Open Edit Modal for a Sheep
  const handleOpenEditModal = (sheep: SheepBreed) => {
    setEditingSheep(sheep);
    setEditTagId(sheep.tagId);
    setEditBreedName(sheep.breedName);
    setEditCategory(sheep.category);
    setEditGender(sheep.gender);
    setEditAgeMonths(sheep.ageMonths);
    setEditWeightKg(sheep.weightKg);
    setEditTeethCount(sheep.teethCount);
    setEditPrice(sheep.price);
    setEditPricePerKg(sheep.pricePerKg || Math.round(sheep.price / (sheep.weightKg || 50)));
    setEditStockStatus(sheep.stockStatus);
    setEditOrigin(sheep.origin || 'Kuruma Vanam Farm, Upparapally');
    setEditLocation(sheep.location || 'Barn #1');
    setEditBadge(sheep.badge || '');
    setEditDescription(sheep.description || '');
    setEditColorPattern(sheep.colorPattern || '');
    setEditImageUrl(sheep.imageUrl || '');
    setEditVaccinated(sheep.healthDetails?.vaccinated ?? true);
    setEditVaccines((sheep.healthDetails?.vaccines || ['PPR', 'ET Booster', 'Sheep Pox']).join(', '));
    setEditDewormedDate(sheep.healthDetails?.dewormedDate || '2026-09-20');
    setEditBloodline(sheep.healthDetails?.bloodline || 'Pure Indigenous Lineage');
    setEditBodyScore(sheep.healthDetails?.bodyScore || '4.5 / 5.0');
  };

  // Save Edit Sheep Form
  const handleSaveEditSheep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSheep) return;

    const updated: SheepBreed = {
      ...editingSheep,
      tagId: editTagId,
      breedName: editBreedName,
      category: editCategory,
      gender: editGender,
      ageMonths: Number(editAgeMonths),
      weightKg: Number(editWeightKg),
      teethCount: editTeethCount,
      price: Number(editPrice),
      pricePerHead: Number(editPrice),
      pricePerKg: Number(editPricePerKg) || Math.round(Number(editPrice) / (Number(editWeightKg) || 50)),
      stockStatus: editStockStatus,
      origin: editOrigin,
      location: editLocation,
      badge: editBadge,
      description: editDescription,
      colorPattern: editColorPattern,
      imageUrl: editImageUrl,
      dailyFeedRequirementKg: Math.round(Number(editWeightKg) * 0.08 * 10) / 10,
      healthDetails: {
        vaccinated: editVaccinated,
        vaccines: editVaccines.split(',').map((v) => v.trim()).filter(Boolean),
        dewormedDate: editDewormedDate,
        bloodline: editBloodline,
        bodyScore: editBodyScore
      }
    };

    setBreeds((prev) => prev.map((b) => (b.id === editingSheep.id ? updated : b)));
    setCrudMessage(`✓ Updated profile for ${updated.breedName} (#${updated.tagId}) successfully!`);
    setEditingSheep(null);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Confirm Delete Sheep
  const handleConfirmDeleteSheep = () => {
    if (!deletingSheep) return;
    const tag = deletingSheep.tagId;
    const name = deletingSheep.breedName;
    setBreeds((prev) => prev.filter((b) => b.id !== deletingSheep.id));
    setCrudMessage(`✓ Animal ${name} (#${tag}) has been permanently deleted from catalog.`);
    setDeletingSheep(null);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Delete Breeding Record
  const handleDeleteBreeding = (id: string, ramTag: string, eweTag: string) => {
    if (window.confirm(`Delete breeding record for ${ramTag} x ${eweTag}?`)) {
      setBreedingRecords((prev) => prev.filter((br) => br.id !== id));
      setCrudMessage(`✓ Breeding record removed.`);
      setTimeout(() => setCrudMessage(''), 3000);
    }
  };

  // Delete Health Record
  const handleDeleteHealth = (id: string, tagId: string) => {
    if (window.confirm(`Delete health & vaccination record for Animal ${tagId}?`)) {
      setHealthRecords((prev) => prev.filter((hr) => hr.id !== id));
      setCrudMessage(`✓ Health checkup record deleted.`);
      setTimeout(() => setCrudMessage(''), 3000);
    }
  };

  // Delete Vet Appointment
  const handleDeleteVetAppointment = (id: string, farmer: string) => {
    if (window.confirm(`Cancel and delete veterinary appointment for ${farmer}?`)) {
      setVetAppointments((prev) => prev.filter((va) => va.id !== id));
      setCrudMessage(`✓ Appointment cancelled and deleted.`);
      setTimeout(() => setCrudMessage(''), 3000);
    }
  };

  // Delete Order
  const handleDeleteOrder = (id: string) => {
    if (window.confirm(`Delete Order record ${id}?`)) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
      setCrudMessage(`✓ Order ${id} removed.`);
      setTimeout(() => setCrudMessage(''), 3000);
    }
  };

  // Real Brand Logo Handlers
  const handleSaveLogo = (urlToSave: string) => {
    if (typeof window !== 'undefined') {
      if (urlToSave && urlToSave.trim().length > 0) {
        localStorage.setItem('kv_custom_logo', urlToSave.trim());
      } else {
        localStorage.removeItem('kv_custom_logo');
      }
      window.dispatchEvent(new Event('kv_custom_logo_updated'));
    }
    setCurrentLogoUrl(urlToSave.trim());
    setCrudMessage(
      urlToSave.trim()
        ? '✓ Real farm brand logo updated and applied across all headers, hero, and footers!'
        : '✓ Reset to Kuruma Vanam pastoral heritage emblem.'
    );
    setShowLogoModal(false);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  const handleResetLogo = () => {
    handleSaveLogo('');
  };

  // Real Farm Cover Image Handlers
  const handleSaveCoverImage = (urlToSave: string) => {
    if (typeof window !== 'undefined') {
      if (urlToSave && urlToSave.trim().length > 0) {
        localStorage.setItem('kv_custom_cover_image', urlToSave.trim());
      } else {
        localStorage.removeItem('kv_custom_cover_image');
      }
      window.dispatchEvent(new Event('kv_custom_cover_updated'));
    }
    setCurrentCoverUrl(urlToSave.trim());
    setCrudMessage(
      urlToSave.trim()
        ? '✓ Real farm cover image updated and applied to the website hero banner & live camera!'
        : '✓ Reset to default pastoral horizon art.'
    );
    setShowCoverModal(false);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  const handleResetCoverImage = () => {
    handleSaveCoverImage('');
  };

  // Real 100% Pasture Mutton Cover Banner Handlers (REQUESTED BY USER)
  const handleSaveMuttonCover = (urlToSave: string) => {
    const trimmed = (urlToSave || '').trim();
    if (typeof window !== 'undefined') {
      if (trimmed.length > 0) {
        localStorage.setItem('kv_custom_mutton_cover_image', trimmed);
        setCurrentMuttonCoverUrl(trimmed);
      } else {
        localStorage.removeItem('kv_custom_mutton_cover_image');
        setCurrentMuttonCoverUrl('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80');
      }
      window.dispatchEvent(new Event('kv_custom_mutton_cover_updated'));
    }
    setMuttonCoverMsg('✓ Real fresh mutton cover banner image updated successfully!');
    setCrudMessage('✓ 100% Pasture Mutton cover image updated and synchronized!');
    setTimeout(() => {
      setMuttonCoverMsg('');
      setShowMuttonCoverModal(false);
    }, 1200);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  const handleResetMuttonCover = () => {
    handleSaveMuttonCover('');
  };

  // Export full farm data & images snapshot to JSON (FOR NETLIFY & PERMANENT SAVING)
  const handleExportData = () => {
    const dataSnapshot = {
      version: '2.0',
      exportDate: new Date().toISOString(),
      farmName: 'Kuruma Vanam Sheep Farm, Upparapally',
      customCoverImage: currentCoverUrl || (typeof window !== 'undefined' ? localStorage.getItem('kv_custom_cover_image') || '' : ''),
      customMuttonCoverImage: currentMuttonCoverUrl || (typeof window !== 'undefined' ? localStorage.getItem('kv_custom_mutton_cover_image') || '' : ''),
      customLogo: currentLogoUrl || (typeof window !== 'undefined' ? localStorage.getItem('kv_custom_logo') || '' : ''),
      breeds,
      muttonProducts,
      breedingRecords,
      healthRecords,
      orders
    };

    const blob = new Blob([JSON.stringify(dataSnapshot, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kuruma-vanam-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setCrudMessage('✓ Farm backup exported successfully as JSON! Keep this file safe.');
    setTimeout(() => setCrudMessage(''), 4000);
  };

  // Import full farm data & images snapshot from JSON
  const handleImportFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.breeds && Array.isArray(parsed.breeds)) {
          setBreeds(parsed.breeds);
          localStorage.setItem('kv_sheep_breeds_v2', JSON.stringify(parsed.breeds));
        }
        if (parsed.muttonProducts && Array.isArray(parsed.muttonProducts)) {
          setMuttonProducts(parsed.muttonProducts);
          localStorage.setItem('kv_mutton_products_v2', JSON.stringify(parsed.muttonProducts));
        }
        if (parsed.breedingRecords && Array.isArray(parsed.breedingRecords)) {
          setBreedingRecords(parsed.breedingRecords);
          localStorage.setItem('kv_breeding_records_v2', JSON.stringify(parsed.breedingRecords));
        }
        if (parsed.healthRecords && Array.isArray(parsed.healthRecords)) {
          setHealthRecords(parsed.healthRecords);
          localStorage.setItem('kv_health_records_v2', JSON.stringify(parsed.healthRecords));
        }
        if (parsed.customCoverImage) {
          localStorage.setItem('kv_custom_cover_image', parsed.customCoverImage);
          setCurrentCoverUrl(parsed.customCoverImage);
          window.dispatchEvent(new Event('kv_custom_cover_updated'));
        }
        if (parsed.customMuttonCoverImage) {
          localStorage.setItem('kv_custom_mutton_cover_image', parsed.customMuttonCoverImage);
          setCurrentMuttonCoverUrl(parsed.customMuttonCoverImage);
          window.dispatchEvent(new Event('kv_custom_mutton_cover_updated'));
        }
        if (parsed.customLogo) {
          localStorage.setItem('kv_custom_logo', parsed.customLogo);
          setCurrentLogoUrl(parsed.customLogo);
          window.dispatchEvent(new Event('kv_custom_logo_updated'));
        }
        setCrudMessage('✓ Farm state & all images restored successfully! Everything is synchronized.');
        setTimeout(() => setCrudMessage(''), 4500);
      } catch (err) {
        alert('Invalid backup JSON file. Please provide a valid Kuruma Vanam backup JSON.');
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  // Handle file reader for real device image upload
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('Please choose an image file under 8MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          callback(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save photo to selected sheep from Modal
  const handleSavePhotoToSheep = () => {
    if (!editingSheepForPhoto) return;
    setBreeds((prev) =>
      prev.map((b) => (b.id === editingSheepForPhoto.id ? { ...b, imageUrl: tempPhotoUrl } : b))
    );
    setPhotoUploadMsg(`Real photo saved for ${editingSheepForPhoto.breedName} (#${editingSheepForPhoto.tagId})!`);
    setTimeout(() => {
      setPhotoUploadMsg('');
      setEditingSheepForPhoto(null);
    }, 1100);
  };

  // Remove photo from sheep in Modal
  const handleRemovePhotoFromSheep = () => {
    if (!editingSheepForPhoto) return;
    setBreeds((prev) =>
      prev.map((b) => (b.id === editingSheepForPhoto.id ? { ...b, imageUrl: '' } : b))
    );
    setTempPhotoUrl('');
    setPhotoUploadMsg('Photo removed. Breed will now display authentic vector artwork.');
    setTimeout(() => {
      setPhotoUploadMsg('');
      setEditingSheepForPhoto(null);
    }, 1100);
  };

  // Save photo to selected sheep from Media Studio Tab
  const handleSaveStudioPhoto = () => {
    if (!currentStudioSheep) return;
    setBreeds((prev) =>
      prev.map((b) => (b.id === currentStudioSheep.id ? { ...b, imageUrl: studioPhotoUrl } : b))
    );
    setStudioFeedbackMsg(`✓ Real photograph attached to ${currentStudioSheep.breedName} (#${currentStudioSheep.tagId}) and saved to live flock inventory!`);
    setTimeout(() => {
      setStudioFeedbackMsg('');
    }, 3500);
  };

  // Remove photo in Media Studio Tab
  const handleRemoveStudioPhoto = () => {
    if (!currentStudioSheep) return;
    setBreeds((prev) =>
      prev.map((b) => (b.id === currentStudioSheep.id ? { ...b, imageUrl: '' } : b))
    );
    setStudioPhotoUrl('');
    setStudioFeedbackMsg('Photo removed. Animal reverted to default pastoral vector art.');
    setTimeout(() => {
      setStudioFeedbackMsg('');
    }, 3500);
  };

  // New Sheep Form States
  const [newTagId, setNewTagId] = useState(`KV-RAM-${Math.floor(100 + Math.random() * 900)}`);
  const [newBreedName, setNewBreedName] = useState('Nellore Jodipi Ram');
  const [newCategory, setNewCategory] = useState<any>('Breeding Ram');
  const [newWeight, setNewWeight] = useState(60);
  const [newAge, setNewAge] = useState(16);
  const [newPrice, setNewPrice] = useState(32000);
  const [newStatus, setNewStatus] = useState<any>('Available');
  const [newTeeth, setNewTeeth] = useState<any>('2-Teeth');
  const [newOrigin, setNewOrigin] = useState('Kuruma Vanam Central Stud Unit');
  const [newSheepPhotoUrl, setNewSheepPhotoUrl] = useState('');

  // New Breeding Form
  const [newRamTag, setNewRamTag] = useState('KV-RAM-101 (Nellore Stud)');
  const [newEweTag, setNewEweTag] = useState('KV-EWE-220');
  const [newMatingDate, setNewMatingDate] = useState('2026-10-02');
  const [newProgenyNotes, setNewProgenyNotes] = useState('Natural service verified in paddock #1.');

  // New Health Form
  const [newHealthTag, setNewHealthTag] = useState('KV-RAM-101');
  const [newHealthVaccine, setNewHealthVaccine] = useState('Enterotoxaemia (ET) Booster');
  const [newDewormer, setNewDewormer] = useState('Ivermectin 1% injectable');
  const [newVetName, setNewVetName] = useState('Dr. R. Srinivas, MVSc');
  const [newHealthNotes, setNewHealthNotes] = useState('Checked heart & lung sounds, clear.');

  // New Vet Appointment Form
  const [vetFarmerName, setVetFarmerName] = useState('');
  const [vetLocation, setVetLocation] = useState('');
  const [vetPhone, setVetPhone] = useState('');
  const [vetDate, setVetDate] = useState('2026-10-08');
  const [vetTimeSlot, setVetTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [vetFlockSize, setVetFlockSize] = useState(50);
  const [vetPurpose, setVetPurpose] = useState<any>('Flock Health Inspection');

  // Handle Sheep Stock Status Update
  const updateSheepStock = (id: string, newStock: any) => {
    setBreeds((prev) =>
      prev.map((b) => (b.id === id ? { ...b, stockStatus: newStock } : b))
    );
  };

  // Add Sheep Submission
  const handleAddSheep = (e: React.FormEvent) => {
    e.preventDefault();
    const created: SheepBreed = {
      id: `sb-${Date.now()}`,
      tagId: newTagId,
      breedName: newBreedName,
      category: newCategory,
      ageMonths: Number(newAge),
      weightKg: Number(newWeight),
      gender: newCategory.includes('Ewe') ? 'Ewe' : 'Ram',
      teethCount: newTeeth,
      price: Number(newPrice),
      pricePerHead: Number(newPrice),
      pricePerKg: Math.round(Number(newPrice) / (Number(newWeight) || 50)),
      stockStatus: newStatus,
      description: `Registered pureblood ${newBreedName} from ${newOrigin}. Certified by Kuruma Vanam Livestock records.`,
      origin: newOrigin,
      colorPattern: 'Standard breed coat pattern',
      healthDetails: {
        vaccinated: true,
        vaccines: ['PPR Certified', 'ET Annual Booster'],
        dewormedDate: 'Recent Albendazole Treatment',
        bloodline: 'Registered Kuruma Lineage',
        bodyScore: '4.5 / 5.0'
      },
      location: 'Barn #1 Quarantine Paddock',
      imageUrl: newSheepPhotoUrl,
      dailyFeedRequirementKg: Math.round(Number(newWeight) * 0.08 * 10) / 10
    };

    setBreeds((prev) => [created, ...prev]);
    setNewSheepPhotoUrl('');
    setNewTagId(`KV-RAM-${Math.floor(100 + Math.random() * 900)}`);
    setShowAddSheepModal(false);
    setCrudMessage(`✓ Added new sheep ${created.breedName} (#${created.tagId}) to catalog!`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Add Breeding Record Submission
  const handleAddBreeding = (e: React.FormEvent) => {
    e.preventDefault();
    const matingObj = new Date(newMatingDate);
    const lambingObj = new Date(matingObj.getTime() + 147 * 24 * 60 * 60 * 1000);
    const expectedStr = lambingObj.toISOString().split('T')[0];

    const record: BreedingRecord = {
      id: `br-${Date.now()}`,
      ramTag: newRamTag,
      ramBreed: 'Pedigree Stud',
      eweTag: newEweTag,
      eweBreed: 'Breeding Ewe',
      matingDate: newMatingDate,
      expectedLambingDate: expectedStr,
      status: 'Mated',
      progenyNotes: newProgenyNotes
    };

    setBreedingRecords((prev) => [record, ...prev]);
    setShowAddBreedingModal(false);
    setCrudMessage(`✓ Recorded new mating event for Ram ${newRamTag} x Ewe ${newEweTag}`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Add Health Record Submission
  const handleAddHealth = (e: React.FormEvent) => {
    e.preventDefault();
    const record: HealthRecord = {
      id: `hr-${Date.now()}`,
      tagId: newHealthTag,
      breed: 'Herd Animal',
      checkupDate: new Date().toISOString().split('T')[0],
      bodyWeightKg: 55,
      condition: 'Excellent',
      vaccineAdministered: newHealthVaccine,
      dewormerName: newDewormer,
      veterinarian: newVetName,
      nextFollowUpDate: '2026-12-15',
      notes: newHealthNotes
    };

    setHealthRecords((prev) => [record, ...prev]);
    setShowAddHealthModal(false);
    setCrudMessage(`✓ Health record logged for tag #${newHealthTag}`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Book Vet Appointment
  const handleBookVet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vetFarmerName || !vetPhone) return;

    const appointment: VetAppointment = {
      id: `va-${Date.now()}`,
      farmerName: vetFarmerName,
      farmLocation: vetLocation || 'Local Farm, Telangana',
      contactPhone: vetPhone,
      date: vetDate,
      timeSlot: vetTimeSlot,
      flockSize: Number(vetFlockSize),
      purpose: vetPurpose,
      status: 'Confirmed',
      vetDoctor: 'Dr. R. Srinivas, MVSc (Lead Farm Vet)'
    };

    setVetAppointments((prev) => [appointment, ...prev]);
    setShowBookVetModal(false);
    setVetFarmerName('');
    setVetPhone('');
    setVetLocation('');
    setCrudMessage(`✓ Scheduled veterinary visit for ${appointment.farmerName}`);
    setTimeout(() => setCrudMessage(''), 3500);
  };

  // Update order status
  const updateOrderStatus = (orderId: string, status: any) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, fulfillmentStatus: status } : o))
    );
  };

  const realPhotosCount = breeds.filter((b) => b.imageUrl && b.imageUrl.trim().length > 0).length;

  return (
    <section id="farm-management" className="py-12 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Hub Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-stone-200">
          <div className="flex items-start sm:items-center gap-4">
            {/* Interactive Farm Brand Logo Avatar */}
            <div
              onClick={() => {
                setTempLogoUrl(currentLogoUrl);
                setShowLogoModal(true);
              }}
              className="relative group cursor-pointer shrink-0"
              title="Click to upload real farm logo image"
            >
              <KurumaRamLogo className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md border-2 border-amber-500" size={70} />
              <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity text-[10px] font-bold">
                <Camera className="w-5 h-5 mb-0.5 text-amber-300" />
                <span>Change</span>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-stone-950 p-1.5 rounded-full shadow-sm border-2 border-white">
                <Pencil className="w-3 h-3 text-stone-950" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>KURUMA VANAM ADMINISTRATIVE & VET HUB</span>
                {currentLogoUrl ? (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    ✓ Real Logo Active
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-300">
                    Default Heritage Emblem
                  </span>
                )}
                {currentCoverUrl ? (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300">
                    ✓ Real Cover Active
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-300">
                    Default Horizon Cover
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C3829] tracking-tight mt-1 font-serif">
                Sheep Farm Management & Operational Logs
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                Full administrative control: <strong>Upload real cover & logo</strong>, edit animal traits & pricing, manage fresh mutton, delete records, and manage herd logistics.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Direct Upload Real Cover Image Button */}
            <button
              type="button"
              onClick={() => {
                setTempCoverUrl(currentCoverUrl);
                setShowCoverModal(true);
              }}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-all border border-emerald-600"
              title="Upload custom cover photo for the website hero banner and showcase"
            >
              <ImageIcon className="w-4 h-4 text-emerald-300" />
              <span>{currentCoverUrl ? 'Change Cover Photo' : 'Upload Real Cover Image'}</span>
            </button>

            {/* Direct Upload Real Logo Action Button */}
            <button
              type="button"
              onClick={() => {
                setTempLogoUrl(currentLogoUrl);
                setShowLogoModal(true);
              }}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-all"
              title="Upload custom logo photo for the entire website"
            >
              <Camera className="w-4 h-4 text-stone-950" />
              <span>{currentLogoUrl ? 'Change Farm Logo' : 'Upload Real Logo'}</span>
            </button>

            {/* Export Backup JSON Button (For Netlify / Offline Save) */}
            <button
              type="button"
              onClick={handleExportData}
              className="px-3.5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm transition-all border border-stone-700"
              title="Export all animal traits, prices, photos, and settings to a JSON backup file"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Export Backup</span>
            </button>

            {/* Restore Backup JSON Button */}
            <button
              type="button"
              onClick={() => importFileInputRef.current?.click()}
              className="px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all border border-stone-300"
              title="Restore farm data, photos, and settings from a previously saved JSON backup"
            >
              <FileUp className="w-3.5 h-3.5 text-emerald-700" />
              <span>Restore Backup</span>
            </button>
            <input
              type="file"
              ref={importFileInputRef}
              accept=".json,application/json"
              onChange={handleImportFileChange}
              className="hidden"
            />

            {/* Netlify Deployment Helper Guide Button */}
            <button
              type="button"
              onClick={() => setShowDeployModal(true)}
              className="px-3.5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all border border-blue-300"
              title="View Netlify deployment instructions and preview settings"
            >
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span>Netlify Deploy Guide</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 font-medium hidden sm:inline">Active Role:</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-900 text-amber-200 border border-emerald-800 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Farm Superintendent / Admin</span>
              </span>
            </div>
          </div>
        </div>

        {/* Global CRUD Notification Toast */}
        {crudMessage && (
          <div className="p-3.5 rounded-2xl bg-emerald-100 border-2 border-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-between shadow-sm animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{crudMessage}</span>
            </div>
            <button
              onClick={() => setCrudMessage('')}
              className="text-stone-500 hover:text-stone-800 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Navigation Tabs (Functional segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200 scrollbar-none">
          <button
            onClick={() => setActiveSubTab('inventory')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'inventory'
                ? 'bg-[#1C3829] text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Livestock Inventory ({breeds.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('mutton')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'mutton'
                ? 'bg-red-800 text-white shadow-sm ring-2 ring-red-400'
                : 'bg-red-50 text-red-900 border border-red-200 hover:bg-red-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-red-700" />
            <span>100% Pasture Mutton ({muttonProducts.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveSubTab('media');
              if (currentStudioSheep) {
                setStudioPhotoUrl(currentStudioSheep.imageUrl || '');
              }
            }}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'media'
                ? 'bg-amber-600 text-stone-950 font-black shadow-sm ring-2 ring-amber-400'
                : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
            }`}
          >
            <Camera className="w-4 h-4 text-amber-900" />
            <span>Real Photo Manager & Gallery ({realPhotosCount}/{breeds.length} Real)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('breeding')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'breeding'
                ? 'bg-[#1C3829] text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Breeding & Gestation ({breedingRecords.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('health')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'health'
                ? 'bg-[#1C3829] text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <HeartPulse className="w-4 h-4" />
            <span>Vaccine Registry ({healthRecords.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('vet')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'vet'
                ? 'bg-[#1C3829] text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Veterinary Visits ({vetAppointments.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('orders')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'orders'
                ? 'bg-[#1C3829] text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Orders & Dispatch ({orders.length})</span>
          </button>
        </div>

        {/* TAB 1: LIVESTOCK INVENTORY WITH FULL EDIT & DELETE ACTIONS */}
        {activeSubTab === 'inventory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Active Livestock Inventory Management</h3>
                <p className="text-xs text-stone-500">
                  Update traits, edit pricing, upload real photos, and delete animals with live synchronization to the buyer marketplace.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    setActiveSubTab('media');
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Camera className="w-4 h-4" />
                  <span>Photo Studio</span>
                </button>
                <button
                  onClick={() => setShowAddSheepModal(true)}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Add New Sheep Profile</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-xs">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-stone-100 text-stone-800 uppercase text-[10px] tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Photo</th>
                    <th className="py-3 px-4">Tag ID</th>
                    <th className="py-3 px-4">Breed Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Live Weight</th>
                    <th className="py-3 px-4">Age / Teeth</th>
                    <th className="py-3 px-4">Price (₹)</th>
                    <th className="py-3 px-4">Stock Status</th>
                    <th className="py-3 px-4 text-right">Actions (Edit / Delete)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {breeds.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-8 text-center text-stone-500 text-xs">
                        No sheep currently in catalog. Click <strong>"Add New Sheep Profile"</strong> above to register an animal.
                      </td>
                    </tr>
                  ) : (
                    breeds.map((b) => (
                      <tr key={b.id} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3 px-4">
                          {b.imageUrl ? (
                            <div
                              onClick={() => setPreviewPhotoUrl({ url: b.imageUrl, title: `${b.breedName} (#${b.tagId})` })}
                              className="relative w-12 h-12 rounded-lg overflow-hidden border-2 border-emerald-600 shadow-xs cursor-pointer group"
                              title="Click to view full photo"
                            >
                              <img src={b.imageUrl} alt={b.breedName} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                              <span className="absolute bottom-0 right-0 bg-emerald-700 text-white text-[8px] px-1 font-bold">Real</span>
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                setEditingSheepForPhoto(b);
                                setTempPhotoUrl('');
                                setPhotoUploadMsg('');
                              }}
                              className="w-12 h-12 rounded-lg bg-stone-100 border border-stone-300 flex flex-col items-center justify-center text-stone-400 text-[9px] font-bold cursor-pointer hover:border-amber-400 hover:text-amber-800 transition-colors"
                              title="Click to add real photo"
                            >
                              <Camera className="w-4 h-4 text-stone-400 mb-0.5" />
                              <span className="text-[8px]">No Photo</span>
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-stone-900">
                          {b.tagId}
                        </td>
                        <td className="py-3 px-4 font-semibold text-stone-900">
                          {b.breedName}
                        </td>
                        <td className="py-3 px-4 text-stone-600">{b.category}</td>
                        <td className="py-3 px-4 font-mono font-semibold text-stone-800">
                          {b.weightKg} kg
                        </td>
                        <td className="py-3 px-4">
                          {b.ageMonths}M · {b.teethCount}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-emerald-800">
                          ₹{b.price.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-4">
                          <select
                            value={b.stockStatus}
                            onChange={(e) => updateSheepStock(b.id, e.target.value)}
                            className={`py-1 px-2.5 rounded text-xs font-bold border cursor-pointer ${
                              b.stockStatus === 'Available'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : b.stockStatus === 'Reserved'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : b.stockStatus === 'Only 1 Left'
                                ? 'bg-orange-50 text-orange-800 border-orange-300'
                                : 'bg-stone-100 text-stone-600 border-stone-300'
                            }`}
                          >
                            <option value="Available">Available</option>
                            <option value="Only 1 Left">Only 1 Left</option>
                            <option value="Reserved">Reserved</option>
                            <option value="Sold">Sold</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Photo Button */}
                            <button
                              type="button"
                              onClick={() => {
                                setEditingSheepForPhoto(b);
                                setTempPhotoUrl(b.imageUrl || '');
                                setPhotoUploadMsg('');
                              }}
                              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs ${
                                b.imageUrl
                                  ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                                  : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300'
                              }`}
                              title={b.imageUrl ? 'Change real photo' : 'Add real photo'}
                            >
                              <Camera className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">{b.imageUrl ? 'Photo' : 'Add Pic'}</span>
                            </button>

                            {/* Edit Animal Button */}
                            <button
                              type="button"
                              onClick={() => handleOpenEditModal(b)}
                              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                              title="Edit all animal details and pricing"
                            >
                              <Pencil className="w-3.5 h-3.5 text-blue-700" />
                              <span className="hidden sm:inline">Edit</span>
                            </button>

                            {/* Delete Animal Button */}
                            <button
                              type="button"
                              onClick={() => setDeletingSheep(b)}
                              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                              title="Delete sheep from inventory"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-600" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: 100% PASTURE-GRAZED FRESH MUTTON (FULL EDIT, DELETE, PHOTO & ADD OPTIONS) */}
        {activeSubTab === 'mutton' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Header & Quick Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-900 text-[11px] font-bold border border-red-200 mb-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-red-700" />
                  <span>FARM-TO-TABLE COLD CHAIN BUTCHERY</span>
                </div>
                <h3 className="font-extrabold text-stone-900 text-xl tracking-tight">
                  100% Pasture-Grazed Fresh Mutton Management
                </h3>
                <p className="text-xs text-stone-500 max-w-2xl mt-0.5">
                  Complete catalog control: <strong>Edit cuts</strong>, update price per kg, adjust minimum orders, toggle daily stock availability, <strong>upload real butcher photos</strong>, and <strong>delete cuts</strong> with instant live synchronization.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setTempMuttonCoverUrl(currentMuttonCoverUrl);
                    setShowMuttonCoverModal(true);
                  }}
                  className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-stone-700 shadow-xs"
                  title="Upload real cover photo or select presets for 100% Pasture Mutton feature"
                >
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span>Change Mutton Cover Image</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddMuttonModal(true)}
                  className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Add New Mutton Cut</span>
                </button>
              </div>
            </div>

            {/* REAL MUTTON COVER BANNER CONTROL BAR (REQUESTED BY USER) */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-stone-700 bg-stone-900 shadow-inner">
                  <img
                    src={currentMuttonCoverUrl}
                    alt="Current Mutton Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-1.5 left-2 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-bold text-amber-300 font-mono">
                    LIVE BANNER
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-red-900/80 text-red-200 text-[10px] font-black border border-red-700">
                      COVER PHOTO FEATURE
                    </span>
                    <span className="text-[11px] text-stone-400 hidden sm:inline">
                      Live on customer mutton storefront & delivery section
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    100% Pasture-Grazed Fresh Mutton Cover Image
                  </h4>
                  <p className="text-xs text-stone-400 line-clamp-1 mt-0.5">
                    Real photo displayed across the customer fresh mutton storefront banner, order portal, and mobile catalog.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setTempMuttonCoverUrl(currentMuttonCoverUrl);
                    setShowMuttonCoverModal(true);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-300" />
                  <span>Update Cover Photo</span>
                </button>
                {currentMuttonCoverUrl && (
                  <button
                    type="button"
                    onClick={handleResetMuttonCover}
                    className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white font-semibold text-xs transition-colors cursor-pointer border border-stone-700"
                    title="Reset to default pastoral butchery cover"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Active Cuts</div>
                <div className="text-xl font-black text-stone-900 mt-0.5 font-mono-num">{muttonProducts.length} Cuts</div>
                <div className="text-[11px] text-stone-500">Live in buyer basket</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Available Today</div>
                <div className="text-xl font-black text-emerald-950 mt-0.5 font-mono-num">
                  {muttonProducts.filter((m) => m.inStock !== false).length} / {muttonProducts.length} In Stock
                </div>
                <div className="text-[11px] text-emerald-700">Orders actively accepted</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Real Butchery Photos</div>
                <div className="text-xl font-black text-amber-950 mt-0.5 font-mono-num">
                  {muttonProducts.filter((m) => m.imageUrl && m.imageUrl.trim().length > 0).length} / {muttonProducts.length}
                </div>
                <div className="text-[11px] text-amber-700">Real photos uploaded</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Delivery Logistics</div>
                <div className="text-xs font-bold text-stone-900 mt-1">2°C Vacuum Chilled</div>
                <div className="text-[11px] text-stone-500">7-10 AM & 4-7 PM Slots</div>
              </div>
            </div>

            {/* Mutton Products Inventory Table */}
            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-xs">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-stone-100 text-stone-800 uppercase text-[10px] tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Photo</th>
                    <th className="py-3 px-4">Cut Name & Best For</th>
                    <th className="py-3 px-4">Butchery Spec</th>
                    <th className="py-3 px-4">Pack Unit</th>
                    <th className="py-3 px-4">Price / kg (₹)</th>
                    <th className="py-3 px-4">Min Order</th>
                    <th className="py-3 px-4">Stock Status</th>
                    <th className="py-3 px-4">Nutrition Info</th>
                    <th className="py-3 px-4 text-right">Actions (Edit / Delete)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {muttonProducts.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-8 text-center text-stone-500 text-xs">
                        No mutton cuts in catalog. Click <strong>"Add New Mutton Cut"</strong> above to create one.
                      </td>
                    </tr>
                  ) : (
                    muttonProducts.map((m) => (
                      <tr key={m.id} className="hover:bg-stone-50/80 transition-colors">
                        {/* Photo Column */}
                        <td className="py-3 px-4">
                          {m.imageUrl && m.imageUrl.trim().length > 0 ? (
                            <div
                              onClick={() => setPreviewPhotoUrl({ url: m.imageUrl, title: m.name })}
                              className="relative w-12 h-12 rounded-lg overflow-hidden border-2 border-red-500 shadow-xs cursor-pointer group"
                              title="Click to view full photo"
                            >
                              <img
                                src={m.imageUrl}
                                alt={m.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                              />
                              <span className="absolute bottom-0 right-0 bg-red-700 text-white text-[8px] px-1 font-bold">
                                Real
                              </span>
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                setEditingMuttonForPhoto(m);
                                setTempMuttonPhotoUrl('');
                                setMuttonPhotoUploadMsg('');
                              }}
                              className="w-12 h-12 rounded-lg bg-stone-100 border border-stone-300 flex flex-col items-center justify-center text-stone-400 text-[9px] font-bold cursor-pointer hover:border-red-400 hover:text-red-800 transition-colors"
                              title="Click to add real photo"
                            >
                              <Camera className="w-4 h-4 text-stone-400 mb-0.5" />
                              <span className="text-[8px]">No Photo</span>
                            </div>
                          )}
                        </td>

                        {/* Cut Name & Best For */}
                        <td className="py-3 px-4">
                          <div className="font-bold text-stone-900 text-xs sm:text-sm">{m.name}</div>
                          <div className="text-[11px] text-amber-900 font-medium">Best for: {m.bestFor}</div>
                        </td>

                        {/* Butchery Spec */}
                        <td className="py-3 px-4 text-stone-600 max-w-xs">
                          <span className="line-clamp-2 text-[11px]">{m.cutType}</span>
                        </td>

                        {/* Unit */}
                        <td className="py-3 px-4">
                          <span className="font-mono font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded text-[11px]">
                            {m.unit}
                          </span>
                        </td>

                        {/* Price per Kg */}
                        <td className="py-3 px-4">
                          <span className="font-mono font-black text-emerald-800 text-sm">
                            ₹{m.pricePerKg}
                          </span>
                          <span className="text-[10px] text-stone-400 font-normal"> / kg</span>
                        </td>

                        {/* Min Order */}
                        <td className="py-3 px-4 font-mono font-semibold text-stone-700">
                          {m.minOrderKg} kg
                        </td>

                        {/* Stock Status with 1-Click Toggle */}
                        <td className="py-3 px-4">
                          <button
                            type="button"
                            onClick={() => handleToggleMuttonStock(m.id)}
                            className={`py-1 px-2.5 rounded-lg text-[11px] font-bold border cursor-pointer transition-colors flex items-center gap-1.5 ${
                              m.inStock !== false
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                                : 'bg-red-50 text-red-700 border-red-300 hover:bg-red-100'
                            }`}
                            title="Click to toggle In Stock vs Sold Out"
                          >
                            <span className={`w-2 h-2 rounded-full ${m.inStock !== false ? 'bg-emerald-500' : 'bg-red-500'}`} />
                            <span>{m.inStock !== false ? 'In Stock' : 'Sold Out'}</span>
                          </button>
                        </td>

                        {/* Nutrition Info */}
                        <td className="py-3 px-4 text-[10px] text-stone-500 font-mono-num whitespace-nowrap">
                          <div>Prot: {m.nutritionInfo?.protein || '22g'}</div>
                          <div>Fat: {m.nutritionInfo?.fat || '6g'} · {m.nutritionInfo?.calories || '155 kcal'}</div>
                        </td>

                        {/* Action Buttons: Photo, Edit, Delete */}
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Photo Button */}
                            <button
                              type="button"
                              onClick={() => {
                                setEditingMuttonForPhoto(m);
                                setTempMuttonPhotoUrl(m.imageUrl || '');
                                setMuttonPhotoUploadMsg('');
                              }}
                              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs ${
                                m.imageUrl
                                  ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                                  : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300'
                              }`}
                              title={m.imageUrl ? 'Change real photo' : 'Add real photo'}
                            >
                              <Camera className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">{m.imageUrl ? 'Photo' : 'Add Pic'}</span>
                            </button>

                            {/* Edit Button */}
                            <button
                              type="button"
                              onClick={() => handleOpenEditMutton(m)}
                              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                              title="Edit cut details, pricing, and stock"
                            >
                              <Pencil className="w-3.5 h-3.5 text-blue-700" />
                              <span className="hidden sm:inline">Edit</span>
                            </button>

                            {/* Delete Button */}
                            <button
                              type="button"
                              onClick={() => setDeletingMutton(m)}
                              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                              title="Delete cut from catalog"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-600" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Visual Cut Cards Gallery */}
            <div className="pt-4 space-y-3">
              <h4 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Customer Marketplace Card Preview</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {muttonProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#FCFCFA] rounded-2xl border border-stone-200 shadow-xs p-4 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      {/* Photo / Graphic Banner */}
                      <div className="relative h-36 rounded-xl overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 flex flex-col justify-between p-3 text-white">
                        {product.imageUrl && product.imageUrl.trim().length > 0 ? (
                          <>
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50" />
                          </>
                        ) : (
                          <div className="flex items-center justify-center my-auto opacity-75">
                            <ShoppingBag className="w-10 h-10 text-amber-300" />
                          </div>
                        )}

                        <div className="relative z-10 flex items-center justify-between text-xs">
                          <span className="font-mono-num font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-amber-500/40">
                            {product.unit}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                              product.inStock !== false
                                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40'
                                : 'bg-red-950/90 text-red-300 border-red-500/40'
                            }`}
                          >
                            {product.inStock !== false ? 'In Stock' : 'Sold Out'}
                          </span>
                        </div>

                        <div className="relative z-10 text-[11px] text-stone-200 bg-black/60 -mx-3 -mb-3 p-2 px-3 backdrop-blur-xs flex items-center justify-between">
                          <span className="truncate">{product.cutType}</span>
                        </div>
                      </div>

                      <div className="pt-3 space-y-1">
                        <div className="font-bold text-stone-900 text-base">{product.name}</div>
                        <p className="text-xs text-stone-500 line-clamp-2">{product.description}</p>
                        <div className="text-[11px] text-amber-900 font-semibold pt-1">
                          Best for: <span className="font-normal text-stone-700">{product.bestFor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-stone-400 uppercase">Price per kg</div>
                        <div className="text-base font-extrabold text-[#1C3829] font-mono-num">
                          ₹{product.pricePerKg} <span className="text-xs font-normal text-stone-500">/ kg</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingMuttonForPhoto(product);
                            setTempMuttonPhotoUrl(product.imageUrl || '');
                            setMuttonPhotoUploadMsg('');
                          }}
                          className="p-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 text-xs font-bold cursor-pointer"
                          title="Change photo"
                        >
                          <Camera className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenEditMutton(product)}
                          className="px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Pencil className="w-3.5 h-3.5 text-blue-700" />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeletingMutton(product)}
                          className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 text-xs cursor-pointer"
                          title="Delete cut"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REAL PHOTO MANAGER & GALLERY */}
        {activeSubTab === 'media' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Showcase Banner */}
            <div className="bg-gradient-to-r from-[#1C3829] via-[#14291E] to-[#0A1610] text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                    <Camera className="w-3.5 h-3.5" />
                    <span>AUTHENTIC PADDOCK PHOTOGRAPHY STUDIO</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                    Real Livestock Photo Manager & Media Studio
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Upload authentic high-resolution pictures of rams and ewes straight from your smartphone, tablet, or digital camera at Upparapally farm. Buyers want to see real sheep muscle tone, horns, and ear tags before traveling to the farm.
                  </p>
                </div>

                {/* Flock Photo Statistics */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-4 shrink-0 bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-xs text-center">
                  <div>
                    <div className="text-2xl font-black text-amber-400 font-mono">{breeds.length}</div>
                    <div className="text-[10px] text-stone-300 uppercase tracking-wider font-semibold">Total Sheep</div>
                  </div>
                  <div className="border-x border-white/10 px-2 sm:px-4">
                    <div className="text-2xl font-black text-emerald-400 font-mono">{realPhotosCount}</div>
                    <div className="text-[10px] text-stone-300 uppercase tracking-wider font-semibold">Real Photos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-stone-400 font-mono">{breeds.length - realPhotosCount}</div>
                    <div className="text-[10px] text-stone-300 uppercase tracking-wider font-semibold">Vector Art</div>
                  </div>
                </div>
              </div>
            </div>

            {/* OFFICIAL FARM BRAND LOGO STUDIO CARD */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-emerald-900/10 rounded-3xl border-2 border-amber-400 p-6 sm:p-7 space-y-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-sm shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                      Official Farm Brand Logo & Crest Studio
                    </h4>
                    <p className="text-xs text-stone-600">
                      Upload your real farm photograph or custom insignia to display as the primary brand logo across the entire website.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTempLogoUrl(currentLogoUrl);
                      setShowLogoModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload New Real Logo</span>
                  </button>
                  {currentLogoUrl && (
                    <button
                      type="button"
                      onClick={handleResetLogo}
                      className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Reset Emblem
                    </button>
                  )}
                </div>
              </div>

              {/* Logo Previews in Live Contexts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Format 1: Header / Navbar Mockup */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    Header Wordmark Preview
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FDFCF7] border border-stone-200">
                    <KurumaRamLogo className="w-10 h-10 shrink-0" size={40} />
                    <div className="flex flex-col">
                      <span className="font-black text-xs text-[#1C3829]">KURUMA VANAM</span>
                      <span className="text-[9px] text-amber-800">Sheep Farms & Livestock Hub</span>
                    </div>
                  </div>
                </div>

                {/* Format 2: Dark Hero / Banner Mockup */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    Dark Background Preview
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#14291E] border border-emerald-800 text-white">
                    <KurumaRamLogo className="w-10 h-10 shrink-0" size={40} />
                    <div className="flex flex-col">
                      <span className="font-black text-xs text-amber-200">KURUMA VANAM</span>
                      <span className="text-[9px] text-stone-300">Upparapally, Warangal</span>
                    </div>
                  </div>
                </div>

                {/* Format 3: Status & Details */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      Active Logo Status
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-stone-900">
                        {currentLogoUrl ? 'Custom Real Image Active' : 'Default Kuruma Heritage Emblem'}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1">
                      {currentLogoUrl
                        ? 'Your custom logo is rendered in high resolution across all pages.'
                        : 'Using the traditional Kuruma curved horn ram vector crest.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OFFICIAL FARM COVER IMAGE & HERO BANNER STUDIO CARD */}
            <div className="bg-gradient-to-r from-emerald-900/10 via-teal-900/10 to-stone-100 rounded-3xl border-2 border-emerald-600/50 p-6 sm:p-7 space-y-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C3829] text-amber-300 flex items-center justify-center shadow-sm shrink-0 border border-emerald-500/40">
                    <ImageIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                      Official Farm Cover Image & Hero Banner Studio
                    </h4>
                    <p className="text-xs text-stone-500">
                      Upload high-resolution farm landscape, paddock view, or flock cover image shown across the main website hero background and live camera card.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTempCoverUrl(currentCoverUrl);
                      setShowCoverModal(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#1C3829] hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                  >
                    <Upload className="w-4 h-4 text-amber-400" />
                    <span>{currentCoverUrl ? 'Replace Cover Photo' : 'Upload Real Cover Image'}</span>
                  </button>

                  {currentCoverUrl && (
                    <button
                      type="button"
                      onClick={handleResetCoverImage}
                      className="px-3 py-2 rounded-xl bg-white border border-stone-300 hover:bg-red-50 hover:text-red-700 text-stone-600 font-bold text-xs cursor-pointer transition-colors"
                    >
                      Reset Cover
                    </button>
                  )}
                </div>
              </div>

              {/* Cover Image Widescreen Live Mockup */}
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-stone-300 bg-stone-900 shadow-inner group">
                {currentCoverUrl ? (
                  <>
                    <img
                      src={currentCoverUrl}
                      alt="Active Farm Cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#14291E] to-[#0A1610] text-center p-6 space-y-2">
                    <ImageIcon className="w-12 h-12 text-stone-500" />
                    <div className="text-sm font-bold text-stone-300">Using Default Pastoral Horizon Artwork</div>
                    <p className="text-xs text-stone-400 max-w-md">
                      Click "Upload Real Cover Image" above to feature an authentic high-resolution photograph of your Upparapally sheep paddocks and livestock.
                    </p>
                  </div>
                )}

                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/60 text-amber-300 text-xs font-mono font-bold border border-amber-400/40 backdrop-blur-xs">
                    Website Hero Banner Mockup
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    currentCoverUrl ? 'bg-emerald-500 text-stone-950 font-black' : 'bg-stone-700 text-stone-200'
                  }`}>
                    {currentCoverUrl ? '✓ Custom Photo Active' : 'Default Art'}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between text-white">
                  <div>
                    <div className="text-base sm:text-xl font-black font-telugu drop-shadow-sm text-amber-300">
                      కురుమల వారసత్వం... గొర్రెల సంపద
                    </div>
                    <div className="text-xs text-stone-200 font-semibold drop-shadow-sm">
                      KURUMA VANAM SHEEP FARMS · UPPARAPALLY
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setTempCoverUrl(currentCoverUrl);
                      setShowCoverModal(true);
                    }}
                    className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-black rounded-lg cursor-pointer transition-colors shadow-sm"
                  >
                    Edit Cover
                  </button>
                </div>
              </div>
            </div>

            {/* INTERACTIVE PHOTO UPLOAD & PREVIEW STUDIO */}
            <div className="bg-stone-50 rounded-3xl border-2 border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <span>Livestock Photo Editor & Uploader</span>
                  </h4>
                  <p className="text-xs text-stone-500">
                    Select an animal from your flock, upload or paste a real photograph, preview how it appears to buyers, and click save.
                  </p>
                </div>

                {/* Target Animal Selector */}
                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-stone-700 whitespace-nowrap">Choose Animal:</label>
                  <select
                    value={studioSelectedBreedId}
                    onChange={(e) => handleSelectStudioSheep(e.target.value)}
                    className="py-2 px-3 text-xs font-bold rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-xs cursor-pointer"
                  >
                    {breeds.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.tagId} — {b.breedName} ({b.imageUrl ? '✓ Real Photo' : 'No Photo'})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Feedback toast */}
              {studioFeedbackMsg && (
                <div className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs flex items-center gap-2 animate-in fade-in duration-150">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{studioFeedbackMsg}</span>
                </div>
              )}

              {/* Side-by-side: Source Uploader on Left, Live Card Preview on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Photo Input Controls */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Mode Selector Tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setStudioPhotoMode('device')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        studioPhotoMode === 'device'
                          ? 'bg-white text-stone-950 shadow-xs font-black'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      <Camera className="w-3.5 h-3.5 text-amber-600" />
                      <span>Upload from Device / Camera</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStudioPhotoMode('url')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        studioPhotoMode === 'url'
                          ? 'bg-white text-stone-950 shadow-xs font-black'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      <LinkIcon className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Direct Image URL</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStudioPhotoMode('presets')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        studioPhotoMode === 'presets'
                          ? 'bg-white text-stone-950 shadow-xs font-black'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Curated Breed Photos</span>
                    </button>
                  </div>

                  {/* Mode 1: Device / Camera Upload */}
                  {studioPhotoMode === 'device' && (
                    <div className="space-y-3">
                      <label className="block border-2 border-dashed border-emerald-700/40 hover:border-emerald-700 bg-white rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all hover:bg-emerald-50/30 group">
                        <input
                          type="file"
                          accept="image/*"
                          capture="environment"
                          onChange={(e) => handleImageFileChange(e, setStudioPhotoUrl)}
                          className="hidden"
                        />
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/15 border border-amber-300 flex items-center justify-center text-amber-800 mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-7 h-7 text-amber-700" />
                        </div>
                        <div className="text-sm font-extrabold text-stone-900">
                          Click to select a photo from your Phone or Computer
                        </div>
                        <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                          Supports JPEG, PNG, WebP up to 8MB. On phones, this will let you snap a real picture with your camera!
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 group-hover:bg-amber-100 text-stone-800 text-xs font-bold transition-colors">
                          <Camera className="w-4 h-4 text-amber-700" />
                          <span>Tap here to Open Camera / Photo Gallery</span>
                        </div>
                      </label>
                    </div>
                  )}

                  {/* Mode 2: Web Image Link */}
                  {studioPhotoMode === 'url' && (
                    <div className="space-y-3 bg-white p-5 rounded-2xl border border-stone-200">
                      <label className="text-xs font-bold text-stone-800">
                        Paste Full Image Web Address (URL)
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          value={studioPhotoUrl}
                          onChange={(e) => setStudioPhotoUrl(e.target.value)}
                          placeholder="https://example.com/images/sheep-nellore-ram.jpg"
                          className="flex-1 p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-mono"
                        />
                        {studioPhotoUrl && (
                          <button
                            type="button"
                            onClick={() => setStudioPhotoUrl('')}
                            className="px-3 py-2 text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl cursor-pointer"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        Tip: You can use any public image URL from Imgur, Cloudinary, AWS S3, or farm photo hosts.
                      </p>
                    </div>
                  )}

                  {/* Mode 3: Curated Indian Breed Photos */}
                  {studioPhotoMode === 'presets' && (
                    <div className="space-y-3 bg-white p-5 rounded-2xl border border-stone-200">
                      <div className="text-xs font-bold text-stone-800">
                        Quick-Apply Authentic Livestock Photography:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {REAL_LIVESTOCK_PRESETS.map((preset, idx) => (
                          <div
                            key={idx}
                            onClick={() => setStudioPhotoUrl(preset.url)}
                            className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                              studioPhotoUrl === preset.url
                                ? 'border-emerald-700 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                                : 'border-stone-200 hover:border-amber-400 bg-stone-50'
                            }`}
                          >
                            <img
                              src={preset.url}
                              alt={preset.label}
                              className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-300"
                            />
                            <div className="text-left min-w-0">
                              <div className="text-xs font-bold text-stone-900 truncate">{preset.label}</div>
                              <div className="text-[10px] text-stone-500 truncate">{preset.description}</div>
                              <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wider">
                                {preset.breedHint}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSaveStudioPhoto}
                      disabled={!studioPhotoUrl}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-stone-950" />
                      <span>Save Real Photo to Animal Profile</span>
                    </button>

                    {currentStudioSheep?.imageUrl && (
                      <button
                        type="button"
                        onClick={handleRemoveStudioPhoto}
                        className="px-4 py-3 rounded-xl bg-stone-200 hover:bg-red-50 hover:text-red-700 text-stone-700 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Revert to Vector Artwork</span>
                      </button>
                    )}

                    {currentStudioSheep && (
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(currentStudioSheep)}
                        className="px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Pencil className="w-4 h-4 text-blue-700" />
                        <span>Edit Animal Profile</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right 5 Columns: Real-Time Live Preview */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-stone-800 uppercase tracking-wide flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-emerald-700" />
                      <span>Buyer Marketplace Live Preview</span>
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        studioPhotoUrl
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {studioPhotoUrl ? '✓ Real Photo Active' : 'Default Vector Artwork'}
                    </span>
                  </div>

                  {currentStudioSheep && (
                    <div className="bg-white rounded-3xl border-2 border-stone-200 shadow-md overflow-hidden">
                      <div className="relative">
                        <SheepVisualCard
                          breedName={currentStudioSheep.breedName}
                          category={currentStudioSheep.category}
                          colorPattern={currentStudioSheep.colorPattern}
                          weightKg={currentStudioSheep.weightKg}
                          teethCount={currentStudioSheep.teethCount}
                          tagId={currentStudioSheep.tagId}
                          imageUrl={studioPhotoUrl}
                          className="h-64 sm:h-72"
                        />

                        {studioPhotoUrl && (
                          <div className="absolute top-4 left-4 z-20">
                            <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-700 text-white shadow-md uppercase tracking-wider flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified Real Photo</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-4 space-y-2 bg-white">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-extrabold text-amber-800 uppercase">
                            {currentStudioSheep.category}
                          </span>
                          <span className="font-mono font-bold text-stone-500">
                            #{currentStudioSheep.tagId}
                          </span>
                        </div>
                        <h5 className="font-bold text-stone-900 text-base">
                          {currentStudioSheep.breedName}
                        </h5>
                        <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-100">
                          <span className="text-stone-600 font-semibold">{currentStudioSheep.weightKg} kg live</span>
                          <span className="font-mono font-bold text-emerald-800">
                            ₹{currentStudioSheep.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* FULL LIVESTOCK PHOTO GALLERY GRID WITH EDIT & DELETE */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-lg">
                    Current Flock Gallery ({breeds.length} Animals)
                  </h4>
                  <p className="text-xs text-stone-500">
                    Review photos, edit profiles, or delete animals directly from the gallery cards.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {breeds.map((b) => (
                  <div
                    key={b.id}
                    className={`bg-white rounded-2xl border-2 transition-all p-3 space-y-3 flex flex-col justify-between ${
                      b.id === studioSelectedBreedId
                        ? 'border-amber-500 shadow-md ring-2 ring-amber-400/20'
                        : 'border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative rounded-xl overflow-hidden h-36 bg-stone-900 border border-stone-200 group">
                        {b.imageUrl ? (
                          <>
                            <img
                              src={b.imageUrl}
                              alt={b.breedName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                            <button
                              type="button"
                              onClick={() => setPreviewPhotoUrl({ url: b.imageUrl, title: `${b.breedName} (#${b.tagId})` })}
                              className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/90 cursor-pointer transition-colors"
                              title="View full image"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                            <span className="absolute bottom-2 left-2 bg-emerald-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                              Real Photo
                            </span>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 p-2 text-center bg-stone-100">
                            <ImageIcon className="w-6 h-6 text-stone-400 mb-1" />
                            <span className="text-[10px] font-semibold text-stone-500">Vector Artwork</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2.5 space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono font-bold text-stone-500">#{b.tagId}</span>
                          <span className="font-mono font-bold text-emerald-800">
                            ₹{b.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="font-bold text-stone-900 text-xs truncate" title={b.breedName}>
                          {b.breedName}
                        </div>
                        <div className="text-[10px] text-stone-500">
                          {b.weightKg} kg · {b.teethCount}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            handleSelectStudioSheep(b.id);
                            window.scrollTo({ top: 250, behavior: 'smooth' });
                          }}
                          className="flex-1 py-1.5 px-2 bg-amber-50 hover:bg-amber-100 text-amber-950 rounded-lg text-[10px] font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer border border-amber-300"
                        >
                          <Camera className="w-3 h-3 text-amber-700" />
                          <span>Photo</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(b)}
                          className="flex-1 py-1.5 px-2 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg text-[10px] font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer border border-blue-200"
                        >
                          <Pencil className="w-3 h-3 text-blue-700" />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeletingSheep(b)}
                          className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer border border-red-200"
                          title="Delete animal"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BREEDING LOGS & GESTATION (WITH DELETE OPTION) */}
        {activeSubTab === 'breeding' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Breeding & Gestation Logs</h3>
                <p className="text-xs text-stone-500">
                  Track sire x dam pedigree couplings, pregnancy confirmation, and countdown to 147-152 day lambing.
                </p>
              </div>
              <button
                onClick={() => setShowAddBreedingModal(true)}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer w-fit shadow-xs"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Log New Mating Event</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {breedingRecords.map((br) => (
                <div key={br.id} className="bg-stone-50 rounded-2xl border border-stone-200 p-4 space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {br.status}
                      </span>
                      <span className="text-[11px] text-stone-500">Mated: {br.matingDate}</span>
                    </div>

                    <div className="text-xs space-y-1">
                      <div className="font-bold text-stone-900">
                        Ram Sire: <span className="font-normal text-stone-700">{br.ramTag}</span>
                      </div>
                      <div className="font-bold text-stone-900">
                        Ewe Dam: <span className="font-normal text-stone-700">{br.eweTag}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs">
                      <div className="text-amber-900 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Expected Lambing:</span>
                      </div>
                      <div className="font-bold text-amber-950 font-mono mt-0.5">
                        {br.expectedLambingDate}
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-600 italic">"{br.progenyNotes}"</p>
                  </div>

                  <div className="pt-2 border-t border-stone-200 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteBreeding(br.id, br.ramTag, br.eweTag)}
                      className="text-[11px] text-red-600 hover:text-red-800 font-bold flex items-center gap-1 cursor-pointer py-1 px-2 rounded hover:bg-red-50"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Delete Record</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: HEALTH & VACCINATION REGISTRY (WITH DELETE OPTION) */}
        {activeSubTab === 'health' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Herd Health & Vaccination Ledger</h3>
                <p className="text-xs text-stone-500">
                  Audit PPR, Enterotoxaemia (ET), Sheep Pox, and deworming treatments by veterinarian.
                </p>
              </div>
              <button
                onClick={() => setShowAddHealthModal(true)}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer w-fit shadow-xs"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Record Health Checkup</span>
              </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-stone-100 text-stone-800 uppercase text-[10px] tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Tag ID / Herd</th>
                    <th className="py-3 px-4">Checkup Date</th>
                    <th className="py-3 px-4">Condition</th>
                    <th className="py-3 px-4">Vaccine Administered</th>
                    <th className="py-3 px-4">Dewormer</th>
                    <th className="py-3 px-4">Attending Veterinarian</th>
                    <th className="py-3 px-4">Next Due Date</th>
                    <th className="py-3 px-4 text-right">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {healthRecords.map((hr) => (
                    <tr key={hr.id} className="hover:bg-stone-50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-stone-900">
                        {hr.tagId}
                      </td>
                      <td className="py-3 px-4 text-stone-600">{hr.checkupDate}</td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {hr.condition}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-stone-900">
                        {hr.vaccineAdministered}
                      </td>
                      <td className="py-3 px-4 text-stone-600">{hr.dewormerName}</td>
                      <td className="py-3 px-4 text-stone-800">{hr.veterinarian}</td>
                      <td className="py-3 px-4 font-mono font-semibold text-amber-800">
                        {hr.nextFollowUpDate}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleDeleteHealth(hr.id, hr.tagId)}
                          className="p-1 rounded text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                          title="Delete health record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: VETERINARY APPOINTMENTS (WITH DELETE OPTION) */}
        {activeSubTab === 'vet' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Veterinary Appointment Scheduling</h3>
                <p className="text-xs text-stone-500">
                  Schedule on-farm flock visits with Chief Livestock Vet Dr. R. Srinivas (MVSc).
                </p>
              </div>
              <button
                onClick={() => setShowBookVetModal(true)}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer w-fit shadow-xs"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Schedule Farm Vet Visit</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vetAppointments.map((va) => (
                <div key={va.id} className="bg-stone-50 rounded-2xl border border-stone-200 p-5 space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-900">{va.farmerName}</span>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {va.status}
                      </span>
                    </div>

                    <div className="text-xs text-stone-600 space-y-1">
                      <div><strong>Location:</strong> {va.farmLocation}</div>
                      <div><strong>Contact:</strong> {va.contactPhone}</div>
                      <div><strong>Flock Size:</strong> {va.flockSize} Animals</div>
                      <div><strong>Service:</strong> <span className="text-emerald-900 font-semibold">{va.purpose}</span></div>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-xs">
                      <div className="text-stone-500 font-medium">Assigned Doctor:</div>
                      <div className="font-bold text-stone-900 mt-0.5">{va.vetDoctor}</div>
                      <div className="text-amber-800 font-mono font-semibold mt-1">
                        {va.date} · {va.timeSlot}
                      </div>
                    </div>

                    {va.specialInstructions && (
                      <div className="text-[11px] text-stone-500 italic">
                        Note: {va.specialInstructions}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-stone-200 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteVetAppointment(va.id, va.farmerName)}
                      className="text-[11px] text-red-600 hover:text-red-800 font-bold flex items-center gap-1 cursor-pointer py-1 px-2 rounded hover:bg-red-50"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Cancel & Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: ORDERS & LOGISTICS (WITH DELETE OPTION) */}
        {activeSubTab === 'orders' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-stone-900 text-lg">Customer Orders & Livestock Dispatches</h3>
              <p className="text-xs text-stone-500">
                Manage advance token bookings, update delivery status, or remove test orders.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-stone-100 text-stone-800 uppercase text-[10px] tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Order / Tracking ID</th>
                    <th className="py-3 px-4">Customer Details</th>
                    <th className="py-3 px-4">Items Summary</th>
                    <th className="py-3 px-4">Total Amount</th>
                    <th className="py-3 px-4">Payment Status</th>
                    <th className="py-3 px-4">Fulfillment Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-stone-50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-stone-900">
                        <div>{ord.id}</div>
                        <div className="text-[10px] text-emerald-700">{ord.trackingNumber}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-stone-900">{ord.customerName}</div>
                        <div className="text-stone-500">{ord.phone}</div>
                        <div className="text-[11px] text-stone-400">{ord.city}</div>
                      </td>
                      <td className="py-3 px-4 max-w-xs">
                        <ul className="space-y-0.5">
                          {ord.items.map((it, i) => (
                            <li key={i} className="truncate text-stone-700">
                              {it.quantity}x {it.title}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-stone-900">
                        ₹{ord.totalAmount.toLocaleString('en-IN')}
                        <div className="text-[10px] text-amber-700 font-normal">
                          Paid: ₹{ord.tokenPaid}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                          {ord.paymentStatus}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-stone-800">
                        {ord.fulfillmentStatus}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <select
                            value={ord.fulfillmentStatus}
                            onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                            className="py-1 px-2 text-xs rounded border border-stone-300 bg-white cursor-pointer"
                          >
                            <option value="Order Confirmed">Order Confirmed</option>
                            <option value="Veterinary Health Check Passed">Vet Checked</option>
                            <option value="Livestock Van In Transit">Van In Transit</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                          </select>

                          <button
                            type="button"
                            onClick={() => handleDeleteOrder(ord.id)}
                            className="p-1 rounded text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                            title="Delete order"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* MODAL: FULL EDIT ANIMAL PROFILE (REQUESTED BY USER) */}
      {editingSheep && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 border border-blue-300 flex items-center justify-center shrink-0">
                  <Pencil className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg leading-tight">
                    Edit Animal Profile: {editingSheep.breedName}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Tag #{editingSheep.tagId} · Modify pricing, weight, age, health records, or real photo
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingSheep(null)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditSheep} className="space-y-4 text-xs">
              {/* Row 1: Tag ID & Breed Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Ear Tag ID</label>
                  <input
                    type="text"
                    value={editTagId}
                    onChange={(e) => setEditTagId(e.target.value)}
                    className="w-full p-2.5 border rounded-xl font-mono font-bold focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Breed Name</label>
                  <input
                    type="text"
                    value={editBreedName}
                    onChange={(e) => setEditBreedName(e.target.value)}
                    className="w-full p-2.5 border rounded-xl font-bold focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Category, Gender, Stock Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Breed Category</label>
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value as BreedCategory)}
                    className="w-full p-2.5 border rounded-xl bg-white font-semibold cursor-pointer"
                  >
                    <option value="Meat Breed">Meat Breed</option>
                    <option value="Breeding Ram">Breeding Ram</option>
                    <option value="Festival Ram">Festival Ram</option>
                    <option value="Wool & Dual">Wool & Dual</option>
                    <option value="Ewe & Lambs">Ewe & Lambs</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Gender</label>
                  <select
                    value={editGender}
                    onChange={(e) => setEditGender(e.target.value as any)}
                    className="w-full p-2.5 border rounded-xl bg-white font-semibold cursor-pointer"
                  >
                    <option value="Ram">Ram</option>
                    <option value="Ewe">Ewe</option>
                    <option value="Breeding Pair">Breeding Pair</option>
                    <option value="Lamb">Lamb</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Stock Status</label>
                  <select
                    value={editStockStatus}
                    onChange={(e) => setEditStockStatus(e.target.value as any)}
                    className="w-full p-2.5 border rounded-xl bg-white font-bold cursor-pointer"
                  >
                    <option value="Available">Available</option>
                    <option value="Only 1 Left">Only 1 Left</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Sold">Sold</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Weight, Age, Teeth Count */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={editWeightKg}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setEditWeightKg(val);
                      if (val > 0 && editPrice > 0) {
                        setEditPricePerKg(Math.round(editPrice / val));
                      }
                    }}
                    className="w-full p-2.5 border rounded-xl font-mono font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Age (Months)</label>
                  <input
                    type="number"
                    value={editAgeMonths}
                    onChange={(e) => setEditAgeMonths(Number(e.target.value))}
                    className="w-full p-2.5 border rounded-xl font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Teeth Count</label>
                  <select
                    value={editTeethCount}
                    onChange={(e) => setEditTeethCount(e.target.value as any)}
                    className="w-full p-2.5 border rounded-xl bg-white font-semibold cursor-pointer"
                  >
                    <option value="Milk Teeth">Milk Teeth</option>
                    <option value="2-Teeth">2-Teeth</option>
                    <option value="4-Teeth">4-Teeth</option>
                    <option value="Full Mouth">Full Mouth</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Pricing */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-amber-50/60 rounded-xl border border-amber-200">
                <div>
                  <label className="font-bold text-stone-800 block mb-1">Fixed Per-Head Price (₹)</label>
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setEditPrice(val);
                      if (editWeightKg > 0) {
                        setEditPricePerKg(Math.round(val / editWeightKg));
                      }
                    }}
                    className="w-full p-2.5 border rounded-xl font-mono font-bold text-emerald-800 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-800 block mb-1">By Live Weight Rate (₹/kg)</label>
                  <input
                    type="number"
                    value={editPricePerKg}
                    onChange={(e) => setEditPricePerKg(Number(e.target.value))}
                    className="w-full p-2.5 border rounded-xl font-mono font-bold bg-white"
                    required
                  />
                </div>
              </div>

              {/* Row 5: Real Image / Photo */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-amber-700" />
                    <span>Real Photograph URL or Device Upload</span>
                  </span>
                  {editImageUrl && (
                    <button
                      type="button"
                      onClick={() => setEditImageUrl('')}
                      className="text-[11px] text-red-600 hover:underline"
                    >
                      Clear Photo
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <label className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-[11px] font-bold text-stone-800 cursor-pointer flex items-center gap-1.5 shrink-0 shadow-xs">
                    <Upload className="w-3.5 h-3.5 text-amber-700" />
                    <span>Upload from Phone/PC</span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => handleImageFileChange(e, setEditImageUrl)}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="url"
                    value={editImageUrl}
                    onChange={(e) => setEditImageUrl(e.target.value)}
                    placeholder="Or paste full image web link..."
                    className="flex-1 p-2 border rounded-xl text-xs font-mono"
                  />
                </div>

                {editImageUrl && (
                  <div className="relative w-full h-28 rounded-xl overflow-hidden border border-stone-300">
                    <img src={editImageUrl} alt="Preview" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded">
                      Real Photo Active
                    </span>
                  </div>
                )}
              </div>

              {/* Row 6: Origin, Location & Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={editBadge}
                    onChange={(e) => setEditBadge(e.target.value)}
                    placeholder="e.g. 100% Drought-Hardy"
                    className="w-full p-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Origin</label>
                  <input
                    type="text"
                    value={editOrigin}
                    onChange={(e) => setEditOrigin(e.target.value)}
                    className="w-full p-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Paddock Location</label>
                  <input
                    type="text"
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                    className="w-full p-2 border rounded-xl"
                  />
                </div>
              </div>

              {/* Row 7: Description */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">Description & Characteristics</label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              {/* Row 8: Health Details */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <div className="font-bold text-stone-800">Veterinary & Health Passport Details</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Vaccines Administered (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={editVaccines}
                      onChange={(e) => setEditVaccines(e.target.value)}
                      className="w-full p-2 border rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Deworming History
                    </label>
                    <input
                      type="text"
                      value={editDewormedDate}
                      onChange={(e) => setEditDewormedDate(e.target.value)}
                      className="w-full p-2 border rounded-lg bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => {
                    const toDel = editingSheep;
                    setEditingSheep(null);
                    setDeletingSheep(toDel);
                  }}
                  className="px-3.5 py-2 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Animal</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingSheep(null)}
                    className="px-4 py-2.5 text-stone-600 hover:bg-stone-100 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#1C3829] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    Save All Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: UPLOAD REAL FARM LOGO (REQUESTED BY USER) */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-xs shrink-0">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                    Upload Real Farm Brand Logo
                  </h3>
                  <p className="text-xs text-stone-500">
                    Replace or customize the logo displayed across website headers, hero section, and footers.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowLogoModal(false)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input Mode Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setLogoInputMode('device')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  logoInputMode === 'device'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Upload className="w-3.5 h-3.5 text-amber-600" />
                <span>Device / Camera</span>
              </button>

              <button
                type="button"
                onClick={() => setLogoInputMode('url')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  logoInputMode === 'url'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>Paste Web URL</span>
              </button>

              <button
                type="button"
                onClick={() => setLogoInputMode('presets')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  logoInputMode === 'presets'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Presets</span>
              </button>
            </div>

            {/* Mode 1: Device Upload / Camera */}
            {logoInputMode === 'device' && (
              <label className="block border-2 border-dashed border-amber-500/50 hover:border-amber-500 bg-amber-50/20 rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-amber-50/40 group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageFileChange(e, setTempLogoUrl)}
                  className="hidden"
                />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 text-amber-800 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Upload className="w-7 h-7 text-amber-700" />
                </div>
                <div className="text-sm font-extrabold text-stone-900">
                  Select Logo Image from Phone / Computer
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  PNG, JPG, WebP, or SVG logo file under 8MB (Square or circular crops look best)
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-xs font-bold text-stone-800 shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tap to Browse or Take Camera Photo</span>
                </div>
              </label>
            )}

            {/* Mode 2: Web URL */}
            {logoInputMode === 'url' && (
              <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <label className="text-xs font-bold text-stone-800 block">
                  Paste Direct Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={tempLogoUrl}
                    onChange={(e) => setTempLogoUrl(e.target.value)}
                    placeholder="https://example.com/logo.png"
                    className="flex-1 p-2.5 text-xs rounded-xl border border-stone-300 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                  {tempLogoUrl && (
                    <button
                      type="button"
                      onClick={() => setTempLogoUrl('')}
                      className="px-3 py-2 text-xs bg-stone-200 hover:bg-stone-300 rounded-xl cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Mode 3: Presets */}
            {logoInputMode === 'presets' && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-700">Choose a curated livestock brand mark:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {REAL_LOGO_PRESETS.map((preset, i) => (
                    <div
                      key={i}
                      onClick={() => setTempLogoUrl(preset.url)}
                      className={`p-3 rounded-2xl border-2 cursor-pointer transition-all text-center flex flex-col items-center gap-2 ${
                        tempLogoUrl === preset.url
                          ? 'border-emerald-700 bg-emerald-50/70 ring-2 ring-emerald-500/20'
                          : 'border-stone-200 hover:border-amber-400 bg-stone-50'
                      }`}
                    >
                      <img src={preset.url} alt={preset.name} className="w-16 h-16 rounded-full object-cover border border-stone-300 shadow-xs" />
                      <div className="text-xs font-bold text-stone-900 leading-tight">{preset.name}</div>
                      <div className="text-[10px] text-stone-500">{preset.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Logo Preview Box */}
            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <span>Real-Time Header Logo Mockup</span>
                </span>
                {tempLogoUrl && (
                  <button
                    type="button"
                    onClick={() => setTempLogoUrl('')}
                    className="text-[11px] text-amber-800 hover:underline cursor-pointer"
                  >
                    Reset preview
                  </button>
                )}
              </div>

              {/* Header preview row */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FDFCF7] border border-stone-300 shadow-xs">
                {tempLogoUrl ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shadow-xs bg-[#1C3829] shrink-0">
                    <img src={tempLogoUrl} alt="New logo preview" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <KurumaRamLogo className="w-12 h-12 shrink-0" size={48} forceSvg={true} />
                )}
                <div className="flex flex-col">
                  <span className="font-black text-sm tracking-tight text-[#1C3829]">KURUMA VANAM</span>
                  <span className="text-[10px] uppercase font-bold text-amber-800">
                    Sheep Farms & Livestock Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-200">
              {currentLogoUrl ? (
                <button
                  type="button"
                  onClick={handleResetLogo}
                  className="px-3.5 py-2.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-red-50 hover:text-red-700 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Default Heritage Emblem</span>
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowLogoModal(false)}
                  className="px-4 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveLogo(tempLogoUrl)}
                  disabled={!tempLogoUrl}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs rounded-xl shadow-sm transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save as Primary Farm Logo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: UPLOAD REAL FARM COVER IMAGE (REQUESTED BY USER) */}
      {showCoverModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center shadow-xs shrink-0 border border-emerald-600">
                  <ImageIcon className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                    Upload Real Farm Cover / Hero Banner Image
                  </h3>
                  <p className="text-xs text-stone-500">
                    Set a real pastoral photo or landscape of Upparapally farm for the website's main hero cover background and live camera feed.
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
                <Upload className="w-3.5 h-3.5 text-emerald-700" />
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
                <LinkIcon className="w-3.5 h-3.5 text-emerald-700" />
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
                <span>Pastoral Presets</span>
              </button>
            </div>

            {/* Mode 1: Device Upload / Camera */}
            {coverInputMode === 'device' && (
              <label className="block border-2 border-dashed border-emerald-500/50 hover:border-emerald-600 bg-emerald-50/20 rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-emerald-50/40 group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageFileChange(e, setTempCoverUrl)}
                  className="hidden"
                />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-800 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Upload className="w-7 h-7 text-emerald-700" />
                </div>
                <div className="text-sm font-extrabold text-stone-900">
                  Select Farm Cover Photo from Phone / Computer
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  PNG, JPG, or WebP photo under 8MB (Panoramic or landscape horizontal photos look best)
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-xs font-bold text-stone-800 shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Tap to Browse or Take Camera Photo</span>
                </div>
              </label>
            )}

            {/* Mode 2: Web URL */}
            {coverInputMode === 'url' && (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-stone-700">
                  Direct Web Image Link (HTTPS)
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={tempCoverUrl}
                    onChange={(e) => setTempCoverUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full p-3 pl-9 rounded-xl border border-stone-300 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 font-mono"
                  />
                  <LinkIcon className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                </div>
              </div>
            )}

            {/* Mode 3: Curated Pastoral Presets */}
            {coverInputMode === 'presets' && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-700">
                  Choose an authentic pasture cover photo:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {REAL_COVER_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setTempCoverUrl(preset.url)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col gap-2 cursor-pointer ${
                        tempCoverUrl === preset.url
                          ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500 shadow-xs'
                          : 'border-stone-200 hover:border-emerald-300 bg-white hover:bg-stone-50'
                      }`}
                    >
                      <div className="h-24 w-full rounded-xl overflow-hidden bg-stone-100">
                        <img
                          src={preset.url}
                          alt={preset.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-stone-900 line-clamp-1">{preset.name}</div>
                        <div className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">{preset.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Hero Banner Preview Mockup */}
            <div className="space-y-2 pt-2 border-t border-stone-200">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Live Hero Banner Preview:</span>
                {tempCoverUrl && (
                  <button
                    type="button"
                    onClick={() => setTempCoverUrl('')}
                    className="text-stone-400 hover:text-red-600 text-[11px] font-semibold"
                  >
                    Clear Selected Image
                  </button>
                )}
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-inner flex flex-col justify-between p-4 text-white">
                {tempCoverUrl ? (
                  <>
                    <img
                      src={tempCoverUrl}
                      alt="Cover Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/95 via-[#0C1A12]/80 to-[#0C1A12]/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-transparent to-[#14291E]/60" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#14291E] to-[#0A1610] text-center p-4">
                    <ImageIcon className="w-10 h-10 text-stone-500 mb-1" />
                    <div className="text-xs font-bold text-stone-400">Default Horizon Vector Artwork Active</div>
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 text-amber-300 font-mono border border-amber-400/40">
                    Live Preview
                  </span>
                  <span className="text-[10px] bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    100% Contrast Optimized
                  </span>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="text-lg sm:text-xl font-black font-telugu text-white drop-shadow-md">
                    కురుమల వారసత్వం... గొర్రెల సంపద
                  </div>
                  <div className="text-xs font-bold text-amber-300 font-telugu">
                    కురుమల వైభవం – గొర్రెల వనం
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              {currentCoverUrl ? (
                <button
                  type="button"
                  onClick={handleResetCoverImage}
                  className="px-3.5 py-2 text-xs font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Default Horizon Art</span>
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowCoverModal(false)}
                  className="px-4 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveCoverImage(tempCoverUrl)}
                  disabled={!tempCoverUrl}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save as Primary Farm Cover
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: EDIT 100% PASTURE MUTTON COVER BANNER (REQUESTED BY USER) */}
      {showMuttonCoverModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
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
                onClick={() => setShowMuttonCoverModal(false)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input Mode Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setMuttonCoverInputMode('device')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  muttonCoverInputMode === 'device'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Upload className="w-3.5 h-3.5 text-red-700" />
                <span>Device / Camera</span>
              </button>

              <button
                type="button"
                onClick={() => setMuttonCoverInputMode('url')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  muttonCoverInputMode === 'url'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5 text-red-700" />
                <span>Paste Web URL</span>
              </button>

              <button
                type="button"
                onClick={() => setMuttonCoverInputMode('presets')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  muttonCoverInputMode === 'presets'
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Real Meat Presets</span>
              </button>
            </div>

            {/* Mode 1: Device Upload / Camera */}
            {muttonCoverInputMode === 'device' && (
              <label className="block border-2 border-dashed border-red-500/50 hover:border-red-600 bg-red-50/20 rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-red-50/40 group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageFileChange(e, setTempMuttonCoverUrl)}
                  className="hidden"
                />
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-700 mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-stone-900">
                  Click to Browse or Capture Real Butchery Photo
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Supports JPG, PNG, WEBP from your phone camera or computer (up to 8MB)
                </div>
              </label>
            )}

            {/* Mode 2: Web URL Input */}
            {muttonCoverInputMode === 'url' && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700">
                  Paste Direct Web Image URL:
                </label>
                <input
                  type="url"
                  value={tempMuttonCoverUrl}
                  onChange={(e) => setTempMuttonCoverUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>
            )}

            {/* Mode 3: Curated Real Meat & Pasture Butchery Presets */}
            {muttonCoverInputMode === 'presets' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-stone-700">
                  Choose an authentic pasture grazing or cold-chain butchery cover photo:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                  {REAL_MUTTON_COVER_PRESETS.map((preset) => {
                    const isSelected = tempMuttonCoverUrl === preset.url;
                    return (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => setTempMuttonCoverUrl(preset.url)}
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
                {tempMuttonCoverUrl && (
                  <button
                    type="button"
                    onClick={() => setTempMuttonCoverUrl('')}
                    className="text-stone-400 hover:text-red-600 text-[11px] font-semibold cursor-pointer"
                  >
                    Clear Preview
                  </button>
                )}
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-inner flex flex-col justify-between p-4 text-white">
                {tempMuttonCoverUrl ? (
                  <>
                    <img
                      src={tempMuttonCoverUrl}
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
            {muttonCoverMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold rounded-xl animate-in fade-in flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{muttonCoverMsg}</span>
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              {currentMuttonCoverUrl ? (
                <button
                  type="button"
                  onClick={handleResetMuttonCover}
                  className="px-3.5 py-2 text-xs font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Default</span>
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowMuttonCoverModal(false)}
                  className="px-4 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveMuttonCover(tempMuttonCoverUrl || currentMuttonCoverUrl)}
                  className="px-5 py-2.5 bg-gradient-to-r from-red-800 via-red-700 to-amber-900 hover:from-red-700 hover:to-amber-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Mutton Feature Cover</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: NETLIFY DEPLOYMENT & DATA BACKUP GUIDE (REQUESTED BY USER) */}
      {showDeployModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-300 flex items-center justify-center shadow-xs shrink-0 border border-blue-700">
                  <Globe className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                    Netlify Deployment & Live Preview Guide
                  </h3>
                  <p className="text-xs text-stone-500">
                    How to ensure all features, real photos, and custom settings appear identically after Netlify deployment.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowDeployModal(false)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Pre-configured build files */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>1. Netlify Build Configuration (Already Configured in Code)</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed pl-6">
                Your codebase now contains both <code className="px-1.5 py-0.5 rounded bg-emerald-100 font-mono font-bold">netlify.toml</code> and <code className="px-1.5 py-0.5 rounded bg-emerald-100 font-mono font-bold">public/_redirects</code>. This tells Netlify:
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pl-6 pt-1">
                <div className="p-2 rounded bg-white border border-emerald-200">
                  <span className="text-stone-500 block text-[10px]">BUILD COMMAND:</span>
                  <span className="font-bold text-stone-900">npm run build</span>
                </div>
                <div className="p-2 rounded bg-white border border-emerald-200">
                  <span className="text-stone-500 block text-[10px]">PUBLISH DIRECTORY:</span>
                  <span className="font-bold text-stone-900">dist</span>
                </div>
              </div>
            </div>

            {/* Step 2: Authentic Real Photography Permanent Guarantee */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. Permanent Real Photography Guarantee</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pl-6">
                All 5 sheep breeds (Deccani, Nellore Jodipi, Nellore Pota, Madras Red, Bellary) and all 5 fresh mutton cuts (Curry Cut, Boneless Cubes, Dum Biryani Cut, Pasture Lamb Ribs, Kheema) are permanently embedded with authentic photography in the codebase.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed pl-6">
                Even when a visitor opens your Netlify deployment for the first time in an incognito window, the primary hero cover, fresh mutton butchery banner, and product cards will appear with all real photos immediately!
              </p>
            </div>

            {/* Step 3: Transferring Custom Local Edits via Backup */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-xs">
                <Download className="w-4 h-4 text-amber-700 shrink-0" />
                <span>3. Transfer Custom Browser Edits to Netlify in 1 Click</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed pl-6">
                If you added custom animals or custom prices in your current browser session:
              </p>
              <ol className="list-decimal list-inside text-xs text-amber-900 pl-6 space-y-1">
                <li>Click <strong>"Export Backup"</strong> above to download your JSON snapshot.</li>
                <li>Deploy your code to Netlify.</li>
                <li>Open your live Netlify URL, go to the Admin Dashboard, and click <strong>"Restore Backup"</strong>.</li>
                <li>Select your JSON file — all custom edits, cover images, and animals are applied instantly!</li>
              </ol>
            </div>

            {/* Step 4: Netlify Deployment Options */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-xs">
                <Globe className="w-4 h-4 text-blue-700 shrink-0" />
                <span>4. Two Ways to Deploy to Netlify</span>
              </div>
              <div className="text-xs text-blue-900 pl-6 space-y-2">
                <div>
                  <strong>Option A: Git Repository (Recommended)</strong>
                  <p className="text-[11px] text-blue-800">
                    Push your repository to GitHub, GitLab, or Bitbucket. In Netlify, click <em>"Add new site" → "Import an existing project"</em>. Netlify will auto-detect <code className="font-mono">npm run build</code> and <code className="font-mono">dist</code> from your <code className="font-mono">netlify.toml</code>.
                  </p>
                </div>
                <div>
                  <strong>Option B: Netlify Drop (Manual Drag-and-Drop)</strong>
                  <p className="text-[11px] text-blue-800">
                    Run <code className="font-mono px-1 py-0.5 bg-blue-100 rounded">npm run build</code> on your computer to produce the <code className="font-mono">dist</code> folder. Open <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="underline font-bold text-blue-900">app.netlify.com/drop</a> and drag the <code className="font-mono">dist</code> folder onto the browser.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={handleExportData}
                className="px-4 py-2 text-xs font-bold bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Backup JSON Now</span>
              </button>

              <button
                type="button"
                onClick={() => setShowDeployModal(false)}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-800 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
              >
                Got It, Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: EDIT MUTTON CUT (REQUESTED BY USER) */}
      {editingMutton && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                    Edit Mutton Cut: {editingMutton.name}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Update butchery specifications, real cut photo, pricing per kg, and daily stock availability.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingMutton(null)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditMutton} className="space-y-4 text-xs">
              {/* Photo Source Selector & Preview */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-800 text-xs flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-amber-600" />
                    <span>Real Cut Photo</span>
                  </span>
                  <div className="flex gap-1">
                    {(['device', 'url', 'presets'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setEditMuttonPhotoInputMode(mode)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg capitalize transition-colors ${
                          editMuttonPhotoInputMode === mode
                            ? 'bg-[#1C3829] text-white'
                            : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {mode === 'device' ? 'Device/Camera' : mode === 'url' ? 'Paste URL' : 'Butcher Presets'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mode: Device Upload */}
                {editMuttonPhotoInputMode === 'device' && (
                  <label className="block border-2 border-dashed border-red-300 hover:border-red-500 bg-white rounded-xl p-4 text-center cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageFileChange(e, setEditMuttonImageUrl)}
                      className="hidden"
                    />
                    <Upload className="w-6 h-6 text-red-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-stone-800 text-xs">Tap to Upload from Phone / Camera</div>
                    <div className="text-[10px] text-stone-400">PNG, JPG, or WebP photo of meat cut</div>
                  </label>
                )}

                {/* Mode: URL */}
                {editMuttonPhotoInputMode === 'url' && (
                  <input
                    type="url"
                    value={editMuttonImageUrl}
                    onChange={(e) => setEditMuttonImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs"
                  />
                )}

                {/* Mode: Presets */}
                {editMuttonPhotoInputMode === 'presets' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {REAL_MUTTON_PRESETS.map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setEditMuttonImageUrl(p.url)}
                        className={`p-2 rounded-xl text-left border flex flex-col gap-1 transition-all cursor-pointer ${
                          editMuttonImageUrl === p.url
                            ? 'bg-red-50 border-red-500 ring-2 ring-red-400'
                            : 'bg-white border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <img src={p.url} alt={p.name} className="w-full h-16 object-cover rounded-lg" />
                        <span className="font-bold text-[10px] text-stone-900 truncate">{p.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Active Image Thumbnail Preview */}
                {editMuttonImageUrl && (
                  <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-stone-200">
                    <img src={editMuttonImageUrl} alt="Preview" className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 truncate">
                      <div className="font-bold text-stone-800 text-xs">Active Image Set</div>
                      <div className="text-[10px] text-stone-400 truncate">{editMuttonImageUrl}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEditMuttonImageUrl('')}
                      className="text-stone-400 hover:text-red-600 text-xs px-2"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Mutton Cut Name</label>
                  <input
                    type="text"
                    value={editMuttonName}
                    onChange={(e) => setEditMuttonName(e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Package Unit / Display</label>
                  <input
                    type="text"
                    value={editMuttonUnit}
                    onChange={(e) => setEditMuttonUnit(e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Price per kg (₹)</label>
                  <input
                    type="number"
                    value={editMuttonPricePerKg}
                    onChange={(e) => setEditMuttonPricePerKg(Number(e.target.value))}
                    required
                    min={100}
                    className="w-full p-2 border rounded-lg bg-white font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Minimum Order (kg)</label>
                  <input
                    type="number"
                    value={editMuttonMinOrderKg}
                    onChange={(e) => setEditMuttonMinOrderKg(Number(e.target.value))}
                    required
                    step={0.5}
                    min={0.5}
                    className="w-full p-2 border rounded-lg bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Stock Availability</label>
                  <select
                    value={editMuttonInStock ? 'true' : 'false'}
                    onChange={(e) => setEditMuttonInStock(e.target.value === 'true')}
                    className="w-full p-2 border rounded-lg bg-white font-bold"
                  >
                    <option value="true">In Stock (Available)</option>
                    <option value="false">Sold Out for Today</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Butchery Cut Specification</label>
                <input
                  type="text"
                  value={editMuttonCutType}
                  onChange={(e) => setEditMuttonCutType(e.target.value)}
                  placeholder="e.g. Shoulder, ribs & leg pieces diced evenly"
                  required
                  className="w-full p-2 border rounded-lg bg-white"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Culinary Best For</label>
                <input
                  type="text"
                  value={editMuttonBestFor}
                  onChange={(e) => setEditMuttonBestFor(e.target.value)}
                  placeholder="e.g. Telangana Golichina Mamsam, Andhra Curry, Mutton Roast"
                  required
                  className="w-full p-2 border rounded-lg bg-white"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Detailed Description</label>
                <textarea
                  rows={2}
                  value={editMuttonDescription}
                  onChange={(e) => setEditMuttonDescription(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white"
                />
              </div>

              {/* Nutrition Info */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <div className="font-bold text-stone-800 text-[11px] mb-2">Nutritional Values (per 100g)</div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] text-stone-500 block mb-0.5">Protein</label>
                    <input
                      type="text"
                      value={editMuttonProtein}
                      onChange={(e) => setEditMuttonProtein(e.target.value)}
                      className="w-full p-1.5 border rounded-lg bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-stone-500 block mb-0.5">Fat Content</label>
                    <input
                      type="text"
                      value={editMuttonFat}
                      onChange={(e) => setEditMuttonFat(e.target.value)}
                      className="w-full p-1.5 border rounded-lg bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-stone-500 block mb-0.5">Calories</label>
                    <input
                      type="text"
                      value={editMuttonCalories}
                      onChange={(e) => setEditMuttonCalories(e.target.value)}
                      className="w-full p-1.5 border rounded-lg bg-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Buttons: Delete Cut / Cancel / Save */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => {
                    const toDel = editingMutton;
                    setEditingMutton(null);
                    setDeletingMutton(toDel);
                  }}
                  className="px-3.5 py-2 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 border border-red-200"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Mutton Cut</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingMutton(null)}
                    className="px-4 py-2.5 text-stone-600 hover:bg-stone-100 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-red-800 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save All Changes</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: DELETE MUTTON CONFIRMATION SAFEGUARD (REQUESTED BY USER) */}
      {deletingMutton && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-red-200 animate-in fade-in zoom-in-95 duration-200 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-600">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="font-extrabold text-stone-900 text-lg">
                Delete Mutton Cut from Catalog?
              </h3>
              <p className="text-xs text-stone-500">
                This will permanently remove this meat cut from the 100% Pasture-Grazed Fresh Mutton marketplace and customer baskets.
              </p>
            </div>

            {/* Cut Summary Card */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900">{deletingMutton.name}</span>
                <span className="font-mono font-bold text-red-800">₹{deletingMutton.pricePerKg}/kg</span>
              </div>
              <div className="text-[11px] text-stone-500">
                Spec: {deletingMutton.cutType} · {deletingMutton.unit}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeletingMutton(null)}
                className="flex-1 py-2.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
              >
                No, Keep Cut
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteMutton}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Yes, Delete Cut</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD NEW MUTTON CUT */}
      {showAddMuttonModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-4 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center">
                  <PlusCircle className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">Add New Fresh Mutton Cut</h3>
                  <p className="text-xs text-stone-500">Register a new pasture-grazed mutton cut into the customer marketplace.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAddMuttonModal(false)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddMutton} className="space-y-3.5 text-xs">
              {/* Photo Input */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-800 text-[11px] flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-amber-600" />
                    <span>Real Cut Photo</span>
                  </span>
                  <div className="flex gap-1">
                    {(['device', 'url', 'presets'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setNewMuttonPhotoInputMode(mode)}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded capitalize ${
                          newMuttonPhotoInputMode === mode
                            ? 'bg-[#1C3829] text-white'
                            : 'bg-white text-stone-600 border'
                        }`}
                      >
                        {mode === 'device' ? 'Device' : mode === 'url' ? 'URL' : 'Presets'}
                      </button>
                    ))}
                  </div>
                </div>

                {newMuttonPhotoInputMode === 'device' && (
                  <label className="block border-2 border-dashed border-red-300 hover:border-red-400 bg-white rounded-lg p-3 text-center cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageFileChange(e, setNewMuttonImageUrl)}
                      className="hidden"
                    />
                    <Upload className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <div className="font-bold text-stone-800 text-xs">Upload from Phone / Camera</div>
                  </label>
                )}

                {newMuttonPhotoInputMode === 'url' && (
                  <input
                    type="url"
                    value={newMuttonImageUrl}
                    onChange={(e) => setNewMuttonImageUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full p-2 bg-white border rounded-lg text-xs"
                  />
                )}

                {newMuttonPhotoInputMode === 'presets' && (
                  <div className="grid grid-cols-2 gap-2">
                    {REAL_MUTTON_PRESETS.slice(0, 4).map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setNewMuttonImageUrl(p.url)}
                        className={`p-1.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer ${
                          newMuttonImageUrl === p.url ? 'bg-red-50 border-red-500 ring-2 ring-red-400' : 'bg-white'
                        }`}
                      >
                        <img src={p.url} alt={p.name} className="w-10 h-10 object-cover rounded" />
                        <span className="text-[10px] font-bold truncate">{p.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {newMuttonImageUrl && (
                  <div className="flex items-center gap-2 p-1.5 bg-white rounded border">
                    <img src={newMuttonImageUrl} alt="Preview" className="w-8 h-8 rounded object-cover" />
                    <span className="text-[10px] text-stone-600 truncate flex-1">{newMuttonImageUrl}</span>
                    <button type="button" onClick={() => setNewMuttonImageUrl('')} className="text-red-500 text-xs px-1">
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Cut Name</label>
                  <input
                    type="text"
                    value={newMuttonName}
                    onChange={(e) => setNewMuttonName(e.target.value)}
                    placeholder="e.g. Marrow Shank Bones"
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Package Unit</label>
                  <input
                    type="text"
                    value={newMuttonUnit}
                    onChange={(e) => setNewMuttonUnit(e.target.value)}
                    placeholder="e.g. 1 kg pack"
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Price per kg (₹)</label>
                  <input
                    type="number"
                    value={newMuttonPricePerKg}
                    onChange={(e) => setNewMuttonPricePerKg(Number(e.target.value))}
                    required
                    min={100}
                    className="w-full p-2 border rounded-lg font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Min Order (kg)</label>
                  <input
                    type="number"
                    value={newMuttonMinOrderKg}
                    onChange={(e) => setNewMuttonMinOrderKg(Number(e.target.value))}
                    required
                    step={0.5}
                    min={0.5}
                    className="w-full p-2 border rounded-lg font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Cut Type Specification</label>
                <input
                  type="text"
                  value={newMuttonCutType}
                  onChange={(e) => setNewMuttonCutType(e.target.value)}
                  placeholder="e.g. Cross-cut marrow bones with juicy meat collar"
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Best For Dishes</label>
                <input
                  type="text"
                  value={newMuttonBestFor}
                  onChange={(e) => setNewMuttonBestFor(e.target.value)}
                  placeholder="e.g. Paya Soup, Sherva, Bone Marrow Roast"
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={newMuttonDescription}
                  onChange={(e) => setNewMuttonDescription(e.target.value)}
                  placeholder="Tender 100% pasture-grazed mutton..."
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddMuttonModal(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-800 text-white font-bold rounded-lg hover:bg-red-700 cursor-pointer shadow-xs flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Publish Mutton Cut</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: QUICK REAL PHOTO UPLOAD FOR MUTTON */}
      {editingMuttonForPhoto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">
                    Real Photo for {editingMuttonForPhoto.name}
                  </h3>
                  <div className="text-xs text-stone-500">
                    ₹{editingMuttonForPhoto.pricePerKg}/kg · {editingMuttonForPhoto.cutType}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingMuttonForPhoto(null)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {muttonPhotoUploadMsg && (
              <div className="p-2.5 bg-emerald-100 text-emerald-950 font-bold text-xs rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>{muttonPhotoUploadMsg}</span>
              </div>
            )}

            {/* Input Mode Selector */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setMuttonPhotoInputMode('device')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  muttonPhotoInputMode === 'device' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-600'
                }`}
              >
                Device / Camera
              </button>
              <button
                type="button"
                onClick={() => setMuttonPhotoInputMode('url')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  muttonPhotoInputMode === 'url' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-600'
                }`}
              >
                Paste URL
              </button>
              <button
                type="button"
                onClick={() => setMuttonPhotoInputMode('presets')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  muttonPhotoInputMode === 'presets' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-600'
                }`}
              >
                Butcher Presets
              </button>
            </div>

            {muttonPhotoInputMode === 'device' && (
              <label className="block border-2 border-dashed border-red-300 hover:border-red-500 bg-red-50/20 rounded-xl p-5 text-center cursor-pointer transition-colors group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageFileChange(e, setTempMuttonPhotoUrl)}
                  className="hidden"
                />
                <Upload className="w-6 h-6 text-red-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-stone-900 text-xs">Tap to Browse or Take Camera Photo</div>
                <div className="text-[10px] text-stone-500">PNG, JPG, WebP under 8MB</div>
              </label>
            )}

            {muttonPhotoInputMode === 'url' && (
              <input
                type="url"
                value={tempMuttonPhotoUrl}
                onChange={(e) => setTempMuttonPhotoUrl(e.target.value)}
                placeholder="https://..."
                className="w-full p-2.5 bg-white border rounded-xl text-xs"
              />
            )}

            {muttonPhotoInputMode === 'presets' && (
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {REAL_MUTTON_PRESETS.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setTempMuttonPhotoUrl(p.url)}
                    className={`p-2 rounded-xl border text-left flex flex-col gap-1 cursor-pointer transition-colors ${
                      tempMuttonPhotoUrl === p.url ? 'bg-red-50 border-red-500 ring-2 ring-red-400' : 'bg-white hover:bg-stone-50'
                    }`}
                  >
                    <img src={p.url} alt={p.name} className="w-full h-14 object-cover rounded-lg" />
                    <span className="font-bold text-[10px] text-stone-900 truncate">{p.name}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Live Preview */}
            {tempMuttonPhotoUrl && (
              <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3">
                <img src={tempMuttonPhotoUrl} alt="Preview" className="w-14 h-14 rounded-lg object-cover" />
                <div className="flex-1 truncate">
                  <div className="text-xs font-bold text-stone-900">Live Photo Preview</div>
                  <div className="text-[10px] text-emerald-700 font-medium">Ready to save to live catalog</div>
                </div>
                <button
                  type="button"
                  onClick={() => setTempMuttonPhotoUrl('')}
                  className="text-stone-400 hover:text-red-600 text-xs px-2 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2 border-t">
              <button
                type="button"
                onClick={() => setEditingMuttonForPhoto(null)}
                className="px-4 py-2 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleSaveQuickMuttonPhoto(tempMuttonPhotoUrl)}
                disabled={!tempMuttonPhotoUrl}
                className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                Save Real Photo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: DELETE CONFIRMATION SAFEGUARD (REQUESTED BY USER) */}
      {deletingSheep && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-red-200 animate-in fade-in zoom-in-95 duration-200 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-600">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="font-extrabold text-stone-900 text-lg">
                Delete Animal from Catalog?
              </h3>
              <p className="text-xs text-stone-500">
                This will permanently remove this sheep from the live marketplace, inventory counts, and buyer catalog.
              </p>
            </div>

            {/* Animal Summary Card */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900">{deletingSheep.breedName}</span>
                <span className="font-mono font-bold text-emerald-800">#{deletingSheep.tagId}</span>
              </div>
              <div className="text-[11px] text-stone-500">
                Category: {deletingSheep.category} · {deletingSheep.weightKg} kg · ₹{deletingSheep.price.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeletingSheep(null)}
                className="flex-1 py-2.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
              >
                No, Keep Animal
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteSheep}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Yes, Delete Animal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: ADD / UPDATE REAL PHOTO TO ANIMAL (Triggered from inventory rows or cards) */}
      {editingSheepForPhoto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-5 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-900 border border-amber-300 flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg leading-tight">
                    Add Real Photo for {editingSheepForPhoto.breedName}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                    <span className="font-mono font-bold text-emerald-800">#{editingSheepForPhoto.tagId}</span>
                    <span>·</span>
                    <span>{editingSheepForPhoto.category}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingSheepForPhoto(null)}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {photoUploadMsg && (
              <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{photoUploadMsg}</span>
              </div>
            )}

            {/* Input Mode Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setPhotoInputMode('device')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  photoInputMode === 'device'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Camera className="w-3.5 h-3.5 text-amber-600" />
                <span>Device / Camera</span>
              </button>

              <button
                type="button"
                onClick={() => setPhotoInputMode('url')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  photoInputMode === 'url'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>Web URL</span>
              </button>

              <button
                type="button"
                onClick={() => setPhotoInputMode('presets')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  photoInputMode === 'presets'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Presets</span>
              </button>
            </div>

            {/* Device / Camera Upload */}
            {photoInputMode === 'device' && (
              <label className="block border-2 border-dashed border-emerald-600/40 hover:border-emerald-600 bg-emerald-50/20 rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-emerald-50/40">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => handleImageFileChange(e, setTempPhotoUrl)}
                  className="hidden"
                />
                <Upload className="w-8 h-8 text-emerald-800 mx-auto mb-2" />
                <div className="text-xs font-bold text-stone-900">
                  Select image file from device or take photo
                </div>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  JPG, PNG, WebP up to 8MB
                </p>
              </label>
            )}

            {/* Web URL input */}
            {photoInputMode === 'url' && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">Image Web Address</label>
                <input
                  type="url"
                  value={tempPhotoUrl}
                  onChange={(e) => setTempPhotoUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 border rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            )}

            {/* Curated Presets */}
            {photoInputMode === 'presets' && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-stone-600">Select curated sheep photo:</div>
                <div className="grid grid-cols-2 gap-2">
                  {REAL_LIVESTOCK_PRESETS.map((p, i) => (
                    <div
                      key={i}
                      onClick={() => setTempPhotoUrl(p.url)}
                      className={`p-2 rounded-xl border cursor-pointer flex items-center gap-2 ${
                        tempPhotoUrl === p.url ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200 hover:border-amber-300'
                      }`}
                    >
                      <img src={p.url} alt={p.label} className="w-10 h-10 rounded-lg object-cover" />
                      <div className="text-[11px] font-bold text-stone-800 leading-tight truncate">
                        {p.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Card Preview */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Card Preview with Photo</span>
                {tempPhotoUrl && (
                  <button
                    type="button"
                    onClick={() => setTempPhotoUrl('')}
                    className="text-[11px] text-amber-800 hover:underline cursor-pointer"
                  >
                    Clear preview
                  </button>
                )}
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-200">
                <SheepVisualCard
                  breedName={editingSheepForPhoto.breedName}
                  category={editingSheepForPhoto.category}
                  colorPattern={editingSheepForPhoto.colorPattern}
                  weightKg={editingSheepForPhoto.weightKg}
                  teethCount={editingSheepForPhoto.teethCount}
                  tagId={editingSheepForPhoto.tagId}
                  imageUrl={tempPhotoUrl}
                  className="h-48"
                />
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              {editingSheepForPhoto.imageUrl ? (
                <button
                  type="button"
                  onClick={handleRemovePhotoFromSheep}
                  className="px-3.5 py-2 text-xs font-bold rounded-xl text-red-700 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Photo</span>
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingSheepForPhoto(null)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 text-xs font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSavePhotoToSheep}
                  disabled={!tempPhotoUrl}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  Save Photo to Sheep Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {previewPhotoUrl && (
        <div
          onClick={() => setPreviewPhotoUrl(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-150"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <span className="font-bold text-sm">{previewPhotoUrl.title}</span>
              <button
                type="button"
                onClick={() => setPreviewPhotoUrl(null)}
                className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={previewPhotoUrl.url}
              alt={previewPhotoUrl.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* MODAL: ADD NEW SHEEP WITH PHOTO UPLOAD */}
      {showAddSheepModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b">
              <h3 className="font-bold text-stone-900 text-lg">Register New Animal Profile</h3>
              <button
                type="button"
                onClick={() => setShowAddSheepModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSheep} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700">Ear Tag ID</label>
                  <input
                    type="text"
                    value={newTagId}
                    onChange={(e) => setNewTagId(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg font-mono font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Breed Name</label>
                  <input
                    type="text"
                    value={newBreedName}
                    onChange={(e) => setNewBreedName(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg font-semibold"
                    required
                  />
                </div>
              </div>

              {/* REAL PHOTO ATTACHMENT SECTION IN ADD SHEEP MODAL */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-amber-700" />
                    <span>Real Animal Photo (Optional)</span>
                  </span>
                  {newSheepPhotoUrl && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Photo Selected
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <label className="px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg text-[11px] font-bold text-stone-800 cursor-pointer flex items-center gap-1.5 shadow-xs">
                    <Upload className="w-3.5 h-3.5 text-amber-700" />
                    <span>Upload from Phone / Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => handleImageFileChange(e, setNewSheepPhotoUrl)}
                      className="hidden"
                    />
                  </label>

                  <input
                    type="url"
                    value={newSheepPhotoUrl}
                    onChange={(e) => setNewSheepPhotoUrl(e.target.value)}
                    placeholder="Or paste image URL..."
                    className="flex-1 p-1.5 border rounded-lg text-xs"
                  />
                </div>

                {newSheepPhotoUrl && (
                  <div className="relative w-full h-24 rounded-lg overflow-hidden border border-stone-300">
                    <img src={newSheepPhotoUrl} alt="New sheep" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setNewSheepPhotoUrl('')}
                      className="absolute top-1 right-1 p-1 bg-black/60 rounded text-white hover:bg-black/90 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-stone-700">Weight (kg)</label>
                  <input
                    type="number"
                    value={newWeight}
                    onChange={(e) => setNewWeight(Number(e.target.value))}
                    className="w-full mt-1 p-2 border rounded-lg font-mono font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Age (Months)</label>
                  <input
                    type="number"
                    value={newAge}
                    onChange={(e) => setNewAge(Number(e.target.value))}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Teeth</label>
                  <select
                    value={newTeeth}
                    onChange={(e) => setNewTeeth(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg"
                  >
                    <option value="Milk Teeth">Milk Teeth</option>
                    <option value="2-Teeth">2-Teeth</option>
                    <option value="4-Teeth">4-Teeth</option>
                    <option value="Full Mouth">Full Mouth</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700">Price (₹)</label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full mt-1 p-2 border rounded-lg font-mono font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Initial Stock Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg"
                  >
                    <option value="Available">Available</option>
                    <option value="Only 1 Left">Only 1 Left</option>
                    <option value="Reserved">Reserved</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddSheepModal(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-700 cursor-pointer shadow-xs"
                >
                  Save Animal Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD BREEDING LOG */}
      {showAddBreedingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="font-bold text-stone-900 text-lg">Log New Mating Event</h3>
            <form onSubmit={handleAddBreeding} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700">Sire (Ram Tag ID)</label>
                <input
                  type="text"
                  value={newRamTag}
                  onChange={(e) => setNewRamTag(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Dam (Ewe Tag ID)</label>
                <input
                  type="text"
                  value={newEweTag}
                  onChange={(e) => setNewEweTag(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Mating Date</label>
                <input
                  type="date"
                  value={newMatingDate}
                  onChange={(e) => setNewMatingDate(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Progeny & Health Notes</label>
                <textarea
                  value={newProgenyNotes}
                  onChange={(e) => setNewProgenyNotes(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  rows={2}
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddBreedingModal(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-700 cursor-pointer shadow-xs"
                >
                  Record Breeding
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD HEALTH RECORD */}
      {showAddHealthModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="font-bold text-stone-900 text-lg">Record Health & Vaccination</h3>
            <form onSubmit={handleAddHealth} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700">Animal Ear Tag</label>
                <input
                  type="text"
                  value={newHealthTag}
                  onChange={(e) => setNewHealthTag(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Vaccine Administered</label>
                <input
                  type="text"
                  value={newHealthVaccine}
                  onChange={(e) => setNewHealthVaccine(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Dewormer Product</label>
                <input
                  type="text"
                  value={newDewormer}
                  onChange={(e) => setNewDewormer(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700">Veterinarian Name</label>
                <input
                  type="text"
                  value={newVetName}
                  onChange={(e) => setNewVetName(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddHealthModal(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-700 cursor-pointer shadow-xs"
                >
                  Save Health Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: SCHEDULE VET APPOINTMENT */}
      {showBookVetModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
            <h3 className="font-bold text-stone-900 text-lg">Schedule Farm Veterinary Visit</h3>
            <form onSubmit={handleBookVet} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700">Farmer / Farm Name</label>
                  <input
                    type="text"
                    value={vetFarmerName}
                    onChange={(e) => setVetFarmerName(e.target.value)}
                    placeholder="e.g. S. Srinivas Reddy"
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Contact Phone</label>
                  <input
                    type="tel"
                    value={vetPhone}
                    onChange={(e) => setVetPhone(e.target.value)}
                    placeholder="+91 98490 00000"
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700">Farm Location & Village</label>
                <input
                  type="text"
                  value={vetLocation}
                  onChange={(e) => setVetLocation(e.target.value)}
                  placeholder="e.g. Chevella Mandal, Ranga Reddy Dist"
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700">Date of Visit</label>
                  <input
                    type="date"
                    value={vetDate}
                    onChange={(e) => setVetDate(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Time Slot</label>
                  <select
                    value={vetTimeSlot}
                    onChange={(e) => setVetTimeSlot(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg"
                  >
                    <option value="09:00 AM - 11:30 AM">Morning (9:00 AM - 11:30 AM)</option>
                    <option value="11:30 AM - 02:00 PM">Midday (11:30 AM - 2:00 PM)</option>
                    <option value="03:00 PM - 05:30 PM">Afternoon (3:00 PM - 5:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700">Flock Size</label>
                  <input
                    type="number"
                    value={vetFlockSize}
                    onChange={(e) => setVetFlockSize(Number(e.target.value))}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700">Purpose</label>
                  <select
                    value={vetPurpose}
                    onChange={(e) => setVetPurpose(e.target.value as any)}
                    className="w-full mt-1 p-2 border rounded-lg"
                  >
                    <option value="Flock Health Inspection">Herd Health Inspection</option>
                    <option value="Vaccination Camp">Vaccination Camp (PPR/ET)</option>
                    <option value="Artificial Insemination">Artificial Insemination</option>
                    <option value="Emergency Care">Emergency Care</option>
                    <option value="Deworming & Nutrition Audit">Deworming & Nutrition Audit</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowBookVetModal(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-700 cursor-pointer shadow-xs"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
