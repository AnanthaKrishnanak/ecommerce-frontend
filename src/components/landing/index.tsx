import { Row, Col, Typography, Button, Flex } from "antd";
import landingImage from "@/assets/landing.jpg";
import PromoSection from "./promo-section";

const { Title, Paragraph } = Typography;

const LandingSection = () => {
  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{
          minHeight: "600px",
        }}
        className="secondary-bg"
      >
        <Col xs={24} md={12}>
          <Flex
            vertical
            justify="center"
            align="start"
            style={{
              padding: "64px 60px",
              gap: 24,
              height: "100%",
            }}
          >
            <Title style={{ fontSize: "3rem", margin: 0 }}>
              Explore Fresh Cosmetic Arrivals!
            </Title>
            <Paragraph style={{ fontSize: "1.2rem", margin: 0 }}>
              Experience Beauty's Newest Delights: Discover Fresh Makeup,
              Skincare, and Beauty Products to Elevate Your Routine!
            </Paragraph>
            <Button type="primary" size="large">
              Shop now
            </Button>
          </Flex>
        </Col>

        <Col xs={24} md={12} style={{ height: "100%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <img
              src={landingImage}
              alt="Landing"
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </Col>
      </Row>
      <PromoSection />
    </>
  );
};

export default LandingSection;
