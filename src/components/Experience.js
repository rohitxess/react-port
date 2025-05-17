import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
    return (
        <section id='experience'>
            <div className={styles.wrapper}>
                <SectionIntroduction dark={true}>Experience</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <ListEntry title={'Perfection fresh australia'} date={'nov-2019'}>
                        <li>Project engineering for $ company </li>
                    </ListEntry>
                    <ListEntry title={'Perfection fresh australia'} date={'nov-2019'}>
                        <li>Project engineering for $ company </li>
                    </ListEntry>
                    <ListEntry title={'Perfection fresh australia'} date={'nov-2019'}>
                        <li>Project engineering for $ company </li>
                    </ListEntry>
                    <ListEntry title={'Perfection fresh australia'} date={'nov-2019'}>
                        <li>Project engineering for $ company </li>
                    </ListEntry>
                </div>
               
               
            </div>
        </section>
    )
}