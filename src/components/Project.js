import SectionIntroduction from "./SectionIntroduction";
import styles from './projects.module.css'
// import the images here 

export default function Projects () {
    return (
        <section id='projects'>
            <div className={styles.wrapper}>
                <SectionIntroduction >PROJECTS</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <div className={styles.impDisplay}>
                        <img src="" alt=""></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
            </div>
        </ section>
    )
}