import { createContext, useContext, type ReactNode } from 'react';
import { Typography, Tag, Image } from 'antd';
import type { Product } from '@/types';

const { Title, Paragraph } = Typography;

interface ProductCardContextType {
  product: Product;
}

const ProductCardContext = createContext<ProductCardContextType | null>(null);

function useProductCardContext() {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw new Error(
      'ProductCard sub components must be used inside <ProductCard>',
    );
  }
  return context;
}

export function ProductCard({
  product,
  children,
}: {
  product: Product;
  children: ReactNode;
}) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      {children}
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = function ImageComponent() {
  const { product } = useProductCardContext();
  return (
    <Image
      alt={product.productName}
      width="100%"
      height={240}
      preview={false}
      className="rounded-md bg-gray-50 object-cover mix-blend-multiply"
      loading="lazy"
      src={product.productImageUrl ?? ''}
    />
  );
};

ProductCard.Title = function TitleComponent() {
  const { product } = useProductCardContext();
  return (
    <Title level={5} ellipsis={{ rows: 2 }}>
      {product.productName}
    </Title>
  );
};

ProductCard.Description = function DescriptionComponent() {
  const { product } = useProductCardContext();
  return (
    <Paragraph type="secondary" style={{ margin: 0 }}>
      {product.productDescription}
    </Paragraph>
  );
};

ProductCard.Price = function PriceComponent() {
  const { product } = useProductCardContext();
  return (
    <Title level={4} style={{ margin: 0 }}>
      ${product.productPrice.toFixed(2)}
    </Title>
  );
};

ProductCard.StockStatus = function StockStatusComponent() {
  const { product } = useProductCardContext();
  return (
    <Tag color={product.inStock ? 'green' : 'red'}>
      {product.inStock ? 'In Stock' : 'Out of Stock'}
    </Tag>
  );
};
