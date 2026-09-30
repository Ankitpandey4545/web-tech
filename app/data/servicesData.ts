export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  startingPrice: string;
  duration: string;
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
  deliverables: string[];
}

export const servicesData: ServiceData[] = [
  // ==================== WEB DEVELOPMENT ====================
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Blazing-fast websites that convert.",
    description:
      "Custom, high-performance websites & web apps built with modern frameworks like Next.js, React, and Node.js.",
    longDescription:
      "We build websites that don't just look beautiful — they perform. From marketing sites to complex web applications, we use the latest tech stack to deliver fast, secure, and scalable solutions that drive real business results.",
    icon: "🌐",
    category: "Development",
    startingPrice: "₹25,000",
    duration: "2-4 Weeks",
    features: [
      { title: "Custom Design", desc: "Pixel-perfect, unique to your brand" },
      { title: "Lightning Fast", desc: "90+ PageSpeed score guaranteed" },
      { title: "Mobile Responsive", desc: "Perfect on every device" },
      { title: "SEO Optimized", desc: "Rank higher from day one" },
      { title: "CMS Integration", desc: "Manage content easily" },
      { title: "Secure & Scalable", desc: "Enterprise-grade security" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Understand your goals, audience & competitors" },
      { step: "02", title: "Design", desc: "Wireframes, mockups & design system" },
      { step: "03", title: "Development", desc: "Clean code, modern frameworks" },
      { step: "04", title: "Launch", desc: "Deploy, test, optimize & support" },
    ],
    techStack: [
      "Next.js", "React", "TypeScript", "Tailwind CSS",
      "Node.js", "MongoDB", "PostgreSQL", "Vercel",
      "AWS", "Stripe", "Sanity", "Figma",
    ],
    faqs: [
      { q: "How long does a website take?", a: "Typically 2-4 weeks for standard sites, 6-8 weeks for complex web apps." },
      { q: "Do you provide hosting?", a: "Yes, we set up hosting on Vercel, AWS, or your preferred provider — with SSL and CDN." },
      { q: "Will I be able to edit content?", a: "Absolutely. We integrate a CMS (Sanity, Contentful, or WordPress) so you can update content anytime." },
      { q: "Do you provide post-launch support?", a: "Yes — 30 days free support, plus optional monthly AMC plans." },
    ],
    deliverables: [
      "Custom Website / Web App",
      "Design Files (Figma)",
      "Source Code (GitHub)",
      "Admin Panel / CMS",
      "Deployment & Hosting Setup",
      "30 Days Free Support",
    ],
  },

  // ==================== APP DEVELOPMENT ====================
  {
    slug: "app-development",
    title: "App Development",
    tagline: "iOS & Android apps users love.",
    description:
      "Native & cross-platform mobile apps with seamless UX, fast performance, and beautiful interfaces.",
    longDescription:
      "From MVP to enterprise apps, we build mobile experiences that users actually want to open again. Native performance, smooth animations, and offline-first architecture — all delivered fast.",
    icon: "📱",
    category: "Mobile",
    startingPrice: "₹75,000",
    duration: "6-12 Weeks",
    features: [
      { title: "iOS + Android", desc: "One codebase, both platforms" },
      { title: "Native Performance", desc: "60fps smooth, zero lag" },
      { title: "Offline Support", desc: "Works without internet" },
      { title: "Push Notifications", desc: "Re-engage your users" },
      { title: "Payment Integration", desc: "Stripe, Razorpay, UPI" },
      { title: "App Store Ready", desc: "We handle submission" },
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Feature planning & user flows" },
      { step: "02", title: "UI Design", desc: "Native iOS/Android patterns" },
      { step: "03", title: "Development", desc: "React Native / Flutter build" },
      { step: "04", title: "Store Launch", desc: "Testing, submission & ASO" },
    ],
    techStack: [
      "React Native", "Flutter", "Swift", "Kotlin",
      "Firebase", "Node.js", "GraphQL", "Stripe",
      "Expo", "Redux", "Supabase", "AWS Amplify",
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "We recommend based on your needs — React Native for speed, native for max performance." },
      { q: "Will you publish on app stores?", a: "Yes, we handle complete submission to both App Store & Google Play." },
      { q: "What's the cost?", a: "Simple apps start at ₹75,000; complex ones from ₹2L+. We'll quote after discovery." },
      { q: "Do you provide maintenance?", a: "Yes — 30 days free, plus monthly maintenance plans." },
    ],
    deliverables: [
      "iOS App (App Store Ready)",
      "Android App (Play Store Ready)",
      "Backend & API",
      "Admin Dashboard",
      "Design Files",
      "30 Days Free Support",
    ],
  },

  // ==================== SEO ====================
  {
    slug: "seo",
    title: "SEO Optimization",
    tagline: "Rank #1. Drive traffic. Grow.",
    description:
      "Data-driven SEO strategies that put your business on top of Google — and keep it there.",
    longDescription:
      "SEO is not magic — it's methodical. We analyze your competitors, fix technical issues, build authority, and create content that both Google AND your customers love.",
    icon: "📈",
    category: "Growth",
    startingPrice: "₹15,000/month",
    duration: "Ongoing",
    features: [
      { title: "Keyword Research", desc: "Find high-intent keywords" },
      { title: "On-Page SEO", desc: "Optimize every element" },
      { title: "Technical SEO", desc: "Fix crawl & speed issues" },
      { title: "Backlink Building", desc: "High-authority links" },
      { title: "Content Strategy", desc: "Blogs that rank" },
      { title: "Monthly Reports", desc: "Track every metric" },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Deep analysis of your site" },
      { step: "02", title: "Strategy", desc: "Keyword & content roadmap" },
      { step: "03", title: "Execution", desc: "On-page, off-page & technical" },
      { step: "04", title: "Report", desc: "Monthly tracking & iteration" },
    ],
    techStack: [
      "Ahrefs", "SEMrush", "Google Search Console", "GA4",
      "Screaming Frog", "Surfer SEO", "Moz", "Ubersuggest",
    ],
    faqs: [
      { q: "How long until I see results?", a: "Typically 3-6 months for competitive keywords. Local SEO can show results in weeks." },
      { q: "Do you guarantee #1 ranking?", a: "No one can ethically guarantee #1. We guarantee transparent reporting and proven methodologies." },
      { q: "What's included monthly?", a: "On-page optimization, content, backlinks, technical fixes, and reporting." },
      { q: "Can I cancel anytime?", a: "Yes, we work month-to-month after the initial 3-month commitment." },
    ],
    deliverables: [
      "SEO Audit Report",
      "Keyword Strategy Doc",
      "On-Page Optimization",
      "Monthly Content",
      "Backlink Building",
      "Monthly Reports",
    ],
  },

  // ==================== CRM ====================
  {
    slug: "crm",
    title: "CRM Development",
    tagline: "Manage customers. Close more deals.",
    description:
      "Custom CRM systems built around YOUR workflow — sales pipelines, support tickets, and customer insights.",
    longDescription:
      "Off-the-shelf CRMs force you to change your process. We build CRMs that adapt to how YOU work — so your team actually uses it and your business grows.",
    icon: "🤝",
    category: "Enterprise",
    startingPrice: "₹1,20,000",
    duration: "8-16 Weeks",
    features: [
      { title: "Sales Pipeline", desc: "Track every deal stage" },
      { title: "Contact Management", desc: "360° customer view" },
      { title: "Email Integration", desc: "Send & track from CRM" },
      { title: "Task Automation", desc: "Auto-follow-ups" },
      { title: "Reports & Analytics", desc: "Real-time dashboards" },
      { title: "Role-Based Access", desc: "Team permissions" },
    ],
    process: [
      { step: "01", title: "Analysis", desc: "Map your sales workflow" },
      { step: "02", title: "Design", desc: "UI/UX + data model" },
      { step: "03", title: "Build", desc: "Custom development" },
      { step: "04", title: "Train", desc: "Team onboarding & support" },
    ],
    techStack: [
      "Next.js", "Node.js", "PostgreSQL", "Prisma",
      "Redis", "AWS", "Docker", "Stripe", "SendGrid",
    ],
    faqs: [
      { q: "Why custom CRM vs Salesforce?", a: "Custom CRMs cost less long-term, fit your exact workflow, and you own the data." },
      { q: "Can you migrate from existing CRM?", a: "Yes, we migrate data from Salesforce, HubSpot, Zoho, or any CSV-based system." },
      { q: "How long does it take?", a: "8-16 weeks depending on complexity. MVP in as little as 6 weeks." },
      { q: "Do you provide training?", a: "Yes — hands-on team training and documentation included." },
    ],
    deliverables: [
      "Custom CRM Platform",
      "Sales Pipeline Module",
      "Customer Database",
      "Analytics Dashboard",
      "Team Training",
      "Documentation",
    ],
  },

  // ==================== ERP ====================
  {
    slug: "erp",
    title: "ERP Solutions",
    tagline: "One system. Entire business.",
    description:
      "Tailored enterprise systems that unify inventory, HR, finance, and operations into one powerful platform.",
    longDescription:
      "Stop juggling 10 different tools. We build unified ERP systems that let you manage your entire operation from a single dashboard — real-time, secure, and built for scale.",
    icon: "⚙️",
    category: "Enterprise",
    startingPrice: "₹2,50,000",
    duration: "12-24 Weeks",
    features: [
      { title: "Inventory Mgmt", desc: "Track stock in real-time" },
      { title: "HR & Payroll", desc: "Employee lifecycle" },
      { title: "Finance Module", desc: "Accounts, invoicing, GST" },
      { title: "Multi-Location", desc: "Manage branches" },
      { title: "Role-Based Access", desc: "Granular permissions" },
      { title: "Custom Reports", desc: "Any metric you need" },
    ],
    process: [
      { step: "01", title: "Blueprint", desc: "Full business analysis" },
      { step: "02", title: "Architecture", desc: "Data model & modules" },
      { step: "03", title: "Phased Build", desc: "Module-by-module" },
      { step: "04", title: "Go Live", desc: "Data migration & training" },
    ],
    techStack: [
      "Next.js", "Node.js", "PostgreSQL", "Redis",
      "Docker", "AWS", "Kubernetes", "GraphQL", "Stripe",
    ],
    faqs: [
      { q: "How is this different from SAP?", a: "Custom ERP fits your exact process, costs less, and you own it — no licensing fees." },
      { q: "Can you migrate existing data?", a: "Yes — we migrate from Tally, SAP, Zoho, or Excel-based systems." },
      { q: "What about training?", a: "Extensive team training, video tutorials, and 60 days post-launch support." },
      { q: "Is it cloud or on-premise?", a: "Both — we deploy on your cloud or on-premise based on your needs." },
    ],
    deliverables: [
      "Custom ERP Platform",
      "Multiple Modules (HR, Finance, Inventory)",
      "Mobile App (Admin)",
      "Reports & Analytics",
      "Data Migration",
      "Team Training",
    ],
  },

  // ==================== UI/UX ====================
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    tagline: "Interfaces that convert visitors.",
    description:
      "User-focused design that combines beauty with function — turning visitors into customers.",
    longDescription:
      "Design is not how it looks. It's how it works. We craft experiences based on user research, psychology, and data — so your product doesn't just look great, it converts.",
    icon: "🎨",
    category: "Design",
    startingPrice: "₹40,000",
    duration: "3-6 Weeks",
    features: [
      { title: "User Research", desc: "Understand your users" },
      { title: "Wireframing", desc: "Structure before style" },
      { title: "High-Fidelity UI", desc: "Pixel-perfect mockups" },
      { title: "Interactive Prototype", desc: "Test before building" },
      { title: "Design System", desc: "Reusable components" },
      { title: "Handoff to Dev", desc: "Developer-friendly files" },
    ],
    process: [
      { step: "01", title: "Research", desc: "User interviews & competitor analysis" },
      { step: "02", title: "Wireframes", desc: "Structure & user flows" },
      { step: "03", title: "UI Design", desc: "Visual design & system" },
      { step: "04", title: "Prototype", desc: "Interactive & tested" },
    ],
    techStack: [
      "Figma", "Adobe XD", "Framer", "Maze",
      "Hotjar", "Miro", "Notion", "Loom",
    ],
    faqs: [
      { q: "Do you also build the product?", a: "Yes — many clients continue with our development team after design." },
      { q: "How many revisions?", a: "Unlimited within scope. We iterate until it's right." },
      { q: "Do you provide design system?", a: "Yes — full reusable design system with components & tokens." },
      { q: "What tools do you use?", a: "Primarily Figma — the industry standard for modern design." },
    ],
    deliverables: [
      "Research Report",
      "Wireframes",
      "High-Fidelity Mockups",
      "Interactive Prototype",
      "Design System",
      "Dev Handoff Files",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return servicesData.map((s) => s.slug);
}