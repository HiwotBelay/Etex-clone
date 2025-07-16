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
        <h2 className="text-text-accent text-xl font-bold mb-4">PREVIEW IMAGE</h2>
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
          <pre className="text-foreground text-sm whitespace-pre-wrap text-left mb-4">{socialMediaText}</pre>
          <button
            className="absolute bottom-4 right-4 px-4 py-2 border text-sm rounded bg-background-dark text-foreground border-border-accent hover:bg-background-dark/80 transition"
            onClick={() => navigator.clipboard.writeText(socialMediaText)}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2 className="text-text-accent text-xl font-bold mb-6">DOWNLOAD & SHARE YOUR BADGE</h2>
        <div className="flex justify-center space-x-6">
          <button
            className="rounded-full w-14 h-14 flex items-center justify-center bg-background-dark text-text-accent border border-border-accent hover:bg-background-dark/80 transition"
          >
            <Download className="w-6 h-6" />
          </button>
          <button
            className="rounded-full w-14 h-14 flex items-center justify-center bg-background-dark text-text-accent border border-border-accent hover:bg-background-dark/80 transition"
          >
            <Linkedin className="w-6 h-6" />
          </button>
          <button
            className="rounded-full w-14 h-14 flex items-center justify-center bg-background-dark text-text-accent border border-border-accent hover:bg-background-dark/80 transition"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="rounded-full w-14 h-14 flex items-center justify-center bg-background-dark text-text-accent border border-border-accent hover:bg-background-dark/80 transition"
          >
            <Facebook className="w-6 h-6" />
          </button>
          <button
            className="rounded-full w-14 h-14 flex items-center justify-center bg-background-dark text-text-accent border border-border-accent hover:bg-background-dark/80 transition"
          >
            <Instagram className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
