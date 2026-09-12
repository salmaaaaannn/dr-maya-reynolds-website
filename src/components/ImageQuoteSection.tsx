import React from "react";
import Image from "next/image";
import { imageQuoteSectionData } from "@/data/homepage";

export default function ImageQuoteSection() {
  return (
    <section className="bg-white w-full py-16 md:py-24 lg:py-28 border-b border-[#e5e5df]/40">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Landscape Image - Desktop: 7 cols */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full aspect-[2096/1296] overflow-hidden shadow-sm">
              <Image
                src={imageQuoteSectionData.image.src}
                alt={imageQuoteSectionData.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Quote Heading - Desktop: 5 cols */}
          <div className="lg:col-span-5 flex items-center">
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] leading-[1.25] text-[#2b2b2b]">
              {imageQuoteSectionData.headingPrefix}
              <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#2b2b2b] mx-1 align-baseline">
                {imageQuoteSectionData.headingHighlight}
              </span>
              {imageQuoteSectionData.headingSuffix}
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
