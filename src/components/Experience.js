import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
    return (
        <section id='experience'>
            <div className={styles.wrapper}>
                <SectionIntroduction dark={true}>Experience</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <ListEntry title={'Bravura Solutions'} date={'Nov-2019 - Present'}>
                        <li>Full Stack Developer responsible for deploying our SAAS product; The Zetane Protector is a Machine Learning and Artificial Intelligence platform created to provide robustness & sensitivity (QA) for the industry.</li>
                        <li>Tech-Stack: Next.js + Django + AWS + TailwindCSS + Sentry + Cypress</li>
                    </ListEntry>
                    <ListEntry title={'Google'} date={'Jan-2021 - Present'}>
                        <li>Project engineering  </li>
                        <li>Project engineering for $ company </li>
                    </ListEntry>
                    <ListEntry title={'Perfection fresh australia'} date={'Jan-2022 - Present'}>
                        <li>Project engineering for $ company </li>
                        <li>Project engineering for $ company </li>
                    </ListEntry>
                </div>
            </div>
        </section>
    )
}