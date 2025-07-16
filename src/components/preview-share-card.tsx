import { Download, Linkedin, X, Facebook, Instagram } from "lucide-react";

export function PreviewShareCard() {
  const socialMediaText = `I'll be attending ETEX 2025 – East Africa’s Largest Tech Event.

Join me in Addis Ababa from May 16-18 at the AICC to explore advancements in AI, Cybersecurity, Fintech, and Digital Transformation across the region.

Visit the official website: www.etexethiopia.com

For more updates follow the below:
LinkedIn: @etex2025
Twitter: @etex_ethiopia
Facebook: @etex

#ETEX #ETEX2025 #DigitalEthiopia #TechForAfrica #Innovation #EthiopiaTech #DigitalTransformation`;

  return (
    <div className="grid gap-8">
      <div className="text-center">
        <h2 className="text-text-accent text-xl font-bold mb-4">
          PREVIEW IMAGE
        </h2>
        <div className="w-full h-96 bg-white rounded-xl border border-border-accent flex items-center justify-center text-muted-foreground">
          <img
            src="/placeholder.svg?height=384&width=600"
            alt="Preview Image"
            width={600}
            height={384}
            className="object-contain h-full w-full"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-text-accent text-xl font-bold mb-4">
          PLEASE COPY THE TEXT BELOW AND SHARE IT ON SOCIAL MEDIA
        </h2>
        <div className="bg-card-dark p-6 rounded-xl border border-border-accent shadow-lg relative">
          <pre className="text-foreground text-sm whitespace-pre-wrap text-left mb-4">
            {socialMediaText}
          </pre>
          <button
            className="absolute bottom-4 right-4 px-4 py-2 border text-sm rounded bg-background-dark text-foreground border-border-accent hover:bg-background-dark/80 transition"
            onClick={() => navigator.clipboard.writeText(socialMediaText)}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2
          className="text-white text-2xl font-extrabold mb-8 tracking-wide"
          style={{
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          DOWNLOAD & SHARE YOUR BADGE
        </h2>
        <div className="flex justify-center gap-8">
          {/* Download Button */}
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#00FFF0] bg-[#0B1230] text-white shadow-[0_0_16px_0_#00FFF0] hover:scale-110 transition-all duration-200"
            style={{ boxShadow: "0 0 0 2px #00FFF0, 0 0 12px 2px #00FFF0" }}
          >
            <Download className="w-7 h-7" />
          </button>
          {/* LinkedIn Button */}
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#00FFF0] bg-[#0B1230] text-white shadow-[0_0_16px_0_#00FFF0] hover:scale-110 transition-all duration-200"
            style={{ boxShadow: "0 0 0 2px #00FFF0, 0 0 12px 2px #00FFF0" }}
          >
            <Linkedin className="w-7 h-7" />
          </button>
          {/* X Button */}
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#00FFF0] bg-[#0B1230] text-white shadow-[0_0_16px_0_#00FFF0] hover:scale-110 transition-all duration-200"
            style={{ boxShadow: "0 0 0 2px #00FFF0, 0 0 12px 2px #00FFF0" }}
          >
            <X className="w-7 h-7" />
          </button>
          {/* Facebook Button */}
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#00FFF0] bg-[#0B1230] text-white shadow-[0_0_16px_0_#00FFF0] hover:scale-110 transition-all duration-200"
            style={{ boxShadow: "0 0 0 2px #00FFF0, 0 0 12px 2px #00FFF0" }}
          >
            <Facebook className="w-7 h-7" />
          </button>
          {/* Instagram Button */}
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#00FFF0] bg-[#0B1230] text-white shadow-[0_0_16px_0_#00FFF0] hover:scale-110 transition-all duration-200"
            style={{ boxShadow: "0 0 0 2px #00FFF0, 0 0 12px 2px #00FFF0" }}
          >
            <Instagram className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
