"use client";

import React, { useState } from 'react';

const ScheduleMeeting = () => {
  // Using state to track the active step, allowing you to easily expand this to a functional multi-step form later.
  const [currentStep, ] = useState(1);

  return (
    <div className="py-20 px-4 font-sans bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            <span className="text-[#1a73e8]">Schedule</span> <span className="text-black">Meeting</span>
          </h1>
          <p className="text-gray-800 font-medium max-w-2xl mx-auto text-[15px] leading-relaxed">
            Got an amazing business idea? Let's bring it to market together. We can help you build what
            you've been dreaming about.
          </p>
        </div>

        {/* Stepper Section */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((step, index) => (
            <React.Fragment key={step}>
              {/* Step Circle */}
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors
                  ${currentStep === step 
                    ? 'bg-[#22c55e] text-white shadow-sm' 
                    : 'bg-[#e2e8f0] text-gray-500'
                  }`}
              >
                {step}
              </div>
              
              {/* Connecting Line (Don't render after the last step) */}
              {index < 3 && (
                <div className="w-16 md:w-32 h-0.75 bg-[#e2e8f0]"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-[#f4f7fc] border border-gray-200 rounded-xl p-6 md:p-10 shadow-sm">
          <form className="space-y-6">
            
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Full Name */}
              <div>
                <label className="block text-[15px] font-bold text-black mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  placeholder="Enter Your Name" 
                  className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] bg-white text-gray-800 placeholder-gray-500" 
                />
              </div>

              {/* Email Id */}
              <div>
                <label className="block text-[15px] font-bold text-black mb-2">
                  Email Id *
                </label>
                <input 
                  type="email" 
                  placeholder="Enter Your Email id" 
                  className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] bg-white text-gray-800 placeholder-gray-500" 
                />
              </div>

              {/* Phone No */}
              <div>
                <label className="block text-[15px] font-bold text-black mb-2">
                  Phone No *
                </label>
                <input 
                  type="tel" 
                  placeholder="Enter Your Phone No" 
                  className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] bg-white text-gray-800 placeholder-gray-500" 
                />
              </div>

              {/* Company/Startup Name */}
              <div>
                <label className="block text-[15px] font-bold text-black mb-2">
                  Company/Startup Name *
                </label>
                <input 
                  type="text" 
                  placeholder="Company/Startup Name" 
                  className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] bg-white text-gray-800 placeholder-gray-500" 
                />
              </div>

            </div>

            {/* Submit / Next Button */}
            <div className="flex justify-center mt-8 pt-4">
              <button 
                type="button" 
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-lg py-3 px-16 rounded-md transition-colors shadow-sm"
              >
                Next
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ScheduleMeeting;