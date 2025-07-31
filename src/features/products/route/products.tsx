import { Spin } from "antd";
import { useProducts } from "../api/query/use-products";
import { ProductCard } from "../components/product-card";
import { useNavigate } from "react-router-dom";
import { paths } from "@/config/path";

const Products = () => {
  const { data = [], isLoading } = useProducts();
  const navigate = useNavigate();

  if (isLoading) {
    return <Spin />;
  }

  const onProductClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const productId = Number(e.currentTarget.dataset.id);
    navigate(`${paths.products.path}${productId}/`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-20 pt-10">
      {data.map((product) => (
        <div
          key={product.productId}
          data-id={product.productId}
          onClick={onProductClick}
          className="cursor-pointer"
        >
          <ProductCard product={product}>
            <div className="flex flex-col gap-2 items-start">
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Description />
              <ProductCard.Price />
            </div>
          </ProductCard>
        </div>
      ))}
    </div>
  );
};

export default Products;
