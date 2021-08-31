import {Avatar,Divider} from 'antd'
import styles from './author.module.css'


// <div className={styles.footerdiv}>

const Author =()=>{

    return (
        <div className={styles.author_div}>
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  /></div>
            <div className={styles.author_introduction}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className={styles.account}  />
                <Avatar size={28} icon="qq"  className={styles.account} />
                <Avatar size={28} icon="wechat"  className={styles.account}  />

            </div>
        </div>
    )

}

export default Author