 import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import AIChatbot from "@/app/components/AIChatbot";
import ScrollProgress from "@/app/components/ScrollProgress";
import BackToTop from "@/app/components/BackToTop";
import CustomCursor from "@/app/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "DellOps Tech — Web, App, SEO, CRM & ERP Solutions",
  description:
    "DellOps Tech provides Web Development, App Development, SEO, CRM & ERP services for ambitious businesses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <FloatingWhatsApp />
        <AIChatbot />
        <BackToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}