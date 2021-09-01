import styles from './footer.module.css'
import globalStyles from './globals.module.css'
const Footer = ()=>(
    <div className={[styles.footer_div,  globalStyles.comm_box].join(' ')}>
        <div>Built on React+Node+Ant Desgin </div>
        <div>
            <a href="https://nextjs.org/"> nextjs.org</a>
        </div>
    </div>
)

export default Footer