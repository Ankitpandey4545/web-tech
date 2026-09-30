"use client";

import { useState } from "react";
import { ServiceData } from "@/app/data/servicesData";

export default function ServiceFAQ({ service }: { service: ServiceData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 lg:py-28 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] tracking-tight">
              Common
              <br />
              <span className="text-black/30">questions.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {service.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "border-black bg-black/[0.02]"
                      : "border-black/10 hover:border-black/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span
                        className={`text-xs font-bold tracking-widest ${
                          isOpen ? "text-black" : "text-black/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-base font-semibold ${
                          isOpen ? "text-black" : "text-black/80"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-black border-black rotate-45"
                          : "bg-white border-black/15 group-hover:border-black/40"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ${isOpen ? "text-white" : "text-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pl-[68px]">
                        <div className="h-px bg-black/10 mb-4"></div>
                        <p className="text-sm text-black/65 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}