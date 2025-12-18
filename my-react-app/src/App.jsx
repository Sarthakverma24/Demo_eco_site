import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User, 
  Heart, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  Zap, 
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Trash2,
  Minus,
  Plus,
  Tag,
  FileText,
  ChevronLeft,
  Share2
} from 'lucide-react';

// --- DATA CONSTANTS ---
// Fixed the logoImg reference by using a high-quality placeholder URL
const BRAND = {
  name: "RED STONE",
  logo: "https://api.dicebear.com/7.x/initials/svg?seed=RS&backgroundColor=ef4444&fontFamily=Verdana&fontSize=45&bold=true",
};

const HERO_CONTENT = {
  title: "VIRTUAL REALITY",
  subtitle: "AT ITS FINEST",
  tagline: "The Future in Your Hands",
  cta: "EXPLORE COLLECTION",
  image: "https://imgs.search.brave.com/UGi602O18ngbD1UhTXtzkxhqRdxUe7kJwVQAJivnd9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzEyLzMwLzI2/LzM2MF9GXzgxMjMw/MjYwNV9IRDdrVndt/RDQya2s3bUhEcUw4/eThOZ0NoM3N6OEVK/Ni5qcGc"
};

const PRODUCTS = [
  {
    id: 1,
    name: "Meta Quest Compact Charging Dock",
    price: 65.99,
    rating: 5.0,
    reviews: 24,
    image: "https://imgs.search.brave.com/Nsp6atsIDMpiAfhlbunhypbXxtqKjG_JWnpOFuZ2QYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2ph/YnJtZXRhdmVyc28u/Y29tLmJyL2Nkbi9z/aG9wL2ZpbGVzL01l/dGFDb21wYWN0Q2hh/cmdpbmdEb2NrQ29u/dHJvbGxlcnNRdWVz/dDMzU184MDB4LnBu/Zz92PTE3MzQ2NzAx/NDM",
    category: "Charging",
    sku: "meta-dock-001",
    description: "The ultimate charging solution for your VR ecosystem. This compact dock keeps your Meta Quest 3 and Touch Plus controllers powered up and organized. Features a high-speed magnetic connector for effortless docking and sleek LED indicators.",
    specs: ["Fast-charging technology", "Magnetic docking", "LED Status indicators", "Non-slip base"]
  },
  {
    id: 2,
    name: "Meta Quest Elite Strap",
    price: 59.99,
    rating: 4.8,
    reviews: 89,
    image: "https://imgs.search.brave.com/L_q-vB_KSngFKrm5tWoeJ46vJ16uVHjptij0faOVhCE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS40cmdvcy5pdC9p/L0FyZ29zLzQ3Mjk4/NDRfUl9aMDAxQT93/PTc1MCZoPTQ0MCZx/bHQ9NzA",
    category: "Ergonomics",
    sku: "meta-strap-elite",
    description: "Level up your VR comfort. The Elite Strap is designed to balance the weight of the headset for longer play sessions. The rear fit wheel allows for quick, micro-adjustments on the fly to ensure a perfect fit every time.",
    specs: ["Rigid support straps", "Fit adjustment dial", "Improved weight balance", "Easy installation"]
  },
  {
    id: 3,
    name: "Quest 3S Facial Interface",
    price: 31.99,
    rating: 4.5,
    reviews: 56,
    image: "https://imgs.search.brave.com/uHbqmVuSEONtg0l9qBJJ7Il0j4AL4qeclq7GaTnQhps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXBsb2FkdnIuY29t/L2NvbnRlbnQvaW1h/Z2VzLzIwMjQvMDkv/UXVlc3QtM1MtQnJl/YXRoYWJsZS1GYWNp/YWwtSW50ZXJmYWNl/LWNsaXBwaW5nLW9u/LWhlYWRzZXQuanBl/Zw",
    category: "Comfort",
    sku: "quest-face-if",
    description: "Stay cool during high-intensity sessions. This breathable facial interface features advanced venting to reduce lens fogging and heat buildup. Soft fabric padding ensures a gentle touch on your skin.",
    specs: ["Anti-fog venting", "Soft fabric padding", "Sweat-wicking material", "Light-leak reduction"]
  },
  {
    id: 4,
    name: "Compact Carrying Case",
    price: 49.99,
    rating: 4.9,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
    category: "Travel",
    sku: "case-compact-04",
    description: "Travel-ready protection for your gear. This lightweight yet durable carrying case fits your headset, controllers, and charging cable. The hard-shell exterior protects against impacts and scratches.",
    specs: ["Shock-resistant shell", "Padded interior", "Cable organizer", "Heavy-duty zipper"]
  },
  {
    id: 5,
    name: "Logitech MX MR Stylus",
    price: 129.99,
    rating: 4.7,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop",
    category: "Productivity",
    sku: "logi-mx-stylus",
    description: "Unlock professional precision in mixed reality. The Logitech MX Stylus allows for natural writing and drawing within 3D environments. Built for designers who demand haptic feedback and accuracy.",
    specs: ["Pressure sensitivity", "6-DoF tracking", "Haptic feedback", "USB-C charging"]
  }
];

const TRUST_BADGES = [
  { icon: ShieldCheck, title: "Extended Warranty", desc: "Protection for your gear" },
  { icon: Truck, title: "Free Delivery", desc: "On qualifying orders" },
  { icon: Zap, title: "Trusted Tech", desc: "Delivered Fast" },
  { icon: CreditCard, title: "Easy Installment", desc: "Flexible payment options" },
];

const TESTIMONIALS = [
  { id: 1, name: "Dexter Angelo Chan", role: "Client", text: "Network matters... responding fast and diligently in managing returns. Without their support, we could not have succeeded." },
  { id: 2, name: "Yvonne Chang", role: "Client", text: "Patient and customer first approach gave confidence from the start. Their empathy and support have been amazing." },
  { id: 3, name: "Ashley Gariepy", role: "Client", text: "Growing together... you show true partnership in every interaction." }
];

const NAV_LINKS = ["Virtual Reality", "Accessories", "IT Hardware", "Conferencing", "Brands"];

// --- STYLES INJECTION ---
const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      
      .font-heading { font-family: 'Outfit', sans-serif; }
      .font-body { font-family: 'Inter', sans-serif; }
      html { scroll-behavior: smooth; }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade { animation: fadeIn 0.4s ease-out forwards; }
    `}
  </style>
);

// --- COMPONENTS ---

const Header = ({ cartCount, onCartClick, onHomeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 font-body">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-3 cursor-pointer group" onClick={onHomeClick}>
            <div className="w-9 h-9 flex items-center justify-center bg-red-600 rounded-lg overflow-hidden">
              <img src={BRAND.logo} alt={BRAND.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-heading font-black tracking-tight text-gray-900 group-hover:opacity-80 transition-opacity">
              RED<span className="text-red-600">STONE</span>
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-12 relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full h-11 pl-5 pr-12 bg-gray-100 border border-transparent rounded-full focus:bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm transition-all font-medium text-gray-700"
            />
            <button className="absolute right-1 top-1 h-9 w-9 flex items-center justify-center rounded-full text-gray-500 hover:text-red-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
             <button className="flex flex-col items-center gap-1 group relative" onClick={onCartClick}>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors" strokeWidth={2} />
                {cartCount > 0 && (
                   <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                     {cartCount}
                   </span>
                )}
              </div>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <User className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors" strokeWidth={2} />
            </button>
          </div>

          <button className="lg:hidden p-2 text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden lg:block border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-center gap-10 py-4 text-xs font-bold text-gray-600 uppercase tracking-widest font-heading">
            <li className="text-red-600 hover:text-red-700 cursor-pointer" onClick={onHomeClick}>Home</li>
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="hover:text-gray-900 cursor-pointer transition-colors relative group">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 z-50 py-6 px-6 shadow-2xl h-screen">
          <ul className="space-y-6 font-bold text-gray-800 uppercase text-lg font-heading tracking-tight">
            <li className="text-red-600" onClick={() => {onHomeClick(); setIsMobileMenuOpen(false)}}>Home</li>
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="border-b border-gray-100 pb-2">{link}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const ProductCard = ({ product, onAddToCart, onProductClick }) => {
  return (
    <div 
      onClick={() => onProductClick(product)}
      className="group bg-white rounded-2xl p-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full relative border border-transparent hover:border-gray-100 cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-[#F8F8F8] rounded-xl mb-4">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-black/5 text-black/60 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider font-heading">
            {product.category}
          </span>
        </div>

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" 
        />
        
        {/* Hover Cart Button */}
        <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Don't trigger the product page open
              onAddToCart(product);
            }}
            className="w-full bg-gray-900/90 backdrop-blur text-white py-3 rounded-lg font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg active:scale-95"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="px-1 flex flex-col grow gap-1">
        <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-end justify-between pt-4">
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl text-gray-900 tracking-tight">${product.price}</span>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="text-[10px] font-bold text-gray-500">{product.rating}</span>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-red-600 group-hover:text-red-600 transition-colors lg:hidden"
          >
             <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- PRODUCT DESCRIPTION PAGE ---
const ProductDescriptionPage = ({ product, onAddToCart, onBack }) => {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade font-body">
      {/* Breadcrumb / Back */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors mb-10 font-heading font-bold uppercase text-xs tracking-[0.2em]"
      >
        <ChevronLeft className="w-4 h-4" /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-start">
        {/* Left: Product Media */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-3xl p-12 aspect-square flex items-center justify-center border border-gray-100 sticky top-32">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] font-heading bg-red-50 px-3 py-1.5 rounded-full mb-6 inline-block">
              Premium Hardware
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-200'}`} />
                ))}
                <span className="text-gray-900 font-bold ml-2">{product.rating}</span>
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <span className="text-gray-500 font-medium text-sm">{product.reviews} Customer Reviews</span>
            </div>
          </div>

          <div className="text-5xl font-heading font-black text-gray-900 tracking-tighter">
            ${product.price}
          </div>

          <p className="text-gray-600 leading-relaxed text-lg font-medium">
            {product.description || "Experience the absolute peak of virtual reality with our curated hardware line. Engineered for low latency, high comfort, and maximum immersion."}
          </p>

          <div className="grid grid-cols-1 gap-4">
            <h4 className="font-heading font-bold text-gray-900 uppercase text-xs tracking-widest mb-2">Specifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(product.specs || ["Official Meta accessory", "One-year warranty", "Lightweight design", "Compatible with Quest 3/3S"]).map((spec, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  {spec}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
            <div className="flex items-center border-2 border-gray-100 rounded-2xl h-16 w-full sm:w-auto overflow-hidden bg-white">
              <button 
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-14 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-16 h-full flex items-center justify-center font-heading font-black text-xl text-gray-900">
                {qty}
              </div>
              <button 
                onClick={() => setQty(qty + 1)}
                className="w-14 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button 
              onClick={() => onAddToCart(product, qty)}
              className="flex-1 w-full bg-red-600 text-white h-16 rounded-2xl font-heading font-black text-lg tracking-widest uppercase hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-3 active:scale-95"
            >
              <ShoppingCart className="w-6 h-6" /> Add to Cart
            </button>
          </div>

          <div className="flex items-center gap-6 mt-4">
             <button className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors font-bold text-xs uppercase tracking-widest font-heading">
               <Heart className="w-4 h-4" /> Add to Wishlist
             </button>
             <button className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors font-bold text-xs uppercase tracking-widest font-heading">
               <Share2 className="w-4 h-4" /> Share Product
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CART PAGE COMPONENT ---
const CartPage = ({ cartItems, updateQuantity, removeItem }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = 0;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 font-heading animate-fade">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8 font-body">Looks like you haven't added any VR gear yet.</p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 font-body animate-fade">
      <div className="flex items-center justify-center gap-3 mb-12">
        <ShoppingCart className="w-8 h-8 text-gray-900" />
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
          Shopping Cart ({cartItems.length} Item{cartItems.length !== 1 ? 's' : ''})
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-heading font-bold text-xl text-gray-900 mb-6">Your Cart Items</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-sm">
              <div className="w-24 h-24 bg-gray-50 rounded-lg shrink-0 flex items-center justify-center p-2 border border-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-1 truncate">{item.name}</h3>
                <p className="text-xs text-gray-500 font-medium mb-1">Tax Inclusive</p>
                <p className="text-xs text-gray-400">SKU: {item.sku}</p>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 sm:gap-6 mt-4 sm:mt-0">
                <span className="font-heading font-bold text-xl text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg h-9">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-l-lg transition-colors disabled:opacity-50" disabled={item.quantity <= 1}><Minus className="w-3 h-3" /></button>
                    <div className="w-10 h-full flex items-center justify-center text-sm font-bold text-gray-900 border-x border-gray-200">{item.quantity}</div>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-r-lg transition-colors"><Plus className="w-3 h-3" /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"><Trash2 className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24">
            <h2 className="font-heading font-bold text-xl text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between"><span className="text-gray-600 font-medium">Amount</span><span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600 font-medium">Discount</span><span className="font-bold text-gray-900">$0.00</span></div>
              <div className="flex justify-between"><span className="text-gray-600 font-medium">Tax</span><span className="font-bold text-gray-900">$0.00</span></div>
            </div>
            <div className="border-t border-dashed border-gray-200 my-4"></div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-heading font-bold text-lg text-gray-900">Total Amount</span>
              <span className="font-heading font-black text-2xl text-gray-900">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-600 text-white font-bold font-heading py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-[0.98]">PROCESS TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-150 bg-black overflow-hidden group font-heading">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 group-hover:scale-105 opacity-80"
        style={{ backgroundImage: `url(${HERO_CONTENT.image})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-0.5 w-12 bg-red-600"></span>
            <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase">{HERO_CONTENT.tagline}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.9]">{HERO_CONTENT.title}</h1>
          <h2 className="text-3xl md:text-5xl font-light text-gray-200 mb-10 tracking-tight">{HERO_CONTENT.subtitle}</h2>
          <button className="bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 group/btn shadow-lg shadow-red-900/20">
            {HERO_CONTENT.cta} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  <section className="bg-white py-20 border-b border-gray-100 font-heading">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_BADGES.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-800 mb-4 group-hover:scale-110 group-hover:text-red-600 transition-all">
              <badge.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-1">{badge.title}</h3>
            <p className="text-sm text-gray-500 font-body font-medium">{badge.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0f0f0f] text-white pt-24 pb-12 font-body mt-auto">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-red-900/50 shadow-lg">
              <span className="text-white font-bold text-lg font-heading">R</span>
            </div>
            <span className="text-2xl font-heading font-black tracking-tighter">RED<span className="text-red-600">STONE</span></span>
          </div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium max-w-xs">Your premier destination for Virtual Reality hardware. Trusted tech delivered fast to startups and Fortune 500 companies alike.</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer group"><Icon className="w-4 h-4 text-gray-400 group-hover:text-white" /></div>
            ))}
          </div>
        </div>
        <div><h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-wider">Explore</h3><ul className="space-y-4 text-sm text-gray-400 font-medium">{['Home', 'About Us', 'Contact Us', 'Track Order'].map((item, i) => (<li key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" /> {item}</li>))}</ul></div>
        <div><h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-wider">Policies</h3><ul className="space-y-4 text-sm text-gray-400 font-medium">{['Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map((item, i) => (<li key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" /> {item}</li>))}</ul></div>
        <div>
          <h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-wider">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-6">Subscribe to our newsletter for the latest VR drops.</p>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Your email address" className="bg-white/5 text-white px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-600 rounded-lg placeholder-gray-600 border border-white/10 transition-colors" />
            <button className="bg-red-600 text-white px-4 py-3 font-bold font-heading uppercase text-sm hover:bg-red-700 transition-colors rounded-lg shadow-lg shadow-red-900/30">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs font-medium">© 2024 Red Stone Inc. All rights reserved.</p>
        <div className="text-gray-600 text-xs font-bold uppercase tracking-widest font-heading">Secured by Stripe</div>
      </div>
    </div>
  </footer>
);

const Toast = ({ message, show }) => {
  return (
    <div className={`fixed top-24 right-6 z-9999 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
      <div className="flex items-center gap-4 bg-white border border-gray-200 shadow-xl rounded-xl px-6 py-4">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><Zap className="w-5 h-5 text-green-600" /></div>
        <div><p className="font-heading font-bold text-gray-900 text-sm">Success</p><p className="text-xs text-gray-500">{message}</p></div>
      </div>
    </div>
  );
};

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'cart' | 'product'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    setToast({ show: true, message: `${quantity}x ${product.name} added to cart.` });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-body text-gray-900 selection:bg-red-600 selection:text-white flex flex-col">
      <GlobalStyles />
      <Toast show={toast.show} message={toast.message} />
      <Header 
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)} 
        onCartClick={() => setCurrentView('cart')} 
        onHomeClick={() => { setCurrentView('home'); setSelectedProduct(null); }}
      />
      
      <main className="grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <section className="py-24 bg-[#FAFAFA] border-b border-gray-100 animate-fade">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <h4 className="font-heading text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Discover The Best Deals</h4>
                    <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">Top Picks</h2>
                  </div>
                  <button className="flex items-center text-sm font-bold text-gray-900 hover:text-red-600 transition-colors group mt-6 md:mt-0 font-heading tracking-wide uppercase">
                    View All Products <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                  {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onProductClick={openProduct} />
                  ))}
                </div>
              </div>
            </section>
            <Features />
            <section className="py-24 bg-white container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-heading text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Solutions</p>
                <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Success Stories</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-10 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:shadow-xl group">
                    <div className="text-red-600 text-6xl font-serif absolute -top-4 left-6 opacity-20">"</div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">{item.text}</p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-heading font-bold text-gray-900 uppercase tracking-wide text-sm">{item.name}</h4>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : currentView === 'cart' ? (
          <CartPage cartItems={cartItems} updateQuantity={handleUpdateQuantity} removeItem={handleRemoveItem} />
        ) : (
          <ProductDescriptionPage 
            product={selectedProduct} 
            onAddToCart={handleAddToCart} 
            onBack={() => { setCurrentView('home'); setSelectedProduct(null); }} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;