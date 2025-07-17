"use client"
import { SiteHeader } from "./components/site-header";
import { UploadDetailsCard } from "./components/upload-details-card";
import { PreviewShareCard } from "./components/preview-share-card";
import { ActionButtonsFooter } from "./components/action-buttons-footer";
import { PhoneIcon as Whatsapp } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="container mx-auto pt-[150px] pb-12 px-0 lg:grid lg:grid-cols-2 lg:gap-12">
        {" "}
        {/* px-0 to remove default horizontal padding */}
        <section className="mb-12 lg:mb-0 pl-10">
          {" "}
          {/* Added pl-10 for 40px from left edge */}
          <UploadDetailsCard />
        </section>
        <section className="pr-10">
          {" "}
          {/* Added pr-10 to balance the right side */}
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
  )
}
