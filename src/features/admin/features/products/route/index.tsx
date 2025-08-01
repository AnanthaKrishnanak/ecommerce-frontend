import { Layout } from "antd";
import Sidebar from "../../../components/sidebar";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout style={{ backgroundColor: "#f5f5f5" }} className="p-8">
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
