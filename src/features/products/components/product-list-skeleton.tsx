import Image from "@/components/image";
import { Skeleton } from "antd";
const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-20 pt-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="flex flex-col gap-8" key={`product-${index}`}>
          <Image
            width="100%"
            height={240}
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
          <Skeleton paragraph={{ rows: 2 }} active />
        </div>
      ))}
    </div>
  );
};

export default ProductListSkeleton;
