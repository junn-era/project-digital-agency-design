import styles from './SectionWorkExperience.module.css';
import Card from '../Card';

export default function SectionWorkExperience(props) {
  return (
    <section className={props.isDarkMode ? styles.section_dark_mode : styles.section_light_mode}>

      <div className={styles.container_text}>
        <h2>Experiências de Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital,
          nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
        </p>
      </div>

      <div className={styles.container_cards}>
        <Card
          isDarkMode={props.isDarkMode}
          date='JUNHO 2012 - 2016'
          title='Web Designer'
          company='Pied Piper StartUp.'
          paragraph='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'
        />
        <Card
          isDarkMode={props.isDarkMode}
          date='AGOSTO 2016 - 2019'
          title='Product Designer'
          company='E Corp.'
          paragraph='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'
        />
        <Card
          isDarkMode={props.isDarkMode}
          date='JUNHO 2019 - 2021'
          title='Digital Consulting'
          company='Arasaka Inc'
          paragraph='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'
        />
      </div>

    </section>
  )
}