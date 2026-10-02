import { SheepBreed, MuttonProduct, FodderProduct, SupplementProduct, BreedingRecord, HealthRecord, VetAppointment, FarmerListing, Review, Order } from '../types';

export const FARM_CONTACT = {
  phone: '8978275273',
  formattedPhone: '+91 8978275273',
  address: 'Upparapally village, Wardhannapet-Khammam highway road, Warangal - 506310',
  shortLocation: 'Upparapally, Warangal',
  hours: 'Monday – Saturday: 06:30 AM – 07:00 PM | Sunday: 07:00 AM – 05:00 PM'
};

export const INITIAL_SHEEP_BREEDS: SheepBreed[] = [
  {
    id: 'sb-1',
    tagId: 'KV-DEC-101',
    breedName: 'Deccani Sheep',
    category: 'Meat Breed',
    ageMonths: 16,
    weightKg: 48,
    gender: 'Ram',
    teethCount: '2-Teeth',
    price: 21600,
    pricePerHead: 21600,
    pricePerKg: 450,
    stockStatus: 'Available',
    description: 'Indigenous Deccani sheep breed native to the Telangana plateau. Extremely drought-hardy, disease-resistant, and thrives on dry semi-arid grazing. Known for distinctive charcoal-black or mottled fleece, sturdy curved horns, and tender, lean mutton.',
    origin: 'Telangana & Deccan Plateau Heritage',
    colorPattern: 'Deep Charcoal Black with amber horn curl',
    healthDetails: {
      vaccinated: true,
      vaccines: ['PPR Certified', 'ET (Enterotoxaemia)', 'Sheep Pox'],
      dewormedDate: '2026-09-18 (Albendazole 10%)',
      bloodline: 'Warangal Deccani Indigenous Lineage',
      bodyScore: '4.6 / 5.0 (Optimal Lean Muscle)'
    },
    location: 'Kuruma Vanam Paddock A, Upparapally',
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80',
    badge: '100% Drought-Hardy Indigenous',
    dailyFeedRequirementKg: 3.8
  },
  {
    id: 'sb-2',
    tagId: 'KV-JOD-202',
    breedName: 'Nellore Jodipi',
    category: 'Breeding Ram',
    ageMonths: 18,
    weightKg: 62,
    gender: 'Ram',
    teethCount: '2-Teeth',
    price: 29760,
    pricePerHead: 29500,
    pricePerKg: 480,
    stockStatus: 'Available',
    description: 'Prized Nellore Jodipi ram with iconic pure white coat and striking black speckles around eyes, muzzle, and lower legs. Tall, broad-chested, and known for rapid weight gain and championship breeding genetics.',
    origin: 'Nellore-Prakasam Agro Belt',
    colorPattern: 'White body with jet-black eye rings and hooves',
    healthDetails: {
      vaccinated: true,
      vaccines: ['PPR Certified', 'ET Annual Booster', 'Sheep Pox', 'HS Vaccine'],
      dewormedDate: '2026-09-12 (Closantel + Ivermectin)',
      bloodline: 'Nellore Jodipi Alpha Stud Line',
      bodyScore: '4.8 / 5.0 (Heavy Meat Frame)'
    },
    location: 'Kuruma Vanam Stud Barn #1, Upparapally',
    imageUrl: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1000&q=80',
    badge: 'Championship Breeding Stud',
    dailyFeedRequirementKg: 4.8
  },
  {
    id: 'sb-3',
    tagId: 'KV-POT-303',
    breedName: 'Nellore Pota (Stall-Fed Heavy Ram)',
    category: 'Festival Ram',
    ageMonths: 20,
    weightKg: 72,
    gender: 'Ram',
    teethCount: '4-Teeth',
    price: 37440,
    pricePerHead: 37000,
    pricePerKg: 520,
    stockStatus: 'Only 1 Left',
    description: 'Nellore Pota (mature heavy ram) specially fed on Super Napier, sprouted pulses, and oil-cake concentrates. Magnificent horn structure, exceptional muscling, spotless presentation, ideal for religious festivals, ceremonies, or high-value breeding.',
    origin: 'Kuruma Vanam Intensive Nutrition Barn',
    colorPattern: 'Snowy White with pink skin undertones and thick horn curl',
    healthDetails: {
      vaccinated: true,
      vaccines: ['PPR', 'ET Booster', 'CCPP', 'FMD Stage 1'],
      dewormedDate: '2026-09-24 (Broad Spectrum Drench)',
      bloodline: 'Pota Heavyweight Series Gen-3',
      bodyScore: '5.0 / 5.0 (Showpiece Quality)'
    },
    location: 'VIP Stall Paddock, Upparapally',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80',
    badge: '72kg Live Weight Giant',
    dailyFeedRequirementKg: 5.6
  },
  {
    id: 'sb-4',
    tagId: 'KV-MDR-404',
    breedName: 'Madras Red',
    category: 'Meat Breed',
    ageMonths: 15,
    weightKg: 44,
    gender: 'Ram',
    teethCount: '2-Teeth',
    price: 20240,
    pricePerHead: 20000,
    pricePerKg: 460,
    stockStatus: 'Available',
    description: 'Hardy Madras Red hair sheep breed known for its rich rusty-brown or reddish-brown coat. Excellent meat quality, high dressing carcass ratio, and tremendous foraging adaptability in tropical climates.',
    origin: 'Madras / Northern Tamil Nadu & Coastal Belt',
    colorPattern: 'Solid Rust Red / Mahogany Brown',
    healthDetails: {
      vaccinated: true,
      vaccines: ['PPR', 'ET Booster', 'Sheep Pox'],
      dewormedDate: '2026-09-10 (Levamisole)',
      bloodline: 'Madras Red Coastal Hardy Line',
      bodyScore: '4.4 / 5.0'
    },
    location: 'Pasture Grazing Barn B, Upparapally',
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=1000&q=80',
    badge: 'High Dressing Percentage',
    dailyFeedRequirementKg: 3.5
  },
  {
    id: 'sb-5',
    tagId: 'KV-BEL-505',
    breedName: 'Bellary Sheep',
    category: 'Wool & Dual',
    ageMonths: 17,
    weightKg: 52,
    gender: 'Ram',
    teethCount: '2-Teeth',
    price: 23400,
    pricePerHead: 23000,
    pricePerKg: 450,
    stockStatus: 'Available',
    description: 'Sturdy Bellary breed with coarse hairy fleece ranging from grey to black. Medium-sized with strong bone density, renowned for nomadic walking endurance, strong mothering instincts, and dual-purpose utility.',
    origin: 'Bellary / Rayalaseema Agro Region',
    colorPattern: 'Greyish Black with white facial blaze',
    healthDetails: {
      vaccinated: true,
      vaccines: ['PPR Certified', 'ET Annual', 'Sheep Pox'],
      dewormedDate: '2026-09-20 (Ivermectin Pour-On)',
      bloodline: 'Bellary Plateau Foundation',
      bodyScore: '4.3 / 5.0'
    },
    location: 'Paddock C, Upparapally',
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80',
    badge: 'Dual Purpose & Heavy Bone',
    dailyFeedRequirementKg: 4.1
  }
];

export const INITIAL_MUTTON_PRODUCTS: MuttonProduct[] = [
  {
    id: 'mut-1',
    name: 'Farm-Fresh Curry Cut (With Bone)',
    cutType: 'Shoulder, ribs & leg pieces diced evenly',
    unit: '1 kg pack',
    pricePerKg: 890,
    minOrderKg: 1,
    inStock: true,
    description: 'Tender meat from 100% pasture-grazed young Kuruma sheep. Balanced fat-to-meat ratio with marrow bones.',
    nutritionInfo: {
      protein: '22.5g per 100g',
      fat: '7.8g per 100g',
      calories: '162 kcal'
    },
    bestFor: 'Telangana Golichina Mamsam, Andhra Curry, Mutton Roast',
    imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mut-2',
    name: 'Prime Boneless Mutton Cubes',
    cutType: 'Trimmed silverskin, lean leg & thigh cuts',
    unit: '1 kg pack',
    pricePerKg: 1150,
    minOrderKg: 1,
    inStock: true,
    description: 'Hand-trimmed 95% lean boneless cubes from tender young rams. Vacuum sealed at 2°C for tenderness.',
    nutritionInfo: {
      protein: '25.8g per 100g',
      fat: '4.2g per 100g',
      calories: '148 kcal'
    },
    bestFor: 'Tikka, Kebabs, Mutton Pepper Fry, Dry Roasts',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mut-3',
    name: 'Hyderabadi Dum Biryani Special Cut',
    cutType: '50-60g cuts with succulent marrow ribs',
    unit: '1.5 kg pack',
    pricePerKg: 940,
    minOrderKg: 1.5,
    inStock: true,
    description: 'Generous pieces cut specially so meat remains juicy throughout authentic dum cooking.',
    nutritionInfo: {
      protein: '21.0g per 100g',
      fat: '8.5g per 100g',
      calories: '174 kcal'
    },
    bestFor: 'Authentic Hyderabadi Dum Biryani, Mandi, Yakhni Pulao',
    imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mut-4',
    name: 'Pasture Lamb Rib Chops',
    cutType: 'Evenly trimmed rib chops with delicate marbling',
    unit: '1 kg pack',
    pricePerKg: 1080,
    minOrderKg: 1,
    inStock: true,
    description: 'Tender rib rack chops from young grass-grazed rams, cut to ideal thickness for grilling, tawa fry and roast.',
    nutritionInfo: {
      protein: '23.8g per 100g',
      fat: '9.1g per 100g',
      calories: '178 kcal'
    },
    bestFor: 'Pan Sear, Tawa Chops, Barbecue, Slow Tandoor',
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mut-5',
    name: 'Hand-Minced Mutton (Kheema)',
    cutType: 'Coarsely hand-minced shoulder & leg cut (85% lean)',
    unit: '500g pack',
    pricePerKg: 980,
    minOrderKg: 0.5,
    inStock: true,
    description: 'Double-cleansed, coarsely hand-minced fresh pasture mutton with 15% natural fat for juicy kebabs and fry.',
    nutritionInfo: {
      protein: '24.2g per 100g',
      fat: '6.5g per 100g',
      calories: '155 kcal'
    },
    bestFor: 'Keema Fry, Shami Kebabs, Keema Pulao, Samosa',
    imageUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1000&q=80'
  }
];

export const INITIAL_FODDER_PRODUCTS: FodderProduct[] = [
  {
    id: 'fod-1',
    name: 'Super Napier (CO-5) Fresh Green Grass Bundles',
    variety: 'Pennisetum purpureum x P. glaucum (CO-5 Hybrid)',
    unitPrice: 350,
    unitMeasure: '100 kg Bundle',
    proteinContent: '16.5% - 18.2% Crude Protein',
    crudeFiber: '24.5%',
    suitability: 'All sheep breeds, intensive feedlots & stall-fed rams',
    inStock: true,
    description: 'Harvested fresh every morning from Kuruma Vanam organic fields in Upparapally. Promotes rapid rumen digestion.',
    recommendedDose: '3.5 to 5.0 kg per adult sheep daily',
    imageUrl: ''
  },
  {
    id: 'fod-2',
    name: 'Sun-Cured Lucerne (Alfalfa) Hay Bales',
    variety: 'Medicago sativa (Queen of Fodders)',
    unitPrice: 620,
    unitMeasure: '25 kg Compressed Bale',
    proteinContent: '20.5% Crude Protein',
    crudeFiber: '21.0%',
    suitability: 'Growing ram lambs, pregnant ewes & breeding studs',
    inStock: true,
    description: 'Leguminous green hay rich in calcium and carotene.',
    recommendedDose: '500g to 800g per sheep daily with green fodder',
    imageUrl: ''
  }
];

export const INITIAL_SUPPLEMENTS: SupplementProduct[] = [
  {
    id: 'sup-1',
    name: 'Kuruma Chela-Mineral Salt Lick Block',
    category: 'Mineral Mixture',
    netWeight: '5 kg Block with Rope',
    price: 320,
    benefits: ['Prevents wool eating & pica', 'Balances zinc & selenium', 'Improves semen motility in stud rams'],
    dosage: 'Keep available free-choice in barn (1 block per 15 sheep)',
    inStock: true,
    imageUrl: ''
  }
];

export const INITIAL_BREEDING_RECORDS: BreedingRecord[] = [
  {
    id: 'br-1',
    ramTag: 'KV-JOD-202 (Nellore Jodipi Stud)',
    ramBreed: 'Nellore Jodipi',
    eweTag: 'KV-EWE-209',
    eweBreed: 'Nellore Jodipi',
    matingDate: '2026-05-15',
    expectedLambingDate: '2026-10-12',
    status: 'Pregnancy Confirmed',
    progenyNotes: 'Ultrasound confirmed single vigorous ram lamb. Ewe on high-calcium lucerne ration.',
    lambsBorn: undefined
  },
  {
    id: 'br-2',
    ramTag: 'KV-DEC-101 (Deccani Ram)',
    ramBreed: 'Deccani',
    eweTag: 'KV-EWE-155',
    eweBreed: 'Deccani Black',
    matingDate: '2026-04-10',
    expectedLambingDate: '2026-09-06',
    status: 'Lambing Completed',
    progenyNotes: 'Delivered twin female lambs (#KV-LMB-91 & #KV-LMB-92). Birth weights: 3.2kg & 3.0kg.',
    lambsBorn: 2
  }
];

export const INITIAL_HEALTH_RECORDS: HealthRecord[] = [
  {
    id: 'hr-1',
    tagId: 'KV-DEC-101',
    breed: 'Deccani Sheep',
    checkupDate: '2026-09-15',
    bodyWeightKg: 48,
    condition: 'Excellent',
    vaccineAdministered: 'Enterotoxaemia (ET) Booster',
    dewormerName: 'Albendazole 10% Suspension',
    veterinarian: 'Dr. R. Srinivas, MVSc',
    nextFollowUpDate: '2026-12-15',
    notes: 'Rumen active, mucous membranes healthy (FAMACHA 1), hooves trimmed.'
  },
  {
    id: 'hr-2',
    tagId: 'KV-JOD-202',
    breed: 'Nellore Jodipi Stud',
    checkupDate: '2026-09-22',
    bodyWeightKg: 62,
    condition: 'Excellent',
    vaccineAdministered: 'PPR National Booster Stamped',
    dewormerName: 'Closantel Oral Drench',
    veterinarian: 'Dr. M. Venkat Rao, B.V.Sc',
    nextFollowUpDate: '2026-11-20',
    notes: 'Superior testicle development (35cm), stud readiness verified.'
  }
];

export const INITIAL_VET_APPOINTMENTS: VetAppointment[] = [
  {
    id: 'va-1',
    farmerName: 'G. Mallaiah Yadav',
    farmLocation: 'Wardhannapet Rural',
    contactPhone: '+91 8978275273',
    date: '2026-10-06',
    timeSlot: '10:00 AM - 12:00 PM',
    flockSize: 60,
    purpose: 'Vaccination Camp',
    status: 'Confirmed',
    vetDoctor: 'Dr. R. Srinivas, MVSc (Lead Farm Vet)',
    specialInstructions: 'PPR & Deworming combo drive.'
  }
];

export const INITIAL_FARMER_LISTINGS: FarmerListing[] = [
  {
    id: 'fl-1',
    farmerName: 'P. Sambasiva Rao',
    phone: '+91 8978275273',
    villageLocation: 'Wardhannapet',
    district: 'Warangal',
    breed: 'Deccani Sheep',
    animalType: 'Ram',
    count: 8,
    avgWeightKg: 45,
    expectedPricePerHead: 19500,
    vaccinationDone: true,
    remarks: 'Grazing in Wardhannapet pastures. Healthy teeth and coat.',
    dateSubmitted: '2026-10-01',
    status: 'Verified & Listed'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'K. Srinivasa Rao',
    role: 'Commercial Meat Trader (50 Head Weekly)',
    farmLocation: 'Warangal - Khammam Highway',
    rating: 5,
    date: '22 September 2026',
    comment: 'We buy Deccani and Nellore rams from Kuruma Vanam in Upparapally. The option to buy either by live weight on their digital weighbridge or per head gives us 100% pricing clarity. Farm pickup is very smooth.',
    verifiedBuyer: true,
    sheepPurchased: 'Deccani Sheep (Live Weight Batch)'
  },
  {
    id: 'rev-2',
    author: 'R. Thirupathi Reddy',
    role: 'Progressive Sheep Breeder',
    farmLocation: 'Jangaon, Telangana',
    rating: 5,
    date: '28 September 2026',
    comment: 'Purchased a Nellore Jodipi stud ram. Clean vaccination card, PPR stamping, and zero disease. Ram has adapted immediately to our pasture.',
    verifiedBuyer: true,
    sheepPurchased: 'Nellore Jodipi Stud Ram'
  },
  {
    id: 'rev-3',
    author: 'Mohammad Azharuddin',
    role: 'Festival Buyer',
    farmLocation: 'Hanamkonda, Warangal',
    rating: 5,
    date: '30 September 2026',
    comment: 'Called on 8978275273 and visited the farm in Upparapally. Inspected the Nellore Pota ram in person. Arranged direct delivery right to our doorstep without any hassle.',
    verifiedBuyer: true,
    sheepPurchased: 'Nellore Pota Heavy Ram'
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD-5012',
    date: '2026-10-01',
    customerName: 'K. Srinivas',
    phone: '+91 8978275273',
    email: 'srinivas.warangal@gmail.com',
    address: 'Near Highway Junction, Wardhannapet',
    city: 'Warangal',
    pincode: '506310',
    items: [
      {
        id: 'sb-1-head',
        title: 'Deccani Sheep (#KV-DEC-101)',
        type: 'livestock',
        price: 21600,
        quantity: 1,
        isTokenAdvance: true,
        tokenAmount: 1000,
        tagId: 'KV-DEC-101'
      }
    ],
    totalAmount: 21600,
    tokenPaid: 1000,
    balanceDue: 20600,
    paymentMethod: 'Farm Token Advance',
    paymentStatus: 'Advance Token Paid (₹1,000)',
    fulfillmentStatus: 'Order Confirmed',
    trackingNumber: 'KV-TRK-5012',
    transportInsurance: true,
    notes: 'Buyer scheduled farm pickup at Upparapally or delivery via livestock van.'
  }
];

export const INITIAL_USERS: import('../types').User[] = [
  {
    id: 'usr-admin-1',
    name: 'Mekala Srishailam',
    phone: '8978275273',
    role: 'admin',
    customerType: 'Livestock Breeder',
    location: 'Upparapally, Warangal',
    password: 'admin123',
    createdAt: '2026-01-15'
  },
  {
    id: 'usr-cust-1',
    name: 'Ramesh Kumar',
    phone: '9876543210',
    role: 'customer',
    customerType: 'Commercial Meat Buyer',
    location: 'Hanamkonda, Warangal',
    password: 'customer123',
    createdAt: '2026-08-20'
  }
];
