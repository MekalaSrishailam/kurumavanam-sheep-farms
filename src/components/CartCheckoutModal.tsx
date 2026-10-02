import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import {
  X,
  Trash2,
  ShieldCheck,
  CreditCard,
  QrCode,
  Building2,
  CheckCircle2,
  Truck,
  ArrowRight,
  Printer,
  Sparkles,
  Lock,
  Download
} from 'lucide-react';
import { KurumaRamLogo } from './FarmVisuals';

interface CartCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onOrderCompleted: (order: Order) => void;
}

type PaymentMethod = 'UPI' | 'Credit/Debit Card' | 'Net Banking' | 'Farm Token Advance' | 'Cash on Farm Pickup';

export const CartCheckoutModal: React.FC<CartCheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  setCart,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  // Checkout Steps: 'cart' -> 'details' -> 'payment' -> 'success'
  const [step, setStep] = useState<'cart' | 'details' | 'payment' | 'success'>('cart');

  // Customer Form
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [transportInsurance, setTransportInsurance] = useState(true);

  // Payment Form
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('UPI');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [selectedBank, setSelectedBank] = useState('SBI');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Calculations
  const hasLivestock = cart.some((it) => it.type === 'livestock');
  const hasTokenItem = cart.some((it) => it.isTokenAdvance);

  const subtotal = cart.reduce((acc, it) => acc + it.price * it.quantity, 0);
  const insuranceCost = hasLivestock && transportInsurance ? 350 : 0;
  const deliveryFee = cart.some((it) => it.type === 'mutton') ? 80 : 0;
  const grandTotal = subtotal + insuranceCost + deliveryFee;

  // If token advance chosen, calculate advance due
  const advanceTokenTotal = cart.reduce((acc, it) => {
    if (it.isTokenAdvance) {
      return acc + (it.tokenAmount || 1000) * it.quantity;
    }
    return acc + it.price * it.quantity;
  }, 0) + insuranceCost + deliveryFee;

  const isAdvancePaymentMode = hasTokenItem && paymentMethod === 'Farm Token Advance';
  const amountToPayNow = isAdvancePaymentMode ? advanceTokenTotal : grandTotal;
  const balanceRemaining = isAdvancePaymentMode ? grandTotal - advanceTokenTotal : 0;

  const removeItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !address) return;
    setStep('payment');
  };

  const handleExecutePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const trackingCode = `KV-TRK-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder: Order = {
        id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toISOString().split('T')[0],
        customerName,
        phone,
        email: email || `${phone.replace(/\D/g, '')}@kurumavanam.in`,
        address,
        city: city || 'Telangana / Andhra',
        pincode: pincode || '500001',
        items: [...cart],
        totalAmount: grandTotal,
        tokenPaid: amountToPayNow,
        balanceDue: balanceRemaining,
        paymentMethod,
        paymentStatus: isAdvancePaymentMode
          ? 'Advance Token Paid (₹1,000)'
          : 'Paid in Full',
        fulfillmentStatus: 'Order Confirmed',
        trackingNumber: trackingCode,
        transportInsurance
      };

      setCompletedOrder(newOrder);
      onOrderCompleted(newOrder);
      setCart([]);
      setStep('success');
    }, 1800);
  };

  const printInvoice = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Modal Header */}
        <div className="bg-[#1C3829] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KurumaRamLogo className="w-8 h-8" />
            <div>
              <h2 className="text-lg font-bold">
                {step === 'cart' && 'Your Livestock & Farm Basket'}
                {step === 'details' && 'Shipping & Farm Delivery Address'}
                {step === 'payment' && 'Secure Livestock Escrow Payment Gateway'}
                {step === 'success' && 'Order Confirmed & Booking Receipt'}
              </h2>
              <div className="text-xs text-emerald-300 flex items-center gap-1.5 mt-0.5">
                <Lock className="w-3 h-3" />
                <span>256-Bit SSL Encrypted Payment Gateway</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CART ITEMS */}
        {step === 'cart' && (
          <div className="p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <Truck className="w-12 h-12 text-stone-300 mx-auto" />
                <h3 className="font-bold text-stone-800 text-lg">Your basket is empty</h3>
                <p className="text-xs text-stone-500">
                  Select pureblood sheep breeds, fresh pasture mutton, or high-protein Super Napier grass bundles.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Start Browsing
                </button>
              </div>
            ) : (
              <>
                <div className="divide-y divide-stone-200 max-h-72 overflow-y-auto pr-1">
                  {cart.map((item, idx) => (
                    <div key={idx} className="py-3.5 flex items-center justify-between gap-4">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-stone-900 text-sm">{item.title}</span>
                          {item.isTokenAdvance && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                              Token Advance
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-stone-500 font-mono-num">
                          Qty: {item.quantity} {item.unit || ''} · ₹{item.price.toLocaleString('en-IN')}{' '}
                          {item.unit ? `per ${item.unit}` : ''}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-bold text-stone-900 font-mono-num text-sm">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => removeItem(idx)}
                          className="p-1.5 text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal & Livestock Insurance Toggle */}
                <div className="bg-stone-50 p-4 rounded-xl space-y-2.5 text-xs text-stone-700 border border-stone-200">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-bold font-mono-num">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {hasLivestock && (
                    <label className="flex items-start gap-2 pt-2 border-t border-stone-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={transportInsurance}
                        onChange={(e) => setTransportInsurance(e.target.checked)}
                        className="mt-0.5 accent-emerald-700"
                      />
                      <div>
                        <span className="font-semibold text-stone-900">
                          Livestock Specialized Transit Insurance (+₹350)
                        </span>
                        <p className="text-[11px] text-stone-500">
                          Comprehensive coverage for live animal transit, mortality insurance, and on-van veterinarian care.
                        </p>
                      </div>
                    </label>
                  )}

                  {deliveryFee > 0 && (
                    <div className="flex justify-between">
                      <span>Mutton Cold-Chain Chilled Delivery:</span>
                      <span className="font-bold font-mono-num">₹{deliveryFee}</span>
                    </div>
                  )}

                  <div className="flex justify-between pt-2 border-t border-stone-300 text-sm font-extrabold text-[#1C3829]">
                    <span>Grand Total:</span>
                    <span className="font-mono-num">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>

                  {hasTokenItem && (
                    <div className="bg-amber-100/80 p-2.5 rounded-lg border border-amber-300 text-amber-950 font-medium">
                      Token reservation allows paying just ₹1,000 per animal now to secure tag ownership. Balance payable upon on-farm inspection or livestock van delivery!
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setStep('details')}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Proceed to Delivery & Farmer Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        )}

        {/* STEP 2: ADDRESS & FARMER DETAILS */}
        {step === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-stone-700">Full Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. M. Ravinder Reddy"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-stone-700">Contact Phone (Mobile / WhatsApp)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98480 12345"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-stone-700">Email Address (For Tax Invoice & Transit GPS)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ravinder.reddy@gmail.com"
                className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
              />
            </div>

            <div>
              <label className="font-bold text-stone-700">
                Delivery / Farmhouse Address (With Landmark)
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Plot/Survey No., Village, Mandal, District"
                className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                rows={2}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-stone-700">City / District</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Hyderabad / Ranga Reddy"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
              <div>
                <label className="font-bold text-stone-700">PIN Code</label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="e.g. 501218"
                  className="w-full mt-1 p-2.5 border rounded-lg border-stone-300"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
              >
                Back to Basket
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#1C3829] hover:bg-emerald-900 text-white font-bold rounded-xl cursor-pointer"
              >
                Proceed to Secure Payment
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: SECURE PAYMENT GATEWAY */}
        {step === 'payment' && (
          <div className="p-6 space-y-5">
            {/* Amount Banner */}
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-xs text-stone-500">Payable Amount Now:</div>
                <div className="text-2xl font-extrabold text-[#1C3829] font-mono-num">
                  ₹{amountToPayNow.toLocaleString('en-IN')}
                </div>
                {balanceRemaining > 0 && (
                  <div className="text-[11px] text-amber-800 font-medium">
                    Balance ₹{balanceRemaining.toLocaleString('en-IN')} payable on livestock delivery
                  </div>
                )}
              </div>
              <div className="text-right text-xs text-emerald-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Escrow Protected</span>
              </div>
            </div>

            {/* Payment Method Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('UPI')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'UPI'
                    ? 'bg-emerald-800 text-white border-emerald-900'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>UPI / QR Code</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('Credit/Debit Card')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'Credit/Debit Card'
                    ? 'bg-emerald-800 text-white border-emerald-900'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Card (RuPay/Visa)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('Net Banking')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'Net Banking'
                    ? 'bg-emerald-800 text-white border-emerald-900'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Net Banking</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('Farm Token Advance')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'Farm Token Advance'
                    ? 'bg-amber-600 text-white border-amber-700'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Advance Token</span>
              </button>
            </div>

            {/* PAYMENT INTERFACE DETAILS */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-3">
              {paymentMethod === 'UPI' && (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 rounded-xl border border-stone-200">
                    {/* Simulated Authentic Dynamic QR Code */}
                    <div className="w-28 h-28 bg-white border border-stone-300 rounded-lg p-1.5 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="0" y="0" width="30" height="30" fill="#1C3829" />
                        <rect x="5" y="5" width="20" height="20" fill="white" />
                        <rect x="9" y="9" width="12" height="12" fill="#1C3829" />
                        <rect x="70" y="0" width="30" height="30" fill="#1C3829" />
                        <rect x="75" y="5" width="20" height="20" fill="white" />
                        <rect x="79" y="9" width="12" height="12" fill="#1C3829" />
                        <rect x="0" y="70" width="30" height="30" fill="#1C3829" />
                        <rect x="5" y="75" width="20" height="20" fill="white" />
                        <rect x="9" y="79" width="12" height="12" fill="#1C3829" />
                        <rect x="40" y="10" width="10" height="20" fill="#1C3829" />
                        <rect x="40" y="40" width="20" height="20" fill="#D97706" />
                        <rect x="65" y="50" width="25" height="10" fill="#1C3829" />
                        <rect x="50" y="75" width="15" height="15" fill="#1C3829" />
                        <rect x="75" y="75" width="20" height="20" fill="#1C3829" />
                      </svg>
                    </div>

                    <div className="space-y-1 text-center sm:text-left">
                      <div className="font-bold text-stone-900">Scan via any UPI App</div>
                      <div className="text-[11px] text-stone-500">
                        GPay, PhonePe, Paytm, BHIM, Cred
                      </div>
                      <div className="font-mono-num font-semibold text-emerald-800 text-xs">
                        VPA: kurumavanam.farms@icici
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700">Or Enter Your VPA / UPI ID</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="mobile-number@upi / yourname@okaxis"
                      className="w-full mt-1 p-2 border rounded-lg bg-white border-stone-300"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'Credit/Debit Card' && (
                <div className="space-y-3">
                  <div>
                    <label className="font-bold text-stone-700">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4532 ···· ···· 8892"
                      maxLength={19}
                      className="w-full mt-1 p-2 border rounded-lg bg-white border-stone-300 font-mono-num"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-stone-700">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="08/29"
                        maxLength={5}
                        className="w-full mt-1 p-2 border rounded-lg bg-white border-stone-300 font-mono-num"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-stone-700">CVV</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="···"
                        maxLength={3}
                        className="w-full mt-1 p-2 border rounded-lg bg-white border-stone-300 font-mono-num"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'Net Banking' && (
                <div className="space-y-2">
                  <label className="font-bold text-stone-700">Select Bank</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full p-2 border rounded-lg bg-white border-stone-300 cursor-pointer"
                  >
                    <option value="SBI">State Bank of India (SBI)</option>
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="Axis">Axis Bank</option>
                    <option value="Canara">Canara Bank</option>
                    <option value="Union">Union Bank of India</option>
                    <option value="APGVB">Andhra Pradesh Grameena Vikas Bank (APGVB)</option>
                    <option value="TGB">Telangana Grameena Bank</option>
                  </select>
                </div>
              )}

              {paymentMethod === 'Farm Token Advance' && (
                <div className="space-y-1.5 text-stone-700">
                  <div className="font-bold text-stone-900">Kuruma Vanam Farm Escrow Token</div>
                  <p className="leading-relaxed">
                    Paying <strong className="font-bold text-emerald-800">₹{amountToPayNow.toLocaleString('en-IN')}</strong> now immediately reserves your selected livestock tag in the registry. A livestock officer will call you to confirm health documentation and schedule direct van transport.
                  </p>
                </div>
              )}
            </div>

            {/* Execute Payment Button */}
            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer text-xs"
              >
                Back
              </button>

              <button
                onClick={handleExecutePayment}
                disabled={isProcessing}
                className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Authorizing Escrow Gateway...</span>
                  </span>
                ) : (
                  <span>
                    Pay ₹{amountToPayNow.toLocaleString('en-IN')} & Confirm Order
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: ORDER SUCCESS & RECEIPT */}
        {step === 'success' && completedOrder && (
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Order Confirmed!</h3>
              <p className="text-xs text-stone-600">
                Receipt and Livestock Health Verification sent to{' '}
                <strong className="text-stone-900">{completedOrder.phone}</strong>.
              </p>
            </div>

            {/* Printable Receipt Card */}
            <div
              id="printable-receipt"
              className="bg-stone-50 border border-stone-200 p-5 rounded-2xl space-y-4 text-xs text-stone-700"
            >
              <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                <div>
                  <div className="font-extrabold text-stone-900 text-sm">KURUMA VANAM SHEEP FARMS</div>
                  <div className="text-[10px] text-stone-500">Government Reg: TS/AH/2026/8941</div>
                </div>
                <div className="text-right">
                  <div className="font-mono-num font-bold text-stone-900">{completedOrder.id}</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">
                    TRACK: {completedOrder.trackingNumber}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-stone-500">Buyer Name:</span>{' '}
                  <strong className="text-stone-900">{completedOrder.customerName}</strong>
                </div>
                <div>
                  <span className="text-stone-500">Delivery Address:</span>{' '}
                  <span className="text-stone-900">{completedOrder.city}, {completedOrder.pincode}</span>
                </div>
                <div>
                  <span className="text-stone-500">Payment Status:</span>{' '}
                  <span className="text-emerald-800 font-bold">{completedOrder.paymentStatus}</span>
                </div>
                <div>
                  <span className="text-stone-500">Fulfillment:</span>{' '}
                  <span className="text-stone-900 font-semibold">{completedOrder.fulfillmentStatus}</span>
                </div>
              </div>

              {/* Items summary */}
              <div className="border-t border-stone-200 pt-2 space-y-1">
                {completedOrder.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span>{item.quantity}x {item.title}</span>
                    <span className="font-mono-num font-bold">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-200 pt-2 flex justify-between font-bold text-stone-900">
                <span>Amount Paid Now:</span>
                <span className="font-mono-num text-emerald-800">
                  ₹{completedOrder.tokenPaid.toLocaleString('en-IN')}
                </span>
              </div>
              {completedOrder.balanceDue > 0 && (
                <div className="flex justify-between text-amber-900 font-semibold text-[11px]">
                  <span>Balance Payable at Farm / Delivery:</span>
                  <span className="font-mono-num">
                    ₹{completedOrder.balanceDue.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={printInvoice}
                className="flex-1 py-2.5 px-3 border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Tax Invoice & Gate Pass</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-3 bg-[#1C3829] hover:bg-emerald-900 text-white font-bold text-xs rounded-xl cursor-pointer text-center"
              >
                Back to Farm Marketplace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
