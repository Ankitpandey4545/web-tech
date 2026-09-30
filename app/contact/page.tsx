"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

const services = [
  "Web Development",
  "App Development",
  "SEO Optimization",
  "CRM Development",
  "ERP Solutions",
  "UI/UX Design",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build WhatsApp message from form
    const message = `Hello DellOps Tech! 👋

*New Inquiry from Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🏢 *Company:* ${formData.company || "N/A"}
🎯 *Service:* ${formData.service}
💰 *Budget:* ${formData.budget || "Not specified"}

💬 *Message:*
${formData.message}`;

    const waLink = `https://wa.me/918787054829?text=${encodeURIComponent(
      message
    )}`;

    // Simulate short delay
    setTimeout(() => {
      window.open(waLink, "_blank");
      setLoading(false);
      setSubmitted(true);

      // Reset after 5 sec
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      }, 5000);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* ============ HERO ============ */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-black/40 mb-8 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-black">Contact</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-7 shadow-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                  <span className="text-[10px] font-bold text-black tracking-widest">
                    LET'S TALK
                  </span>
                </span>
                <span className="w-px h-3 bg-black/15"></span>
                <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                Let's build
                <br />
                <span className="text-black/30">something great.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <p className="text-lg text-black/60 leading-relaxed">
                Have a project in mind? Fill the form or reach out directly —
                we usually respond within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT FORM + INFO ============ */}
      <section className="relative bg-white pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* ============ LEFT — FORM ============ */}
            <div className="lg:col-span-7">
              <div className="border border-black/10 rounded-3xl p-6 lg:p-10 bg-white">
                {submitted ? (
                  // ============ SUCCESS STATE ============
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto rounded-full bg-black flex items-center justify-center mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-black/60 mb-6 max-w-md mx-auto">
                      WhatsApp pe aapka message khul gaya hai. Bas Send
                      dabaao — hum turant reply karenge.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-black border-b-2 border-black pb-1 hover:gap-3 transition-all"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  // ============ FORM ============
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2 tracking-tight">
                        Send us a message
                      </h2>
                      <p className="text-sm text-black/50">
                        Fill the form below — we'll get back within 2 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company name (optional)"
                            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Service + Budget */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                            Service *
                          </label>
                          <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-all duration-300 appearance-none"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                            Budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-all duration-300 appearance-none"
                          >
                            <option value="">Select budget</option>
                            <option>Under ₹25,000</option>
                            <option>₹25,000 - ₹75,000</option>
                            <option>₹75,000 - ₹2,00,000</option>
                            <option>₹2,00,000 - ₹5,00,000</option>
                            <option>₹5,00,000+</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[10px] font-bold text-black/60 uppercase tracking-widest mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-all duration-300 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-black/10 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span className="group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-black/40 text-center">
                        By submitting, WhatsApp will open with your message
                        pre-filled — just hit Send.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* ============ RIGHT — INFO ============ */}
            <div className="lg:col-span-5 space-y-5">
              {/* WhatsApp Card */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-black text-white rounded-3xl p-7 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                ></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      Fastest
                    </span>
                  </div>

                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                    WhatsApp
                  </p>
                  <p className="text-lg font-bold mb-1">+91 87870 54829</p>
                  <p className="text-xs text-white/50 mb-5">
                    Usually replies in 2 hours
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-semibold">
                    Chat now
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:hello@dellopstech.com"
                className="group block bg-white border border-black/10 rounded-3xl p-7 hover:border-black hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-5 group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-2">
                  Email
                </p>
                <p className="text-base font-bold mb-1">
                  hello@dellopstech.com
                </p>
                <p className="text-xs text-black/50 mb-5">
                  For detailed inquiries
                </p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-black">
                  Send email
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-white border border-black/10 rounded-3xl p-7">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="text-base font-bold mb-1">India</p>
                <p className="text-xs text-black/50">
                  Serving clients globally
                </p>
              </div>

              {/* Response time card */}
              <div className="bg-white border border-black/10 rounded-3xl p-7">
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-4">
                  Response Times
                </p>
                <div className="space-y-3">
                  {[
                    { label: "WhatsApp", time: "< 2 hours" },
                    { label: "Email", time: "< 12 hours" },
                    { label: "Form", time: "< 4 hours" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-black/60">{item.label}</span>
                      <span className="font-bold text-black">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}