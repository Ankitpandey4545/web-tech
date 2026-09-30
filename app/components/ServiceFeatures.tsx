import { ServiceData } from "@/app/data/servicesData";

export default function ServiceFeatures({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
              Features
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] tracking-tight">
            What makes our
            <br />
            <span className="text-black/30">
              {service.title.toLowerCase()} different.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="group border border-black/10 rounded-2xl p-6 hover:border-black hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-4 font-bold text-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-black/55 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}