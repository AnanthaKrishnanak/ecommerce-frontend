import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";

import type { Product } from "../../types";
import { PRODUCTS } from "../../config/endpoints";

async function getProduct({
  signal,
  productId,
}: UseProductOptions & {
  signal: AbortSignal;
}): Promise<Product> {
  return await api.get(`${PRODUCTS}${productId}/`, { signal });
}

interface UseProductOptions {
  productId: number;
}

export const useProduct = ({ productId }: UseProductOptions) => {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: ({ signal }) => getProduct({ signal, productId }),
  });
};
