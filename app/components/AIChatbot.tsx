"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
  cta?: { label: string; href: string };
}

// ============================================
// SMART RESPONSE ENGINE
// ============================================
const knowledgeBase: { keywords: string[]; reply: string; cta?: { label: string; href: string } }[] = [
  {
    keywords: ["service", "services", "what do you do", "offer", "provide"],
    reply:
      "We offer 6 core services: 🌐 Web Development, 📱 App Development, 📈 SEO, 🤝 CRM, ⚙️ ERP, and 🎨 UI/UX Design.\n\nWhich one would you like to know more about?",
    cta: { label: "View All Services", href: "/services" },
  },
  {
    keywords: ["web", "website", "web development"],
    reply:
      "Our Web Development service starts at ₹25,000 and takes 2-4 weeks.\n\nWe build with Next.js, React, and Tailwind CSS — fast, scalable, and SEO-friendly.",
    cta: { label: "Web Development", href: "/services/web-development" },
  },
  {
    keywords: ["app", "mobile", "ios", "android", "application"],
    reply:
      "Our App Development starts at ₹75,000 and takes 6-12 weeks.\n\nWe build both iOS & Android apps using React Native — one codebase, both platforms.",
    cta: { label: "App Development", href: "/services/app-development" },
  },
  {
    keywords: ["seo", "rank", "google", "traffic"],
    reply:
      "SEO Optimization starts at ₹15,000/month. We handle On-Page, Off-Page, and Technical SEO with monthly reports.\n\nMost clients see results in 3-6 months.",
    cta: { label: "SEO Services", href: "/services/seo" },
  },
  {
    keywords: ["crm", "customer relationship"],
    reply:
      "Custom CRM Development starts at ₹1,20,000 and takes 8-16 weeks.\n\nWe build CRMs tailored to your exact workflow — sales pipeline, contacts, reports, all in one.",
    cta: { label: "CRM Development", href: "/services/crm" },
  },
  {
    keywords: ["erp", "enterprise", "inventory", "hr"],
    reply:
      "Our ERP Solutions start at ₹2,50,000 and take 12-24 weeks.\n\nWe build custom ERPs that unify inventory, HR, finance, and operations into one platform.",
    cta: { label: "ERP Solutions", href: "/services/erp" },
  },
  {
    keywords: ["ui", "ux", "design", "figma", "interface"],
    reply:
      "Our UI/UX Design service starts at ₹40,000 and takes 3-6 weeks.\n\nWe deliver research, wireframes, hi-fi mockups, prototypes, and a full design system.",
    cta: { label: "UI/UX Design", href: "/services/ui-ux" },
  },
  {
    keywords: ["price", "pricing", "cost", "budget", "charge", "rate"],
    reply:
      "Our pricing depends on project scope:\n\n🌐 Website: ₹25K+\n📱 App: ₹75K+\n📈 SEO: ₹15K/month\n🤝 CRM: ₹1.2L+\n⚙️ ERP: ₹2.5L+\n🎨 UI/UX: ₹40K+\n\nFor a custom quote, share your requirements 👇",
    cta: { label: "Get Custom Quote", href: "/contact" },
  },
  {
    keywords: ["time", "timeline", "how long", "duration", "delivery", "when"],
    reply:
      "Typical timelines:\n\n🌐 Website: 2-4 weeks\n📱 App: 6-12 weeks\n📈 SEO: Ongoing (3-6 mo for results)\n🤝 CRM: 8-16 weeks\n⚙️ ERP: 12-24 weeks\n🎨 UI/UX: 3-6 weeks\n\nRush delivery possible on request ⚡",
    cta: { label: "Discuss Timeline", href: "/contact" },
  },
  {
    keywords: ["contact", "talk", "call", "reach", "chat", "whatsapp"],
    reply:
      "You can reach us instantly:\n\n📱 WhatsApp: +91 87870 54829\n📧 Email: hello@dellopstech.com\n\nOr just tap the button below — we usually reply within 2 hours! ⚡",
    cta: { label: "Chat on WhatsApp", href: WHATSAPP_LINK },
  },
  {
    keywords: ["expert", "human", "agent", "person", "team", "founder"],
    reply:
      "Sure! Let me connect you directly with our team. They'll help you personally. 👇",
    cta: { label: "Talk to Expert", href: WHATSAPP_LINK },
  },
  {
    keywords: ["portfolio", "work", "projects", "case study"],
    reply:
      "We've delivered 150+ projects across industries — websites, apps, CRMs, ERPs and more.\n\nCheck out some of our best work here 👇",
    cta: { label: "View Portfolio", href: "/portfolio" },
  },
  {
    keywords: ["about", "company", "who are you", "dellops"],
    reply:
      "DellOps Tech is a digital studio founded in 2020.\n\n🚀 150+ projects delivered\n👥 20+ team members\n🌍 10+ countries served\n⭐ 4.9/5 average rating\n\nWe build digital products that matter.",
    cta: { label: "About Us", href: "/about" },
  },
  {
    keywords: ["blog", "resource", "article", "guide", "tutorial"],
    reply:
      "We publish insights on tech, design, and growth — including guides, case studies, and tutorials.\n\nCheck them out here 👇",
    cta: { label: "Read Resources", href: "/resources" },
  },
  {
    keywords: ["process", "how do you work", "steps"],
    reply:
      "Our 4-step process:\n\n1️⃣ Discovery (1-2 weeks)\n2️⃣ Design (2-3 weeks)\n3️⃣ Development (4-8 weeks)\n4️⃣ Deploy & Support (1 week)\n\nFree consultation to start! 🚀",
    cta: { label: "Start Project", href: "/contact" },
  },
  {
    keywords: ["hi", "hello", "hey", "namaste", "hii"],
    reply:
      "Hey there! 👋 Welcome to DellOps Tech.\n\nI'm your AI assistant — ask me anything about our services, pricing, or timelines!",
  },
  {
    keywords: ["thanks", "thank you", "thankyou", "shukriya"],
    reply:
      "You're welcome! 😊 Anything else I can help with?",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    reply:
      "Goodbye! 👋 Feel free to reach out anytime — we're always here to help.",
  },
];

function getBotReply(input: string): { reply: string; cta?: { label: string; href: string } } {
  const lower = input.toLowerCase().trim();

  // Find best match — highest keyword score
  let bestMatch: (typeof knowledgeBase)[0] | null = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        score += keyword.length; // longer keyword = stronger match
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore > 0) {
    return { reply: bestMatch.reply, cta: bestMatch.cta };
  }

  // Fallback
  return {
    reply:
      "Hmm, I'm not sure about that one. 🤔\n\nBut our team can definitely help! Tap below to chat on WhatsApp or try asking about: services, pricing, timeline, portfolio, or contact.",
    cta: { label: "Talk to Expert", href: WHATSAPP_LINK },
  };
}

// ============================================
// QUICK REPLIES
// ============================================
const quickReplies = [
  "💰 Pricing",
  "🌐 Services",
  "⏱ Timeline",
  "📂 Portfolio",
  "📞 Contact",
];

// ============================================
// COMPONENT
// ============================================
export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm DellOps AI.\n\nHow can I help you today?",
      sender: "bot",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Show tooltip after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hide = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  // Focus input when open
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 400);
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const userMessage = (text ?? input).trim();
    if (!userMessage) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: userMessage,
      sender: "user",
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Bot reply after delay
    setTimeout(() => {
      const { reply, cta } = getBotReply(userMessage);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: "bot",
        time: getTime(),
        cta,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  return (
    <>
      {/* ============ CHAT WINDOW ============ */}
      <div
        className={`fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[calc(100vh-140px)] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[600px]">
          {/* ============ HEADER ============ */}
          <div className="relative bg-black text-white p-5 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg">
                    D
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-black animate-pulse"></span>
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">
                    DellOps AI
                  </p>
                  <p className="text-[10px] text-white/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Online • Replies instantly
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ============ MESSAGES ============ */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#FAFAFA] space-y-3 min-h-[300px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.sender === "user"
                      ? "bg-black text-white rounded-br-sm"
                      : "bg-white text-black border border-black/5 rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {msg.text}
                  </p>

                  {/* CTA */}
                  {msg.cta && (
                    <a
                      href={msg.cta.href}
                      target={msg.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={msg.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group mt-3 inline-flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-black/85 transition-all"
                    >
                      {msg.cta.label}
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </a>
                  )}

                  <p
                    className={`text-[9px] mt-2 ${
                      msg.sender === "user"
                        ? "text-white/50"
                        : "text-black/40"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-black/5 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-black/40 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 rounded-full bg-black/40 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-black/40 animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ============ QUICK REPLIES ============ */}
          {messages.length <= 2 && !isTyping && (
            <div className="px-4 py-3 bg-white border-t border-black/5">
              <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-2">
                Quick questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickReplies.map((qr, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(qr)}
                    className="text-xs font-medium text-black/70 bg-black/5 border border-black/10 px-3 py-1.5 rounded-full hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============ INPUT ============ */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-black/5 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-black/[0.03] border border-black/10 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex-shrink-0 w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center hover:bg-black/85 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ============ TOOLTIP ============ */}
      <div
        className={`fixed bottom-24 right-24 sm:bottom-28 sm:right-28 z-40 transition-all duration-500 ${
          showTooltip && !isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="relative bg-white text-black text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl border border-black/10 whitespace-nowrap">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
            Ask me anything ✨
          </span>
          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-black/10 rotate-45"></span>
        </div>
      </div>

      {/* ============ FLOATING BUTTON ============ */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        aria-label="Open AI Chat"
        className={`group fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${
          isOpen
            ? "bg-black text-white rotate-90"
            : "bg-white text-black border border-black/10"
        }`}
        style={{ bottom: "6.5rem" }}
      >
        {/* Pulse rings (only when closed) */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-white opacity-60 animate-ping-slow"></span>
            <span className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping-slower"></span>
          </>
        )}

        <span className="relative z-10">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}

// ============================================
// HELPERS
// ============================================
function getTime(): string {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}