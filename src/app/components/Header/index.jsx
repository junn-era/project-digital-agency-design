import styles from './Header.module.css';
import Logo from '../../../../public/logo.png';
import Image from 'next/image';
import iconSun from '../../../../public/sun.png';
import iconMoon from '../../../../public/moon.png';

export default function Header(props) {
  return (
    <header className={props.isDarkMode ? styles.header_dark_mode : styles.header_light_mode}>

      <Image className={styles.logo} src={Logo} alt='Logomarca' />

      <button onClick={props.changeTheme} className={props.isDarkMode ? styles.btn_dark_mode : styles.btn_light_mode}>
        <Image className={styles.iconsBtn} src={props.isDarkMode ? iconSun : iconMoon} alt='Ícone' />
      </button>

    </header>
  )
}