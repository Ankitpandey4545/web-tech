 import Navbar from "@/app/components/Navbar";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import ScrollProgress from "@/app/components/ScrollProgress";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Industries from "@/app/components/Industries";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Process from "@/app/components/Process";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
 

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <ScrollProgress />
      <Navbar />
      <FloatingWhatsApp />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <CTA />
     
    </main>
  );
}