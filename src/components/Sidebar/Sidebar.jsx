import React from 'react'

// antd
import {
    Layout,
    Menu
} from 'antd';
import {
    BarChartOutlined,
    UserOutlined,
    DollarOutlined,
    SearchOutlined,
    NotificationOutlined,
    FireOutlined,
    SettingOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

// router
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const {
    Sider
} = Layout;

const Sidebar = () => {
    return (
  <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <StyledLink className="site-logo" to="/">Kino<span>Poisk</span></StyledLink>
        <Menu.Item key="1" icon={<SearchOutlined />}>
          <Link to="/search">Search Hot Movies</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/popular">Popular Movies</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FireOutlined />}>
            <Link to="/latest">Upcoming Movies</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          <Link to="/ranked">High ranked</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<NotificationOutlined />}>
          <Link to="/tv-shows">Tv Shows</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<DollarOutlined />}>
          <Link to="/premium">Premium</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    )
}
const StyledLink = styled(Link)`
    padding: 1.88rem 1.7rem;
    font-weight: bold;
    display: block;
    font-size: 28px;
    span{
        color: #ffffff
    }
`
export default Sidebar
