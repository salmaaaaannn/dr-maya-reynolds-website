import React from "react";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/data/maya";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF7F2] w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Subtle Organic Decorative Blur Element (Still Waters Theme) */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#8BA888]/12 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-96 h-96 rounded-full bg-[#D4A29C]/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Content - Desktop: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#5C7A5A] animate-pulse"></span>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B7671] font-medium">
                {heroData.eyebrow}
              </p>
            </div>

            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.2] sm:leading-[1.15] text-[#2F3A38] tracking-tight mb-5 sm:mb-6">
              {heroData.heading}
            </h1>

            <p className="text-[#6B7671] text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
              {heroData.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href={heroData.primaryCTA.href} className="btn-primary py-3.5 px-8 shadow-sm">
                {heroData.primaryCTA.text}
              </Link>
              <Link href={heroData.secondaryCTA.href} className="btn-secondary py-3.5 px-7">
                {heroData.secondaryCTA.text}
              </Link>
            </div>

            {/* Credential assurance badges */}
            <div className="mt-10 pt-6 border-t border-[#2F3A38]/10 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-[#6B7671]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#5C7A5A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Licensed Clinical Psychologist (PsyD)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#5C7A5A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Santa Monica Office &amp; California Telehealth</span>
              </div>
            </div>
          </div>

          {/* Right Image with Organic Arch Shape - Desktop: 5 cols */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-arch overflow-hidden shadow-md border-4 border-white/80 bg-white">
              <Image
                src={heroData.image.src}
                alt={heroData.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F3A38]/85 via-[#2F3A38]/40 to-transparent pt-14 pb-5 px-5 text-center text-white drop-shadow-sm pointer-events-none">
                <p className="font-serif-heading text-lg sm:text-xl text-[#FAF7F2] font-medium tracking-normal">
                  Dr. Maya Reynolds, PsyD
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8BA888] font-medium mt-0.5">
                  Licensed Clinical Psychologist
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
