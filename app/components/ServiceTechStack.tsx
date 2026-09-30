import { ServiceData } from "@/app/data/servicesData";

export default function ServiceTechStack({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <section className="relative bg-white py-20 lg:py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Tools we use.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {service.techStack.map((tech, i) => (
            <span
              key={i}
              className="border border-black/10 rounded-full px-5 py-2.5 text-sm font-semibold text-black/70 hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}