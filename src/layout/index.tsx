import Footer from "@/components/footer";
import Header from "@/components/header";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Layout className="overflow-hidden">
      <Layout.Header className="flex items-center border-b border-[#e8e8e8]">
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Layout.Footer className="bg-white">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
