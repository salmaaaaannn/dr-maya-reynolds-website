import React from "react";
import Image from "next/image";
import { quoteBannerData } from "@/data/maya";

export default function QuoteBanner() {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#5C7A5A] text-[#FAF7F2]">
      {/* Background Image Texture with Subtle Blend */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
        <Image
          src="/images/calm-banner.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <span className="font-serif-heading text-4xl text-[#8BA888] leading-none mb-4 block">
          “
        </span>
        <blockquote className="font-serif-heading text-2xl sm:text-3xl md:text-[38px] leading-[1.35] text-[#FAF7F2] font-light mb-6">
          {quoteBannerData.quote}
        </blockquote>
        <p className="text-xs uppercase tracking-[0.16em] text-[#FAF7F2]/80 font-medium">
          — {quoteBannerData.author}, Licensed Clinical Psychologist
        </p>
      </div>
    </section>
  );
}
