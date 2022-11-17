import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import { isMicroMode } from '@/utils/is';
import { Route, Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
const { Header, Sider, Content } = Layout;
function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>xxx</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(<Link to="/app/home">home</Link>, 'home', <ContainerOutlined />),
  getItem(<Link to="/app/seeds">seeds</Link>, 'seeds', <PieChartOutlined />),
  getItem(<Link to="/app/about">about</Link>, 'about', <PieChartOutlined />),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="ant-layout-has-sider">
      {isMicroMode ? null : (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          />
        </Sider>
      )}

      <Layout
        className="site-layout"
        style={{
          height: 'calc(100vh - 50px)',
          overflowY: 'scroll',
        }}
      >
        {isMicroMode ? null : (
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              },
            )}
          </Header>
        )}

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <Route path="sabout" element={<About />} /> */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
