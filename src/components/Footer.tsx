import React from "react";
import Link from "next/link";
import { footerData } from "@/data/maya";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2F3A38] text-[#FAF7F2] pt-16 pb-12 border-t border-[#FAF7F2]/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FAF7F2]/10">
          
          {/* Col 1: Brand & Practice Details - 6 cols */}
          <div className="md:col-span-6 flex flex-col">
            <h3 className="font-serif-heading text-2xl text-[#FAF7F2] mb-1">
              {footerData.brandName}
            </h3>
            <p className="text-xs uppercase tracking-[0.14em] text-[#8BA888] font-medium mb-5">
              {footerData.tagline}
            </p>
            <p className="text-sm font-light text-[#FAF7F2]/80 leading-relaxed mb-4 max-w-md">
              Evidence-based, collaborative therapy for adults navigating anxiety, trauma, and burnout. Creating space to slow down, regulate, and heal.
            </p>
            <p className="text-xs text-[#FAF7F2]/60 leading-relaxed">
              {footerData.telehealthNote}
            </p>
          </div>

          {/* Col 2: Navigation - 3 cols */}
          <div className="md:col-span-3 flex flex-col">
            <p className="text-xs uppercase tracking-[0.14em] text-[#8BA888] font-semibold mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm font-light text-[#FAF7F2]/85">
              {footerData.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-[#8BA888] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Santa Monica Office - 3 cols */}
          <div className="md:col-span-3 flex flex-col">
            <p className="text-xs uppercase tracking-[0.14em] text-[#8BA888] font-semibold mb-4">
              Santa Monica Office
            </p>
            <address className="not-italic text-sm font-light text-[#FAF7F2]/85 leading-relaxed mb-4">
              {footerData.address}
            </address>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block text-xs uppercase tracking-wider text-[#8BA888] hover:text-white font-medium transition-colors"
              >
                Inquire About Availability →
              </a>
            </div>
          </div>

        </div>

        {/* Public Crisis Support Notice (988) */}
        <div className="py-6 border-b border-[#FAF7F2]/10 text-xs font-light text-[#FAF7F2]/65 leading-relaxed text-center sm:text-left">
          <p>
            <strong className="font-medium text-[#FAF7F2]/85">Public Crisis Support Notice:</strong> If you are experiencing a mental health crisis, emotional distress, or thoughts of self-harm, free, confidential support is available 24/7 across the US by calling or texting <span className="font-medium text-[#8BA888]">988</span> (Suicide &amp; Crisis Lifeline), or calling 911 for emergency assistance. This website and private practice do not provide emergency medical or crisis intervention services.
          </p>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#FAF7F2]/60">
          <p className="max-w-xl text-center sm:text-left">
            {footerData.disclaimer}
          </p>
          <p className="text-center sm:text-right flex-shrink-0">
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
