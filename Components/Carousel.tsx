'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { id: 1, title: "\"I very highly recommend Rin as a healer.\"", text: "I have had the pleasure of working with Rin for what I can’t believe is already 4 years now. She has been an amazing help since day one and surprised me immediately with her intuitiveness during our first ever session together.  In my experience with our distance healings, as we do not live in the same area, she has shown me patience, reassurance, and empathy that is felt from miles away. I genuinely feel like I would not have been able to work through some of the tougher times in my life without her guidance and ability to not only heal me but to also teach me how to heal myself. Her large knowledge of her field and her ability to explain and answer any and all of my questions put me at ease from the very beginning. I very highly recommend Rin as a healer.", author: "Jessica S.", caption: "Florida, USA", image: "/FL_map.png"},
  { id: 2, title: "\"I feel better physically and mentally at peace.\"", text: "I was so relaxed during my in-person healing session that I fell asleep after a few minutes. She gently woke me up as she finished by touching my feet. She was very thorough in explaining the issues she detected in my energy field and my body and what she did to heal it. There were times where I felt alot of heat coming from her hands and buzzing and popping sensations in my body which she assured was normal. She was very accurate in identifying my past injuries and health issues, like where the metal plate in my ankle was and my bloodpressure hypertension issues. She was very tuned into how I was feeling and calmed down my anxiety when she worked on the top of my head. What she said about my past life was really interesting and made sense with some things I've been through.  She also spoke with one of my guardian spirits who is a woman I used to draw pictures of as a kid and she described her perfectly. It gave me a lot to think about and answered a lot of questions. I feel better physically, less tense and more at peace mentally.", author: "Connor P.", caption: "Kentucky, USA", image: "/KY_map.png"},
  { id: 3, title: "\"Things that no one else could know.\"", text: "In early 2024 I was experiencing high anxiety due to some non typical challenges I had been confronted with. To be honest, I didn't have much hope. I reached out to see about getting a reading and I was glad I did. After giving my permission to start, I was able to learn about the spiritual aspects of what I was dealing with and the spiritual support system available to me. There were certain things and memories in the report that had a lot of meaning to me that no one else could really know. And meditation exercises were given that I came to depend on for my day to day survival. In the end everything worked out just fine for me. I am very grateful for a glimpse into the invisible battles being waged in our lives now that began in the past. And how we can right wrongs by caring for ourselves and carrying forward the light. Thank you, Rin!", author: "Jeremiah O.", caption: "Missouri, USA", image: "/missouri_map.png"},
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <section className="relative w-full mb-12 border-2 border-[#6174a1] shadow-[0_8px_10px_-1px_rgba(60,40,0,0.55)] overflow-hidden">
      <div className="w-full min-h-[750px] lg:h-[500px] relative flex items-center justify-center">
        <img 
        alt="background" 
        className="absolute inset-0 h-full w-full object-cover -z-10" 
        src="/geodebg.jpg" />
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 gap-12 lg:gap-24">
          
          {/* Left Side: Image & Caption */}
          <div className="w-full lg:w-auto flex flex-col items-center">
            <div className="w-60 h-60 lg:w-60 lg:h-60 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 relative bg-gray-200">
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
            <div className="w-full flex justify-center mt-2 mb-2 lg:mb-0">
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
          <div className="w-full lg:w-auto h-full flex items-center justify-center px-4">
            <div className="relative w-full max-w-2xl">
              
              {/* LEFT ARROW */}
              <button 
                onClick={() => handleManualNav('prev')} 
                className="absolute -left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-[#6174a1]">
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* The "Magic" Box */}
              <div className="relative h-[300px] sm:h-[250px] lg:h-[250px] flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative w-[92%] lg:max-w-2xl bg-white/70 backdrop-blur-sm p-6 sm:p-6 lg:p-12 rounded-xl border border-white/20 shadow-xl flex flex-col justify-center mx-auto overflow-hidden">
                    
      {/* Testimonial Body Text */}
      {/* NEW: Custom Title Header */}
  <h2 className="inline-block font-black text-[#4170c1] text-xl sm:text-2xl lg:text-3xl -skew-x-[12deg] !leading-[1.3] tracking-tight [word-spacing:-0.1em] text-center mb-6">
    {testimonials[currentIndex].title}
  </h2>
  {/* Spacing under Title is 'mb-6', Dynamic Line Clamp for Mobile-Desktop*/}
  <div className="relative">
  <p className="!text-[17px] lg:!text-[20px] text-gray-800 leading-relaxed line-clamp-3 lg:line-clamp-6">
    "{testimonials[currentIndex].text}"
  </p>
  
  {/* The Read More Button */}
<button 
  onClick={() => {
    setIsModalOpen(true);
    setIsPaused(true); 
  }}
  className="mt-2 text-[#6174a1] font-semibold !text-[16px] hover:underline"
>
  Read More
</button>
  {/* Testimonial Name/Author Text */}
<h3 
  style={{ fontSize: '18px' }} // Mobile Text Size
  className="mt-4 font-bold text-[#6174a1] uppercase tracking-widest lg:!text-[20px]" // Desktop Text Size
>
  — {testimonials[currentIndex].author}
</h3>
</div>
                    
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT ARROW */}
              <button 
                onClick={() => handleManualNav('next')} 
                className="absolute -right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-[#6174a1]"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

{/* MODAL OVERLAY */}
<AnimatePresence mode="popLayout">
  {isModalOpen && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

{/* NAV ARROWS INSIDE MODAL OVERLAY */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-4xl">
        
        {/* Left Arrow */}
        <button 
          onClick={() => handleManualNav('prev')}
          className="absolute -left-4 lg:-left-16 text-white hover:text-gray-300 transition-colors z-30"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

{/* Right Arrow */}
        <button 
          onClick={() => handleManualNav('next')}
          className="absolute -right-4 lg:-right-16 text-white hover:text-gray-300 transition-colors z-30">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>


      {/* Modal Card with White BG Div Wrapper*/}
      <div className="relative w-[95%] max-w-lg lg:max-w-4xl bg-white rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden">
  <AnimatePresence mode="popLayout">
      <motion.div 
      key={currentIndex} // Adding key here lets the modal content animate when switching!
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, ease: [0.52, 0.72, 0, 1]}}
        className="relative w-full flex flex-col">
        

        {/* Close Button */}
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 z-20 bg-white/80 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content Area */}
  <div className="p-6 lg:p-12 overflow-y-auto custom-scrollbar">
  <span className="inline-block px-3 py-1 rounded-full bg-[#6174a1]/10 text-[#6174a1] text-sm font-bold tracking-widest mb-4">
            Full Testimony
          </span>
          <p className="!text-[17px] lg:!text-[20px] text-gray-700 
          leading-[1.85] tracking-[0.3px] [word-spacing:0.5px]">
            "{testimonials[currentIndex].text}"
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100">
            {/* Author Text*/}
            <h4 className="font-bold text-[#6174a1] !text-[22px] lg:!text-[26px]">{testimonials[currentIndex].author}</h4>
            {/* Caption Text */}
            <p className="text-gray-500 !text-[16px] lg:!text-[20px]">{testimonials[currentIndex].caption}</p>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>

      </div>
    </div>
    </div>
  )}
</AnimatePresence>

    </section>
  );
}