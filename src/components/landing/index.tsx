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
        className="min-h-[600px] secondary-bg"
      >
        <Col xs={24} md={12} className="px-[60px] py-[64px]">
          <Flex vertical justify="center" align="start" className="gap-6">
            <Title className="!text-5xl !m-0">
              Explore Fresh Cosmetic Arrivals!
            </Title>
            <Paragraph className="text-lg !m-0">
              Experience Beauty's Newest Delights: Discover Fresh Makeup,
              Skincare, and Beauty Products to Elevate Your Routine!
            </Paragraph>
            <Button type="primary" size="large">
              Shop now
            </Button>
          </Flex>
        </Col>

        <Col xs={24} md={12}>
          <div className="w-full h-full flex">
            <img
              src={landingImage}
              alt="Landing"
              className="w-full max-h-[500px] object-contain block"
            />
          </div>
        </Col>
      </Row>
      <PromoSection />
    </>
  );
};

export default LandingSection;
