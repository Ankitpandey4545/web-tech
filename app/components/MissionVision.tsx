"use client";

export default function MissionVision() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission — Black */}
          <div className="relative bg-black text-white rounded-3xl p-8 lg:p-12 overflow-hidden group">
            {/* Grid bg */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                  Our Mission
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Make great tech
                <br />
                <span className="text-white/40">accessible to all.</span>
              </h3>

              <p className="text-white/60 leading-relaxed">
                We exist to help businesses of every size compete in the
                digital era — by delivering high-quality, affordable, and
                fast digital products that actually drive results.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">
                  What drives us daily
                </span>
              </div>
            </div>
          </div>

          {/* Vision — White with border */}
          <div className="relative bg-white border border-black/10 rounded-3xl p-8 lg:p-12 overflow-hidden group hover:border-black transition-colors duration-500">
            <div
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/[0.02] rounded-full blur-3xl"
            ></div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/60">
                  Our Vision
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-black">
                Become the most
                <br />
                <span className="text-black/30">trusted tech partner.</span>
              </h3>

              <p className="text-black/60 leading-relaxed">
                To be the go-to digital studio for founders and teams
                worldwide — known for our craft, our speed, and the lasting
                impact we create for every client we work with.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                  <span className="text-lg">🌍</span>
                </div>
                <span className="text-xs text-black/50 uppercase tracking-widest font-semibold">
                  Where we're headed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}