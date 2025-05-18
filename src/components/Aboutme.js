import SectionIntroduction from './SectionIntroduction';
import styles from './aboutme.module.css';

export default function Aboutme() {
    return (
        <section id='about-me' className={styles.aboutMe}>
            <div className={styles.wrapper}>
                <SectionIntroduction>About Me</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>Versatile and results-driven <strong>Full Stack Developer</strong> with a strong foundation in both front-end and back-end technologies, and a passion for building scalable, user-centric web applications. Skilled in designing, developing, and deploying end-to-end solutions using modern frameworks and cloud services. Proven ability to translate complex business requirements into innovative technical solutions that drive performance and growth.</p>
                    <p className={styles.paragraph}>Versatile and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies, and a passion for building scalable, user-centric web applications. </p>
                    <p className={styles.paragraph}>Versatile and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies, and a passion for building scalable, user-centric web applications.</p>
                </div>
                <div className={styles.icons}>
                    <i className="fa-solid fa-dragon"></i>
                    <i className="fa-solid fa-jedi"></i>
                    <i className="fa-solid fa-chess"></i>
                    <i className="fa-solid fa-atom"></i>
                </div>
            </div>
        </section>
    )
}