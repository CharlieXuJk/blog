import React from 'react'
import styles from './Header.module.css'


// <div className={styles.footerdiv}>
import {Row,Col, Menu, Icon} from 'antd'
const Header = () => (
    <div className={styles.header}>
        <Row type="flex" justify="center">
            <Col   xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className={styles.header_logo}>CharlieXu</span>
                <span className={styles.header_txt}>A personal website sharing articles on technical issues, leetcode and daily life </span>
            </Col>
            <Col className={styles.memu_div} xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                        Home
                    </Menu.Item>
                    <Menu.Item key="video">
                        <Icon type="youtube" />
                        Leetcode
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="smile" />
                        Technical
                    </Menu.Item>
                    <Menu.Item key="ty">
                        <Icon type="ty" />
                        Life
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header