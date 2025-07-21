"use client"
import SiteHeader from "../src/layout/nav" 
import UploadDetailsCard  from "./components/home/upload-details-card"
import { PreviewShareCard } from "./components/home/preview-share-card"
import { ActionButtonsFooter } from "./components/home/action-buttons-footer"
import { PhoneIcon as Whatsapp } from "lucide-react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen text-foreground bg-[#0B1236]">
        <SiteHeader />
        <main className="container mx-auto py-6 px-2 sm:px-4 md:px-6 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 pt-[120px]">
          {" "}
          {/* Added pt-[120px] */}
          <section className="mb-8 lg:mb-0 lg:col-span-5 flex justify-center">
            <UploadDetailsCard />
          </section>
          <section className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-3xl">
              <PreviewShareCard />
            </div>
          </section>
        </main>
        {/* Action Buttons Section - now separate from footer */}
        <section className="mb-8 px-2 sm:px-4">
          <ActionButtonsFooter />
        </section>
        {/* Footer with only copyright/terms */}
        <footer className="bg-[#3A3A3A] pt-0 pb-0 px-0 text-center text-white text-sm md:text-base font-medium w-full">
          <div className="w-full flex flex-col items-center bg-[#3A3A3A] pt-2 pb-4 border-t border-[#444] mt-0">
            <div className="flex justify-center items-center">
              <a href="#" className="text-white underline hover:text-[#00FFF0] transition-colors mx-2">
                Terms and Conditions
              </a>
              <span className="text-white mx-1">|</span>
              <a href="#" className="text-white underline hover:text-[#00FFF0] transition-colors mx-2">
                Cookie Policy
              </a>
              <span className="text-white mx-1">|</span>
              <a href="#" className="text-white underline hover:text-[#00FFF0] transition-colors mx-2">
                Privacy Policy
              </a>
            </div>
            <p className="text-white text-base font-medium pt-2">
              Copyright © 2025 QNA Group. All rights reserved. Head Office: 1705, GBT Tower, Barsha Heights (Tecom).
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
    </QueryClientProvider>
  )
}

export default App
