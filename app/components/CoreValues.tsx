"use client";

const values = [
  {
    title: "Craft First",
    desc: "We obsess over details — clean code, thoughtful design, and pixel-perfect execution.",
    icon: "✨",
  },
  {
    title: "Speed Matters",
    desc: "We move fast without cutting corners. Your business can't wait, and neither do we.",
    icon: "⚡",
  },
  {
    title: "Radical Transparency",
    desc: "Clear pricing, honest updates, and no hidden surprises. Ever.",
    icon: "🔍",
  },
  {
    title: "Long-Term Thinking",
    desc: "We build for scale, not just launch. Every decision considers what's next.",
    icon: "🎯",
  },
  {
    title: "Client Obsession",
    desc: "Your success is our metric. We win when you win — simple as that.",
    icon: "🤝",
  },
  {
    title: "Keep Learning",
    desc: "Tech moves fast. We stay ahead by constantly learning and experimenting.",
    icon: "📚",
  },
];

export default function CoreValues() {
  return (
    <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span className="text-[10px] font-bold text-white tracking-widest">
                  06
                </span>
              </span>
              <span className="w-px h-3 bg-white/20"></span>
              <span className="text-[11px] font-semibold text-white/70 tracking-[0.15em] uppercase">
                Core Values
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              What we stand for.
              <br />
              <span className="text-white/30">Every single day.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm lg:text-right">
            <p className="text-white/60 leading-relaxed">
              These aren't just words on a wall. They're the principles that
              guide every project we take on and every line of code we write.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <div
              key={i}
              className="group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-7 hover:bg-white hover:border-white transition-all duration-500 hover:-translate-y-2"
            >
              {/* Number */}
              <div className="absolute top-5 right-5 text-[10px] font-bold text-white/20 group-hover:text-black/30 tracking-widest transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all duration-500">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-black mb-2 tracking-tight transition-colors duration-500">
                {value.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-white/50 group-hover:text-black/60 leading-relaxed transition-colors duration-500">
                {value.desc}
              </p>

              {/* Corner accent */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white/[0.03] group-hover:bg-black/[0.03] rounded-full transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}