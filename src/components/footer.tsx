import { Divider, Flex, Typography, Row, Col, Space } from 'antd';
import {
  GithubFilled,
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';

import Logo from './logo';
import Newsletter from './newsletter';

const { Title, Text, Link } = Typography;

const footerData = [
  {
    title: 'Shop',
    links: ['Clothing', 'Shoes', 'Accessories', 'Brands', 'Sale', 'Gift Cards'],
  },
  {
    title: 'Gift Cards',
    links: [
      'Buy Gift Cards',
      'About Gift Cards',
      'Redeem a Gift Card',
      'Corporate Gift Cards',
      'Subscribe',
    ],
  },
  {
    title: 'About Store',
    links: ['About us', 'Support', 'Careers', 'Newsroom', 'Investors'],
  },
  {
    title: 'Legal',
    links: ['Legal Notice', 'Privacy Policy', 'Terms & Conditions'],
  },
];

const socialIcons = [
  { icon: <GithubFilled />, label: 'GitHub' },
  { icon: <InstagramFilled />, label: 'Instagram' },
  { icon: <FacebookFilled />, label: 'Facebook' },
  { icon: <TwitterSquareFilled />, label: 'Twitter' },
];

const FooterNavigation = () => (
  <Row gutter={[16, 32]}>
    <Col xs={24} md={6}>
      <Space direction="vertical">
        <Logo height={40} width={40} />
        <Text type="secondary" className="text-gray-500">
          Quality materials, good designs, professional craftsmanship and
          sustainability.
        </Text>
      </Space>
    </Col>

    {footerData.map(({ title, links }) => (
      <Col key={title} xs={24} sm={12} md={4}>
        <Space direction="vertical" size={4}>
          <Title level={5} className="!mb-0">
            {title}
          </Title>
          <Divider className="!my-1" />
          {links.map((label) => (
            <Link
              key={label}
              className="text-gray-900 hover:text-black transition"
            >
              {label}
            </Link>
          ))}
        </Space>
      </Col>
    ))}
  </Row>
);

const Footer = () => (
  <div className="p-8 bg-white border-t border-[#e9e9e9] mt-16 flex flex-col gap-8">
    <Newsletter />
    <FooterNavigation />
    <div className="border-t border-[#e9e9e9] pt-8">
      <Flex justify="space-between" wrap="wrap" align="center">
        <Text type="secondary" className="text-gray-500">
          © 2023, All rights reserved
        </Text>
        <Flex gap="middle" align="center">
          {socialIcons.map(({ icon, label }) => (
            <span
              key={label}
              className="text-xl text-gray-400 hover:text-black cursor-pointer transition-colors"
              aria-label={label}
            >
              {icon}
            </span>
          ))}
        </Flex>
      </Flex>
    </div>
  </div>
);

export default Footer;
