import { Button, Flex, Input, Typography } from "antd";

const Newsletter = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      gap={8}
      style={{ padding: " 2rem", borderRadius: 8 }}
      className="secondary-bg"
    >
      <Flex flex={1} vertical align="start" gap={8}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          Sign up for our newsletter
        </Typography.Title>
        <Typography.Text>
          Get notified about new products, offers and articles
        </Typography.Text>
      </Flex>
      <Flex align="center" gap={8}>
        <Input placeholder="Enter your email" />
        <Button type="primary">Subscribe</Button>
      </Flex>
    </Flex>
  );
};

export default Newsletter;
