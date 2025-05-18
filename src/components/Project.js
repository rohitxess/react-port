import SectionIntroduction from "./SectionIntroduction";
import styles from './projects.module.css';
import ImgOverlay from './ImgOverlay';
// import the images here 

export default function Projects () {
    return (
        <section id='projects'>
            <div className={styles.wrapper}>
                <SectionIntroduction >PROJECTS</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <ImgOverlay
                    imgSrc={""}
                    title={""}
                    projectLink={""}
                    githubLink>                 
                    Online clothing store build with react and node js 
                    </ImgOverlay>
                    <ImgOverlay
                    imgSrc={""}
                    title={""}
                    projectLink={""}
                    githubLink>                 
                    Online clothing store build with react and node js 
                    </ImgOverlay>
                    <ImgOverlay
                    imgSrc={""}
                    title={""}
                    projectLink={""}
                    githubLink>                 
                    Online clothing store build with react and node js 
                    </ImgOverlay>
                </div>
            </div>
        </ section>
    )
}