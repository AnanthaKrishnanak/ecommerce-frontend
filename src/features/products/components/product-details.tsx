import { useParams } from "react-router-dom";
import { useProduct } from "../api/query/use-product";
import {
  Button,
  Col,
  Divider,
  Flex,
  Rate,
  Result,
  Row,
  Select,
  Typography,
} from "antd";
import Image from "@/components/image";
import { HeartOutlined } from "@ant-design/icons";
import ProductDetailsSkeleton from "./product-details-skeleton";

const { Paragraph, Text, Title } = Typography;

const ProductDetails = () => {
  const { productId = "" } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useProduct({
    productId: Number(productId),
  });

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <Result
        status="404"
        title="Product Not Found"
        subTitle="Sorry, the product you're looking for does not exist."
      />
    );
  }

  return (
    <div className="py-10 flex items-center justify-center">
      <Row gutter={[16, 16]} className="container">
        <Col xs={24} md={12}>
          <Image
            src={product.productImageUrl}
            alt={product.productName}
            preview={false}
            width="100%"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </Col>

        <Col xs={24} md={12}>
          <Text type="secondary">{product.brand}</Text>
          <Title level={2}>{product.productName}</Title>

          <Flex justify="space-between" align="center">
            <Title level={5}>${product.productPrice}</Title>
            <Flex gap={8} align="center">
              <Rate
                disabled
                defaultValue={product.rating}
                style={{ fontSize: 14 }}
              />
              <Text type="secondary" underline>
                ({product.reviewCount.toLocaleString()} reviews)
              </Text>
            </Flex>
          </Flex>

          <Divider />

          <Flex vertical gap={16}>
            <Flex gap={8}>
              {["Size", "Color", "Quantity"].map((label) => (
                <Flex key={label} gap={4} vertical flex={1}>
                  <Text type="secondary">{label}:</Text>
                  <Select placeholder={`Select ${label.toLowerCase()}`} />
                </Flex>
              ))}
            </Flex>

            <Flex gap={8}>
              <Button type="primary" className="flex-1">
                Add to Cart
              </Button>
              <Button icon={<HeartOutlined />} />
            </Flex>
          </Flex>

          <Divider />

          <Flex vertical gap={32}>
            <section>
              <Title level={5}>Description</Title>
              <Paragraph type="secondary">
                This classic white t-shirt is made from 100% cotton, providing a
                comfortable and breathable fit. The unisex design makes it a
                versatile option for men and women. Perfect for layering or
                wearing on its own, this t-shirt is a must-have in any wardrobe.
              </Paragraph>
            </section>

            <section>
              <Title level={5}>Delivery</Title>
              <Paragraph type="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum hendrerit ex vitae sodales. Donec id leo ipsum.
              </Paragraph>
            </section>

            <section>
              <Title level={5}>Return Policy</Title>
              <Paragraph type="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum hendrerit ex vitae sodales. Donec id leo ipsum.
              </Paragraph>
            </section>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
