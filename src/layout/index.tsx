import Footer from "@/components/footer";
import Header from "@/components/header";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Layout className="overflow-hidden">
      <Layout.Header className="border-bottom flex align-center">
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
