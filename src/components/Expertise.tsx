import React from "react";
import Link from "next/link";
import { expertiseData } from "@/data/homepage";

export default function Expertise() {
  const col1Items = expertiseData.items.slice(0, 6);
  const col2Items = expertiseData.items.slice(6, 12);

  return (
    <section className="bg-white w-full py-16 md:py-24 lg:py-28 border-b border-[#e5e5df]/40">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Heading - Desktop: 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] leading-[1.2] text-[#2b2b2b]">
              {expertiseData.headingPrefix}
              <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#2b2b2b] ml-1.5 align-baseline">
                {expertiseData.headingHighlight}
              </span>
            </h3>
          </div>

          {/* 2-Column List of Expertise - Desktop: 8 cols */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
            {/* Column 1 */}
            <div className="flex flex-col">
              {col1Items.map((item, index) => (
                <div key={item.name} className="py-4 border-b border-[#e5e5df]">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-lg sm:text-[19px] md:text-xl text-[#2b2b2b] hover:text-[#86b3b3] transition-colors inline-block font-normal"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-lg sm:text-[19px] md:text-xl text-[#2b2b2b] inline-block font-normal">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              {col2Items.map((item, index) => {
                const isLast = index === col2Items.length - 1;
                return (
                  <div
                    key={item.name}
                    className={`py-4 ${!isLast ? "border-b border-[#e5e5df]" : ""}`}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-lg sm:text-[19px] md:text-xl text-[#2b2b2b] hover:text-[#86b3b3] transition-colors inline-block font-normal"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        className={`text-lg sm:text-[19px] md:text-xl text-[#2b2b2b] inline-block font-normal ${
                          item.name === "…and more." ? "text-[#515151] italic" : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
