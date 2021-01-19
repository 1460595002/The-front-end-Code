import React from 'react'
import { Layout, Menu, Breadcrumb  } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Link } from 'umi';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ minHeight: '100vh', color: 'white' }}>
                <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
              <Menu.Item key="1"><Link to="/user/list">用户列表</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/user/add">新增用户</Link></Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              Option 1 
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
           管理
            </Menu.Item>
            <SubMenu key="sub2" icon={<UserOutlined />} title="User">
              <Menu.Item key="6">Tom</Menu.Item>
              <Menu.Item key="7">Bill</Menu.Item>
              <Menu.Item key="8">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="11" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
                    </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                        Header
                       </Header>
                    <Content style={{ margin: '22px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> {this.props.children}</div>
                    </Content>
                    <Footer style={{textAlign:'center'}}>后台系统@2021Create by金融啊</Footer>
                </Layout>
            </Layout>
        );
    }

}