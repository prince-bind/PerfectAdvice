"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  // --- Typewriter State ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // The phrases to cycle through (matched from your video)
  const phrases = [
    "M&A Services", 
    "Legal Advisory", 
    "Fintech Consulting", 
    "CFO Services", 
    "Tax Risk Advisory"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Dynamic Speed: Faster when deleting, standard when typing
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        // Finished typing phrase, pause before deleting
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <section className="relative w-full bg-linear-to-b from-white via-blue-50 to-white pt-24 pb-32 overflow-hidden font-sans">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Small Tagline */}
        <h2 className="text-md tracking-[0.2em] text-gray-800 uppercase mb-5">
          WELCOME TO <span className="font-bold">PERFECT ADVICE</span>
        </h2>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-sans font-bold text-[#1e1b4b] mb-4 leading-tight">
          Perfect Advice : Your Trusted Partner
        </h1>
        
        {/* Dynamic Typewriter Text */}
        <div className="h-20 flex justify-center items-center">
          <span className="text-4xl md:text-6xl font-bold text-blue-600">
            {text}
            <span className="animate-blink font-light text-blue-600 ml-1">|</span>
          </span>
        </div>

        {/* Subtitle Paragraph */}
        <p className="text-gray-500 max-w-3xl mx-auto mb-10 text-lg leading-relaxed px-4">
          At Perfect Advice, we provide innovative, tech-driven solutions that ensure sustainable results for your business needs. Our range of services includes audit and assurance, advisory, consulting, and regulatory compliance, all designed to help your business operate smoothly and efficiently.
        </p>

        {/* Flag Cluster Area */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex -space-x-3">
                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm z-30" />
                
                {/* <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shadow-sm z-0">
                    +
                </div> */}
            </div>
            <p className="text-blue-900 font-semibold text-sm">
                We offer best services across <span className="font-bold">India.</span>
            </p>
        </div>

        {/* Main CTA Button */}
        <Link href="/schedule-meeting" className="bg-blue-600 text-white px-10 py-4 rounded font-bold shadow-xl shadow-blue-200 transition-transform hover:-translate-y-1 hover:bg-blue-700">
          Schedule a Meeting
        </Link>

      </div>
    </section>
  );
};

export default HeroSection;