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
    <div style={{ padding: "4em 1rem", textAlign: "center" }}>
      <Row justify="center" align="middle" gutter={[16, 24]}>
        {promoItems.map((item, index) => (
          <Col xs={24} md={7} key={index}>
            <Text type="secondary">{item.label}</Text>
            <Title level={4} style={{ margin: 10 }}>
              {item.message}
            </Title>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PromoSection;
