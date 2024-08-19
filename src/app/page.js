'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import Header from './components/Header';
import SectionBanner from './components/SectionBanner';
import SectionWorkExperience from './components/SectionWorkExperience';
import Footer from './components/Footer/footer';

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (

    <div className={styles.main_container}>
      <Header changeTheme={changeTheme} isDarkMode={isDarkMode} />
      <main >
        <SectionBanner isDarkMode={isDarkMode} />
        <SectionWorkExperience isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div >

  );
}
