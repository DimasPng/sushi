import styles from "./Cart.module.css";

const Cart = ({ isOpen, closeCart, children, totalSum }) => {
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
        {Array.isArray(children) && (
          <p className={styles["cart-sum"]}>Итого: {totalSum} $</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
