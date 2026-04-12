'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: "Mentorship",
    image: "/mentorship.jpg",
    description: "Deep energetic cleansing to restore balance to your physical and spiritual body.",
    link: "/schedule"
  },
  {
    title: "Healing You & Your Pets",
    image: "/pets.jpg",
    description: "Connect with your higher self and uncover hidden patterns in your life's journey.",
    link: "/schedule"
  },
  {
    title: "Exorcism & Location Clearing",
    image: "/exorcism2.jpg",
    description: "Ancient movement practices to cultivate and circulate your vital life force.",
    link: "/schedule"
  }
];

export default function ServicesCards() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 px-6 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.85)", 
              backdropFilter: "blur(30px)" 
            }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/70 shadow-2xl
                       bg-white/60 backdrop-blur-md flex flex-col items-center text-center
                       min-h-[650px] justify-between overflow-hidden">



{/* 1. TOP: The Title */}
            <div className="w-full h-[120px] flex items-center justify-center relative mb-4 px-8 pt-8">
            <h3 className="text-[22px] lg:text-[26px] font-bold text-[#6986be] relative
               tracking-tight
               leading-[1.8] 
               ![word-spacing:-0.5rem] 
               ">
  {/* White Glow Highlight BG Layer */}
  <span className="absolute inset-0 bg-white/100 blur-md scale-x-110 scale-y-125 -z-10 rounded-full" />
  {/* Title Text */}
  <span className="relative z-10 px-2">
    {service.title}
  </span>
</h3>
</div>

{/* 2. MIDDLE: The Image */}
<div className="w-full h-[250px]">
       <img 
         src={service.image} 
         alt={service.title}
         className="w-full h-full object-cover" 
       />
    </div>

     {/* 3. BOTTOM: Description & Link */}
     <div className="w-full flex-grow flex flex-col justify-between mt-2 px-8 pb-10">
      <p className="text-gray-800 leading-relaxed text-[16px] lg:text-[17px] pt-4">
        {service.description}
      </p>

            <Link 
              href={service.link}
              className="mt-6 text-[#4170c1] font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-4"
            >
              Learn More →
            </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}