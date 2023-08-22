import styles from "./Header.module.css";

const Header = ({ handleOpenCart, order }) => {
  const sumOrders = () => {
    if (order.length === 0) return 0;
    return order.reduce((acc, item) => (acc += item.amount), 0);
  };

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles["header__content"]} container`}>
        <div className={styles["header__shop-name"]}>React Meals</div>
        <button onClick={handleOpenCart} className={styles["header__button"]}>
          Your Cart {sumOrders()}
        </button>
      </div>
    </div>
  );
};

export default Header;
