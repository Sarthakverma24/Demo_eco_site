import React, { useState } from 'react';
import logoImg from "./assets/image.png";
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
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight
} from 'lucide-react';

// --- DATA CONSTANTS ---
const BRAND = {
  name: "RED STONE",
  logo: logoImg,
};

const HERO_CONTENT = {
  title: "VIRTUAL REALITY",
  subtitle: "AT ITS FINEST",
  tagline: "The Future in Your Hands",
  cta: "EXPLORE COLLECTION",
  image: "https://imgs.search.brave.com/8EguBbnagXnbQmiQ2_mjK7_XCmFu0AnwSPIn3Vq8wxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzY0NTE2L3Bob3Rv/L3lvdW5nLW1hbGUt/c3R1ZGVudC11c2lu/Zy12ci1oZWFkc2V0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1zX1NZTFZhTmZW/ZERmWEdjT1ZGTTdD/MGgwZGd6R0thMk9I/QnVOZXk1TVNvPQ"
};

const PRODUCTS = [
  {
    id: 1,
    name: "Meta Quest Compact Charging Dock",
    price: 65.99,
    rating: 5.0,
    reviews: 24,
    image: "https://imgs.search.brave.com/Nsp6atsIDMpiAfhlbunhypbXxtqKjG_JWnpOFuZ2QYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2ph/YnJtZXRhdmVyc28u/Y29tLmJyL2Nkbi9z/aG9wL2ZpbGVzL01l/dGFDb21wYWN0Q2hh/cmdpbmdEb2NrQ29u/dHJvbGxlcnNRdWVz/dDMzU184MDB4LnBu/Zz92PTE3MzQ2NzAx/NDM",
    category: "Charging"
  },
  {
    id: 2,
    name: "Meta Quest Elite Strap",
    price: 59.99,
    rating: 4.8,
    reviews: 89,
    image: "https://imgs.search.brave.com/L_q-vB_KSngFKrm5tWoeJ46vJ16uVHjptij0faOVhCE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS40cmdvcy5pdC9p/L0FyZ29zLzQ3Mjk4/NDRfUl9aMDAxQT93/PTc1MCZoPTQ0MCZx/bHQ9NzA",
    category: "Ergonomics"
  },
  {
    id: 3,
    name: "Quest 3S Facial Interface",
    price: 31.99,
    rating: 4.5,
    reviews: 56,
    image: "https://imgs.search.brave.com/rO3M62wrl1CO_qd7PmtDk6_S7bfsHhplZIMevaU19WU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWRlYWxvLmNvbS9m/b2xkZXIvUHJvZHVj/dC8yMDQ4NjEvMC8y/MDQ4NjEwNDYvczRf/cHJvZHVrdGJpbGRf/bWF4XzUvbWV0YS1x/dWVzdC0zcy1icmVh/dGhhYmxlLWZhY2lh/bC1pbnRlcmZhY2Uu/anBn",
    category: "Comfort"
  },
  {
    id: 4,
    name: "Compact Carrying Case",
    price: 49.99,
    rating: 4.9,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
    category: "Travel"
  },
  {
    id: 5,
    name: "Logitech MX MR Stylus",
    price: 129.99,
    rating: 4.7,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop",
    category: "Productivity"
  }
];

const TRUST_BADGES = [
  { icon: ShieldCheck, title: "Extended Warranty", desc: "Protection for your gear" },
  { icon: Truck, title: "Free Delivery", desc: "On qualifying orders" },
  { icon: Zap, title: "Trusted Tech", desc: "Delivered Fast" },
  { icon: CreditCard, title: "Easy Installment", desc: "Flexible payment options" },
];

const PARTNER_LOGOS = [
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "MOXI", url: "https://placehold.co/200x80/white/black?text=MOXI&font=montserrat" },
  { name: "PICO", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pico_logo.svg/2560px-Pico_logo.svg.png" },
  { name: "Yealink", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Yealink_Logo.svg/2560px-Yealink_Logo.svg.png" },
  { name: "Jabra GN", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Jabra_logo.svg/2560px-Jabra_logo.svg.png" }
];

const TESTIMONIALS = [
  { id: 1, name: "Dexter Angelo Chan", role: "Client", text: "Network matters... responding fast and diligently in managing returns. Without their support, we could not have succeeded." },
  { id: 2, name: "Yvonne Chang", role: "Client", text: "Patient and customer first approach gave confidence from the start. Their empathy and support have been amazing." },
  { id: 3, name: "Ashley Gariepy", role: "Client", text: "Growing together... you show true partnership in every interaction." }
];

const NAV_LINKS = ["Virtual Reality", "Accessories", "IT Hardware", "Conferencing", "Brands"];

// --- STYLES INJECTION ---
// Injecting Google Fonts (Outfit for headings, Inter for body)
const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      
      .font-heading { font-family: 'Outfit', sans-serif; }
      .font-body { font-family: 'Inter', sans-serif; }
      
      /* Smooth Scrolling */
      html { scroll-behavior: smooth; }
    `}
  </style>
);

// --- COMPONENTS ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 font-body">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src={BRAND.logo} alt={BRAND.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-heading font-black tracking-tight text-gray-900 group-hover:opacity-80 transition-opacity">
              RED<span className="text-red-600">STONE</span>
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-12 relative">
            <input 
              type="text" 
              placeholder="Search premium gear..." 
              className="w-full h-11 pl-5 pr-12 bg-gray-50 border border-gray-200 rounded-full focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm transition-all font-medium text-gray-700"
            />
            <button className="absolute right-1 top-1 h-9 w-9 bg-red-600 flex items-center justify-center rounded-full hover:bg-gray-900 transition-colors shadow-md">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button className="flex flex-col items-center gap-1 group">
              <User className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" strokeWidth={2} />
              <span className="text-[10px] font-bold text-gray-500 tracking-wider font-heading">LOGIN</span>
            </button>
            <button className="flex flex-col items-center gap-1 group relative">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" strokeWidth={2} />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">0</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 tracking-wider font-heading">CART</span>
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
            <li className="text-red-600 hover:text-red-700 cursor-pointer">Home</li>
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="hover:text-gray-900 cursor-pointer transition-colors relative group">
                {link}
                <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 z-50 py-6 px-6 shadow-2xl h-screen">
           <div className="flex relative mb-8">
            <input type="text" placeholder="Search..." className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm" />
            <Search className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
          </div>
          <ul className="space-y-6 font-bold text-gray-800 uppercase text-lg font-heading tracking-tight">
            <li className="text-red-600">Home</li>
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="border-b border-gray-100 pb-2">{link}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-150 lg:h-175 bg-black overflow-hidden group font-heading">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 group-hover:scale-105 opacity-80"
        style={{ backgroundImage: `url(${HERO_CONTENT.image})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />

      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-0.5 w-12 bg-red-600"></span>
            <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase">
              {HERO_CONTENT.tagline}
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-4 tracking-tighter leading-[0.9]">
            {HERO_CONTENT.title}
          </h1>
          <h2 className="text-3xl lg:text-5xl font-light text-gray-200 mb-10 tracking-tight">
            {HERO_CONTENT.subtitle}
          </h2>
          
          <button className="bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 group/btn shadow-lg shadow-red-900/20">
            {HERO_CONTENT.cta} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl p-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full relative border border-transparent hover:border-gray-100">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#F8F8F8] rounded-xl mb-4">
        <div className="absolute top-3 right-3 z-10">
          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

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
          <button className="w-full bg-gray-900/90 backdrop-blur text-white py-3 rounded-lg font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-1 flex flex-col grow gap-1">
        <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mt-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200 fill-gray-200'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium font-body ml-1">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <span className="block text-xs text-gray-400 font-medium line-through decoration-red-600 decoration-2">${(product.price * 1.2).toFixed(2)}</span>
            <span className="font-heading font-black text-2xl text-gray-900 tracking-tight">${product.price}</span>
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-red-600 group-hover:text-red-600 transition-colors lg:hidden">
             <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
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

const Brands = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="font-heading text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">
          Trusted Partners
        </h3>
        <h2 className="font-heading text-3xl font-bold text-gray-900">Industry Leaders</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
        {PARTNER_LOGOS.map((brand, i) => (
          <div key={i} className="group cursor-pointer">
            <img 
              src={brand.url} 
              alt={brand.name} 
              className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0f0f0f] text-white pt-24 pb-12 font-body">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-red-900/50 shadow-lg">
              <span className="text-white font-bold text-lg font-heading">R</span>
            </div>
            <span className="text-2xl font-heading font-black tracking-tighter">
              RED<span className="text-red-600">STONE</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium max-w-xs">
            Your premier destination for Virtual Reality hardware. Trusted tech delivered fast to startups and Fortune 500 companies alike.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer group">
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-wider">Explore</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            {['Home', 'About Us', 'Contact Us', 'Track Order'].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                <ChevronRight className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" /> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-wider">Policies</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            {['Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                 <ChevronRight className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                 {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-wider">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-6">Subscribe to our newsletter for the latest VR drops.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 text-white px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-600 rounded-lg placeholder-gray-600 border border-white/10 transition-colors"
            />
            <button className="bg-red-600 text-white px-4 py-3 font-bold font-heading uppercase text-sm hover:bg-red-700 transition-colors rounded-lg shadow-lg shadow-red-900/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs font-medium">
          © 2024 Red Stone Inc. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
             <div className="text-gray-600 text-xs font-bold uppercase tracking-widest font-heading">Secured by Stripe</div>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <div className="min-h-screen bg-white font-body text-gray-900 selection:bg-red-600 selection:text-white">
      <GlobalStyles />
      <Header />
      
      <main>
        <Hero />
        
        {/* Top Picks Section */}
        <section className="py-24 bg-[#FAFAFA] border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h4 className="font-heading text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Discover The Best Deals</h4>
                <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Top Picks</h2>
              </div>
              <a href="#" className="flex items-center text-sm font-bold text-gray-900 hover:text-red-600 transition-colors group mt-6 md:mt-0 font-heading tracking-wide">
                VIEW ALL PRODUCTS <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <Features />
        <Brands />
        
        {/* Testimonials */}
        <section className="py-24 bg-white container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-heading text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Solutions</p>
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-gray-50 p-10 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:shadow-xl">
                <div className="text-red-600 text-6xl font-serif absolute -top-4 left-6 opacity-20">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                  {item.text}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-heading font-bold text-gray-900 uppercase tracking-wide text-sm">{item.name}</h4>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;