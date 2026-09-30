 "use client";

import Image from "next/image";

const team = [
  {
    name: "Aman Tripathi",
    role: "Founder",
    image: "/content.png",
    experience: "4+ Years",
    expertise: "Digital Marketing",
    bio: "Leading strategy, growth, and client partnerships at DellOps Tech.",
    linkedin: "#",
    twitter: "#",
    email: "aman@dellopstech.com",
  },
  {
    name: "Shruti Tiwari",
    role: "Co-Founder",
    image: "/shruti.png",
    experience: "3+ Years",
    expertise: "Ads Specialist & Social Media Marketing",
    bio: "Driving paid ads, social media growth, and brand visibility for our clients.",
    linkedin: "#",
    twitter: "#",
    email: "shruti@dellopstech.com",
  },
  {
    name: "Ankit Pandey",
    role: "Lead Developer",
    image: "/ankit.png",
    experience: "5+ Years",
    expertise: "Full-Stack Development",
    bio: "Architecting fast, scalable, and secure digital products end-to-end.",
    linkedin: "#",
    twitter: "#",
    email: "ankit@dellopstech.com",
  },
];

export default function Team() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Dotted decoration */}
      <div
        className="absolute top-20 right-10 w-40 h-40 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ============ HEADER ============ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-[10px] font-bold text-black tracking-widest">
                  03
                </span>
              </span>
              <span className="w-px h-3 bg-black/15"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                Our Team
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight">
              Meet the minds
              <br />
              <span className="text-black/30">behind DellOps.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm lg:text-right">
            <p className="text-black/60 leading-relaxed">
              A small, senior team of makers, thinkers, and doers — obsessed
              with building things that matter.
            </p>
          </div>
        </div>

        {/* ============ TEAM GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white border border-black/10 rounded-3xl overflow-hidden hover:border-black hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
            >
              {/* ============ IMAGE ============ */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Role badge — top right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg">
                  <span className="text-[10px] font-bold text-black tracking-widest uppercase">
                    {member.role}
                  </span>
                </div>

                {/* Experience badge — top left */}
                <div className="absolute top-4 left-4 bg-black text-white rounded-full px-3 py-1.5">
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {member.experience}
                  </span>
                </div>

                {/* Name + role at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* ============ CONTENT ============ */}
              <div className="p-6">
                {/* Expertise */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  <span className="text-[10px] font-bold text-black/60 uppercase tracking-[0.15em]">
                    {member.expertise}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-sm text-black/60 leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="pt-5 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {[
                      {
                        label: "in",
                        href: member.linkedin,
                      },
                      {
                        label: "tw",
                        href: member.twitter,
                      },
                      {
                        label: "✉",
                        href: `mailto:${member.email}`,
                      },
                    ].map((s, j) => (
                      <a
                        key={j}
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          s.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="w-8 h-8 rounded-lg border border-black/10 flex items-center justify-center text-[10px] font-bold text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <span className="text-xs text-black group-hover:text-white transition-colors">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============ BOTTOM CTA ============ */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-black/50 text-sm">Want to join our team?</p>
          <a
            href="mailto:careers@dellopstech.com"
            className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/10"
          >
            View Open Roles
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}