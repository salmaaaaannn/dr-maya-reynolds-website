"use client";

import React, { useState } from "react";
import { appointmentCTAData } from "@/data/maya";

export default function AppointmentCTA() {
  const [showForm, setShowForm] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Begin Your Care"
      className="relative bg-[#F0EBE3] w-full py-16 sm:py-20 md:py-24 border-t border-[#2F3A38]/10 overflow-hidden"
    >
      {/* Subtle Organic Decorative Element */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#8BA888]/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Clean Vertical Content Column */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p className="eyebrow-tracking mb-3">
            {appointmentCTAData.eyebrow}
          </p>

          {/* Heading with generous line-height */}
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] leading-tight sm:leading-[1.18] tracking-tight mb-4 sm:mb-5">
            {appointmentCTAData.heading}
          </h2>

          {/* Supporting Text */}
          <p className="text-[#6B7671] text-base sm:text-lg font-light leading-relaxed mb-6 sm:mb-7 max-w-xl">
            {appointmentCTAData.paragraph}
          </p>

          {/* CTA Action Button */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => setShowForm((prev) => !prev)}
              className="btn-primary text-sm sm:text-base py-3.5 px-8 shadow-sm cursor-pointer"
            >
              {showForm ? "Inquire Below" : appointmentCTAData.buttonText}
            </button>
          </div>
        </div>

        {/* Consultation Inquiry Form Card */}
        {showForm && (
          <div
            id="consultation-form"
            className="bg-white p-7 sm:p-9 rounded-2xl border border-[#2F3A38]/10 shadow-sm max-w-xl mx-auto mb-6 sm:mb-8 transition-all duration-300"
          >
            <h3 className="font-serif-heading text-2xl text-[#2F3A38] mb-2 text-center">
              Schedule an Initial Consultation
            </h3>
            <p className="text-sm text-[#6B7671] font-light mb-6 text-center leading-relaxed">
              Share your information below to coordinate an initial phone consultation with Dr. Maya Reynolds.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#8BA888]/15 border border-[#8BA888]/30 text-[#2F3A38] text-center">
                <p className="font-serif-heading text-xl mb-1 text-[#5C7A5A]">
                  Thank you for reaching out
                </p>
                <p className="text-sm text-[#6B7671] font-light">
                  Your consultation inquiry has been received. Dr. Maya will be in touch shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#6B7671] font-medium mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A38]/15 text-sm focus:outline-none focus:border-[#5C7A5A] bg-[#FAF7F2] text-[#2F3A38]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#6B7671] font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A38]/15 text-sm focus:outline-none focus:border-[#5C7A5A] bg-[#FAF7F2] text-[#2F3A38]"
                  />
                </div>
                <div>
                  <label htmlFor="format" className="block text-xs uppercase tracking-wider text-[#6B7671] font-medium mb-1.5">
                    Preferred Session Format
                  </label>
                  <select
                    id="format"
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A38]/15 text-sm focus:outline-none focus:border-[#5C7A5A] bg-[#FAF7F2] text-[#2F3A38]"
                  >
                    <option>In-Person (Santa Monica Office)</option>
                    <option>Telehealth (Across California)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#6B7671] font-medium mb-1.5">
                    Brief Concern
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="What brings you to therapy at this time?"
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A38]/15 text-sm focus:outline-none focus:border-[#5C7A5A] bg-[#FAF7F2] text-[#2F3A38]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-center py-3.5 mt-2 cursor-pointer shadow-xs"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        )}

        {/* Location & Practice Note */}
        <div className="text-center pt-2">
          <p className="text-xs uppercase tracking-[0.14em] text-[#5C7A5A] font-medium">
            {appointmentCTAData.locationNote}
          </p>
        </div>

      </div>
    </section>
  );
}
