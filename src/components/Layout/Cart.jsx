import styles from "./Cart.module.css";

const Cart = ({ isOpen, closeCart, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles["cart-overlay"]} onClick={closeCart}>
      <div
        className={styles["cart-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles["cart__close-button"]} onClick={closeCart}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
