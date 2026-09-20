 "use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

const navItems = [
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Web Development", desc: "Custom websites & web apps", icon: "🌐", href: "/services/web-development" },
      { name: "App Development", desc: "iOS & Android applications", icon: "📱", href: "/services/app-development" },
      { name: "SEO Optimization", desc: "Rank higher on Google", icon: "📈", href: "/services/seo" },
      { name: "CRM Development", desc: "Customer relationship tools", icon: "🤝", href: "/services/crm" },
      { name: "ERP Solutions", desc: "Enterprise resource planning", icon: "⚙️", href: "/services/erp" },
      { name: "UI/UX Design", desc: "Interfaces that convert", icon: "🎨", href: "/services/ui-ux" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    dropdown: [
      { name: "E-Commerce", desc: "Online stores & marketplaces", icon: "🛒", href: "/industries/ecommerce" },
      { name: "Healthcare", desc: "Hospitals & clinics", icon: "🏥", href: "/industries/healthcare" },
      { name: "Education", desc: "EdTech & LMS platforms", icon: "🎓", href: "/industries/education" },
      { name: "Real Estate", desc: "Property portals & CRM", icon: "🏢", href: "/industries/real-estate" },
      { name: "Finance", desc: "Fintech & banking apps", icon: "💰", href: "/industries/finance" },
      { name: "Logistics", desc: "Delivery & tracking systems", icon: "🚚", href: "/industries/logistics" },
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
                className="relative flex items-center gap-1 px-4 py-2 rounded-lg hover:text-black hover:bg-black/5 transition group"
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

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl border border-black/10 p-3 grid grid-cols-2 gap-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-black/5 transition group/item"
                      >
                        <div className="text-2xl group-hover/item:scale-110 transition grayscale">
                          {sub.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-black">
                            {sub.name}
                          </p>
                          <p className="text-xs text-black/50 mt-0.5">{sub.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA — Talk to Expert (WhatsApp) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black/80 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/10"
          >
            {/* WhatsApp Icon */}
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
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-black/70 hover:bg-black/5 hover:text-black transition"
                          >
                            <span className="text-lg grayscale">{sub.icon}</span>
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