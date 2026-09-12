import React from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/maya";

export default function About() {
  return (
    <section id="about" className="bg-[#FAF7F2] w-full py-20 sm:py-24 lg:py-28 border-t border-[#2F3A38]/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait with Arch Frame - Desktop: 5 cols */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="group relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-arch overflow-hidden shadow-md border-4 border-white/80 bg-white">
              <Image
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2F3A38]/75 via-[#2F3A38]/25 to-transparent p-6 text-white text-center">
                <p className="font-serif-heading text-xl text-[#FAF7F2]">Dr. Maya Reynolds, PsyD</p>
                <p className="text-[11px] uppercase tracking-widest text-[#8BA888] font-medium mt-0.5">
                  Licensed Clinical Psychologist
                </p>
              </div>
            </div>
          </div>

          {/* Biography Text - Desktop: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow-tracking mb-3">
              {aboutData.eyebrow}
            </p>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] mb-2 leading-tight">
              {aboutData.heading}
            </h2>

            <p className="text-xs uppercase tracking-[0.14em] text-[#5C7A5A] font-semibold mb-6">
              {aboutData.credentials} · {aboutData.location}
            </p>

            <div className="space-y-4 text-[#6B7671] text-[15.5px] font-light leading-[1.8]">
              {aboutData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Verbatim Authentic Profile Quote */}
            {aboutData.verbatimQuote && (
              <blockquote className="mt-6 p-5 sm:p-6 rounded-xl bg-[#F0EBE3] border-l-3 border-[#5C7A5A] text-[#2F3A38] text-sm sm:text-[15px] italic leading-relaxed">
                “{aboutData.verbatimQuote}”
              </blockquote>
            )}

            <div className="mt-8 pt-6 border-t border-[#2F3A38]/10 flex flex-wrap items-center gap-4">
              <Link href="#contact" className="btn-primary text-xs uppercase tracking-wider py-3.5 px-7">
                Schedule a Consultation
              </Link>
              <Link href="#approach" className="btn-secondary text-xs uppercase tracking-wider py-3.5 px-6">
                Therapy Approach
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
