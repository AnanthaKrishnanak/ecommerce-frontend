import { ConfigProvider } from "antd";
import React from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default AppProvider;
