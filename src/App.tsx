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
  getItem('Home', 'home', <HomeOutlined />),
  getItem("Listes d'inspections", 'lists', <AuditOutlined />, [
    getItem('Construction Hopital', 'hospital'),
    getItem('Rénovation Bibliotheque', 'library'),
    getItem('Construction Zoo', 'zoo'),
  ]),

];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState<string[]>([]);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={300}>
      <h1 style={{color:'white',padding:10,paddingLeft:30}} ><SnippetsOutlined style={{marginRight:'1em'}}/>{!collapsed && "Heratech InspectBTP"}</h1>
        <div className="demo-logo-vertical" />
        <Menu selectedKeys={page} onClick={(info)=>{setPage(info.keyPath)}} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#001529" }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            
            <Breadcrumb.Item>Inspections</Breadcrumb.Item>
            <Breadcrumb.Item>{page[0]}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              color:"white",
              padding: 24,
              minHeight: 360,
              background: "#E0E0E0",
              borderRadius: 20,
            }}
          >
           
           

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
