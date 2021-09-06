import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb  } from 'antd'
import ReactMarkdown from 'react-markdown'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../components/detailed.module.css'
import globalStyles from '../components/globals.module.css'
import ReactDom from 'react-dom'
import MDXDocument from '../posts/ssg-ssr.mdx'
import axios from "axios";

export default function Detailed() {
const [mylist, setMylist] = useState(list.data)
return (
    <>
        <Head>
            <title>Detailed page</title>
        </Head>
        <Header />
        <Row className={globalStyles.comm_main} type="flex" justify="center">
            <Col className={globalStyles.comm_left} xs={24} sm={24} md={16} lg={18} xl={14}  >
                <div>
                    <div className={styles.bread_div}>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className={styles.detailed_title}>
                            {item.title}
                        </div>
                        <div className={[styles.list_icon, styles.center].join(' ')}>
                            <span><Icon type="calendar" /> {item.addTime}</span>
                            <span><Icon type="folder" /> {item.typeName}</span>
                            <span><Icon type="fire" /> {item.view_count}</span>
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

Detailed.getInitialProps = async(context)=>{

    console.log(context.query.id)
    let id =context.query.id
    const promise = new Promise((resolve)=>{

        axios('http://127.0.0.1:7001/default/getArticleById/'+id).then(
            (res)=>{
                //console.log(title)
                resolve(res.data.data[0])
            }
        )
    })

    return await promise
}
