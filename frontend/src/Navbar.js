import React from "react";
import { Menu } from 'antd';

const Navbar = () => {
    return (
        <div className="navbar">
            <header>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                        Navigation One
        </Menu.Item>
                </Menu>
            </header>
        </div>
    )
}

export default Navbar;