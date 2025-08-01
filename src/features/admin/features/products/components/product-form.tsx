import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  Button,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useUploadImage } from "../api/mutation/use-upload-image";
import { useSavedProduct } from "../api/mutation/use-save-product";

const { TextArea } = Input;

const categories = ["Electronics", "Fashion", "Home", "Books", "Toys"];
const brands = ["Sony", "Samsung", "Apple", "Nike", "Adidas"];

export type Product = {
  productId?: number;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productStock: number;
  productDescription: string;
  productCategory: string;
  inStock: boolean;
  createdAt: Date;
  brand: string;
  rating: number;
  reviewCount: number;
};

type Props = {
  initialValues?: Product;
  isEditMode?: boolean;
  onSubmitSuccess?: () => void;
};

const ProductForm: React.FC<Props> = ({
  initialValues,
  isEditMode,
  onSubmitSuccess,
}) => {
  const [form] = Form.useForm();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(
    initialValues?.productImageUrl || null,
  );

  const uploadImage = useUploadImage();
  const submitProduct = useSavedProduct();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        createdAt: dayjs(initialValues.createdAt),
      });
    }
  }, [initialValues, form]);

  const handleFinish = (values: Product) => {
    const formatted = {
      ...values,
      createdAt: values.createdAt,
    };
    submitProduct.mutate(
      {
        ...formatted,
        productId: initialValues?.productId ?? 300,
        createdAt: dayjs(formatted.createdAt).format("YYYY-MM-DD"),
      },
      {
        onSuccess: () => {
          onSubmitSuccess?.();
        },
      },
    );
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleFinish}
      initialValues={{
        productPrice: 0,
        productStock: 0,
        inStock: true,
        rating: 0,
        reviewCount: 0,
        createdAt: dayjs(),
        ...initialValues,
      }}
      style={{ maxWidth: 600 }}
    >
      {isEditMode && (
        <Form.Item label="Product ID" name="productId">
          <Input disabled />
        </Form.Item>
      )}

      <Form.Item
        label="Product Name"
        name="productName"
        rules={[{ required: true, message: "Product name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Product Image">
        <Upload
          name="file"
          showUploadList={false}
          accept="image/*"
          customRequest={async ({ file, onSuccess, onError }) => {
            try {
              const url = await uploadImage.mutateAsync(file as File);
              form.setFieldsValue({ productImageUrl: url });
              setImagePreviewUrl(url);
              onSuccess?.("ok");
              message.success("Image uploaded");
            } catch {
              onError?.(new Error("Upload failed"));
              message.error("Image upload failed");
            }
          }}
        >
          <Button icon={<UploadOutlined />} loading={uploadImage.isPending}>
            Upload Image
          </Button>
        </Upload>
        {imagePreviewUrl && (
          <div style={{ marginTop: 10 }}>
            <img src={imagePreviewUrl} alt="preview" style={{ width: 100 }} />
          </div>
        )}
      </Form.Item>

      <Form.Item name="productImageUrl" hidden>
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Price"
        name="productPrice"
        rules={[{ required: true, message: "Price is required" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Stock"
        name="productStock"
        rules={[{ required: true, message: "Stock is required" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="productDescription"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item
        label="Category"
        name="productCategory"
        rules={[{ required: true, message: "Category is required" }]}
      >
        <Select options={categories.map((c) => ({ label: c, value: c }))} />
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: "Brand is required" }]}
      >
        <Select options={brands.map((b) => ({ label: b, value: b }))} />
      </Form.Item>

      <Form.Item
        label="Rating"
        name="rating"
        rules={[{ required: true, message: "Rating is required" }]}
      >
        <InputNumber min={0} max={5} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Review Count"
        name="reviewCount"
        rules={[{ required: true, message: "Review count is required" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="In Stock" name="inStock" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item
        label="Created At"
        name="createdAt"
        rules={[{ required: true, message: "Created date is required" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={submitProduct.isPending}
        >
          {isEditMode ? "Update Product" : "Create Product"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
