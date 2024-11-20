import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Breadcrumb, Button, Layout, Menu, MenuProps } from 'antd';
import {
  AuditOutlined,
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  SnippetsOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('Home', '1', <HomeOutlined />),
  getItem("Listes d'inspections", 'sub1', <AuditOutlined />, [
    getItem('Construction Hopital', '3'),
    getItem('Rénovation Bibliotheque', '4'),
    getItem('Construction Zoo', '5'),
  ]),

];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={300}>
      <h1 style={{color:'white',padding:10,paddingLeft:30}} ><SnippetsOutlined />Heratech InspectBTP</h1>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#001529" }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              color:"white",
              padding: 24,
              minHeight: 360,
              background: "#001529",
              borderRadius: 20,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
