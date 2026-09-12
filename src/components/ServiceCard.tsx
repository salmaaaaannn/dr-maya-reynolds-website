import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#2F3A38]/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md group">
      <div>
        {/* Card Image */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif-heading text-2xl sm:text-[26px] text-[#2F3A38] mb-3 leading-snug">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-[#6B7671] text-[15px] font-light leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Bullet Highlights */}
        <ul className="space-y-2.5 mb-8 text-sm text-[#2F3A38]/90">
          {service.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8BA888] mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-[#2F3A38]/5">
        <Link href={service.ctaHref} className="link-underlined text-sm">
          {service.ctaText} →
        </Link>
      </div>
    </div>
  );
}
