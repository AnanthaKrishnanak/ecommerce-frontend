import React from "react";
import { ConfigProvider, Result } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryConfig } from "@/lib/query-client";
import { ErrorBoundary } from "react-error-boundary";

interface AppProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({ defaultOptions: queryConfig });

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      )}
    >
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>{children}</ConfigProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default AppProvider;
