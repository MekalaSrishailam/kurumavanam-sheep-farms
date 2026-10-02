export type BreedCategory = 'All' | 'Meat Breed' | 'Breeding Ram' | 'Ewe & Lambs' | 'Wool & Dual' | 'Festival Ram';

export interface SheepBreed {
  id: string;
  tagId: string;
  breedName: string;
  category: BreedCategory;
  ageMonths: number;
  weightKg: number;
  gender: 'Ram' | 'Ewe' | 'Breeding Pair' | 'Lamb';
  teethCount: 'Milk Teeth' | '2-Teeth' | '4-Teeth' | 'Full Mouth';
  price: number;
  pricePerHead: number;
  pricePerKg: number;
  stockStatus: 'Available' | 'Reserved' | 'Sold' | 'Only 1 Left';
  description: string;
  origin: string;
  colorPattern: string;
  healthDetails: {
    vaccinated: boolean;
    vaccines: string[];
    dewormedDate: string;
    bloodline: string;
    bodyScore: string;
  };
  location: string;
  imageUrl: string;
  badge?: string;
  dailyFeedRequirementKg: number;
}

export interface MuttonProduct {
  id: string;
  name: string;
  cutType: string;
  unit: string;
  pricePerKg: number;
  minOrderKg: number;
  inStock: boolean;
  description: string;
  nutritionInfo: {
    protein: string;
    fat: string;
    calories: string;
  };
  bestFor: string;
  imageUrl: string;
}

export interface FodderProduct {
  id: string;
  name: string;
  variety: string;
  unitPrice: number;
  unitMeasure: string;
  proteinContent: string;
  crudeFiber: string;
  suitability: string;
  inStock: boolean;
  description: string;
  recommendedDose: string;
  imageUrl: string;
}

export interface SupplementProduct {
  id: string;
  name: string;
  category: 'Mineral Mixture' | 'Growth Tonic' | 'Digestive' | 'Calcium';
  netWeight: string;
  price: number;
  benefits: string[];
  dosage: string;
  inStock: boolean;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  title: string;
  type: 'livestock' | 'mutton' | 'fodder' | 'supplement';
  price: number;
  quantity: number;
  unit?: string;
  isTokenAdvance?: boolean;
  tokenAmount?: number;
  tagId?: string;
}

export interface Order {
  id: string;
  date: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  items: CartItem[];
  totalAmount: number;
  tokenPaid: number;
  balanceDue: number;
  paymentMethod: 'UPI' | 'Credit/Debit Card' | 'Net Banking' | 'Farm Token Advance' | 'Cash on Farm Pickup';
  paymentStatus: 'Paid in Full' | 'Advance Token Paid (₹1,000)' | 'Pending';
  fulfillmentStatus: 'Order Confirmed' | 'Veterinary Health Check Passed' | 'Livestock Van In Transit' | 'Out for Delivery' | 'Delivered';
  trackingNumber: string;
  transportInsurance: boolean;
  notes?: string;
}

export interface BreedingRecord {
  id: string;
  ramTag: string;
  ramBreed: string;
  eweTag: string;
  eweBreed: string;
  matingDate: string;
  expectedLambingDate: string;
  status: 'Mated' | 'Pregnancy Confirmed' | 'Lambing Completed' | 'Cycle Repeat';
  progenyNotes: string;
  lambsBorn?: number;
}

export interface HealthRecord {
  id: string;
  tagId: string;
  breed: string;
  checkupDate: string;
  bodyWeightKg: number;
  condition: 'Excellent' | 'Healthy' | 'Under Treatment' | 'Quarantine';
  vaccineAdministered: string;
  dewormerName: string;
  veterinarian: string;
  nextFollowUpDate: string;
  notes: string;
}

export interface VetAppointment {
  id: string;
  farmerName: string;
  farmLocation: string;
  contactPhone: string;
  date: string;
  timeSlot: string;
  flockSize: number;
  purpose: 'Flock Health Inspection' | 'Vaccination Camp' | 'Artificial Insemination' | 'Emergency Care' | 'Deworming & Nutrition Audit';
  status: 'Confirmed' | 'Pending Review' | 'Completed';
  vetDoctor: string;
  specialInstructions?: string;
}

export interface FarmerListing {
  id: string;
  farmerName: string;
  phone: string;
  villageLocation: string;
  district: string;
  breed: string;
  animalType: 'Ram' | 'Ewe' | 'Flock (Group)' | 'Lambs';
  count: number;
  avgWeightKg: number;
  expectedPricePerHead: number;
  vaccinationDone: boolean;
  remarks: string;
  dateSubmitted: string;
  status: 'Verified & Listed' | 'Pending Verification' | 'Sold';
}

export interface Review {
  id: string;
  author: string;
  role: string;
  farmLocation: string;
  rating: number;
  date: string;
  comment: string;
  verifiedBuyer: boolean;
  sheepPurchased?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  role: 'customer' | 'admin';
  customerType?: 'Commercial Meat Buyer' | 'Livestock Breeder' | 'Household Consumer';
  location?: string;
  password?: string;
  createdAt: string;
}
