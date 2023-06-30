import React from 'react'
import styles from './Footer.module.css'
import logo2 from '../../img/logo2.svg'


const Footer = () => {
  return (
    <footer className={styles.footer} >
      <contanier className = {styles.contanier1}>
    <h>О компании </h>
    <p1> Контакты </p1>
    <p2>Вакансии</p2>
    <p3> Партнерская программа </p3>
    </contanier>
    <img src={logo2} alt="Error logo" className={styles.logo2picture} />
    </footer>
  )
}

export default Footer