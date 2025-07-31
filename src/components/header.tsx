import { Button, Flex } from "antd";
import Logo from "./logo";

const dummyCategories = ["Clothing", "Shoes", "Accessories", "Electronics"];

const Header = () => {
  return (
    <Flex align="center" justify="space-between" className="w-full">
      <Flex align="center">
        <Logo height={40} width={40} />
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
