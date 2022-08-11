// CSS
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h2>campus bovisa</h2>
      <h3>servizio gestsione del patrimoio edilizio</h3>
      <p>
        capo servizio: <span>rossello giacomo</span>
      </p>
      <ul className={styles.servizi}>
        <li>servizi di manutenzione patrimonio edilizio ed impiantistico</li>
        <li>servizi in outsourcing</li>
        <li>servizi logistici</li>
        <li>sicurezza</li>
      </ul>

      <h3>personale afferente alla struttura</h3>
      <ul className={styles.personale}>
        <li>colombo roberto</li>
        <li>goglio loredana</li>
        <li>imperatrice claudio prospero</li>
        <li>mameli marco</li>
        <li>perotti alfonso</li>
        <li>pollera pietro</li>
      </ul>
    </div>
  )
}

export default Home
