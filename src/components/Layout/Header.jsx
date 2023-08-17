import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles['header__content']} container`}>
        <div className={styles['header__shop-name']}>React Meals</div>
        <button className={styles['header__button']}>Your Cart 0</button>
      </div>

    </div>
  )
}

export default Header
