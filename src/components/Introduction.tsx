import React from "react";
import Image from "next/image";
import { introductionData } from "@/data/maya";

export default function Introduction() {
  return (
    <section className="bg-[#FAF7F2] w-full py-20 sm:py-24 lg:py-28 border-t border-[#2F3A38]/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block - Desktop: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow-tracking mb-4">
              {introductionData.eyebrow}
            </p>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] leading-[1.22] text-[#2F3A38] mb-8">
              {introductionData.heading}
            </h2>

            {/* Sub-grid of two columns on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#6B7671] text-[15.5px] leading-[1.75] font-light">
              <div className="space-y-4">
                <p className="text-[17px] text-[#2F3A38] font-normal leading-relaxed">
                  {introductionData.leadText}
                </p>
                <p>{introductionData.paragraph1}</p>
              </div>

              <div>
                <p>{introductionData.paragraph2}</p>
              </div>
            </div>
          </div>

          {/* Right Image - Desktop: 5 cols */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-sm sm:max-w-md aspect-[1104/1400] rounded-2xl overflow-hidden shadow-sm border border-[#2F3A38]/5 bg-white">
              <Image
                src={introductionData.image.src}
                alt={introductionData.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
