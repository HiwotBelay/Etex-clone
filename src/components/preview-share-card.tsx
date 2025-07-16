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
        <div
          className="relative"
          style={{
            background: "#181A20",
            borderRadius: 24,
            padding: "32px 32px 56px 32px",
            fontFamily: "Inter, Montserrat, Arial, sans-serif",
            color: "#fff",
            textAlign: "left",
            minHeight: 340,
            margin: "0 auto",
            maxWidth: 700,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 24,
              color: "#fff",
              fontFamily: "inherit",
            }}
          >
            I’ll be attending{" "}
            <span style={{ fontWeight: 700 }}>
              ETEX 2025 – East Africa's Largest Tech Event.
            </span>
          </div>
          <div
            style={{
              fontSize: 18,
              marginBottom: 24,
              color: "#fff",
              fontFamily: "inherit",
            }}
          >
            Join me in Addis Ababa from{" "}
            <span style={{ fontWeight: 700 }}>May 16–18 at the AICC</span> to
            explore advancements in{" "}
            <span style={{ fontWeight: 700 }}>
              AI, Cybersecurity, Fintech, and Digital Transformation
            </span>{" "}
            across the region.
          </div>
          <div
            style={{
              fontSize: 17,
              marginBottom: 24,
              color: "#fff",
              fontFamily: "inherit",
            }}
          >
            Visit the official website: www.etexethiopia.com
          </div>
          <div
            style={{
              fontWeight: 700,
              marginBottom: 12,
              color: "#fff",
              fontSize: 17,
              fontFamily: "inherit",
            }}
          >
            For more updates follow the below:
          </div>
          <div
            style={{
              fontSize: 17,
              marginBottom: 24,
              color: "#fff",
              fontFamily: "inherit",
            }}
          >
            LinkedIn: @etex2025
            <br />
            Twitter: @etex_ethiopia
            <br />
            Facebook: @etex
          </div>
          <div
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: 18,
              fontFamily: "inherit",
              marginTop: 24,
            }}
          >
            #ETEX #ETEX2025 #DigitalEthiopia #TechForAfrica #Innovation
            #EthiopiaTech #DigitalTransformation
          </div>
          <button
            style={{
              position: "absolute",
              right: 24,
              bottom: 16,
              padding: "8px 24px",
              background: "#101B3A",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              boxShadow: "0 2px 8px 0 #0003",
              transition: "background 0.2s, color 0.2s",
            }}
            onClick={() =>
              navigator.clipboard.writeText(
                `I’ll be attending ETEX 2025 – East Africa's Largest Tech Event.\n\nJoin me in Addis Ababa from May 16–18 at the AICC to explore advancements in AI, Cybersecurity, Fintech, and Digital Transformation across the region.\n\nVisit the official website: www.etexethiopia.com\n\nFor more updates follow the below:\nLinkedIn: @etex2025\nTwitter: @etex_ethiopia\nFacebook: @etex\n\n#ETEX #ETEX2025 #DigitalEthiopia #TechForAfrica #Innovation #EthiopiaTech #DigitalTransformation`
              )
            }
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
