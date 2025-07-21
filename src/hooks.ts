import { useMutation } from "@tanstack/react-query";
import api from "./API/api";

// Type for the form fields
export interface BadgeFormData {
  name: string;
  designation: string;
  company: string;
  photo: File;
}


export interface BadgeResponse {
  message: string;
 
}

// Custom hook for uploading badge details and file
export function useUploadBadge() {
  return useMutation<BadgeResponse, unknown, BadgeFormData>({
    mutationFn: async (data: BadgeFormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("company", data.company);
      formData.append("photo", data.photo);
      const response = await api.post("/generate-badge", formData);
      return response.data;
    },
  });
} 