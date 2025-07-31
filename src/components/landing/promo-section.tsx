import { Row, Col, Typography } from "antd";

const { Text, Title } = Typography;

const promoItems = [
  {
    label: "Exclusive Offer",
    message: "Save 5% with code 'NEW5'",
  },
  {
    label: "Newsletter",
    message: "Enjoy 15% Off Your Next Beauty Purchase",
  },
  {
    label: "Hassle-Free Shopping",
    message: "Enjoy 60 Days of Free Returns",
  },
];

const PromoSection = () => {
  return (
    <Row justify="center" align="middle" gutter={[16, 24]} className="pt-8">
      {promoItems.map((item, index) => (
        <Col xs={24} md={7} key={index} className="text-center">
          <Text type="secondary">{item.label}</Text>
          <Title level={4} style={{ marginTop: 10 }}>
            {item.message}
          </Title>
        </Col>
      ))}
    </Row>
  );
};

export default PromoSection;
