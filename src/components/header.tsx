import { Button, Flex } from "antd";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { paths } from "@/config/path";

const dummyCategories = ["Clothing", "Shoes", "Accessories", "Electronics"];

const Header = () => {
  return (
    <Flex align="center" justify="space-between" className="w-full">
      <Flex align="center">
        <Link to={paths.products.path}>
          <Logo height={40} width={40} />
        </Link>
        {dummyCategories.map((category) => (
          <Button key={category} type="text">
            {category}
          </Button>
        ))}
      </Flex>
      <Flex gap={8}>
        <Button>Register</Button>
        <Button type="primary">Login</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
