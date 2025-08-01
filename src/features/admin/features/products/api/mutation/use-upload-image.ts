import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { api } from "@/lib/api-client";

export const useUploadImage = () => {
  return useMutation({
    mutationFn: async (file: File): Promise<string> => {
      const formData = new FormData();
      formData.append("file", file);

      return await api.post("image-upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onError: () => {
      message.error("Image upload failed");
    },
  });
};
