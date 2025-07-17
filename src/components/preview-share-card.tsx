import { Download, Linkedin, X, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export function PreviewShareCard() {
  const [copied, setCopied] = useState(false);
  const socialMediaText = `I’ll be attending ETEX 2025 – East Africa's Largest Tech Event.\n\nJoin me in Addis Ababa from May 16–18 at the AICC to explore advancements in AI, Cybersecurity, Fintech, and Digital Transformation across the region.\n\nVisit the official website: www.etexethiopia.com\n\nFor more updates follow the below:\nLinkedIn: @etex2025\nTwitter: @etex_ethiopia\nFacebook: @etex\n\n#ETEX #ETEX2025 #DigitalEthiopia #TechForAfrica #Innovation #EthiopiaTech #DigitalTransformation`;

  const handleCopy = () => {
    navigator.clipboard.writeText(socialMediaText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-8">
      <div className="text-center">
        <h2 className="text-cyan-400 text-xl font-bold mb-4">PREVIEW IMAGE</h2>
        <div className="w-full h-96 bg-white rounded-xl border border-cyan-400 flex items-center justify-center text-gray-400">
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
        <h2 className="text-cyan-400 text-xl font-bold mb-4">
          PLEASE COPY THE TEXT BELOW AND SHARE IT ON SOCIAL MEDIA
        </h2>
        <div className="relative bg-[#111216] rounded-2xl px-6 pt-8 pb-16 text-left min-h-[340px] mx-auto max-w-3xl text-white font-sans shadow-lg">
          <div className="bg-[#181A20] rounded-xl px-6 py-6">
            <div className="text-[20px] font-semibold mb-6">
              I’ll be attending{" "}
              <span className="font-bold">
                ETEX 2025 – East Africa's Largest Tech Event.
              </span>
            </div>
            <div className="text-[18px] mb-6">
              Join me in Addis Ababa from{" "}
              <span className="font-bold">May 16–18 at the AICC</span> to
              explore advancements in{" "}
              <span className="font-bold">
                AI, Cybersecurity, Fintech, and Digital Transformation
              </span>{" "}
              across the region.
            </div>
            <div className="text-[17px] mb-6">
              Visit the official website: www.etexethiopia.com
            </div>
            <div className="font-bold mb-3 text-[17px]">
              For more updates follow the below:
            </div>
            <div className="text-[17px] mb-6">
              LinkedIn: @etex2025
              <br />
              Twitter: @etex_ethiopia
              <br />
              Facebook: @etex
            </div>
            <div className="font-bold text-[18px] mt-6 text-white">
              #ETEX #ETEX2025 #DigitalEthiopia #TechForAfrica #Innovation
              #EthiopiaTech #DigitalTransformation
            </div>
          </div>
          {/* Copy status and button bottom right */}
          <div className="absolute right-6 bottom-4 flex flex-col items-end">
            {copied && (
              <div className="mb-1 text-green-400 font-semibold text-xs bg-[#181A20] px-2 py-1 rounded shadow">
                Copied!
              </div>
            )}
            <button
              className="px-6 py-2 bg-[#101B3A] text-white rounded-lg text-[16px] font-medium shadow-md hover:bg-[#00FFF0] hover:text-[#0b1030] transition-colors duration-200"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-2">
        <h2 className="text-white text-lg font-extrabold mb-4 tracking-wide font-sans">
          DOWNLOAD & SHARE YOUR BADGE
        </h2>
        <div className="flex justify-center gap-4">
          {/* Download Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white transition-transform duration-200 hover:scale-90">
            <Download className="w-5 h-5 text-white" />
          </button>
          {/* LinkedIn Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white transition-transform duration-200 hover:scale-90">
            <Linkedin className="w-5 h-5 text-white" />
          </button>
          {/* X Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white transition-transform duration-200 hover:scale-90">
            <X className="w-5 h-5 text-white" />
          </button>
          {/* Facebook Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white transition-transform duration-200 hover:scale-90">
            <Facebook className="w-5 h-5 text-white" />
          </button>
          {/* Instagram Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white transition-transform duration-200 hover:scale-90">
            <Instagram className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
