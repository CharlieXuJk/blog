import {Avatar,Divider, Popover} from 'antd'
import styles from './author.module.css'
import { GithubOutlined,LinkedinOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';


// <div className={styles.footerdiv}>

const Author =()=>{

    return (
        <div className={styles.author_div}>
            <div>
                <a href="posts/first-post"> <Avatar  size={100} src="/images/selfi.jpg"  /></a>
            </div>
            <div className={styles.author_introduction}>
                A passionate geek who loves latest technologies
                <Divider>Social Medias</Divider>
                <a href="https://github.com/CharlieXuJk">
                    <Avatar size={28} icon={<GithubOutlined />} className={styles.account}  />
                </a>
                <a href="https://www.linkedin.com/in/chunhao-xu-957a91167/">
                    <Avatar size={28} icon={<LinkedinOutlined />}  className={styles.account} />
                </a>
                <Popover title="hans040515@gmail.com">
                    <Avatar size={28} icon={<GoogleOutlined />}  className={styles.account}  />
                </Popover>
                <a href="https://www.facebook.com/chunhao.xu.39">
                    <Avatar size={28} icon={<FacebookOutlined />}  className={styles.account}  />
                </a>
            </div>
        </div>
    )

}

export default Author