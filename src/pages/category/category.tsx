import React, { useEffect, useState } from 'react';
import{ request } from '../../config/request'; 
import { List, Spin } from 'antd';

interface Category {
  id: number;
  name: string;
}

export const Category: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await request.get('/category/'); 
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />;
  }

  return (
    <div>
      <h2>Category List</h2>
      <List
        bordered
        dataSource={categories}
        renderItem={(category) => <List.Item>{category.name}</List.Item>}
      />
    </div>
  );
};
