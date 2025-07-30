import { ConfigProvider } from "antd";
import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default ThemeProvider;
