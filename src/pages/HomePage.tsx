import { SiteHeader } from "../components/home/site-header";
import { UploadDetailsCard } from "../components/home/upload-details-card";
import { PreviewShareCard } from "../components/home/preview-share-card";
import { ActionButtonsFooter } from "../components/home/action-buttons-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground bg-[#0B1236]">
      <SiteHeader />
      <main className="container mx-auto pt-[130px] py-6 px-2 sm:px-4 md:px-6 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
        <section className="mb-8 lg:mb-0 lg:col-span-5 flex justify-center">
          <UploadDetailsCard />
        </section>
        <section className="lg:col-span-7 flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <PreviewShareCard />
          </div>
        </section>
      </main>
      <section className="mb-8 px-2 sm:px-4">
        <ActionButtonsFooter />
      </section>
      {/* Footer and WhatsApp button can be added here if needed */}
    </div>
  );
}
