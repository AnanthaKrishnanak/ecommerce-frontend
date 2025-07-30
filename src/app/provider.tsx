import React from "react";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryConfig } from "@/lib/query-client";

interface AppProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({ defaultOptions: queryConfig });

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>{children}</ConfigProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
