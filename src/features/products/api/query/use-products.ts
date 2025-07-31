import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";

import type { Product } from "../../types";
import { PRODUCTS } from "../../config/endpoints";

async function getProducts(): Promise<Product[]> {
  return await api.get(PRODUCTS);
}

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
};
