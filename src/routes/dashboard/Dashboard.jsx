import React, { useState } from 'react';
import './Dashboard.scss'
import {
    GroupOutlined,
    BorderOutlined,
    ReadOutlined,
    HomeOutlined,
    FieldTimeOutlined,
    SearchOutlined,
    UserOutlined
} from '@ant-design/icons';
import {  Input, Layout, Menu, theme, Avatar, Space } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<Link to={'/'} className='sidebar-span'><span className='ant-menu-title-content'>Logo</span></Link>),
    getItem(<Link to={'/'} className='sidebar-span'><HomeOutlined/><span className='ant-menu-title-content'>Bosh sahifa</span></Link>),
    getItem(<Link to={'/guruhlar'} className='sidebar-span'><GroupOutlined /><span className='ant-menu-title-content'>Guruhlar</span></Link>),
    getItem(<Link to={'/xonalar'} className='sidebar-span'><BorderOutlined /><span className='ant-menu-title-content'>Xonalar</span></Link>),
    getItem(<Link to={'/fanlar'} className='sidebar-span'><ReadOutlined /><span className='ant-menu-title-content'>Fanlar</span></Link>),
    getItem(<Link to={'/vaqt'} className='sidebar-span'><FieldTimeOutlined /><span className='ant-menu-title-content'>Vaqt</span></Link>),
];

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (

        <Layout
            style={{
                minHeight: '100vh',
                backgroundColor: 'var(--light-color) !important',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}>
                    <h1>logo</h1>
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                   <div className="navbar">
                    <form>
                        <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
                    </form>
                    <div className="avatar">
                        <strong>Hilola Fayoziddinova</strong>
                        <Avatar size={'large'} icon={<UserOutlined />} />
                    </div>
                    </div> 
                </Header>
                <div className='content'>
                    <Outlet/>
                </div>
            </Layout>
        </Layout>
    )
}

export default Dashboard