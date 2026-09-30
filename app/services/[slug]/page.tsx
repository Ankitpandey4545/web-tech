import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "@/app/data/servicesData";
import ServiceHero from "@/app/components/ServiceHero";
import ServiceFeatures from "@/app/components/ServiceFeatures";
import ServiceProcess from "@/app/components/ServiceProcess";
import ServiceTechStack from "@/app/components/ServiceTechStack";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import RelatedServices from "@/app/components/RelatedServices";
import CTA from "@/app/components/CTA";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — DellOps Tech`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-28 lg:pt-32">
        <div className="flex items-center gap-2 text-xs text-black/40 uppercase tracking-widest font-semibold">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-black">{service.title}</span>
        </div>
      </div>

      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceTechStack service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices currentSlug={service.slug} />
      <CTA />
    </main>
  );
}