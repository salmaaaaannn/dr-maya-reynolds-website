import React from "react";
import { servicesData } from "@/data/maya";
import { ServiceCard } from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-[#FAF7F2] w-full py-20 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow-tracking mb-3">
            {servicesData.eyebrow}
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] text-[#2F3A38] mb-4">
            {servicesData.heading}
          </h2>
          <p className="text-[#6B7671] text-base sm:text-lg font-light leading-relaxed">
            {servicesData.description}
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
