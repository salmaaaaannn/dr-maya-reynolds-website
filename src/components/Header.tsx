"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationData } from "@/data/maya";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#2F3A38]/10 py-3"
          : "bg-[#FAF7F2] border-b border-[#2F3A38]/5 py-4 sm:py-5"
      }`}
    >
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-md rounded-full"
      >
        Skip to Content
      </a>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif-heading text-xl sm:text-2xl text-[#2F3A38] tracking-tight group-hover:text-[#5C7A5A] transition-colors">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#6B7671] font-medium">
            Clinical Psychologist · Santa Monica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[14.5px]">
          {navigationData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="nav-link font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="#contact" className="btn-primary text-sm py-2.5 px-6">
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2F3A38] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div className="space-y-1.5 w-6">
                <span className="block w-6 h-[2px] bg-[#2F3A38]"></span>
                <span className="block w-6 h-[2px] bg-[#2F3A38]"></span>
                <span className="block w-6 h-[2px] bg-[#2F3A38]"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-[#FAF7F2] flex flex-col justify-between px-8 py-10 overflow-y-auto lg:hidden">
          <div className="flex flex-col space-y-5">
            {navigationData.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif-heading text-[#2F3A38] hover:text-[#5C7A5A] py-2 border-b border-[#2F3A38]/10 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-[#2F3A38]/10 mt-auto">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-3.5"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
