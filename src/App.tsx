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
      {/* Action Buttons Section - now separate from footer */}
      <section className="mb-8">
        <ActionButtonsFooter />
      </section>
      {/* Footer with only copyright/terms */}
      <footer className="bg-[#3A3A3A] pt-0 pb-0 px-0 text-center text-white text-base font-medium w-full">
        <div className="w-full flex flex-col items-center bg-[#3A3A3A] pt-2 pb-4 border-t border-[#444] mt-0">
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="text-white underline hover:text-[#00FFF0] transition-colors mx-2"
            >
              Terms and Conditions
            </a>
            <span className="text-white mx-1">|</span>
            <a
              href="#"
              className="text-white underline hover:text-[#00FFF0] transition-colors mx-2"
            >
              Cookie Policy
            </a>
            <span className="text-white mx-1">|</span>
            <a
              href="#"
              className="text-white underline hover:text-[#00FFF0] transition-colors mx-2"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-white text-base font-medium pt-2">
            Copyright © 2025 QNA Group. All rights reserved. Head Office: 1705,
            GBT Tower, Barsha Heights (Tecom).
          </p>
        </div>
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
