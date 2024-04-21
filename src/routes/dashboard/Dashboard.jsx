import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux'
import Drawer from '../../layout/drawer/Drawer';
import './Dashboard.scss'
import {
    GroupOutlined,
    BorderOutlined,
    ReadOutlined,
    HomeOutlined,
    FieldTimeOutlined,
    SearchOutlined,
    UserOutlined,
    PlusCircleOutlined,
    UsergroupAddOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Input, Layout, Menu, theme,  Button, Form, Select } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { createUser } from '../../redux/actions/createAction';
import Creation from '../../components/creation-bar/Creation';
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
    getItem(<Link to={'/talabalar'} className='sidebar-span'><UsergroupAddOutlined /><span className='ant-menu-title-content'>Talabalar</span></Link>),
    getItem(<Link to={'/accaunt'} className='sidebar-span'><UserOutlined /><span className='ant-menu-title-content'>Hilola Fayoziddinova</span></Link>)
];

const Dashboard = (props) => {
    const { pathname } = useLocation()
    console.log(pathname);
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
    const [form] = Form.useForm();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const handleChange = (value) => {
        setStatus(value)
    };

    const handleCreateUser = (e) => {
        e.preventDefault()
        props.createUser({ username, password, status })
    }
    return (

        <div className='dashboard'>
            {/* <div className='header'>
                <ul className='header-ul'>
                    <li>
                        <Link to={'/'} className='sidebar-span'><span className='ant-menu-title-content'>Logo</span></Link>
                    </li>
                    <li>
                        <Link to={'/'} className='sidebar-span'><HomeOutlined /><span className='ant-menu-title-content'>Bosh sahifa</span></Link>
                    </li>
                    <li>
                        <Link to={'/guruhlar'} className='sidebar-span'><GroupOutlined /><span className='ant-menu-title-content'>Guruhlar</span></Link>
                    </li>
                    <li>
                        <Link to={'/xonalar'} className='sidebar-span'><BorderOutlined /><span className='ant-menu-title-content'>Xonalar</span></Link>
                    </li>
                    <li>
                        <Link to={'/fanlar'} className='sidebar-span'><ReadOutlined /><span className='ant-menu-title-content'>Fanlar</span></Link>
                    </li>
                    <li>
                        <Link to={'/vaqt'} className='sidebar-span'><FieldTimeOutlined /><span className='ant-menu-title-content'>Vaqt</span></Link>
                    </li>
                    <li>
                        <Link to={'/talabalar'} className='sidebar-span'><UsergroupAddOutlined /><span className='ant-menu-title-content'>Talabalar</span></Link>
                    </li>
                    <li>
                        <Link to={'/accaunt'} className='sidebar-span'><UserOutlined /><span className='ant-menu-title-content'>Hilola Fayoziddinova</span></Link>
                    </li>
                </ul>
            </div> */}
            <Layout
                style={{
                    minHeight: '100vh',
                    backgroundColor: 'var(--light-color) !important',
                }}
            >

                <Sider className='sidebar' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
                            <button className='navbar-btn'><MenuOutlined /></button>
                        </div>
                        {
                            open && <Drawer title="Foydalanuvchi yaratish" placement={placement} onClose={onClose} open={open} onSubmitCapture={handleCreateUser} form={form} username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleChange={handleChange} />
                        }
                    </Header>
                    <div className='content'>
                        <Creation title={pathname.replace('/', '')} count={'5'} />
                        <Outlet />
                    </div>
                </Layout>
            </Layout>
        </div>


    )
}

export default connect(null, { createUser })(Dashboard)