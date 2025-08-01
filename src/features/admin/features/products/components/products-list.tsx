import Image from "@/components/image";
import { useProducts } from "@/features/products/api/query/use-products";
import type { Product } from "@/features/products/types";
import { Button, Flex, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const { data = [], isLoading } = useProducts();

  const columns: ColumnsType<Product> = [
    {
      title: "Name",
      dataIndex: "productName",
      render: (name, record) => (
        <Flex gap={8} align="center">
          <Image src={record.productImageUrl} width={25} height={25} />
          <span>{name}</span>
        </Flex>
      ),
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      render: (price) => <span>${price}</span>,
    },
    { title: "brand", dataIndex: "brand" },
    { title: "category", dataIndex: "productCategory" },
    { title: "stock", dataIndex: "productStock" },
    { title: "rating", dataIndex: "rating" },
  ];

  return (
    <Flex vertical gap={16}>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3}>Products</Typography.Title>
        <Button type="primary" onClick={() => navigate("/admin/products/add")}>
          Add Product
        </Button>
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ pageSize: 10 }}
      />
    </Flex>
  );
};

export default ProductList;
