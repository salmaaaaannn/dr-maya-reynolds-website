import React from "react";
import Image from "next/image";
import Link from "next/link";
import { howWeWorkData } from "@/data/homepage";

export default function HowWeWork() {
  return (
    <section className="bg-[#f2f6f6] w-full py-16 md:py-24 lg:py-28 border-b border-[#e5e5df]/40">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content - Desktop: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="eyebrow-tracking text-[#515151] mb-4">
              {howWeWorkData.eyebrow}
            </p>

            {/* Section Heading */}
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-[1.2] text-[#2b2b2b] mb-8">
              {howWeWorkData.heading}
            </h2>

            {/* Lead Emphasized Paragraph */}
            <p className="text-lg sm:text-xl text-[#2b2b2b] font-medium leading-relaxed mb-6">
              {howWeWorkData.leadParagraph}
            </p>

            {/* Two Column Detailed Body Paragraphs on md/lg */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#515151] text-[15px] sm:text-[15.5px] font-light leading-[1.75] mb-10">
              <p>{howWeWorkData.paragraph1}</p>
              <p>{howWeWorkData.paragraph2}</p>
            </div>

            {/* CTA Button */}
            <div>
              <Link href={howWeWorkData.buttonHref} className="sqs-primary-button">
                {howWeWorkData.buttonText}
              </Link>
            </div>
          </div>

          {/* Right Image - Desktop: 5 cols */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[1104/1632] overflow-hidden shadow-sm">
              <Image
                src={howWeWorkData.image.src}
                alt={howWeWorkData.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
