import NavBar from "@/components/NavBar";
import ShopClient from "@/components/ShopClient";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Shop Full Collection | HUKKA",
  description: "Browse the entire HUKKA collection of shirts, t-shirts, and pants.",
};

export default function Shop() {
  return (
    <main className="bg-brand-bg relative selection:bg-brand-primary selection:text-white">
      <NavBar />
      <ShopClient />
      <WhatsAppCTA />

      {/* Footer */}
      <footer className="py-8 bg-brand-surface text-center border-t border-brand-surface-light mt-auto">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          &copy; {new Date().getFullYear()} HUKKA. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
