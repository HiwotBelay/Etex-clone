"use client"
import type React from "react"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import api from "../../API/api"
import image1 from "../../assets/GENERATE.png"
export default function UploadDetailsCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedFileName, setSelectedFileName] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [userDesignation, setUserDesignation] = useState<string>("")
  const [userCompany, setUserCompany] = useState<string>("")
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  )
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [badgeData, setBadgeData] = useState<any>(null)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setSelectedFileName(file.name)
    } else {
      setSelectedFile(null)
      setSelectedFileName("")
    }
  }
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await api.post("/generate-badge", formData)
      return response.data
    },
    onSuccess: data => {
      setSubmissionMessage("Badge generated successfully!")
      setIsSuccess(true)
      setBadgeData(data)
      setSelectedFile(null)
      setSelectedFileName("")
      setUserName("")
      setUserDesignation("")
      setUserCompany("")
    },
    onError: (error: any) => {
      setSubmissionMessage(
        error?.response?.data?.message ||
          "Failed to generate badge. Please try again."
      )
      setIsSuccess(false)
      console.error("Error:", error)
    },
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedFile || !userName || !userDesignation || !userCompany) {
      setSubmissionMessage("All fields are required, including the image.")
      setIsSuccess(false)
      return
    }
    const formData = new FormData()
    formData.append("name", userName)
    formData.append("designation", userDesignation)
    formData.append("company", userCompany)
    formData.append("photo", selectedFile)
    mutation.mutate(formData)
  }
  const formContent = (
    <div
      className="border-[3px] border-white rounded p-[30px]"
      style={{ width: "100%", height: "auto" }}
    >
      <h2
        className="text-xl font-bold mb-6 text-center"
        style={{ color: "#00ebdc" }}
      >
        {"PLEASE UPLOAD IMAGE AND DETAILS"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-white text-sm mb-2">
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
                required
              />
            </label>
            <input
              id="file-name"
              type="text"
              readOnly
              placeholder="No file chosen"
              value={selectedFileName}
              className="flex-1 bg-transparent text-white border-none placeholder:text-gray-500 px-3 py-2 rounded text-sm"
            />
          </div>
        </div>
        <div className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Enter Your Designation"
            value={userDesignation}
            onChange={e => setUserDesignation(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Enter Your Company"
            value={userCompany}
            onChange={e => setUserCompany(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 placeholder:text-gray-500 px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center"
          disabled={mutation.isPending}
        >
          <img
            src={image1 || "/placeholder.svg"}
            alt="Generate Button"
            width={180}
            height={59}
            className={`object-contain ${
              mutation.isPending ? "opacity-50 cursor-not-allowed" : ""
            }}`}
          />
        </button>
      </form>
      {mutation.isPending && (
        <p className="mt-4 text-center text-white">Generating badge...</p>
      )}
      {submissionMessage && (
        <p
          className={`mt-4 text-center ${
            isSuccess ? "text-green-400" : "text-red-400"
          }}`}
        >
          {submissionMessage}
        </p>
      )}
      {badgeData && (
        <div className="mt-4 text-center text-white">
          <p className="font-bold">Badge Data Received:</p>
          <pre className="text-xs overflow-auto bg-gray-800 p-2 rounded text-left">
            {JSON.stringify(badgeData, null, 2)}
          </pre>
        </div>
      )}
      <div className="mt-10 text-center">
        <h3
          className="text-lg font-bold mb-4 underline"
          style={{ color: "#00ebdc" }}
        >
          {"Share Your ETEX 2025 Badge"}
        </h3>
        <p className="text-white text-sm mb-4">
          {
            "Once your badge is ready, you are encouraged to post it on LinkedIn, Twitter, or Facebook using the suggested caption in this window:"
          }
        </p>
        <p className="text-sm font-bold mb-4" style={{ color: "#00ebdc" }}>
          Please tag the official pages when sharing:
        </p>
        <ul className="text-white text-sm list-disc list-inside space-y-1 text-left inline-block">
          <li>LinkedIn: @etex2025</li>
          <li>Twitter: @etex_ethiopia</li>
          <li>Facebook: @etex</li>
        </ul>
      </div>
    </div>
  )
  return (
    <>
      <div
        className="rounded-xl shadow-lg flex flex-col items-center justify-start hidden lg:flex p-[20px]"
        style={{
          width: "480px",
          height: "1217px",
          backgroundColor: "#066475",
          marginLeft: "30px",
        }}
      >
        {formContent}
      </div>
      <div
        className="lg:hidden w-full max-w-md mx-auto p-4 mt-4 rounded-xl"
        style={{ backgroundColor: "#066475" }}
      >
        {formContent}
      </div>
    </>
  )
}
