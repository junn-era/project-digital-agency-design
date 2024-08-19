import styles from './SectionBanner.module.css';

export default function SectionBanner(props) {
  return (
    <section className={styles.section_banner}>
      <div className={props.isDarkMode ? styles.imageBackground_dark_mode : styles.imageBackground_light_mode}></div>
      <div className={styles.text_sectionBanner}>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  )
}