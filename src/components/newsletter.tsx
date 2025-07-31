import { Button, Flex, Input, Typography } from "antd";

const Newsletter = () => {
  return (
    <div className="secondary-bg p-4 rounded-2xl flex items-center justify-between gap-8 flex-wrap">
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
    </div>
  );
};

export default Newsletter;
