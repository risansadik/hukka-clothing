import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="bg-brand-bg relative selection:bg-brand-primary selection:text-black">
      <NavBar />
      <HeroSection />
      <ShopSection />
      <AboutSection />
      <LocationSection />
      <WhatsAppCTA />

      {/* Footer */}
      <footer className="py-8 bg-brand-dark text-center border-t border-brand-surface">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          &copy; {new Date().getFullYear()} HUKKA. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
