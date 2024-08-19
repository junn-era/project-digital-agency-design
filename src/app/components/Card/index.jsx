import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={props.isDarkMode ? styles.card_dark_mode : styles.card_light_mode}>
      <div className={styles.container}>
        <span>{props.date}</span>
        <h3>{props.title}</h3>
        <small>{props.company}</small>
      </div>
      <p>{props.paragraph}</p>
    </div>
  )
}