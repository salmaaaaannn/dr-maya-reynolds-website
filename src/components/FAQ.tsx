"use client";

import React, { useState } from "react";
import { faqData } from "@/data/maya";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#FAF7F2] w-full py-20 sm:py-24 lg:py-28 border-t border-[#2F3A38]/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="eyebrow-tracking mb-3">
            {faqData.eyebrow}
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] mb-4">
            {faqData.heading}
          </h2>
          <p className="text-[#6B7671] text-base sm:text-lg font-light leading-relaxed">
            {faqData.description}
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#5C7A5A]/30 shadow-xs"
                    : "bg-white/70 border-[#2F3A38]/7 hover:bg-white hover:border-[#2F3A38]/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7A5A] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif-heading text-lg sm:text-xl text-[#2F3A38] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#5C7A5A] text-white"
                        : "bg-[#F0EBE3] text-[#2F3A38]"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-6 text-[#6B7671] text-[15px] font-light leading-[1.75] border-t border-[#2F3A38]/5 pt-3.5"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
