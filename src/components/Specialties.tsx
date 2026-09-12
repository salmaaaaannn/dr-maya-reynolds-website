import React from "react";
import Link from "next/link";
import { specialtiesData } from "@/data/homepage";

interface SpecialtyCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function SpecialtyCard({
  title,
  description,
  buttonText,
  buttonHref,
}: SpecialtyCardProps) {
  return (
    <div className="flex flex-col justify-between p-2">
      <div>
        <h4 className="font-serif-heading text-2xl sm:text-[26px] md:text-[28px] text-[#2b2b2b] mb-4">
          {title}
        </h4>
        <p className="text-[#515151] text-[15px] sm:text-[15.5px] font-light leading-[1.75] mb-6">
          {description}
        </p>
      </div>
      <div>
        <Link href={buttonHref} className="sqs-primary-button text-sm">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default function Specialties() {
  return (
    <section className="bg-white w-full py-16 md:py-24 lg:py-28 border-b border-[#e5e5df]/40">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Heading - Desktop: 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] leading-[1.2] text-[#2b2b2b]">
              {specialtiesData.headingPrefix}
              <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#2b2b2b] mx-1 align-baseline">
                {specialtiesData.headingHighlight}
              </span>
              {specialtiesData.headingSuffix}
            </h3>
          </div>

          {/* 2x2 Grid of Specialty Cards - Desktop: 8 cols */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-14">
            {specialtiesData.cards.map((card) => (
              <SpecialtyCard
                key={card.title}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonHref={card.buttonHref}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
