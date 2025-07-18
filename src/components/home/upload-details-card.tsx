"use client";

import type React from "react";
import { useState } from "react";
import api from "../../API/api";
import image1 from "../../assets/GENERATE.png";

export function UploadDetailsCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userDesignation, setUserDesignation] = useState<string>("");
  const [userCompany, setUserCompany] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    } else {
      setSelectedFile(null);
      setSelectedFileName("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("name", userName);
      formData.append("designation", userDesignation);
      formData.append("company", userCompany);
      if (selectedFile) {
        formData.append("photo", selectedFile);
      }
      const response = await api.post("/api/generate-badge", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Badge generated successfully!");
      // Optionally handle response.data (e.g., badge URL)
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to generate badge.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-0 rounded-xl border border-border-dark-grey shadow-lg flex flex-col items-center justify-start"
      style={{ width: "484px", height: "1217px", backgroundColor: "#066475" }}
    >
      <div
        className="border border-white rounded mx-auto p-4 mt-4"
        style={{ width: "449px", height: "760px" }}
      >
        <h2 className="text-foreground text-xl font-bold mb-6 text-center">
          PLEASE UPLOAD IMAGE AND DETAILS
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="text-foreground text-sm mb-2">
              Upload JPG & PNG Format Image (Max size: 3MB)
            </p>
            <div className="flex items-center space-x-2">
              <label className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 border border-gray-300 hover:bg-gray-300 rounded text-sm font-medium">
                Choose File
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <input
                id="file-name"
                type="text"
                readOnly
                placeholder="No file chosen"
                value={selectedFileName}
                className="flex-1 bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded text-sm"
              />
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Designation"
              value={userDesignation}
              onChange={(e) => setUserDesignation(e.target.value)}
              className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Company"
              value={userCompany}
              onChange={(e) => setUserCompany(e.target.value)}
              className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center"
            disabled={loading}
          >
            <img
              src={image1 || "/placeholder.svg"}
              alt="Generate Button"
              width={180}
              height={59}
              className="object-contain"
            />
          </button>
          {loading && (
            <p className="text-cyan-300 text-center mt-2">
              Generating badge...
            </p>
          )}
          {success && (
            <p className="text-green-400 text-center mt-2">{success}</p>
          )}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </form>
        <div className="mt-10 text-center">
          <h3 className="text-text-cyan text-lg font-bold mb-4">
            Share Your ETEX 2025 Badge
          </h3>
          <p className="text-foreground text-sm mb-4">
            {
              "Once your badge is ready, you are encouraged to post it on LinkedIn, Twitter, or Facebook using the suggested caption in this window:"
            }
          </p>
          <p className="text-text-cyan text-sm font-bold mb-4">
            Please tag the official pages when sharing:
          </p>
          <ul className="text-foreground text-sm list-disc list-inside space-y-1 text-left inline-block">
            <li>LinkedIn: @etex2025</li>
            <li>Twitter: @etex_ethiopia</li>
            <li>Facebook: @etex</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
