import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <a href='https://github.com/rohitxess?tab=repositories' target='_blank' className={styles.icon}>
                <i className="fa-brands fa-github-alt"></i>
            </a>
            <a target='_blank' className={styles.icon}>
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a target='_blank' className={styles.icon}>
                <i className="fa-brands fa-codepen"></i>
            </a>
        </div>
    )
}