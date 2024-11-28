import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { request } from "../../config/request"; // Axios konfiguratsiyasini import qilamiz
import Cookies from "js-cookie"; // Token olish uchun ishlatamiz

export const AddCategory: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: { name: string }) => {
    setLoading(true);
    try {
      const token = Cookies.get("accessToken"); // Cookie'dan token olish
      if (!token) {
        throw new Error("Authorization token not found");
      }

      const response = await request.post(
        "/category/", // Yangi kategoriya qo'shish endpointi
        values, // Formdan olingan ma'lumotlar
        {
          headers: {
            Authorization: `Bearer ${token}`, // Tokenni Authorization sarlavhasida yuborish
          },
        }
      );
      message.success("Category added successfully!");
      console.log("Response:", response.data);
    } catch (error: any) {
      console.error("Error adding category:", error);
      if (error.response && error.response.status === 403) {
        message.error("You do not have permission to perform this action.");
      } else {
        message.error("Failed to add category. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add New Category</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            { required: true, message: "Please enter a category name!" },
            { min: 3, message: "Category name must be at least 3 characters long." },
          ]}
        >
          <Input placeholder="Enter category name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
