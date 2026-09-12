import React from "react";
import Image from "next/image";
import Link from "next/link";
import { officeData } from "@/data/maya";

export default function Office() {
  return (
    <section
      id="office"
      aria-label="Our Office"
      className="relative bg-[#F0EBE3] w-full py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#2F3A38]/5"
    >
      {/* Subtle Organic Decorative Blur Elements */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#8BA888]/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D4A29C]/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="eyebrow-tracking mb-3">
            {officeData.eyebrow}
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] mb-4 leading-tight">
            {officeData.heading}
          </h2>

          {/* Location & Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#2F3A38]/10 text-xs font-medium text-[#2F3A38] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#5C7A5A] animate-pulse" />
              {officeData.locationBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#2F3A38]/10 text-xs font-medium text-[#5C7A5A] shadow-xs">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              In-Person Sessions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#2F3A38]/10 text-xs font-medium text-[#6B7671] shadow-xs">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              California Telehealth
            </span>
          </div>

          <p className="text-[#6B7671] text-[15.5px] sm:text-base font-light leading-relaxed">
            {officeData.description}
          </p>
        </div>

        {/* Asymmetrical Editorial Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-14">
          
          {/* Main Large Office Image (Arch container) - Desktop: 7 cols */}
          <div className="lg:col-span-7 group relative">
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[380px] rounded-t-[80px] sm:rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-sm border border-[#2F3A38]/10 bg-white">
              <Image
                src={officeData.images[0].src}
                alt={officeData.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A38]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white text-xs font-light tracking-wide drop-shadow-sm">
                <span className="font-medium text-[#FAF7F2]">Quiet Santa Monica Therapy Room</span> • Natural Light &amp; Privacy
              </div>
            </div>
          </div>

          {/* Two Stacked Supporting Detail Images - Desktop: 5 cols */}
          <div className="lg:col-span-5 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-8">
            
            {/* Supporting Image 1 */}
            <div className="group relative w-full aspect-[4/3] sm:aspect-[4/3] lg:h-[220px] rounded-2xl overflow-hidden shadow-sm border border-[#2F3A38]/10 bg-white">
              <Image
                src={officeData.images[1].src}
                alt={officeData.images[1].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A38]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white text-[11px] font-light">
                Comfortable, uncluttered environment
              </div>
            </div>

            {/* Supporting Image 2 */}
            <div className="group relative w-full aspect-[4/3] sm:aspect-[4/3] lg:h-[220px] rounded-2xl overflow-hidden shadow-sm border border-[#2F3A38]/10 bg-white">
              <Image
                src={officeData.images[2].src}
                alt={officeData.images[2].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A38]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white text-[11px] font-light">
                Calming morning light &amp; soft tones
              </div>
            </div>

          </div>

        </div>

        {/* What to Expect Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {officeData.whatToExpect.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#2F3A38]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs uppercase tracking-widest text-[#5C7A5A] font-semibold mb-2">
                  0{index + 1}
                </span>
                <h4 className="font-serif-heading text-lg text-[#2F3A38] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#6B7671] text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Consultation Banner (Micro CTA) */}
        <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#2F3A38]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="max-w-xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-wider text-[#5C7A5A] font-semibold mb-1">
              <svg className="w-4 h-4 text-[#5C7A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{officeData.address}</span>
            </div>
            <p className="text-[#6B7671] text-sm font-light leading-relaxed">
              {officeData.formatNote}
            </p>
          </div>
          <Link
            href={officeData.cta.href}
            className="btn-primary text-xs uppercase tracking-wider py-3.5 px-7 flex-shrink-0"
          >
            {officeData.cta.text}
          </Link>
        </div>

      </div>
    </section>
  );
}
