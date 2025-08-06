import { Button, Input, Typography } from 'antd';

const { Title, Text } = Typography;

const Newsletter = () => {
  return (
    <div className="bg-gray-50 px-4 py-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
      <div className="flex-1">
        <Title level={5} className="!mb-1">
          Sign up for our newsletter
        </Title>
        <Text className="text-xs text-gray-600">
          Get notified about new products, offers and articles
        </Text>
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Input placeholder="Enter your email" className="w-full md:w-64" />
        <Button type="primary">Subscribe</Button>
      </div>
    </div>
  );
};

export default Newsletter;
