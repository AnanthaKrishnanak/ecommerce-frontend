import { Spin } from "antd";
import { useProducts } from "../api/query/use-products";
import { ProductCard } from "../components/product-card";

const Products = () => {
  const { data = [], isLoading } = useProducts();

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-20 pt-10">
      {data.map((product) => (
        <ProductCard key={product.productId} product={product}>
          <div className="flex flex-col gap-2 items-start">
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Description />
            <ProductCard.Price />
          </div>
        </ProductCard>
      ))}
    </div>
  );
};

export default Products;
