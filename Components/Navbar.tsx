'use client';

import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Recommended for Next.js


// --- 1. THE MOBILE MENU (Circle Icon Hamburger Menu)
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden"> 
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-[150] p-3 rounded-full bg-[#6174a1] text-white shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140]" 
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-[75%] bg-white z-[145] p-10 flex flex-col gap-6 shadow-2xl"
            >
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold">About</Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Services</Link>
                <Link href="/schedule" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Schedule</Link>
                <Link href="/shop" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Shop</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Contact</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}



// --- 2. THE MAIN NAVBAR (The "Parent") ---
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
    <nav 
     className="p-0 pt-3 flex justify-center items-end sticky top-0 z-50 bg-cover bg-center overflow-hidden relative" 
      style={{ 
        backgroundImage: "url('/parchment2.png')",
        boxShadow: '0 8px 30px -8px rgba(60,40,0,0.70)',
        height: 'auto',
      }} 
    >

{/* 1. MOBILE LOGO: Positioned Top-Left */}
        <div className="lg:hidden absolute top-1 left-3.5 z-20">
           <Image 
             src="/healingka_logo.png" 
             alt="Mobile Logo" 
             width={48} 
             height={38} 
             className="object-contain" 
           />
        </div>


      {/* White Overlay --Hidden on Mobile */}
      <div 
        className="absolute hidden lg:block"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.35)',
          width: '100%',
          maxWidth: '1025px',
          height: '40px',
          left: '50%',
          bottom: '6px',
          transform: 'translateX(-50%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Links Container */}
      <div className="flex justify-center items-end gap-4 relative z-10">
        {/* Left Links --Added hidden md:inline-block to hide on Mobile */}
        <Link href="/home" className="hidden lg:inline-block nav-link tracking-wide pb-0.5 -mr-1">Home</Link>
        <Link href="/about" className="hidden lg:inline-block nav-link tracking-wide pb-0.5 -mr-1" style={{ paddingLeft: '25px' }}>About</Link>
        <Link href="/services" className="hidden lg:inline-block nav-link tracking-wide pb-0.5 -mr-25" style={{ paddingLeft: '25px', zIndex: 10 }}>Services</Link>
        
        {/* Center Logo Container */}
        <div className="flex flex-col items-center gap-2 px-0 pb-4 md:pb-0">
          {/* Always Visible Text Logo */}
          <Image  
            src="/healingka2.png" 
            alt="Healing Ka Logo" 
            width={400} 
            height={400}
            className="object-contain"
            style={{ maxWidth: 'min(80vw, 250px)', maxHeight: '150px' }}
          />
          {/* Hidden Heart Logo on Mobile, Visible Center Heart Logo on Desktop */}
          <Image 
            src="/healingka_logo.png" 
            alt="Logo" 
            width={65} 
            height={55}
            className="object-contain hidden lg:block"
            style={{ maxWidth: '300px', maxHeight: '70px' }}
          />
        </div>
        
        {/* Right Links --Added hidden md:inline-block to hide on Mobile*/}
        <Link href="/schedule" className="hidden lg:inline-block nav-link tracking-wide pb-0.5 -ml-25" style={{ paddingRight: '25px' }}>Schedule</Link>
        <Link href="/shop" className="hidden lg:inline-block nav-link tracking-wide pb-0.5 -ml-1" style={{ paddingRight: '25px' }}>Shop</Link>
        <Link href="/contact" className="hidden lg:inline-block nav-link tracking-wide pb-0.5 -ml-1">Contact</Link>
        </div>
    </nav>

    {/* MOBILE MENU: Animated Pop-out Window with Links */}
      <MobileMenu />
    </header>
  );
}
