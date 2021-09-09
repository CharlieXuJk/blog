import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from "axios";
import servicePath from "../config/apiUrl";
import styles from './Header.module.css'
// <div className={styles.footerdiv}>
import {Row,Col, Menu, Icon} from 'antd'

const Header = () => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])


    const handleClick = (e) => {
        if (e.key == "0") {
            Router.push('/')
        } else {
            Router.push('/list1?id=' + e.key)
        }
    }

    return (
        <div className={styles.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={styles.header_logo}>CharlieXu</span>
                    <span className={styles.header_txt}>A personal website sharing articles on technical issues, leetcode and daily life </span>
                </Col>
                <Col className={styles.memu_div} xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu
                        mode="horizontal"
                        onClick={handleClick}
                    >
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.Id}>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                        <Menu.Item key= "0">
                            Home
                        </Menu.Item>

                        <Menu.Item key="1">
                            Leetcode
                        </Menu.Item>
                        <Menu.Item key="2">
                            Technical
                        </Menu.Item>

                        <Menu.Item key="3">
                            Life
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )

}

// ArticleList.getInitialProps = async (context)=>{
//     let id =context.query.id
//     const promise = new Promise((resolve)=>{
//         axios(servicePath.getListById+id).then(
//             (res)=>resolve(res.data)
//         )
//     })
//     return await promise
// }

export default Header