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
  Mail
} from 'lucide-react';


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

// 
const PRODUCTS = [
  {
    id: 1,
    name: "Meta Quest Compact Charging Dock",
    price: 65.99,
    rating: 5.0,
    reviews: 24,
    image: "https://imgs.search.brave.com/Nsp6atsIDMpiAfhlbunhypbXxtqKjG_JWnpOFuZ2QYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2ph/YnJtZXRhdmVyc28u/Y29tLmJyL2Nkbi9z/aG9wL2ZpbGVzL01l/dGFDb21wYWN0Q2hh/cmdpbmdEb2NrQ29u/dHJvbGxlcnNRdWVz/dDMzU184MDB4LnBu/Zz92PTE3MzQ2NzAx/NDM",
    category: "VR Accessories"
  },
  {
    id: 2,
    name: "Meta Quest Elite Strap",
    price: 59.99,
    rating: 4.8,
    reviews: 89,
    image: "https://imgs.search.brave.com/L_q-vB_KSngFKrm5tWoeJ46vJ16uVHjptij0faOVhCE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS40cmdvcy5pdC9p/L0FyZ29zLzQ3Mjk4/NDRfUl9aMDAxQT93/PTc1MCZoPTQ0MCZx/bHQ9NzA",
    category: "VR Accessories"
  },
  {
    id: 3,
    name: "Meta Quest 3S Breathable Facial Interface",
    price: 31.99,
    rating: 4.5,
    reviews: 56,
    image: "https://imgs.search.brave.com/rO3M62wrl1CO_qd7PmtDk6_S7bfsHhplZIMevaU19WU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWRlYWxvLmNvbS9m/b2xkZXIvUHJvZHVj/dC8yMDQ4NjEvMC8y/MDQ4NjEwNDYvczRf/cHJvZHVrdGJpbGRf/bWF4XzUvbWV0YS1x/dWVzdC0zcy1icmVh/dGhhYmxlLWZhY2lh/bC1pbnRlcmZhY2Uu/anBn",
    category: "VR Accessories"
  },
  {
    id: 4,
    name: "Compact Carrying Case for Meta Quest 3/3S",
    price: 49.99,
    rating: 4.9,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
    category: "VR Accessories"
  },
  {
    id: 5,
    name: "Logitech MX Mixed Reality Stylus",
    price: 129.99,
    rating: 4.7,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop",
    category: "VR Accessories"
  }
];

// 
const TRUST_BADGES = [
  { icon: ShieldCheck, title: "Extended Warranty", desc: "Protection for your gear" },
  { icon: Truck, title: "Free Delivery", desc: "On qualifying orders" },
  { icon: Zap, title: "Trusted Tech", desc: "Delivered Fast" },
  { icon: CreditCard, title: "Easy Installment", desc: "Flexible payment options" },
];

// 
const PARTNERS = ["Meta", "MOXI", "PICO", "Yealink", "Jabra GN"];

// 
const TESTIMONIALS = [
  {
    id: 1,
    name: "Dexter Angelo Chan",
    role: "Client",
    text: "Network matters... responding fast and diligently in managing returns. Without their support, we could not have succeeded."
  },
  {
    id: 2,
    name: "Yvonne Chang",
    role: "Client",
    text: "Patient and customer first approach gave confidence from the start. Their empathy and support have been amazing."
  },
  {
    id: 3,
    name: "Ashley Gariepy",
    role: "Client",
    text: "Growing together... you show true partnership in every interaction."
  }
];

// 
const NAV_LINKS = [
  "Virtual Reality",
  "VR Accessories",
  "IT Hardware",
  "Conferencing Solutions",
  "Motion Tracking",
  "Brands"
];

// --- COMPONENTS ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-sans">
      {/* Top Bar */}
      

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 flex items-center justify-center">
              <img
                src={BRAND.logo}
                alt={BRAND.name}
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-2xl font-black tracking-tighter text-black">
              RED <span className="text-red-600">STONE</span>
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-12 relative">
            <input 
              type="text" 
              placeholder="Search accessories, hardware..." 
              className="w-full h-11 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-sm focus:border-red-600 focus:ring-0 outline-none text-sm transition-colors"
            />
            <button className="absolute right-0 top-0 h-11 w-12 bg-red-600 flex items-center justify-center rounded-r-sm hover:bg-red-700 transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button className="flex flex-col items-center gap-1 group">
              <User className="w-5 h-5 text-gray-800 group-hover:text-red-600 transition-colors" />
              <span className="text-[10px] font-bold text-gray-600 tracking-wide">LOGIN</span>
            </button>
            <button className="flex flex-col items-center gap-1 group relative">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-800 group-hover:text-red-600 transition-colors" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </div>
              <span className="text-[10px] font-bold text-gray-600 tracking-wide">CART</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden lg:block border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex items-center justify-center gap-10 py-4 text-xs font-bold text-gray-800 uppercase tracking-widest">
            <li className="text-red-600 hover:text-red-700 cursor-pointer">Home</li>
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="hover:text-red-600 cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 z-50 py-4 px-4 shadow-xl">
           <div className="flex relative mb-6">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full h-11 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-sm outline-none text-sm"
            />
            <Search className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
          </div>
          <ul className="space-y-4 font-bold text-gray-800 uppercase text-sm tracking-wide">
            <li className="text-red-600">Home</li>
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="border-b border-gray-100 pb-2">{link}</li>
            ))}
            <li className="pt-2 text-gray-500">Contact Us</li>
          </ul>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-137.5 bg-black overflow-hidden group">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${HERO_CONTENT.image})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />

      <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 border-l-4 border-red-600 text-gray-200 text-sm font-bold tracking-widest mb-6 uppercase pl-4">
            {HERO_CONTENT.tagline}
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-tight">
            {HERO_CONTENT.title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8 tracking-wide">
            {HERO_CONTENT.subtitle}
          </h2>
          
          <button className="bg-red-600 text-white font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center gap-3 group/btn">
            {HERO_CONTENT.cta} <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 hover:border-red-600 hover:shadow-2xl transition-all duration-300 rounded-sm flex flex-col h-full relative">
      <div className="relative aspect-4/3 overflow-hidden bg-gray-50 p-6">
        {/* Actions Overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Quick Add Button */}
        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-bold text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
          Add To Cart
        </button>
      </div>

      <div className="p-5 flex flex-col grow">
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{product.category}</span>
        <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-gray-400 ml-2">({product.reviews} Reviews)</span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-2xl font-black text-gray-900">${product.price}</span>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors cursor-pointer">
            <ShoppingCart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-gray-50 py-14 border-y border-gray-200">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TRUST_BADGES.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-red-600 transition-colors text-red-600">
              <badge.icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">{badge.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Brands = () => (
  <section className="py-16 bg-white border-b border-gray-100">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Trusted By Industry Leaders</p>
      <div className="flex flex-wrap justify-center md:justify-around items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {PARTNERS.map((brand, i) => (
          <span key={i} className="text-2xl md:text-3xl font-black text-gray-800 hover:text-red-600 cursor-default transition-colors select-none">
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#111] text-white pt-20 pb-10 border-t-4 border-red-600">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">{BRAND.logoChar}</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">
              RED <span className="text-red-600">STONE</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Your premier destination for Virtual Reality hardware. Trusted tech delivered fast to startups and Fortune 500 companies alike.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-sm hover:bg-red-600 transition-colors cursor-pointer">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-sm hover:bg-red-600 transition-colors cursor-pointer">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-sm hover:bg-red-600 transition-colors cursor-pointer">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-wider">Explore</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Home
            </li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> About Us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Contact Us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Track Your Order
            </li>
          </ul>
        </div>

        {/* Our Policies */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-wider">Our Policies</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Refund Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Shipping Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Terms of Service
            </li>
             <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-red-600" /> Cancellation Policy
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-wider">Get In Touch</h3>
          <div className="flex items-center gap-3 mb-4 text-gray-400 text-sm">
             <Mail className="w-4 h-4 text-red-600" /> support@redstone.com
          </div>
          <p className="text-gray-400 text-sm mb-6">Subscribe to our newsletter for the latest VR drops.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-800 text-white px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-600 rounded-l-sm placeholder-gray-500"
            />
            <button className="bg-red-600 text-white px-4 py-3 font-bold text-sm hover:bg-red-700 transition-colors rounded-r-sm">
              GO
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs font-medium">
          © 2024 Red Stone Inc. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
             <div className="text-gray-600 text-xs font-bold uppercase tracking-widest">Secured by Stripe</div>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-600 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Top Picks Section */}
        <section className="py-20 container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-6">
            <div>
              <h4 className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Discover The Best Deals</h4>
              <h2 className="text-4xl font-black text-gray-900 uppercase">Top Picks</h2>
            </div>
            <a href="#" className="flex items-center text-sm font-bold text-gray-900 hover:text-red-600 transition-colors group mt-4 md:mt-0">
              View All Products <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <Features />
        <Brands />
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* */}
            <p className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">From Startup To Fortune 500</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-gray-50 p-10 rounded-sm relative hover:-translate-y-2 transition-transform duration-300">
                <div className="text-red-600 text-6xl font-serif absolute -top-4 left-6 opacity-10">"</div>
                <p className="text-gray-700 text-lg italic mb-8 relative z-10 font-serif leading-relaxed">
                  "{item.text}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm">{item.name}</h4>
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