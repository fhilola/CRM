import React, { useState } from 'react';
import './Dashboard.scss'
import {
    GroupOutlined,
    BorderOutlined,
    ReadOutlined,
    HomeOutlined,
    FieldTimeOutlined,
    SearchOutlined,
    UserOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import { Input, Layout, Menu, theme, Drawer, Button, Form, Select } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Sider } = Layout;
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
    getItem(<Link to={'/'} className='sidebar-span'><HomeOutlined /><span className='ant-menu-title-content'>Bosh sahifa</span></Link>),
    getItem(<Link to={'/guruhlar'} className='sidebar-span'><GroupOutlined /><span className='ant-menu-title-content'>Guruhlar</span></Link>),
    getItem(<Link to={'/xonalar'} className='sidebar-span'><BorderOutlined /><span className='ant-menu-title-content'>Xonalar</span></Link>),
    getItem(<Link to={'/fanlar'} className='sidebar-span'><ReadOutlined /><span className='ant-menu-title-content'>Fanlar</span></Link>),
    getItem(<Link to={'/vaqt'} className='sidebar-span'><FieldTimeOutlined /><span className='ant-menu-title-content'>Vaqt</span></Link>),
    getItem(<Link to={'/'} className='sidebar-span'><UserOutlined /><span className='ant-menu-title-content'>Hilola Fayoziddinova</span></Link>)
];

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleChange = (value) => {
    console.log(`selected ${value}`);
};

    const [form] = Form.useForm();
    return (

        <Layout
            style={{
                minHeight: '100vh',
                backgroundColor: 'var(--light-color) !important',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className="navbar">
                        <button onClick={showDrawer} className='create-button'><PlusCircleOutlined /></button>
                        <form>
                            <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
                        </form>
                    </div>
                    <Drawer
                        title="Foydalanuvchi yaratish"
                        placement={'right'}
                        closable={true}
                        onClose={onClose}
                        open={open}
                        key={placement}
                    >
                        <Form
                            layout={'vertical'}
                            form={form}
                            initialValues={{
                                layout: 'vertical',
                            }}
                        >
                            <Form.Item label="Foydalanuvchi nomi">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Parol">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Status">
                                <Select
                                defaultValue="Status"
                                style={{
                                    width: 'full',
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'manager',
                                        label: 'Manager',
                                    },
                                    {
                                        value: 'assist',
                                        label: 'Assist',
                                    },
                                    {
                                        value: 'ustoz',
                                        label: 'Ustoz',
                                    },
                                    {
                                        value: 'oquvchi',
                                        label: "O'quvchi",
                                    }
                                    
                                ]}
                            />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Drawer>
                </Header>
                <div className='content'>
                    <Outlet />
                </div>
            </Layout>
        </Layout>
    )
}

export default Dashboard