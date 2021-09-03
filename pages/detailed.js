import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb  } from 'antd'
import ReactMarkdown from 'react-markdown'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../components/detailed.module.css'
import globalStyles from '../styles/globals.module.css'
import ReactDom from 'react-dom'
import MDXDocument from '../posts/ssg-ssr.mdx'

export default function Detailed() {
return (
    <>
        <Head>
            <title>博客详细页</title>
        </Head>
        <Header />
        <Row className={globalStyles.comm_main} type="flex" justify="center">
            <Col className={globalStyles.comm_left} xs={24} sm={24} md={16} lg={18} xl={14}  >
                <div>
                    <div className={styles.bread_div}>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className={styles.detailed_title}>
                            React实战视频教程-技术胖Blog开发(更新08集)
                        </div>
                        <div className={[styles.list_icon, styles.center].join(' ')}>
                            <span><Icon type="calendar" /> 2019-06-28</span>
                            <span><Icon type="folder" /> 视频教程</span>
                            <span><Icon type="fire" /> 5498人</span>
                        </div>
                        <div className={styles.detailed_content}>
                            <MDXDocument />
                        </div>
                    </div>
                </div>
            </Col>

            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
            </Col>
        </Row>
        <Footer/>
    </>)
}
