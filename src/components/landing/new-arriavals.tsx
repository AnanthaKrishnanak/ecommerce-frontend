import { useProducts } from '@/features/products/api/use-products';
import { Flex, Typography } from 'antd';
import { ProductCard } from '../product/product-card';

const NewArrivals = () => {
  const { data = [], isLoading } = useProducts();
  if (isLoading) return null;

  return (
    <div className="flex flex-col gap-6  px-4 lg:px-12">
      <Flex align="center" justify="space-between">
        <Typography.Title level={3}>New Arrivals</Typography.Title>
        <Typography.Link underline>See everything</Typography.Link>
      </Flex>
      <div className="grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {data.slice(0, 5).map((product) => (
          <div
            key={product.productId}
            className="hover:scale-105 transition-all cursor-pointer"
          >
            <ProductCard product={product}>
              <Flex vertical gap={8}>
                <div className="px-4 py-8 bg-gray-50 flex items-center justify-center rounded-md">
                  <ProductCard.Image />
                </div>
                <ProductCard.Title />
                <ProductCard.Price />
              </Flex>
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
