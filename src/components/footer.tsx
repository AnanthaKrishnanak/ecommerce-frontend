import { Divider, Flex, Typography } from "antd";
import {
  GithubFilled,
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Row, Col, Space } from "antd";

import Logo from "./logo";
import Newsletter from "./newsletter";

const { Title, Text, Link } = Typography;

const footerData = [
  {
    title: "Shop",
    links: ["Clothing", "Shoes", "Accessories", "Brands", "Sale", "Gift Cards"],
  },
  {
    title: "Gift Cards",
    links: [
      "Buy Gift Cards",
      "About Gift Cards",
      "Redeem a Gift Card",
      "Corporate Gift Cards",
      "Subscribe",
    ],
  },
  {
    title: "About Store",
    links: ["About us", "Support", "Careers", "Newsroom", "Investors"],
  },
  {
    title: "Legal",
    links: ["Legal Notice", "Privacy Policy", "Terms & Conditions"],
  },
];

const FooterNavigation = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Row gutter={[16, 32]}>
        <Col xs={24} md={6}>
          <Space direction="vertical">
            <Logo height={40} width={40} />
            <Text>
              Quality materials, good designs, professional craftsmanship and
              sustainability.
            </Text>
          </Space>
        </Col>

        {footerData.map((section) => (
          <Col key={section.title} xs={24} sm={12} md={4}>
            <Space direction="vertical" size={4}>
              <Title level={5} style={{ margin: 0 }}>
                {section.title}
              </Title>
              <Divider style={{ margin: 0 }} />
              {section.links.map((label) => (
                <Link key={label} style={{ color: "gray" }}>
                  {label}
                </Link>
              ))}
            </Space>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="border-top" style={{ padding: "2rem" }}>
      <Newsletter />
      <FooterNavigation />
      <Divider />
      <Flex justify="space-between" gap={8} align="center">
        <Typography.Text>© 2023, All rights reserved</Typography.Text>
        <Flex gap={8} align="center">
          <GithubFilled style={{ fontSize: "1.5rem", color: "gray" }} />
          <InstagramFilled style={{ fontSize: "1.5rem", color: "gray" }} />
          <FacebookFilled style={{ fontSize: "1.5rem", color: "gray" }} />
          <TwitterSquareFilled style={{ fontSize: "1.5rem", color: "gray" }} />
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
