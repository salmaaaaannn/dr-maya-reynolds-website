import React from "react";
import { approachData } from "@/data/maya";

export default function Approach() {
  return (
    <section id="approach" className="bg-[#FAF7F2] w-full py-20 sm:py-24 lg:py-28 border-t border-[#2F3A38]/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow-tracking mb-3">
            {approachData.eyebrow}
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] mb-4">
            {approachData.heading}
          </h2>
          <p className="text-[#6B7671] text-base sm:text-lg font-light leading-relaxed">
            {approachData.description}
          </p>
        </div>

        {/* 4 Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {approachData.modalities.map((modality, idx) => (
            <div
              key={modality.title}
              className="bg-white p-8 rounded-2xl border border-[#2F3A38]/10 shadow-sm transition-all duration-300 hover:border-[#8BA888]/60 hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#5C7A5A]/10 flex items-center justify-center text-sm font-serif-heading font-bold text-[#5C7A5A]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl text-[#2F3A38]">
                  {modality.title}
                </h3>
              </div>
              <p className="text-[#6B7671] text-[15px] font-light leading-[1.75]">
                {modality.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Callout Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#F0EBE3] border border-[#2F3A38]/10 text-center max-w-3xl mx-auto">
          <p className="font-serif-heading text-xl sm:text-2xl text-[#2F3A38] leading-relaxed mb-3">
            “Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.”
          </p>
          <span className="text-xs uppercase tracking-widest text-[#5C7A5A] font-medium">
            Evidence-Based &amp; Collaborative Framework
          </span>
        </div>
      </div>
    </section>
  );
}
