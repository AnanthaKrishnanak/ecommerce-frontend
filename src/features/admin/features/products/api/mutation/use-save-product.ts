import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { api } from "@/lib/api-client";
import { PRODUCTS } from "@/features/products/config/endpoints";
import type { Product } from "@/features/products/types";

export const useSavedProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Product) => {
      if (data.productId) {
        return api.put(`${PRODUCTS}${data.productId}/`, data);
      }
      return api.post(PRODUCTS, {
        ...data,
        productId: 5000 + Math.floor(Math.random() * 1000),
      });
    },
    onSuccess: () => {
      message.success("Product saved successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      message.error("Failed to save product");
    },
  });
};
