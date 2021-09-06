
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'
import {Button} from 'antd'
import React,{useState} from 'react'
import {Row, Col, List, icon} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from "../components/Advert"
import Footer from "../components/Footer"
import ReactMarkdown from 'react-markdown'
import styles from "../components/detailed.module.css"
import globalStyles from "../components/globals.module.css"
import listStyles from "../components/list.module.css"
import {getSortedPostsData} from "../libs/post11"
import utilStyles from "../components/utils.module.css"
import axios from "axios"
import ChangeLog from "../components/mdty"
import Icon from "@ant-design/icons";


// export async function getStaticProps() {
//     const allPostsData = getSortedPostsData()
//     return {
//         props: {
//             allPostsData
//         }
//     }
// }





export default function Home(list) {

    const [ mylist , setMylist ] = useState( list.data);
    return (
      <div>
          {/*// <div className={styles.container}>*/}
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
          <Row className={globalStyles.comm_main} type="flex" justify="center">
              <Col className={globalStyles.comm_left} xs={24} sm={24} md={16} lg={18} xl={14}  >
                  <div>
                      <List
                          header={<div>Lateset Posts</div>}
                          itemLayout="vertical"
                          dataSource={mylist}
                          renderItem={item => (
                              <List.Item>
                                  <div className={listStyles.list_title}>
                                      <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                                        <a>{item.title}</a>
                                      </Link>
                                  </div>
                                  <div className={listStyles.list_icon}>
                                      <span><Icon type="calendar" /> {item.addTime}</span>
                                      <span><Icon type="folder" /> {item.typeName}</span>
                                      <span><Icon type="fire" /> {item.view_count} Visits</span>
                                  </div>
                                  <div className="list-context">{item.introduce}</div>
                              </List.Item>
                          )}
                      />

                  </div>
                  {/*<div className={styles.detailed_content} >*/}
                  {/*    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
                  {/*        <h2 className={utilStyles.headingLg}>Blog</h2>*/}
                  {/*        <ul className={utilStyles.list}>*/}
                  {/*            {allPostsData.map(({ id, date, title }) => (*/}
                  {/*                <li className={utilStyles.listItem} key={id}>*/}
                  {/*                    {title}*/}
                  {/*                    <br />*/}
                  {/*                    {id}*/}
                  {/*                    <br />*/}
                  {/*                    {date}*/}
                  {/*                </li>*/}
                  {/*            ))}*/}
                  {/*        </ul>*/}
                  {/*    </section>*/}
                  {/*</div>*/}
              </Col>

              <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                  <Author/>
                  <ChangeLog/>
                  {/*<Advert/>*/}
              </Col>
          </Row>
          <Footer />


     </div>
  )
}

Home.getInitialProps = async ()=> {
    const promise = new Promise((resolve) => {
        axios('http://127.0.0.1:7001/default/getArticleList').then(
            (res) => {
                //console.log('远程获取数据结果:',res.data.data)
                resolve(res.data)
            }
        )
    })
    return await promise
}

