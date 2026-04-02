'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { id: 1, text: "The healing sessions changed my life.", author: "Jessica S.", caption: "Florida, USA", image: "/FL_map.png"},
  { id: 2, text: "I was so relaxed during my in-person healing session that I fell asleep after a few minutes. She gently woke me up as she finished by touching my feet. She was very thorough in explaining the issues she detected in my energy field and my body and what she did to heal it. There were times where I felt alot of heat coming from her hands and buzzing and popping sensations in my body which she assured was normal. She was very accurate in identifying my past injuries and health issues, like where the metal plate in my ankle was and my bloodpressure hypertension issues. She was very tuned into how I was feeling and calmed down my anxiety when she worked on the top of my head. What she said about my past life was really interesting and made sense with some things I've been through.  She also spoke with one of my 'guardian spirits' which is a woman I used to draw pictures of as a kid and she described her perfectly. It gave me a lot to think about and answered a lot of questions. I feel better physically, less tense and more at peace mentally.", author: "Connor P.", caption: "Kentucky, USA", image: "/KY_map.png"},
  { id: 3, text: "Highly recommend to anyone seeking peace.", author: "Jeremiah O.", caption: "Missouri, USA", image: "/missouri_map.png"},
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleManualNav = (direction: string) => {
    setIsPaused(true);
    if (direction === 'next') nextSlide();
    if (direction === 'prev') prevSlide();
  };

  useEffect(() => {
  if (selectedTestimonial) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}, [selectedTestimonial]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <section className="relative w-full mb-12 border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)] overflow-hidden">
      <div className="w-full min-h-[550px] md:h-[500px] relative flex items-center justify-center">
        <img 
        alt="background" 
        className="absolute inset-0 h-full w-full object-cover -z-10" 
        src="/geodebg.jpg" />
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center p-6 sm:p-10 gap-8 lg:gap-24">
          
          {/* Left Side: Image & Caption */}
          <div className="w-full md:w-auto flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 relative bg-gray-200">
              <img 
                src="/parchment2.png"
                alt="placeholder"
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={currentIndex}
                  src={testimonials[currentIndex].image}
                  initial={{ opacity: 0, x: -160 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 160 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              </AnimatePresence>
            </div>

            {/* DYNAMIC CAPTION */}
            <div className="w-full flex justify-center mt-2">
              <div className="relative h-8 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={`caption-${currentIndex}`}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.6 }}
                    className="absolute text-white font-semibold bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm whitespace-nowrap"
                  >
                    {testimonials[currentIndex].caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Container for the White Box + Navigation */}
          <div className="w-full md:w-auto h-full flex items-center justify-center px-4">
            <div className="relative w-full max-w-lg">
              
              {/* LEFT ARROW */}
              <button 
                onClick={() => handleManualNav('prev')} 
                className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-[#6174a1]"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* The "Magic" Box */}
              <div className="relative h-[250px] md:h-[250px] flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative w-[92%] max-w-full bg-white/30 backdrop-blur-sm p-6 md:p-12 rounded-xl border border-white/20 shadow-xl flex flex-col justify-center mx-auto">
                    
                    <div className="relative">
  <p className="text-base md:text-sm text-gray-800 leading-relaxed line-clamp-4 md:line-clamp-6">
    "{testimonials[currentIndex].text}"
  </p>
  
  {/* The Read More Button */}
  <button 
    onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
    className="mt-2 text-[#6174a1] font-semibold text-sm hover:underline"
  >
    Read More
  </button>

  <h3 className="mt-4 font-bold text-[#6174a1] uppercase tracking-widest text-sm md:text-base">
    — {testimonials[currentIndex].author}
  </h3>
</div>
                    
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT ARROW */}
              <button 
                onClick={() => handleManualNav('next')} 
                className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-[#6174a1]"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

{/* MODAL OVERLAY */}
<AnimatePresence>
  {selectedTestimonial && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedTestimonial(null)}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-[95%] max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={() => setSelectedTestimonial(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 z-20 bg-white/80 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content Area */}
  <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
          <span className="inline-block px-3 py-1 rounded-full bg-[#6174a1]/10 text-[#6174a1] text-xs font-bold uppercase tracking-widest mb-4">
            Full Testimony
          </span>
          <p className="text-sm md:text-sm text-gray-700 leading-relaxed">
            "{selectedTestimonial.text}"
          </p>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="font-bold text-[#6174a1] text-lg">{selectedTestimonial.author}</h4>
            <p className="text-gray-500 text-sm">{selectedTestimonial.caption}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>

    </section>
  );
}