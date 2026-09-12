import React from "react";
import { whoIHelpData } from "@/data/maya";

export default function WhoIHelp() {
  return (
    <section className="bg-[#F0EBE3] w-full py-20 sm:py-24 lg:py-28 border-t border-[#2F3A38]/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow-tracking mb-3">
            {whoIHelpData.eyebrow}
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] mb-4">
            {whoIHelpData.heading}
          </h2>
          <p className="text-[#6B7671] text-base sm:text-lg font-light leading-relaxed">
            {whoIHelpData.description}
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoIHelpData.groups.map((group, idx) => (
            <div
              key={group.title}
              className="bg-[#FAF7F2] p-8 sm:p-9 rounded-2xl border border-[#2F3A38]/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#8BA888]/20 flex items-center justify-center text-[#5C7A5A] mb-6 font-serif-heading text-lg font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-heading text-2xl text-[#2F3A38] mb-4 leading-snug">
                  {group.title}
                </h3>
                <p className="text-[#6B7671] text-[15px] font-light leading-[1.75]">
                  {group.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2F3A38]/5 text-xs text-[#5C7A5A] font-medium tracking-wide uppercase">
                Adult Individual Therapy
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
