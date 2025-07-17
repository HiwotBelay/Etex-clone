"use client"

import type React from "react"

import { useState } from "react"

export function UploadDetailsCard() {
  const [selectedFileName, setSelectedFileName] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [userDesignation, setUserDesignation] = useState<string>("")
  const [userCompany, setUserCompany] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFileName(file.name)
    } else {
      setSelectedFileName("")
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This is where you would typically use React Query/Axios to send data
    console.log("Form submitted:", {
      selectedFileName,
      userName,
      userDesignation,
      userCompany,
    })
    // For now, just log the data. API integration will come next.
  }

  return (
    <div className="bg-background-card p-8 rounded-xl border border-border-dark-grey shadow-lg w-full">
      <h2 className="text-foreground text-xl font-bold mb-6 text-center">PLEASE UPLOAD IMAGE AND DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-foreground text-sm mb-2">Upload JPG & PNG Format Image (Max size: 3MB)</p>
          <div className="flex items-center space-x-2">
            <label className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 border border-gray-300 hover:bg-gray-300 rounded text-sm font-medium">
              Choose File
              <input type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleFileChange} />
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
          />
          <input
            type="text"
            placeholder="Enter Your Designation"
            value={userDesignation}
            onChange={(e) => setUserDesignation(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter Your Company"
            value={userCompany}
            onChange={(e) => setUserCompany(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-lg font-bold text-foreground relative overflow-hidden
                     bg-button-generate-bg border-2 border-text-cyan rounded
                     before:content-[''] before:absolute before:inset-0 before:bg-[url('/placeholder.svg?height=20&width=20')] before:bg-repeat before:opacity-20
                     hover:bg-button-generate-bg/80 transition-colors"
        >
          GENERATE
        </button>
      </form>
      <div className="mt-10 text-center">
        <h3 className="text-text-cyan text-lg font-bold mb-4">Share Your ETEX 2025 Badge</h3>
        <p className="text-foreground text-sm mb-4">
          Once your badge is ready, you are encouraged to post it on LinkedIn, Twitter, or Facebook using the suggested
          caption in this window:
        </p>
        <p className="text-text-cyan text-sm font-bold mb-4">Please tag the official pages when sharing:</p>
        <ul className="text-foreground text-sm list-disc list-inside space-y-1 text-left inline-block">
          <li>LinkedIn: @etex2025</li>
          <li>Twitter: @etex_ethiopia</li>
          <li>Facebook: @etex</li>
        </ul>
      </div>
    </div>
  )
}
