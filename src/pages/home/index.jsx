import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  FileSearchOutlined,
  PayCircleOutlined,
  UploadOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import './index.css';

const { Header, Sider, Content } = Layout;

export default class Home extends Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
  render() {
    return ( <Layout>
       <Header className='header'>记账管理系统</Header>
      <Layout>
      <Sider className='sider'>
          <Menu defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1" icon={<FileTextOutlined />}>
             系统信息
            </Menu.Item>
            <Menu.Item key="2" icon={<PayCircleOutlined />}>
              财务管理
            </Menu.Item>
            <Menu.Item key="3" icon={<FileSearchOutlined />}>
              财务统计
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 800,
            }}
          >
            Content
          </Content>
      </Layout>
  
      </Layout>);
  }
}
