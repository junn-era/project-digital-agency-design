import styles from './Footer.module.css';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import iconFacebook from '../../../../public/facebook.png';
import iconTwitter from '../../../../public/twitter.png';
import iconLinkedin from '../../../../public/linkedin.png';
import iconDribble from '../../../../public/dribble.png';
import iconBehance from '../../../../public/behance.png';
import iconGooglePlus from '../../../../public/google.png';

export default function Footer(props) {
  return (
    <footer className={props.isDarkMode ? styles.footer_dark_mode : styles.footer_light_mode}>
      <div className={styles.container_info}>
        <div>
          <Image src={Logo} alt='Logomarca' />
          <p className={styles.paragraph}>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
          </p>
        </div>
        <div>
          <Image src={iconFacebook} alt="facebook" />
          <Image src={iconTwitter} alt="twitter" />
          <Image src={iconLinkedin} alt="linkedin" />
          <Image src={iconDribble} alt="dribble" />
          <Image src={iconBehance} alt="behance" />
          <Image src={iconGooglePlus} alt="google plus" />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2024 &copy; <span>Francisco de Oliveira - Projeto de Estudo da DevMedia</span></p>
      </div>
    </footer>
  )
}