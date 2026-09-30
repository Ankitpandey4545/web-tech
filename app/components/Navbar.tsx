 "use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const WHATSAPP_LINK =
  "https://wa.me/919311233320?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

const navItems = [
  {
    name: "Services",
    href: "/services",
    dropdownType: "mega",
    dropdown: [
      {
        name: "Web Development",
        desc: "Custom websites & web apps",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        ),
        href: "/services/web-development",
        tag: "Popular",
      },
      {
        name: "App Development",
        desc: "iOS & Android applications",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        ),
        href: "/services/app-development",
      },
      {
        name: "SEO Optimization",
        desc: "Rank higher on Google",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
        ),
        href: "/services/seo",
      },
      {
        name: "CRM Development",
        desc: "Customer relationship tools",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
        ),
        href: "/services/crm",
      },
      {
        name: "ERP Solutions",
        desc: "Enterprise resource planning",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>
        ),
        href: "/services/erp",
      },
      {
        name: "UI/UX Design",
        desc: "Interfaces that convert",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
          </svg>
        ),
        href: "/services/ui-ux",
      },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    dropdownType: "mega",
    dropdown: [
      {
        name: "E-Commerce",
        desc: "Online stores & marketplaces",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        ),
        href: "/industries/ecommerce",
        tag: "Hot",
      },
      {
        name: "Healthcare",
        desc: "Hospitals & clinics",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        ),
        href: "/industries/healthcare",
      },
      {
        name: "Education",
        desc: "EdTech & LMS platforms",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        ),
        href: "/industries/education",
      },
      {
        name: "Real Estate",
        desc: "Property portals & CRM",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
          </svg>
        ),
        href: "/industries/real-estate",
      },
      {
        name: "Finance",
        desc: "Fintech & banking apps",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        ),
        href: "/industries/finance",
      },
      {
        name: "Logistics",
        desc: "Delivery & tracking systems",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        ),
        href: "/industries/logistics",
      },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-2"
          : "bg-white/80 backdrop-blur-md py-4"
      } border-b border-black/10`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-black/10 group-hover:ring-black transition-all duration-300">
            <Image
              src="/logo.jpeg"
              alt="DellOps Tech Logo"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
          <span className="text-xl font-bold text-black tracking-tight">
            DellOps<span className="text-black/50">Tech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1 text-black/80 font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-1 px-4 py-2 rounded-lg transition group ${
                  activeDropdown === item.name
                    ? "text-black bg-black/5"
                    : "hover:text-black hover:bg-black/5"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-6 transition-all duration-300 rounded-full"></span>
              </Link>

              {/* ============ MEGA DROPDOWN (Services & Industries) ============ */}
              {item.dropdown && activeDropdown === item.name && item.dropdownType === "mega" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[820px] animate-megaIn origin-top">
                  {/* Arrow indicator */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45"></div>

                  <div className="relative bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden">
                    <div className="grid grid-cols-12">
                      {/* ============ LEFT SIDEBAR (Dynamic) ============ */}
                      <div className="col-span-4 relative bg-black text-white p-7 overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-[0.06] pointer-events-none"
                          style={{
                            backgroundImage:
                              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                          }}
                        ></div>

                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative h-full flex flex-col">
                          <div className="flex items-center gap-2 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                              {item.name}
                            </span>
                          </div>

                          {item.name === "Services" ? (
                            <>
                              <h3 className="text-2xl font-bold leading-tight mb-3">
                                Everything you
                                <br />
                                <span className="text-white/40">need to scale.</span>
                              </h3>
                              <p className="text-xs text-white/50 leading-relaxed mb-6">
                                End-to-end digital solutions — from idea to launch and beyond.
                              </p>
                              <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                <div>
                                  <p className="text-2xl font-bold text-white">150+</p>
                                  <p className="text-[9px] text-white/50 uppercase tracking-widest mt-1">
                                    Projects
                                  </p>
                                </div>
                                <div>
                                  <p className="text-2xl font-bold text-white">5+</p>
                                  <p className="text-[9px] text-white/50 uppercase tracking-widest mt-1">
                                    Years
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <h3 className="text-2xl font-bold leading-tight mb-3">
                                Built for every
                                <br />
                                <span className="text-white/40">industry.</span>
                              </h3>
                              <p className="text-xs text-white/50 leading-relaxed mb-6">
                                Tailored digital solutions across diverse sectors — from startups to enterprises.
                              </p>
                              <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                <div>
                                  <p className="text-2xl font-bold text-white">15+</p>
                                  <p className="text-[9px] text-white/50 uppercase tracking-widest mt-1">
                                    Industries
                                  </p>
                                </div>
                                <div>
                                  <p className="text-2xl font-bold text-white">500+</p>
                                  <p className="text-[9px] text-white/50 uppercase tracking-widest mt-1">
                                    Projects
                                  </p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* ============ RIGHT GRID ============ */}
                      <div className="col-span-8 p-4">
                        <div className="grid grid-cols-2 gap-1">
                          {item.dropdown.map((sub: any) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="group/item relative flex items-start gap-3 p-3.5 rounded-xl hover:bg-black/[0.03] transition-all duration-300"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-black/10 bg-white flex items-center justify-center text-black group-hover/item:bg-black group-hover/item:text-white group-hover/item:border-black group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-500">
                                {sub.icon}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <p className="text-sm font-semibold text-black tracking-tight">
                                    {sub.name}
                                  </p>
                                  {sub.tag && (
                                    <span className="text-[8px] font-bold text-white bg-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                                      {sub.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-black/50 leading-snug">
                                  {sub.desc}
                                </p>
                              </div>

                              <span className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-300 text-black mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* Bottom CTA bar — Dynamic */}
                        <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between px-3">
                          <p className="text-xs text-black/50">
                            {item.name === "Services"
                              ? "Not sure what you need?"
                              : "Don't see your industry?"}
                          </p>
                          <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:gap-2.5 transition-all duration-300"
                          >
                            {item.name === "Services" ? "Talk to Expert" : "Let's talk"}
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black/80 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Talk to Expert
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-black rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black rounded transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-black/10 px-6 py-4 max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-black font-medium hover:bg-black/5 transition"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdown === item.name ? "max-h-96 mt-1" : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 flex flex-col gap-1">
                        {item.dropdown.map((sub: any) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-black/70 hover:bg-black/5 hover:text-black transition"
                          >
                            <span className="flex-shrink-0 w-7 h-7 rounded-md border border-black/10 flex items-center justify-center text-black">
                              <span className="scale-75">{sub.icon}</span>
                            </span>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-black font-medium hover:bg-black/5 transition"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-black text-white text-center px-5 py-3 rounded-lg font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Talk to Expert
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}