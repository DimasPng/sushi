import styles from "./ProductPopup.module.css";
const ProductPopup = ({ title, description, price, amount }) => {
  return (
    <div className={styles["product-popup"]}>
      <div className={styles["product-popup__wrapper"]}>
        <div className={styles["product-popup__body"]}>
          <h2 className={styles["product-popup__title"]}>{title}</h2>
          <p className={styles["product-popup__description"]}>{description}</p>
          <p className={styles["product-popup__price"]}>{price}</p>
        </div>
        <div className={styles["product-popup__quantity"]}>
          <p>
            Количество:
            <br /> {amount}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductPopup;
