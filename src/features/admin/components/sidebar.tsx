import { paths } from "@/config/path";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Dashboard",
    key: "dashboard",
  },
  {
    label: "Users",
    key: "users",
  },
  {
    label: "Products",
    key: "products",
  },
  {
    label: "Orders",
    key: "orders",
  },
  {
    label: "Categories",
    key: "categories",
  },
];

const Sidebar = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  return (
    <Sider theme="light" width={200} className={className}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["products"]}
        style={{ height: "100%" }}
        items={items}
        onClick={({ key }) =>
          key === "dashboard"
            ? navigate(`${paths.admin.path}`)
            : navigate(`${paths.admin.path}${key}/`)
        }
      />
    </Sider>
  );
};

export default Sidebar;
