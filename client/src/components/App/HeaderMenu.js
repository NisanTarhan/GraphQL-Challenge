import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu } from 'antd';
import styles from './styles.module.css'

const { SubMenu } = Menu;

function HeaderMenu(props) {
    const location = useLocation();

    return (
        <Menu mode="horizontal" selectedKeys={location.pathname} className={styles.headerMenu}>
            <Menu.Item key="/" className={styles.menuItem}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/new" className={styles.menuItem}>
                <Link to="/new">New</Link>
            </Menu.Item>
        </Menu>
    );
}

export default HeaderMenu;