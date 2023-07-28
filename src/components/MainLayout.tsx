import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { ReactNode } from "react";

const { Header, Content, Footer } = Layout;
const categories = [
  {
    id: 1,
    name: "CPU / Processor",
    path: "/cpu",
  },
  {
    id: 3,
    name: "RAM",
    path: "/ram",
  },
  {
    id: 4,
    name: "Power Supply Unit",
    path: "/power-supply-unit",
  },
  {
    id: 5,
    name: "Storage Device",
    path: "/storage-device",
  },
  {
    id: 6,
    name: "Monitor",
    path: "/monitor",
  },
  {
    id: 7,
    name: "Others",
    path: "/others",
  },
];

const MainLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <h1>PC Builder</h1>
        </Link>
        <Menu theme="dark" mode="horizontal">
          {categories.map((category) => (
            <Menu.Item key={category.id}>
              <Link href={category.path}>{category.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Button type="primary">Build</Button>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        PC Builder ©2023 Created by Rakibul Hasan
      </Footer>
    </Layout>
  );
};

export default MainLayout;
