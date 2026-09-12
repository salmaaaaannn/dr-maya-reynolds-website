import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whoWeHelpData } from "@/data/homepage";

interface HelpCardProps {
  title: string;
  href: string | null;
  isChildrenLink?: boolean;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function HelpCard({
  title,
  href,
  isChildrenLink,
  description,
  image,
}: HelpCardProps) {
  return (
    <div className="flex flex-col group">
      {/* Card Image */}
      <div className="relative w-full aspect-[1104/1632] overflow-hidden mb-6 shadow-sm">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Card Title */}
      <h4 className="font-serif-heading text-2xl sm:text-[26px] md:text-2xl lg:text-[28px] text-[#2b2b2b] mb-4">
        {isChildrenLink ? (
          <>
            <Link
              href="/children-and-teens"
              className="hover:text-[#86b3b3] transition-colors"
            >
              Children
            </Link>{" "}
            &amp; Teens
          </>
        ) : href ? (
          <Link href={href} className="hover:text-[#86b3b3] transition-colors">
            {title}
          </Link>
        ) : (
          title
        )}
      </h4>

      {/* Card Description */}
      <p className="text-[#515151] text-[15px] sm:text-[15.5px] font-light leading-[1.7]">
        {description}
      </p>
    </div>
  );
}

export default function WhoWeHelp() {
  return (
    <section className="bg-white w-full py-16 md:py-24 lg:py-28">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#2b2b2b]">
            {whoWeHelpData.headingPrefix}
            <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#2b2b2b] ml-1.5 align-baseline">
              {whoWeHelpData.headingHighlight}
            </span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {whoWeHelpData.cards.map((card) => (
            <HelpCard
              key={card.title}
              title={card.title}
              href={card.href}
              isChildrenLink={card.isChildrenLink}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
