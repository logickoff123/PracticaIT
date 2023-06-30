import React from 'react'
import logo1 from '../../img/logo.svg'
import user1 from '../../img/User.svg'
import bag1 from '../../img/bag.svg'
import hard1 from '../../img/hard.svg'
import basket1 from '../../img/Basket.svg'
import styles from './Header.module.css'
import hp from '../../img/headerpict.svg'



const Header = () => {
  return (
    <header>
      <div className={styles.icons}>
        <img src={logo1} alt="Error logo" className={styles.logopicture} />
          <button className={styles.btn}>Каталог</button>
          <img src={user1} alt="Error user" className={styles.userpicture} />
          <img src={bag1} alt="Eror bag" className={styles.bagpicture} />
          <img src={hard1} alt="Error hard" className={styles.hardpicture} />
          <img src={basket1} alt="Eror basket" className={styles.basketpicture} />
      </div>
      <div className={styles.imgcontanier}>
        <img className={styles.hp} src={hp} alt="Error hp" />
      </div>
    </header>

  )
}

export default Header