import { Col, Divider, Flex, Row, Skeleton } from "antd";
import Image from "@/components/image";

const ProductDetailsSkeleton = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <Row gutter={[16, 16]} className="container">
        <Col xs={24} md={12}>
          <Image
            src=""
            width="100%"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </Col>
        <Col xs={24} md={12}>
          <Flex vertical gap={8}>
            <Skeleton.Input active size="small" />
            <Skeleton active title={false} paragraph={{ rows: 2 }} />
            <Skeleton.Input active size="small" />
            <Divider />
            <Flex gap={8}>
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton.Input active key={index} style={{ flex: 1 }} />
              ))}
            </Flex>
            <Flex gap={8} style={{ marginTop: 16 }}>
              <Skeleton.Input active style={{ flex: 1 }} />
              <Skeleton.Button active shape="circle" />
            </Flex>
            <Divider />
            <Skeleton active paragraph={{ rows: 4 }} />
            <Divider />
            <Skeleton active paragraph={{ rows: 4 }} />
            <Divider />
            <Skeleton active paragraph={{ rows: 4 }} />
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsSkeleton;
