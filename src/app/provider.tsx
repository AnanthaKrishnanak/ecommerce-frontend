import { Button, ConfigProvider, Result } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { paths } from '@/config/paths';

const queryClient = new QueryClient();

const AppProvider = () => {
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" href={paths.home.getHref()}>
              Back Home
            </Button>
          }
        />
      )}
    >
      <ConfigProvider>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default AppProvider;
