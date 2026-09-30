import { ServiceData } from "@/app/data/servicesData";

export default function ServiceProcess({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-[11px] font-semibold text-white/70 tracking-[0.15em] uppercase">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            How we bring it
            <br />
            <span className="text-white/30">to life.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (
            <div
              key={i}
              className="group relative border border-white/10 bg-white/[0.02] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-[80px] font-bold text-white/[0.06] group-hover:text-white/[0.1] leading-none tracking-tighter absolute top-3 right-4 select-none transition-colors">
                {step.step}
              </div>

              <div className="relative pt-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}