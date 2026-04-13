'use client';

import Carousel from "@/Components/Carousel";
import ServicesCards from "@/Components/ServicesCards";
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function Home() {
  return (
    
    <main className="w-full flex flex-col">
      {/* 1. Banner Image*/}
      <section className="w-full">
        <div className="w-full overflow-hidden border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)]">
          <div className="w-full h-64 sm:h-90 lg:h-[600px] overflow-hidden">
            <img alt="content" className="object-cover object-[50%_10%] h-full w-full" src="/reikithera.jpg" />
          </div>
        </div>
      </section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


      {/* 2. Carousel Testimonials */}
      <div className="mt-0 lg:mt-0 p-0">
      <Carousel />
      </div>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full -mt-12 lg:-mt-10 overflow-hidden" aria-hidden="true" />
{/* --- Empty Break End --- */}


{/* 3. Healing Info Image & Text Box */}
<section className="w-full pt-0 mt-0">
  {/* Title */}
  <div className="w-full text-center mb-4 lg:mb-10 px-6">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#6986be] [-webkit-text-stroke:1px_#6986be] tracking-[-0.02em] [word-spacing:-0.1em] leading-tight">
      Awaken to the love the Universe has for you.
    </h2>
  </div>

  {/* Main Container for Image and Text Box */}
  <div className="w-full flex flex-col lg:flex-row items-start pt-0 lg:pr-12">

    {/* B. Left Side: Image (Order 1 on Mobile, Order 1 on Desktop now) */}
    <div className="w-full lg:w-1/2 flex justify-center order-1">
      <div className="w-full relative">
        <img 
          src="/yinyang_chakras2.png"
          alt="Healing Session"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* C. Right Side: Dynamic Text Box */}
    <div className="w-full lg:w-1/2 bg-white/40 rounded-lg 
    px-8 lg:px-12 py-6 lg:py-8
    border border-gray-200 shadow-sm 
    h-fit 
    flex flex-col items-start justify-start gap-6 order-3">
        <p className="leading-relaxed indent-4 lg:indent-12 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
        ‘Healing Ka’ is a name inspired by the Egyptian perspective: each being
is made up of several parts designed to work together in harmony.  However,
life is messy and it’s difficult to live balanced each day in an imbalanced world.
Using the arts of Reiki, Qi Gong, and my psychic abilities, I offer a 
unique style of healing for the mind, body, and soul.
</p>

<p className="leading-relaxed indent-4 lg:indent-12 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
The Ka is the expression of where your soul meets your body, creating
a spiralling energy field made up of many smaller spirals.  These spirals, or
'chakras,' condense throughout your center, circulating electric and magnetic
energy through a network of pathways called meridian lines.  Through my
training in Qi Gong and Reiki and my study of acupuncture, I combine this
knowledge with my psychic gifts to feel and manipulate energy flow in
order to promote healing.  Though true healing starts at the spiritual level, 
I use my psychic abilities to see your soul at a deeper level, uncover deeper
physical and spiritual memory, emotions and karmic patterns, and provide
deep healing to restore balance to all the parts of you.
      </p>
    </div>

  </div>
</section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


{/* 4. Split-Screen Content Box */}
<section className="w-full mt-0">
  {/* The White Box Container */}
  <div className="w-full bg-white/40 border-y border-gray-200 shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)] overflow-hidden">
    
    {/* Internal Flex Wrapper: Row on Desktop, Column on Mobile */}
    <div className="w-full flex flex-col lg:flex-row items-stretch">
      
      {/* LEFT HALF: Reiki Couch */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-auto overflow-hidden">
        <img 
          src="/reiki_couch.jpg" 
          alt="Reiki Couch" 
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* RIGHT HALF: Text Content */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12 lg:px-16 py-10 lg:py-16 flex flex-col justify-center gap-8">
        
        {/* Title (Aligned Left/Start within its half) */}
        <div className="w-full text-center">
          <h2 className="font-bold text-[#6986be] [-webkit-text-stroke:1px_#6986be] tracking-[-0.02em] [word-spacing:-0.1em] leading-tight">
            No matter where you are in the world.
          </h2>
        </div>

        {/* Text Area */}
        <div className="w-full flex flex-col gap-6">
          <p className="leading-relaxed indent-4 lg:indent-8 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
            Just like you, our Universe is made up of many parts:
            dimensional planes that vibrate across many frequencies.
            No matter where you are, I am able to use my abilities 
            to connect with you and work with your energy to 
            facilitate a healing that is truly soul-deep.
          </p>

          <p className="leading-relaxed indent-4 lg:indent-8 [word-spacing:-0.02em] lg:[word-spacing:-0.15em] text-left">
            Schedule with me at your convenience and relax into
            a video or voice call from the comfort of your home. 
            No matter your time zone or schedule 
            around work or family, I can accommodate you.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


{/* 5. Geode Services Section */}
<section className="w-full relative min-h-[750px] h-auto flex items-center justify-center border-y-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)]">
  {/* The Background Image Layer */}
  <div className="absolute inset-0 z-0 w-full h-full">
    <img 
      alt="geodebg" 
      className="object-cover -scale-x-100 object-center h-full w-full" 
      src="/geodebg.jpg" 
    />
  </div>

  {/* THE COMPONENT (Floating on top) */}
  <div className="relative z-10 w-full py-16 lg:py-24">
  <ServicesCards />
  </div>
</section>


{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


      {/* 6. Lotus Booking Section */}
 <div className="w-full relative z-10">
        <div className="w-full overflow-hidden h-80 sm:h-80 lg:h-120 border-2 border-[#6174a1]">
          <img alt="Blue Lotus" className="object-cover object-left h-full w-full" 
          /* Changed object-left to a custom percentage */
      className="object-cover h-full w-full object-[20%_center]"
          src="/bluelotus_long.jpg"/>
        </div>
      </div>
{/* Text Box below Image */}
      <div className="flex justify-center w-full">
        <div className="bg-white/40 w-full p-10 border border-gray-200 shadow-[0_8px_10px_-1px_rgba(60,40,0,0.50)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
             <h2 className="text-3xl lg:text-4xl py-3 font-bold text-[#6986be] [-webkit-text-stroke:1px_#6986be] tracking-[-0.02em] [word-spacing:-0.1em] leading-tight text-center">
        It's time to take care of you.
      </h2>
      <p className="text-gray-800 mb-5">
            Let's work together to create transformative healing, assist you in your spiritual growth, and support your psychic development.
          </p>

<Link href="/schedule" className="inline-block mt-8">
  <motion.button
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: "#ffffff", // BUTTON BG COLOR ON HOVER
      color: "#6986be",           // TEXT COLOR ON HOVER
      borderColor: "#6986be",      // BORDER COLOR ON HOVER
      WebkitTextStroke: "1px #6986be"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    /* --- 2. STATIONARY STATE COLORS (Hex Codes) --- */
    style={{ 
      backgroundColor: "#6986be", // BUTTON BG COLOR STATIONARY
      color: "#ffffff",           // TEXT COLOR STATIONARY
      borderColor: "#6986be",      // BORDER COLOR STATIONARY
      WebkitTextStroke: "0px transparent"
    }}
    /* --- 3. LAYOUT & SHAPE --- */
    className="whitespace-nowrap 
      
      /* 2. RESPONSIVE PADDING: */
      px-6 lg:px-15 py-3 lg:py-6 
      
      /* 3. RESPONSIVE TEXT: */
      text-sm lg:text-xl 
      
      /* 4. SHAPE & STYLE */
      border-2 font-bold uppercase tracking-[0.2em] rounded-full 
      flex items-center justify-center shadow-lg"
  >
    Schedule Now
  </motion.button>
</Link>
        </div>
      </div>
     </div>
    </div>

{/* --- Empty Break Start --- */}
<div className="h-[60px] lg:h-[110px] w-full" />
{/* --- Empty Break End --- */}


{/* 7. Footer */}
<footer className="relative w-full overflow-hidden font-main">
  
  {/* The Main Footer Block */}
  <div className="bg-[#6986be]/80 backdrop-blur-md border-t border-white/20 text-white">
    <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      
{/* Brand Section */}
<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
  
  {/* Logo Container */}
  <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
    {/* 1. Heart Logo (Sitting to the left) */}
    <img 
      src="/heartlogo_white.png" 
      alt="Heart Logo" 
      className="h-10 w-auto object-contain" 
    />
    
    {/* 2. Healing Ka Text Logo (Slightly larger height) */}
    <img 
      src="/healingka_white.png" 
      alt="Healing Ka" 
      className="h-12 w-auto object-contain" 
    />
  </Link>
        <p className="mt-4 ml-8 px-1 text-sm text-white/70 leading-relaxed">
          Transformative healing through the arts of Reiki, Qi Gong, and psychic insight.
        </p>
      </div>

      {/* Links Section - Two Columns */}
      <div className="flex-grow flex flex-wrap md:pl-60 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        {/* Column 1: Explore */}
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <nav className="list-none mb-10 space-y-3">
            <li><Link href="/" className="text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">Home</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">About</Link></li>
            <li><Link href="/services" className="text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">Services</Link></li>
          </nav>
        </div>

        {/* Column 2: Connect */}
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <nav className="list-none mb-10 space-y-3">
            <li><Link href="/schedule" className="text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">Schedule</Link></li>
            <li><Link href="/shop" className="text-white font-bold hover:underline decoration-2 underline-offset-4 transition-all">Shop</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">Contact</Link></li>
          </nav>
        </div>

      </div>
    </div>

    {/* Bottom Bar (Copyright area) */}
    <div className="border-t border-white/10 bg-black/10">
      <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] text-center sm:text-left">
          © 2026 Healing Ka — Soul-Deep Transformation
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-white/30 text-[10px] uppercase tracking-[0.3em]">
          Handcrafted with intention
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}