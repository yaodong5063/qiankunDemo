import React, { useEffect, useRef } from "react";
import { loadMicroApp } from "qiankun";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./App.css";
const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "vite-react",
    path: "/viteReact",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "vite-vue",
    path: "/appVue",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "create-react-app",
    path: "/createReact",
  },
  {
    key: "4",
    icon: <ContainerOutlined />,
    label: "umi-react",
    path: "/umiReact",
  },
  {
    key: "sub1",
    label: "部分加载",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "路由1", path: "/myReact/demo" },
      { key: "6", label: "路由2", path: "/myReact/demo1" },
    ],
  },
];

const App: React.FC = () => {
  const demoRef = useRef("");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const onSelect = ({ item }) => {
    const { props } = item;
    navigate(props?.path);
  };

  useEffect(() => {
    loadMicroApp(
      {
        name: "myReact",
        entry: "//localhost:5179",
        container: demoRef?.current,
        props: { name: "demo" },
      },
      {
        sandbox: { experimentalStyleIsolation: true },
      }
    );
  }, []);
  return (
    <Layout>
      <Routes>
        <Route
          key="viteReact"
          path="viteReact/*"
          element={<div id="root10"></div>}
        ></Route>
      </Routes>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <div className="card">测试数据</div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="text-demo">App</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              style={{ height: "100%" }}
              items={items}
              onSelect={onSelect}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Routes>
              <Route
                key="viteReact"
                path="viteReact/*"
                element={<div id="root1"></div>}
              ></Route>
              <Route
                key="appVue"
                path="appVue/*"
                element={<div id="root2"></div>}
              ></Route>
              <Route
                key="createReact"
                path="createReact/*"
                element={<div id="root3"></div>}
              ></Route>
              <Route
                key="umiReact"
                path="umiReact/*"
                element={<div id="root4"></div>}
              ></Route>
              <Route
                key="myReact"
                path="myReact/*"
                element={<div ref={demoRef}></div>}
              ></Route>
              <Route path="*" element={<>匹配不到来这个页面</>} />
            </Routes>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
