import { SiteHeader } from "./components/site-header";
import { UploadDetailsCard } from "./components/upload-details-card";
import { PreviewShareCard } from "./components/preview-share-card";
import { ActionButtonsFooter } from "./components/action-buttons-footer";
import { PhoneIcon as Whatsapp } from "lucide-react";
// If you use react-router-dom, uncomment the next line and replace <a> with <Link to="...">
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-foreground pt-32">
      {/* Added pt-20 for fixed header */}
      <SiteHeader />
      <main className="container mx-auto py-12 px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-12">
        <section className="mb-12 lg:mb-0">
          <UploadDetailsCard />
        </section>

        <section>
          <PreviewShareCard />
        </section>
      </main>
      <footer className="bg-background-dark py-8 px-4 text-center text-foreground text-sm">
        <ActionButtonsFooter />
        <p className="mt-8">
          Copyright © 2025 QNA Group. All rights reserved. Head Office: 1705, GBT Tower, Barsha Heights (Tecom).
        </p>
        <p className="mt-2 text-muted-foreground">
          Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a
          reCAPTCHA challenge.
        </p>
      </footer>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <Whatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}
