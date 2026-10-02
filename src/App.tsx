/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INITIAL_SHEEP_BREEDS,
  INITIAL_MUTTON_PRODUCTS,
  INITIAL_FODDER_PRODUCTS,
  INITIAL_SUPPLEMENTS,
  INITIAL_BREEDING_RECORDS,
  INITIAL_HEALTH_RECORDS,
  INITIAL_VET_APPOINTMENTS,
  INITIAL_FARMER_LISTINGS,
  INITIAL_REVIEWS,
  INITIAL_ORDERS,
  INITIAL_USERS,
  FARM_CONTACT
} from './data/mockData';
import {
  SheepBreed,
  MuttonProduct,
  FodderProduct,
  SupplementProduct,
  CartItem,
  Order,
  BreedingRecord,
  HealthRecord,
  VetAppointment,
  FarmerListing,
  Review,
  User
} from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SheepMarketplace } from './components/SheepMarketplace';
import { ThreeLivestockCategories } from './components/ThreeLivestockCategories';
import { AboutSection } from './components/AboutSection';
import { ProofAndTrust } from './components/ProofAndTrust';
import { FAQSection } from './components/FAQSection';
import { SheepDetailModal } from './components/SheepDetailModal';
import { FreshMuttonSection } from './components/FreshMuttonSection';
import { FodderSupplementsSection } from './components/FodderSupplementsSection';
import { FarmManagementDashboard } from './components/FarmManagementDashboard';
import { MainPlatformDashboard } from './components/MainPlatformDashboard';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactLeadSection } from './components/ContactLeadSection';
import { CartCheckoutModal } from './components/CartCheckoutModal';
import { FarmerListingModal } from './components/FarmerListingModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { SideMenuDrawer } from './components/SideMenuDrawer';
import { AuthModal, AuthMode } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { Footer } from './components/Footer';
import { Menu, Sparkles, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  // Navigation & Role State
  const [activeTab, setActiveTab] = useState<string>('marketplace');
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);

  // Authentication State with LocalStorage Persistence
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('kv_users_v2');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('kv_current_user_v2');
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<AuthMode>('customer-login');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Core Data with LocalStorage Persistence
  const [breeds, setBreeds] = useState<SheepBreed[]>(() => {
    const saved = localStorage.getItem('kv_sheep_breeds_v2');
    return saved ? JSON.parse(saved) : INITIAL_SHEEP_BREEDS;
  });

  const [muttonProducts, setMuttonProducts] = useState<MuttonProduct[]>(() => {
    const saved = localStorage.getItem('kv_mutton_products_v2');
    return saved ? JSON.parse(saved) : INITIAL_MUTTON_PRODUCTS;
  });
  const [fodderList] = useState<FodderProduct[]>(INITIAL_FODDER_PRODUCTS);
  const [supplementsList] = useState<SupplementProduct[]>(INITIAL_SUPPLEMENTS);

  const [breedingRecords, setBreedingRecords] = useState<BreedingRecord[]>(() => {
    const saved = localStorage.getItem('kv_breeding_records_v2');
    return saved ? JSON.parse(saved) : INITIAL_BREEDING_RECORDS;
  });

  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>(() => {
    const saved = localStorage.getItem('kv_health_records_v2');
    return saved ? JSON.parse(saved) : INITIAL_HEALTH_RECORDS;
  });

  const [vetAppointments, setVetAppointments] = useState<VetAppointment[]>(() => {
    const saved = localStorage.getItem('kv_vet_appointments_v2');
    return saved ? JSON.parse(saved) : INITIAL_VET_APPOINTMENTS;
  });

  const [farmerListings, setFarmerListings] = useState<FarmerListing[]>(() => {
    const saved = localStorage.getItem('kv_farmer_listings_v2');
    return saved ? JSON.parse(saved) : INITIAL_FARMER_LISTINGS;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('kv_reviews_v2');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('kv_orders_v2');
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('kv_cart_v2');
    return saved ? JSON.parse(saved) : [];
  });

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFarmerListingOpen, setIsFarmerListingOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [selectedSheepDetails, setSelectedSheepDetails] = useState<SheepBreed | null>(null);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('kv_users_v2', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('kv_current_user_v2', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('kv_current_user_v2');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('kv_sheep_breeds_v2', JSON.stringify(breeds));
  }, [breeds]);

  useEffect(() => {
    localStorage.setItem('kv_mutton_products_v2', JSON.stringify(muttonProducts));
  }, [muttonProducts]);

  useEffect(() => {
    localStorage.setItem('kv_cart_v2', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('kv_orders_v2', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('kv_breeding_records_v2', JSON.stringify(breedingRecords));
  }, [breedingRecords]);

  useEffect(() => {
    localStorage.setItem('kv_health_records_v2', JSON.stringify(healthRecords));
  }, [healthRecords]);

  useEffect(() => {
    localStorage.setItem('kv_vet_appointments_v2', JSON.stringify(vetAppointments));
  }, [vetAppointments]);

  useEffect(() => {
    localStorage.setItem('kv_farmer_listings_v2', JSON.stringify(farmerListings));
  }, [farmerListings]);

  useEffect(() => {
    localStorage.setItem('kv_reviews_v2', JSON.stringify(reviews));
  }, [reviews]);

  // Auth Actions
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    if (user.role === 'admin') {
      setIsAdminMode(true);
    }
  };

  const handleRegisterSuccess = (newUser: User) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdminMode(false);
  };

  const openAuthWithMode = (mode: AuthMode = 'customer-login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  // Cart actions
  const handleAddSheepToCart = (sheep: SheepBreed, isToken: boolean) => {
    const item: CartItem = {
      id: `${sheep.id}-${isToken ? 'token' : 'full'}`,
      title: `${sheep.breedName} (#${sheep.tagId})`,
      type: 'livestock',
      price: sheep.price,
      quantity: 1,
      isTokenAdvance: isToken,
      tokenAmount: 1000,
      tagId: sheep.tagId
    };

    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });

    setIsCartOpen(true);
  };

  const handleAddMuttonToCart = (product: MuttonProduct, quantityKg: number, slot: string) => {
    const item: CartItem = {
      id: `${product.id}-${slot}`,
      title: `${product.name} [Slot: ${slot.split(' ')[0]}]`,
      type: 'mutton',
      price: product.pricePerKg,
      quantity: quantityKg,
      unit: 'kg'
    };

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex >= 0) {
        const copy = [...prev];
        copy[existingIndex].quantity = Number((copy[existingIndex].quantity + quantityKg).toFixed(1));
        return copy;
      }
      return [...prev, item];
    });
  };

  const handleAddFodderToCart = (fodder: FodderProduct, quantity: number) => {
    const item: CartItem = {
      id: fodder.id,
      title: fodder.name,
      type: 'fodder',
      price: fodder.unitPrice,
      quantity,
      unit: fodder.unitMeasure
    };

    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, item];
    });
  };

  const handleAddSupplementToCart = (sup: SupplementProduct, quantity: number) => {
    const item: CartItem = {
      id: sup.id,
      title: sup.name,
      type: 'supplement',
      price: sup.price,
      quantity,
      unit: sup.netWeight
    };

    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, item];
    });
  };

  const handleOrderCompleted = (order: Order) => {
    setOrders((prev) => [order, ...prev]);

    // Automatically reserve livestock in inventory
    order.items.forEach((item) => {
      if (item.tagId) {
        setBreeds((prev) =>
          prev.map((b) => (b.tagId === item.tagId ? { ...b, stockStatus: 'Reserved' } : b))
        );
      }
    });
  };

  const handleAddFarmerListing = (listing: FarmerListing) => {
    setFarmerListings((prev) => [listing, ...prev]);
  };

  const handleAddReview = (review: Review) => {
    setReviews((prev) => [review, ...prev]);
  };

  const scrollToContact = () => {
    setActiveTab('marketplace');
    setTimeout(() => {
      const el = document.getElementById('contact-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToBreeds = () => {
    setActiveTab('marketplace');
    setTimeout(() => {
      const el = document.getElementById('our-breeds');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToProof = () => {
    setActiveTab('marketplace');
    setTimeout(() => {
      const el = document.getElementById('proof-and-trust');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToFAQs = () => {
    setActiveTab('marketplace');
    setTimeout(() => {
      const el = document.getElementById('faqs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F5] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900 relative">
      {/* Universal Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'breeds') {
            scrollToBreeds();
          } else if (tab === 'proof') {
            scrollToProof();
          } else if (tab === 'faqs') {
            scrollToFAQs();
          } else if (tab === 'contact') {
            scrollToContact();
          } else {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
        openFarmerListing={() => setIsFarmerListingOpen(true)}
        openOrderTracking={() => setIsOrderTrackingOpen(true)}
        openSideMenu={() => setIsSideMenuOpen(true)}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
        currentUser={currentUser}
        openAuthModal={openAuthWithMode}
        openProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Persistent Side Menu Button on the side of the website */}
      <aside aria-label="Quick Side Menu Trigger">
        <button
          onClick={() => setIsSideMenuOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-[#1C3829] to-[#12241a] hover:from-[#244734] hover:to-[#173023] text-white py-4 px-2.5 rounded-l-2xl shadow-2xl border-l-2 border-y border-amber-400/90 flex flex-col items-center gap-2 transition-all duration-200 group cursor-pointer hover:pl-3"
          aria-label="Open Side Navigation Menu"
          title="Open Side Menu & Features"
        >
          <div className="relative">
            <Menu className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-widest [writing-mode:vertical-rl] text-amber-200 group-hover:text-white drop-shadow-xs">
            MENU
          </span>
        </button>
      </aside>

      {/* Main Content Body */}
      <main className="flex-1">
        {isAdminMode ? (
          /* Dedicated Separate Admin & Farm Manager Hub */
          <FarmManagementDashboard
            breeds={breeds}
            setBreeds={setBreeds}
            muttonProducts={muttonProducts}
            setMuttonProducts={setMuttonProducts}
            breedingRecords={breedingRecords}
            setBreedingRecords={setBreedingRecords}
            healthRecords={healthRecords}
            setHealthRecords={setHealthRecords}
            vetAppointments={vetAppointments}
            setVetAppointments={setVetAppointments}
            farmerListings={farmerListings}
            setFarmerListings={setFarmerListings}
            orders={orders}
            setOrders={setOrders}
          />
        ) : (
          /* Customer & Agribusiness Storefront */
          <>
            {activeTab === 'dashboard' && (
              /* Main Platform Dashboard mentioning ALL features and all things */
              <MainPlatformDashboard
                onNavigate={(tab) => {
                  if (tab === 'breeds') {
                    scrollToBreeds();
                  } else if (tab === 'proof') {
                    scrollToProof();
                  } else if (tab === 'faqs') {
                    scrollToFAQs();
                  } else if (tab === 'contact') {
                    scrollToContact();
                  } else {
                    setActiveTab(tab);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                openCart={() => setIsCartOpen(true)}
                openFarmerListing={() => setIsFarmerListingOpen(true)}
                openOrderTracking={() => setIsOrderTrackingOpen(true)}
                openAuthModal={openAuthWithMode}
                openProfileModal={() => setIsProfileModalOpen(true)}
                currentUser={currentUser}
                isAdminMode={isAdminMode}
                setIsAdminMode={setIsAdminMode}
                breedsCount={breeds.length}
                ordersCount={orders.length}
              />
            )}

            {activeTab === 'marketplace' && (
              <>
                {/* 1. Hero / Home Section (With exact Main CTA: Call or WhatsApp us at 8978275273) */}
                <Hero
                  onExploreBreeds={scrollToBreeds}
                  onInquirePricing={scrollToContact}
                />

                {/* Prominent Banner into Complete Platform Dashboard */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-8 relative z-20">
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-300 flex items-center justify-center shrink-0">
                        <Layers className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-stone-900 text-sm sm:text-base">
                            Explore Complete Farm Dashboard & All Features
                          </span>
                          <span className="text-xs font-bold text-amber-800 font-telugu">
                            (కురుమల వైభవం – గొర్రెల వనం)
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                            Directory
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">
                          View live flock statistics, 5 pure breeds, feeding calculators, 147-day breeding records, and order logistics in one place.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 w-full md:w-auto">
                      <button
                        onClick={() => {
                          setActiveTab('dashboard');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex-1 md:flex-none px-4 py-2.5 bg-[#1C3829] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        <span>Open Main Dashboard</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                      </button>

                      {!currentUser && (
                        <button
                          onClick={() => openAuthWithMode('customer-login')}
                          className="px-3.5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-colors cursor-pointer border border-stone-300 whitespace-nowrap"
                        >
                          Customer Login
                        </button>
                      )}
                    </div>
                  </div>
                </section>

                {/* 2. Our Breeds & Services (Deccani, Nellore Jodipi, Nellore Pota, Madras Red, Bellary; Live Weight vs Head pricing; Pickup & Delivery terms) */}
                <SheepMarketplace
                  breeds={breeds}
                  onAddToCart={handleAddSheepToCart}
                  onOpenDetails={(sheep) => setSelectedSheepDetails(sheep)}
                />

                {/* 3 Core Livestock Categories */}
                <ThreeLivestockCategories
                  onSelectCategory={(category) => {
                    scrollToBreeds();
                  }}
                  onInquireWholesale={scrollToContact}
                  onExploreBreeds={scrollToBreeds}
                  onExploreMutton={() => setActiveTab('mutton')}
                />

                {/* 3. Proof & Trust (Health Guarantee, 100% Disease-Free, Vaccination Schedules, Ethical Rearing & Nutrition) */}
                <ProofAndTrust />

                {/* About Section */}
                <AboutSection
                  onBookVisit={scrollToContact}
                  onExploreBreeds={scrollToBreeds}
                />

                {/* 4. Frequently Asked Questions (Pricing by weight vs head, delivery fees, scheduling visits) */}
                <FAQSection />

                {/* Fresh Mutton Delivery Option */}
                <FreshMuttonSection
                  products={muttonProducts}
                  onAddToCart={handleAddMuttonToCart}
                />

                {/* 5. Contact Us (Lead form, address at Upparapally Warangal, phone 8978275273, operating hours & closing CTA) */}
                <ContactLeadSection />

                {/* Verified Buyer Testimonials */}
                <CustomerReviews
                  reviews={reviews}
                  onAddReview={handleAddReview}
                />
              </>
            )}

            {activeTab === 'categories' && (
              <div className="py-8">
                <ThreeLivestockCategories
                  onSelectCategory={(category) => {
                    scrollToBreeds();
                  }}
                  onInquireWholesale={scrollToContact}
                  onExploreBreeds={scrollToBreeds}
                  onExploreMutton={() => setActiveTab('mutton')}
                />
              </div>
            )}

            {activeTab === 'about' && (
              <div className="py-8">
                <AboutSection
                  onBookVisit={scrollToContact}
                  onExploreBreeds={scrollToBreeds}
                />
              </div>
            )}

            {activeTab === 'mutton' && (
              <FreshMuttonSection
                products={muttonProducts}
                onAddToCart={handleAddMuttonToCart}
              />
            )}

            {activeTab === 'fodder' && (
              <FodderSupplementsSection
                fodderList={fodderList}
                supplementsList={supplementsList}
                onAddFodder={handleAddFodderToCart}
                onAddSupplement={handleAddSupplementToCart}
              />
            )}

            {activeTab === 'contact' && (
              <div className="py-8">
                <ContactLeadSection />
              </div>
            )}
          </>
        )}
      </main>

      {/* Modals & Overlays */}
      <CartCheckoutModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
        onOrderCompleted={handleOrderCompleted}
      />

      <SheepDetailModal
        sheep={selectedSheepDetails}
        onClose={() => setSelectedSheepDetails(null)}
        onAddToCart={handleAddSheepToCart}
      />

      <FarmerListingModal
        isOpen={isFarmerListingOpen}
        onClose={() => setIsFarmerListingOpen(false)}
        onAddListing={handleAddFarmerListing}
      />

      <OrderTrackingModal
        isOpen={isOrderTrackingOpen}
        onClose={() => setIsOrderTrackingOpen(false)}
        orders={orders}
      />

      {/* Side Menu Drawer */}
      <SideMenuDrawer
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        onNavigate={(tab) => {
          if (tab === 'breeds') {
            scrollToBreeds();
          } else if (tab === 'proof' || tab === 'about') {
            scrollToProof();
          } else if (tab === 'faqs') {
            scrollToFAQs();
          } else if (tab === 'contact') {
            scrollToContact();
          } else {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        openCart={() => setIsCartOpen(true)}
        openFarmerListing={() => setIsFarmerListingOpen(true)}
        openOrderTracking={() => setIsOrderTrackingOpen(true)}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
        currentUser={currentUser}
        openAuthModal={openAuthWithMode}
        openProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Authentication Modal (Customer Login, Registration, Admin Login with Phone & Password) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
        users={users}
        onLoginSuccess={handleLoginSuccess}
        onRegisterSuccess={handleRegisterSuccess}
      />

      {/* Customer / Admin Profile Modal */}
      {currentUser && (
        <UserProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          currentUser={currentUser}
          orders={orders}
          onLogout={handleLogout}
          openOrderTracking={() => setIsOrderTrackingOpen(true)}
          openFarmerListing={() => setIsFarmerListingOpen(true)}
          switchToAdmin={() => {
            setIsAdminMode(true);
            setActiveTab('management');
          }}
        />
      )}

      {/* 5. Footer with exact phone 8978275273, address, and closing CTA */}
      <Footer
        onNavClick={(tab) => {
          if (tab === 'breeds') {
            scrollToBreeds();
          } else if (tab === 'proof') {
            scrollToProof();
          } else if (tab === 'faqs') {
            scrollToFAQs();
          } else if (tab === 'contact') {
            scrollToContact();
          } else {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        openFarmerListing={() => setIsFarmerListingOpen(true)}
        openOrderTracking={() => setIsOrderTrackingOpen(true)}
      />
    </div>
  );
}
