import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";
import {
  EyeOutlined,
  FileTextOutlined,
  FolderOutlined,
 
 
} from "@ant-design/icons";

const { Sider, Content, Header } = AntLayout;

export const Layout: React.FC = () => {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<FolderOutlined/>}>
            <Link to="/app/category">Category List</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link to="/app/add-category">Sub Category List</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<EyeOutlined />}>
            <Link to="/app/brad-list">Brand List</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content
          style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
        >
          <Outlet />{" "}
          {/* Nested routes (child components) will be rendered here */}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
